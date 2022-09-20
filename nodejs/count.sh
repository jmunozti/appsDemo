#!/bin/sh

now=$(date +%s)
path="/home/ec2-user/results"

echo "Begin"

cd $path
rm results.txt

audio=$(aws s3 ls ms-shared | grep ".mp3" | wc -l)
video=$(aws s3 ls ms-shared | grep ".mp4" | wc -l)
image=$(aws s3 ls ms-shared | grep ".jpg" | wc -l)

echo $now" -> "$audio","$video","$image
echo $now" -> "$audio","$video","$image > $path"/"results.txt

echo "End"
