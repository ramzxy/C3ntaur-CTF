import type { UnlockCondition, GameConfig } from '../../prisma/generated/client';

interface EvaluationResult {
  isUnlocked: boolean;
  reason?: string; // Optional reason for being locked
}

export function evaluateUnlockConditions(
  conditions: UnlockCondition[],
  solvedChallengeIds: Set<string>,
  gameConfig: GameConfig | null
): EvaluationResult {
  // If there are no conditions, the challenge is unlocked by default
  if (!conditions || conditions.length === 0) {
    return { isUnlocked: true };
  }

  // Check each condition - ANY fulfilled condition unlocks the challenge
  for (const condition of conditions) {
    switch (condition.type) {
      case 'CHALLENGE_SOLVED':
        if (condition.requiredChallengeId && solvedChallengeIds.has(condition.requiredChallengeId)) {
          return { isUnlocked: true }; // This condition is met
        }
        break;
      case 'TIME_REMAINDER':
        if (gameConfig?.endTime && condition.timeThresholdSeconds !== null) {
          const now = new Date();
          const endTime = new Date(gameConfig.endTime);
          const timeRemainingSeconds = (endTime.getTime() - now.getTime()) / 1000;

          if (timeRemainingSeconds < condition.timeThresholdSeconds) {
            return { isUnlocked: true }; // This condition is met
          }
        }
        break;
      // Add cases for future condition types here
      default:
        console.warn(`Unknown unlock condition type: ${condition.type}`);
        break;
    }
  }

  // If no conditions were met after checking all of them, the challenge remains locked.
  // We can optionally provide a generic reason or details based on the conditions.
  // For simplicity, just returning locked status.
  // TODO: Generate a more descriptive reason string based on unmet conditions.
  return { isUnlocked: false, reason: 'Unlock conditions not met.' };
}

// Example of how to potentially format a reason (can be expanded)
// function formatLockReason(conditions: UnlockCondition[]): string {
//   const reasons = conditions.map(cond => {
//     if (cond.type === 'CHALLENGE_SOLVED' && cond.requiredChallengeId) {
//       // In a real app, you might fetch the required challenge title here
//       return `Solve challenge ${cond.requiredChallengeId}`;
//     }
//     if (cond.type === 'TIME_REMAINDER' && cond.timeThresholdSeconds !== null) {
//       const hours = Math.floor(cond.timeThresholdSeconds / 3600);
//       const minutes = Math.floor((cond.timeThresholdSeconds % 3600) / 60);
//       let timeStr = '';
//       if (hours > 0) timeStr += `${hours}h `;
//       if (minutes > 0) timeStr += `${minutes}m`;
//       return `Time remaining < ${timeStr.trim()}`;
//     }
//     return 'Unknown condition';
//   });
//   return `Requires: ${reasons.join(' OR ')}`;
// } 