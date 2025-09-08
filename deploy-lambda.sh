#!/bin/bash

# AWS Lambda Integration Deployment Script
# This script deploys the Lambda function and updates the Amplify backend

echo "🚀 Starting AWS Lambda Integration Deployment..."

# Check if we're in the right directory
if [ ! -f "amplify/backend.ts" ]; then
    echo "❌ Error: Please run this script from the project root directory"
    exit 1
fi

# Check if Amplify CLI is installed
if ! command -v npx &> /dev/null; then
    echo "❌ Error: npx is not installed. Please install Node.js and npm"
    exit 1
fi

echo "📦 Deploying Lambda function and updating backend..."

# Deploy the backend with the new Lambda function
echo "1️⃣ Deploying backend with Lambda function..."
npx ampx sandbox

if [ $? -eq 0 ]; then
    echo "✅ Backend deployment successful!"
else
    echo "❌ Backend deployment failed!"
    exit 1
fi

echo "2️⃣ Regenerating GraphQL types..."
npx ampx generate graphql-client-code

if [ $? -eq 0 ]; then
    echo "✅ GraphQL types regenerated successfully!"
else
    echo "❌ GraphQL type generation failed!"
    exit 1
fi

echo "3️⃣ Starting Angular development server..."
echo "🌐 The application will be available at http://localhost:4200"
echo "📋 Lambda features available:"
echo "   - Item Validation"
echo "   - Item Transformation"
echo "   - Items Aggregation"
echo "   - Bulk Processing"

# Start the Angular development server
ng serve

echo "🎉 Deployment complete! Your Lambda-integrated CRUD app is ready!"
