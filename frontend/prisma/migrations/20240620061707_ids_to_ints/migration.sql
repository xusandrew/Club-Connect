/*
  Warnings:

  - The primary key for the `Club` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `cid` column on the `Club` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `ClubCategory` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Event` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `eid` column on the `Event` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `cid` on the `ClubCategory` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `cid` on the `Event` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "ClubCategory" DROP CONSTRAINT "ClubCategory_cid_fkey";

-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_cid_fkey";

-- AlterTable
ALTER TABLE "Club" DROP CONSTRAINT "Club_pkey",
DROP COLUMN "cid",
ADD COLUMN     "cid" SERIAL NOT NULL,
ADD CONSTRAINT "Club_pkey" PRIMARY KEY ("cid");

-- AlterTable
ALTER TABLE "ClubCategory" DROP CONSTRAINT "ClubCategory_pkey",
DROP COLUMN "cid",
ADD COLUMN     "cid" INTEGER NOT NULL,
ADD CONSTRAINT "ClubCategory_pkey" PRIMARY KEY ("cid", "type");

-- AlterTable
ALTER TABLE "Event" DROP CONSTRAINT "Event_pkey",
DROP COLUMN "eid",
ADD COLUMN     "eid" SERIAL NOT NULL,
DROP COLUMN "cid",
ADD COLUMN     "cid" INTEGER NOT NULL,
ADD CONSTRAINT "Event_pkey" PRIMARY KEY ("eid");

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_cid_fkey" FOREIGN KEY ("cid") REFERENCES "Club"("cid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClubCategory" ADD CONSTRAINT "ClubCategory_cid_fkey" FOREIGN KEY ("cid") REFERENCES "Club"("cid") ON DELETE RESTRICT ON UPDATE CASCADE;
