# Privacy Policy — ToxiBlock

**Last updated:** May 13, 2026

## Overview

ToxiBlock is a Chrome extension that automatically detects and blurs toxic comments on YouTube and Twitter/X using a machine learning model. This policy explains what data is collected and how it is used.

## Data Collected

ToxiBlock reads the text content of comments displayed on supported websites (YouTube and Twitter/X) solely to analyze whether the comment is toxic.

## How Data Is Used

Comment text is sent to a remote API endpoint for toxicity classification. The result is used exclusively to decide whether to blur the comment in your browser. No data is stored, logged, or shared with any third party.

## Data Retention

ToxiBlock does not store any user data. Comment text is processed in real time and discarded immediately after classification. No databases, analytics, or tracking systems are used.

## Third-Party Services

ToxiBlock communicates with a self-hosted FastAPI backend to perform toxicity classification. This service does not store or share any data received from the extension.

## User Control

Users can disable ToxiBlock at any time using the ON/OFF toggle in the extension popup. When disabled, no data is sent to the API and all blurred comments are restored.

## Contact

For questions or concerns about this privacy policy, please open an issue at:  
https://github.com/Renanmrqs/ToxiBlock
