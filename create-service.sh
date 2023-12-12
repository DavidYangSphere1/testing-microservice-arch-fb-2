#!/bin/bash

# Define your function directories
FUNCTION_DIRS=("service-name")

# Loop through each directory and set up Firebase Functions
for dir in "${FUNCTION_DIRS[@]}"; do
  echo "Setting up $dir..."
  mkdir -p "$dir"
  cd "$dir"

  # Initialize Firebase (assumes Firebase CLI is installed)
  # You can add flags to the init command according to your needs
  firebase init functions

  # Add Express to the project
  npm install express dotenv --save
  npm install @types/express @types/node --save-dev
  npm install axios --save

  # Update tsconfig.json
  # Update functions/index.ts to have initialize Express app
  # More customizations can be made here

  # Move back to the project root directory
  cd ..
done

echo "Firebase functions setup complete."