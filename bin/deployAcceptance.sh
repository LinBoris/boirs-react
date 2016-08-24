#!/usr/bin/env bash

set -e # exit on first failure

SERVER_URL=https://ccs-api-acceptance.cfapps.io npm run build

pushd dist
cf push ccs-webclient-acceptance -b https://github.com/cloudfoundry/staticfile-buildpack
popd
