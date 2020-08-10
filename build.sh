#!/bin/bash

echo building site

hugo --gc --minify

cd functions 

npm install

cd ..
