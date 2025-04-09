/*
  Warnings:

  - Added the required column `code` to the `Team` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Team" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "score" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO "new_Team" ("createdAt", "id", "name", "score", "updatedAt") SELECT "createdAt", "id", "name", "score", "updatedAt" FROM "Team";
DROP TABLE "Team";
ALTER TABLE "new_Team" RENAME TO "Team";
CREATE UNIQUE INDEX "Team_name_key" ON "Team"("name");
CREATE UNIQUE INDEX "Team_code_key" ON "Team"("code");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
