/*
  Warnings:

  - Added the required column `startTime` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "endTime" TIMESTAMPTZ(1),
ADD COLUMN     "startTime" TIMESTAMPTZ(1) NOT NULL;
