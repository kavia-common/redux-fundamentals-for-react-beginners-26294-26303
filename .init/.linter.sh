#!/bin/bash
cd /home/kavia/workspace/code-generation/redux-fundamentals-for-react-beginners-26294-26303/frontend_app
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

