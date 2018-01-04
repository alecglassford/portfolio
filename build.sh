#!/usr/bin/env bash

echo "$(cat index-top.html)" "$(marked index-middle.md)" "<small>Updated $(date +"%a %b %d %Y")</small>" "$(cat index-bottom.html)" > public/index.html;
firebase serve;
