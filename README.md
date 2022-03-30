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

## Verify site ownership in Search Console to submit URLs for indexing
In this step, you'll verify that you have control over your web property.

To verify ownership of your site you'll need to add your service account email address (see service_account.json - client_email) and add it as an owner ('delegated') of the web property in Search Console.

You can find your service account email address in two places:
- The client_email field in the JSON private key that you downloaded when you created your project.
- The Service account ID column of the Service Accounts view in the Developer Console.
- The email address has a format similar to the following:

For example, "my-service-account@test-project-42.google.com.iam.gserviceaccount.com".

Then...

1. Go to [Google Webmaster Central](https://www.google.com/webmasters/verification/home)
2. Click your verified property
3. Scroll down and click 'Add an owner'.
4. Add your service account email address as an owner to the property.
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
