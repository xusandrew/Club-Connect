/*
  Warnings:

  - You are about to drop the column `Discord` on the `Club` table. All the data in the column will be lost.
  - You are about to drop the column `Instagram` on the `Club` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Club" DROP COLUMN "Discord",
DROP COLUMN "Instagram",
ADD COLUMN     "discord" TEXT,
ADD COLUMN     "instagram" TEXT;
