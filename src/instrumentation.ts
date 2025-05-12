export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    console.log('Running startup tasks...');

    if (process.env.INGEST_CHALLENGES_AT_STARTUP === 'true') {
      // Run challenge ingestion
      const { ChallengeIngestionService } = await import('@/lib/challenge-ingestion');
      const challengeIngestion = new ChallengeIngestionService();
      await challengeIngestion.ingestChallenges();
    }

    console.log('Startup tasks completed');
  }
}