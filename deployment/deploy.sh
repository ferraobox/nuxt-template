#!/bin/bash

echo "VERCEL_GIT_COMMIT_REF: $VERCEL_GIT_COMMIT_REF"

if [[ "$VERCEL_GIT_COMMIT_AUTHOR_NAME" == "semantic-release-bot" ]] ; then
  # Don't build
    echo "🛑 - Build cancelled"
  exit 0;
fi

if [[ "$VERCEL_GIT_COMMIT_AUTHOR_NAME" == "dependabot[bot]" || "$VERCEL_GIT_COMMIT_AUTHOR_NAME" == "dependabot" || "$VERCEL_GIT_COMMIT_REF" == "main"  ]] ; then
  # Proceed with the build
    echo "✅ - Build can proceed"
  exit 1;

else
  # Don't build
    echo "🛑 - Build cancelled"
  exit 0;
fi