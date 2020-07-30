#!/bin/bash

echo installing postCSS dependencies

# npm install postcss-cli autoprefixer

echo building site

hugo

cd functions 

npm install

cd ..
