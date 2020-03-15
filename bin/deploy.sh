#!/bin/bash
if git diff-index --quiet HEAD --; then # Check to make sure there are no uncommited changes
    set -o errexit; # Exit on error
echo Step 1/3: Archiving previous production image;
    now=$(date +"%m_%d_%Y") # Tag and archive old docker latest. Push to dockerhub.
    docker tag jacksonsabol/portfolio:latest jacksonsabol/portfolio:$now;
    docker push jacksonsabol/portfolio:$now;
echo Step 2/3: Creating new production image;
    mv Dockerfile.prod.off Dockerfile;
    npm run docker:build; # Build a new latest docker image. Push to dockerhub.
    mv Dockerfile Dockerfile.prod.off;
    npm run docker:push;
echo Step 3/3: Creating elastic beanstalk environment;
eb $1 Portfolio # Create the elastic beanstalk environment.;
else
    echo Please commit your changes first.;
fi
