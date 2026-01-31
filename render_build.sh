#!/usr/bin/env bash

# Inject GEMINI_API_KEY into all HTML files

if [ -z "$GEMINI_API_KEY" ]; then
    echo "Error: GEMINI_API_KEY environment variable is not set in Render."
    exit 1
fi

for file in *.html; do
    sed -i'' "s|const API_KEY = \"\";|const API_KEY = \"$GEMINI_API_KEY\";|g" "$file"
    echo "Injected API key into $file"
done
