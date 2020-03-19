#!/bin/bash
if git diff-index --quiet HEAD --; then # Check to make sure there are no uncommited changes
    set -o errexit; # Exit on error
echo Step 1/4: Creating optimized React build;
    npm run build; # Build the React application.
echo Step 2/4: Archiving previous production image;
    now=$(date +"%m_%d_%Y") # Tag and archive old docker latest. Push to dockerhub.
    docker tag jacksonsabol/portfolio:latest jacksonsabol/portfolio:$now;
    docker push jacksonsabol/portfolio:$now;
echo Step 3/4: Creating new production image;
    mv Dockerfile.prod.off Dockerfile;
    npm run docker:build; # Build a new latest docker image. Push to dockerhub.
    mv Dockerfile Dockerfile.prod.off;
    npm run docker:push;
echo Step 4/4: Creating/Deploying elastic beanstalk environment;
eb $1 Portfolio-dev; # Create / deploy to the elastic beanstalk environment depending on the value passed in arg $1.
else
    echo Please commit your changes first.;
fi
