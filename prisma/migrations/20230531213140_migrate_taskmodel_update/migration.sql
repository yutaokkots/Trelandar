/*
  Warnings:

  - You are about to drop the column `dayId` on the `Task` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_dayId_fkey";

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "dayId";
