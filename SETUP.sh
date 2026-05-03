#!/bin/bash

# Veldon Paints Website - Setup Script
# This script sets up the development environment

set -e

echo "================================"
echo "Veldon Paints Website Setup"
echo "================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "   Download from: https://nodejs.org"
    exit 1
fi

echo "✅ Node.js found: $(node -v)"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed."
    exit 1
fi

echo "✅ npm found: $(npm -v)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

echo ""
echo "✅ Dependencies installed successfully!"
echo ""

# Create .env.local if it doesn't exist
if [ ! -f .env.local ]; then
    echo "📝 Creating .env.local from .env.example..."
    cp .env.example .env.local
    echo "✅ .env.local created"
    echo ""
    echo "⚠️  IMPORTANT: Update .env.local with your Formspree ID"
    echo "   1. Go to https://formspree.io"
    echo "   2. Create a new form"
    echo "   3. Copy your form ID (format: f/xxxxxxxx)"
    echo "   4. Add to .env.local: NEXT_PUBLIC_FORMSPREE_ID=f/your_id"
else
    echo "✅ .env.local already exists"
fi

echo ""
echo "================================"
echo "Setup Complete!"
echo "================================"
echo ""
echo "Next steps:"
echo "1. Update .env.local with your Formspree ID"
echo "2. Run: npm run dev"
echo "3. Open: http://localhost:3000"
echo ""
echo "For more information, see:"
echo "- QUICKSTART.md - Quick start guide"
echo "- README.md - Full documentation"
echo "- DEPLOYMENT.md - Deployment instructions"
echo ""
