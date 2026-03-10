#!/bin/bash
set -e

cd ~/Kamiko-Web

echo "🚀 Starting Deployment..."

# 1. Update Repository
git fetch origin main
git reset --hard origin/main

# 2. Safety check
if [ ! -f .env ]; then
    echo "❌ ERROR: .env missing! Deployment aborted."
    exit 1
fi

# 3. Clean Up
echo "🧹 Cleaning up old containers..."
sudo docker rm -f kamiko-web || true
sudo docker compose down --remove-orphans || true
sudo docker compose up -d --build --force-recreate

# 4. Delete container if stuck
sudo docker rm -f kamiko-web 2>/dev/null || true

# 5. Build dan Jalankan
echo "🏗️ Building and Starting Containers..."
sudo docker compose up -d --build --force-recreate

# 6. Clean Images
sudo docker image prune -f

echo "✅ Deployment Successful!"