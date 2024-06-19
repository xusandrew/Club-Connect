/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- DropEnum
DROP TYPE "Role";

-- CreateTable
CREATE TABLE "Club" (
    "cid" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "Instagram" TEXT,
    "Discord" TEXT,

    CONSTRAINT "Club_pkey" PRIMARY KEY ("cid")
);

-- CreateTable
CREATE TABLE "Event" (
    "eid" TEXT NOT NULL,
    "cid" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "location" TEXT,
    "start_time" TIMESTAMP(3) NOT NULL,
    "end_time" TIMESTAMP(3) NOT NULL,
    "posted_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("eid")
);

-- CreateTable
CREATE TABLE "Category" (
    "type" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("type")
);

-- CreateTable
CREATE TABLE "ClubCategory" (
    "cid" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "ClubCategory_pkey" PRIMARY KEY ("cid","type")
);

-- CreateIndex
CREATE UNIQUE INDEX "Club_email_key" ON "Club"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Club_name_key" ON "Club"("name");

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_cid_fkey" FOREIGN KEY ("cid") REFERENCES "Club"("cid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClubCategory" ADD CONSTRAINT "ClubCategory_cid_fkey" FOREIGN KEY ("cid") REFERENCES "Club"("cid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClubCategory" ADD CONSTRAINT "ClubCategory_type_fkey" FOREIGN KEY ("type") REFERENCES "Category"("type") ON DELETE RESTRICT ON UPDATE CASCADE;
