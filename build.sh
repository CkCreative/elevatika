#!/bin/bash

echo building site

hugo

cd functions 

npm install

cd ..
