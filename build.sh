#!/usr/bin/env bash

echo "$(cat index-top.html)" "$(marked index-middle.md)" "$(cat index-bottom.html)" > public/index.html;
firebase serve;
