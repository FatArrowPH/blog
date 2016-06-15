#!/bin/bash

set -e

echo -e "Host $HOST\n\tStrictHostKeyChecking no\n" >> ~/.ssh/config
eval "$(ssh-agent -s)"
chmod 600 $TRAVIS_BUILD_DIR/deploy-key
ssh-add $TRAVIS_BUILD_DIR/deploy-key

cd build
git init
git remote add production "$GIT_REMOTE"
git config user.name "Travis CI"
git config user.email "fatbot@fat-arrow.com"
git add --all
git commit -m "$(date)"
git push --force production master
