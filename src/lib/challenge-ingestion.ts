import { promises as fs } from 'fs';
import path from 'path';
import { prisma } from './prisma';
import { NewChallenge } from '@/types';

interface FileInput {
  name: string;
  path: string;
  size: number;
}

export class ChallengeIngestionService {
  private challengesDir: string;

  constructor() {
    this.challengesDir = process.env.CHALLENGES_DIR || path.join(process.cwd(), 'challenges');
  }

  private async copyFile(sourcePath: string, destPath: string): Promise<void> {
    await fs.mkdir(path.dirname(destPath), { recursive: true });
    await fs.copyFile(sourcePath, destPath);
  }

  private async processChallengeFiles(
    challengeDir: string,
    challengeName: string
  ): Promise<FileInput[]> {
    const processedFiles: FileInput[] = [];
    const filesDir = path.join(challengeDir, 'files');

    try {
      // Check if files directory exists
      await fs.access(filesDir);
      
      // Get all files in the directory
      const files = await fs.readdir(filesDir);
      
      for (const fileName of files) {
        const sourcePath = path.join(filesDir, fileName);
        const destPath = path.join(process.cwd(), 'public', 'uploads', challengeName, fileName);
        
        try {
          const stats = await fs.stat(sourcePath);
          if (stats.isFile()) {
            await this.copyFile(sourcePath, destPath);
            processedFiles.push({
              name: fileName,
              path: `/uploads/${challengeName}/${fileName}`,
              size: stats.size
            });
          }
        } catch (error) {
          console.error(`Error processing file ${fileName}:`, error);
        }
      }
    } catch (error) {
      // Directory doesn't exist or other error, just return empty array
      console.log(`No files directory found for challenge ${challengeName}: ${error}`);
    }

    return processedFiles;
  }

  private async processChallenge(
    categoryDir: string,
    challengeName: string
  ): Promise<void> {
    const challengeDir = path.join(categoryDir, challengeName);
    const jsonPath = path.join(challengeDir, 'challenge.json');

    try {
      const jsonContent = await fs.readFile(jsonPath, 'utf-8');
      const challengeData: NewChallenge = JSON.parse(jsonContent);

      // Process all files in the files directory
      const processedFiles = await this.processChallengeFiles(challengeDir, challengeName);

      // Create challenge in database
      await prisma.challenge.create({
        data: {
          title: challengeData.title,
          description: challengeData.description,
          category: challengeData.category,
          points: challengeData.points,
          flag: challengeData.multipleFlags ? undefined : challengeData.flag,
          multipleFlags: challengeData.multipleFlags || false,
          flags: challengeData.flags && challengeData.multipleFlags ? {
            create: challengeData.flags.map(flag => ({
              flag: flag.flag,
              points: flag.points
            }))
          } : undefined,
          difficulty: challengeData.difficulty,
          isLocked: challengeData.isLocked || false,
          files: processedFiles.length > 0 ? {
            create: processedFiles.map(file => ({
              name: file.name,
              path: file.path,
              size: file.size
            }))
          } : undefined,
          hints: challengeData.hints ? {
            create: challengeData.hints.map(hint => ({
              content: hint.content,
              cost: hint.cost
            }))
          } : undefined,
          unlockConditions: challengeData.unlockConditions ? {
            create: challengeData.unlockConditions.map(cond => ({
              type: cond.type,
              requiredChallengeId: cond.requiredChallengeId,
              timeThresholdSeconds: cond.timeThresholdSeconds
            }))
          } : undefined
        }
      });

      console.log(`Successfully imported challenge: ${challengeData.title}`);
    } catch (error) {
      console.error(`Error processing challenge ${challengeName}:`, error);
    }
  }

  public async ingestChallenges(): Promise<void> {
    try {
      console.log('Starting challenge ingestion...');
      console.log(`Challenges directory: ${this.challengesDir}`);

      // Read all category directories
      const categoryDirs = await fs.readdir(this.challengesDir);

      for (const categoryDir of categoryDirs) {
        const fullCategoryPath = path.join(this.challengesDir, categoryDir);
        const stat = await fs.stat(fullCategoryPath);

        if (stat.isDirectory()) {
          // Read all challenge directories within the category
          const challengeDirs = await fs.readdir(fullCategoryPath);

          for (const challengeDir of challengeDirs) {
            const fullChallengePath = path.join(fullCategoryPath, challengeDir);
            const challengeStat = await fs.stat(fullChallengePath);

            if (challengeStat.isDirectory()) {
              await this.processChallenge(fullCategoryPath, challengeDir);
            }
          }
        }
      }

      console.log('Challenge ingestion completed successfully');
    } catch (error) {
      console.error('Error during challenge ingestion:', error);
    }
  }
} 