#!/bin/bash
rm -f ../src/conf/config.json
ln -s ../src/conf/config.dev.json  ../src/conf/config.json
echo "link  config.dev.json to config.json "