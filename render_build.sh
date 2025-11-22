#!/usr/bin/env bash

# This script forces Render to inject the secure GEMINI_API_KEY into the HTML file.

# 1. Check if the key is set in Render's environment.
if [ -z "$GEMINI_API_KEY" ]; then
    echo "Error: GEMINI_API_KEY environment variable is not set in Render."
    exit 1
fi

# 2. Use 'sed' to find the placeholder line and replace the empty string with the real key.
#    It replaces: const API_KEY = "";
#    With:      : const API_KEY = "YOUR_REAL_KEY";
sed -i'' "s|const API_KEY = \"\";|const API_KEY = \"$GEMINI_API_KEY\";|g" index.html

echo "Successfully injected API key into index.html."