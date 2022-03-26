## Google Search Console Indexer Nodejs
![This is an image](https://github.com/msyahrul801/google-search-console-indexer-nodejs/blob/main/screenshot/image1.png)
# Build
```
  git clone https://github.com/msyahrul801/google-search-console-indexer-nodejs.git
```
```
  npm install
```
# Configuration
1. First off you will need to set up access to the Indexing API in Google Cloud Platform - follow the instructions below.
https://developers.google.com/search/apis/indexing-api/v3/prereqs.
2. Once you have access to the Indexing API you will be able to download the public/private key pair JSON file, it contains all your credentials then Rename the file **example.service_account.json** to **service_account. json** and enter your public/private key
# Run
```
  npm start
```
or
```
  node index.js
```
# Open on browser
[http://localhost:3000](http://localhost:3000).
