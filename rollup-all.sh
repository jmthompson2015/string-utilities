#! /bin/bash

export BASE=/Volumes/StorageDrive/jmthompson/git/string-utilities
export BIN=${BASE}/node_modules/rollup/dist/bin

${BIN}/rollup -c
${BIN}/rollup -c rollup.config.terser.js
