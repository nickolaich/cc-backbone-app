#!/usr/bin/env bash
DEFAULT="companyprofile"
PROFILE=${AWS_PROFILE:-$DEFAULT}
BUCKET=test-dep-alex-2
DIR=build/
aws  s3  sync $DIR s3://$BUCKET/ --profile "$PROFILE"