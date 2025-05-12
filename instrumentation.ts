import { ChallengeIngestionService } from "@/lib/challenge-ingestion";

export async function register() {
  console.log('Running startup tasks...');

  if (process.env.INGEST_CHALLENGES_AT_STARTUP === 'true') {
    // Run challenge ingestion
    const challengeIngestion = new ChallengeIngestionService();
    await challengeIngestion.ingestChallenges();
  }
  
  console.log('Startup tasks completed');
}