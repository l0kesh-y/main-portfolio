#!/bin/bash
set -e

echo "🚀 Starting build process..."

# Install dependencies
echo "📦 Installing dependencies..."
npm ci --prefer-offline --no-audit

# Build the project
echo "🔨 Building project..."
CI=false npm run build

echo "✅ Build completed successfully!"