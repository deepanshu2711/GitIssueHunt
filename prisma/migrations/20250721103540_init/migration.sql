-- CreateEnum
CREATE TYPE "Provider" AS ENUM ('google', 'github');

-- CreateEnum
CREATE TYPE "Roles" AS ENUM ('superadmin', 'admin', 'user', 'guest');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "image" TEXT,
    "password" TEXT,
    "role" "Roles" NOT NULL DEFAULT 'user',
    "githubId" TEXT,
    "accessToken" TEXT,
    "provider" "Provider" NOT NULL DEFAULT 'github',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "saved_issues" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "issueUrl" TEXT NOT NULL,
    "title" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "saved_issues_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_githubId_key" ON "users"("githubId");

-- CreateIndex
CREATE UNIQUE INDEX "users_accessToken_key" ON "users"("accessToken");

-- CreateIndex
CREATE UNIQUE INDEX "saved_issues_userId_issueUrl_key" ON "saved_issues"("userId", "issueUrl");

-- AddForeignKey
ALTER TABLE "saved_issues" ADD CONSTRAINT "saved_issues_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
