# 🔎 GitIssueHunt

GitIssueHunt is a web app built with Next.js that helps you discover **beginner-friendly GitHub issues** (`good first issue`) filtered by programming language. It’s a perfect tool for **first-time open-source contributors** looking to get started!

## 🌐 Live Demo

👉 [Visit Live Site](https://git-issue-hunt-mtkq.vercel.app)

## ✨ Features

- 🔍 Search beginner-friendly GitHub issues
- 🎯 Filter by programming language (JavaScript, Python, Go, etc.)
- 🌐 GitHub API integration with React Query and Axios
- 🌈 Language selection UI with persistent state
- 💨 Fast and responsive UI powered by Next.js and Tailwind CSS

## 📦 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: Tailwind CSS
- **State/Data Management**: React Query
- **Networking**: Axios
- **Deployment**: Vercel

## 🚀 Getting Started

First, clone the repo:

```bash
git clone https://github.com/deepanshu2711/GitIssueHunt.git
cd GitIssueHunt




🏗️ Project Features Roadmap
1. Browse All Issues Page
✅ Fetch issues directly from GitHub API (good first issue / help wanted)

🔄 Add Redis caching (5–10 min) to reduce API calls & avoid GitHub rate limits

❌ Do not store these issues in your DB

2. Tracked Repos Page
✅ Let users "track" a repo (store repo info in DB)

🧠 Store all issues from tracked repos in your database

🔁 Set up background sync (daily/hourly):

Use Kafka to queue sync_repo jobs

Worker (consumer) fetches issues & updates DB

Track only open beginner-friendly issues

Optional: Track repo metadata (stars, last updated, etc.)

3. Saved Issues Page
❤️ Let users "save" issues they want to revisit

Store saved issues per user in DB

Optional: Add tags or notes

4. User System
🔐 Enable GitHub login (OAuth)

✅ Store user’s tracked repos & saved issues

Optional: Show "recently viewed" or "recommendations"
