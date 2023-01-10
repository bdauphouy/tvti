#!/bin/bash
width=600
file=$1
original_width=$(webpinfo "$file" | grep "Width" | awk '{print $2}')
original_height=$(webpinfo "$file" | grep "Height" | awk '{print $2}')
new_height=$(echo "scale=2;$original_height * $width / $original_width" | bc)
new_file="${file%.webp}.webp"
cwebp -quiet -resize $width $new_height "$file" -o "$new_file"