for file in `find . -name '*.jpeg'`
do
  cwebp -q 50 $file -o "${file%.*}.webp"
  rm $file
done
