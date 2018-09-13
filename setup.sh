#!/usr/bin/env bash

# set up githook to build pre-push
echo "npm run build" >> ./.git/hooks/pre-commit

# install node modules and build
npm install && npm run build
