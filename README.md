# sendpost_javascript_sdk

sendpost - JavaScript client for sendpost_javascript_sdk
Email API and SMTP relay to not just send and measure email sending, but also alert and optimise. We provide you with tools, expertise and support needed to reliably deliver emails to your customers inboxes on time, every time.

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install sendpost_javascript_sdk --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
const { EmailApi, EmailMessage } = require('sendpost_javascript_sdk');
const email = new EmailApi();
const apiKey = 'your_api_key'; // {String} Sub-Account API Key

(async function() {
  const message = new EmailMessage();
  message.from = { email: 'richard@piedpiper.com' };
  message.to = [{ email: 'gavin@hooli.com' }]
  message.subject = 'Hello'
  message.htmlBody = '<strong>it works!</strong>';
  message.ippool = 'PiedPiper'

  const opts = {
    emailMessage: message
  };
  try {
    const data = await email.sendEmail(apiKey, opts)
    console.log('API called successfully. Returned data: ', data);
  } catch (error) {
    console.error(error);
  }
})()
```

Example with cc, bcc and template:

```javascript
const { EmailApi, EmailMessage } = require('sendpost_javascript_sdk');
const email = new EmailApi();
const apiKey = 'your_api_key'; // {String} Sub-Account API Key

(async function() {
  const message = new EmailMessage();
  message.from = { email: 'richard@piedpiper.com' };

  message.to = [{
    email: 'gavin@hooli.com',
    cc: [{ email: 'dinesh@bachmanity.com' }],
    bcc: [{ email: 'jian@bachmanity.com' }],
  }]

  message.subject = 'Hello'
  message.htmlBody = '<strong>it works!</strong>';
  message.ippool = 'PiedPiper'

  message.template = 'Welcome Mail'

  const opts = {
    emailMessage: message
  };
  try {
    const data = await email.sendEmailWithTemplate(apiKey, opts)
    console.log('API called successfully. Returned data: ', data);
  } catch (error) {
    console.error(error);
  }
})()


```

## Suppressions

Create Suppressions

```javascript
const { SuppressionApi, RSuppression } = require('sendpost_javascript_sdk');
const suppressionApi = new SuppressionApi();
const apiKey = 'your_api_key'; // {String} Sub-Account API Key

(async function() {
  const rSuppression = new RSuppression();
  rSuppression.hardBounce = [{ email: 'richard@piedpiper_fake.com' }];

  // fields are optional, but you have to send at least one of them.

  // rSuppression.manual = [{ email: 'richard@piedpiper_fake2.com' }];
  // rSuppression.spamComplaint = [{ email: 'richard@piedpiper_fake3.com' }];
  // rSuppression.unsubscribe = [{ email: 'richard@piedpiper_fake4.com' }];

  const opts = {
    rSuppression: rSuppression
  };
  try {
    const data = await suppressionApi.createSuppressions(apiKey, opts)
    console.log('API called successfully. Returned data: ', data);
  } catch (error) {
    console.error(error);
  }
})()
```

Get Suppressions

```javascript
const { SuppressionApi } = require('sendpost_javascript_sdk');
const suppressionApi = new SuppressionApi();
const apiKey = 'your_api_key'; // {String} Sub-Account API Key

(async function() {
  const opts = {
    offset: 0,
    limit: 10,
    from: '2023-06-07',
    to: '2023-08-02'
  };
  try {
    const data = await suppressionApi.getSuppressions(apiKey, opts)
    console.log('API called successfully. Returned data: ', data);
  } catch (error) {
    console.error(error);
  }
})()
```

Delete Suppressions

```javascript
const { SuppressionApi, RDSuppression } = require('sendpost_javascript_sdk');
const suppressionApi = new SuppressionApi();
const apiKey = 'your_api_key'; // {String} Sub-Account API Key

(async function() {
  const rDSuppression = new RDSuppression();
  rDSuppression.suppressions = [{ email: 'richard@piedpiper.com' }];
  const opts = {
    rDSuppression: rDSuppression
  };
  try {
    const data = await suppressionApi.deleteSuppression(apiKey, opts)
    console.log('API called successfully. Returned data: ', data);
  } catch (error) {
    console.error(error);
  }
})()
```

Count Suppressions

```javascript
const { SuppressionApi } = require('sendpost_javascript_sdk');
const suppressionApi = new SuppressionApi();
const apiKey = 'your_api_key'; // {String} Sub-Account API Key

(async function() {
  const opts = {
    from: '2023-06-07',
    to: '2023-08-02'
  };
  try {
    const data = await suppressionApi.count(apiKey, opts)
    console.log('API called successfully. Returned data: ', data);
  } catch (error) {
    console.error(error);
  }
})()
```

## Documentation for API Endpoints

All URIs are relative to *https://api.sendpost.io/api/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*sendpost.EmailApi* | [**sendEmail**](docs/EmailApi.md#sendEmail) | **POST** /subaccount/email/ | 
*sendpost.EmailApi* | [**sendEmailWithTemplate**](docs/EmailApi.md#sendEmailWithTemplate) | **POST** /subaccount/email/template | 
*sendpost.SuppressionApi* | [**count**](docs/SuppressionApi.md#count) | **GET** /subaccount/suppression/count | 
*sendpost.SuppressionApi* | [**createSuppressions**](docs/SuppressionApi.md#createSuppressions) | **POST** /subaccount/suppression/ | 
*sendpost.SuppressionApi* | [**deleteSuppression**](docs/SuppressionApi.md#deleteSuppression) | **DELETE** /subaccount/suppression/ | 
*sendpost.SuppressionApi* | [**getSuppressions**](docs/SuppressionApi.md#getSuppressions) | **GET** /subaccount/suppression/ | 


## Documentation for Models

 - [sendpost.Attachment](docs/Attachment.md)
 - [sendpost.City](docs/City.md)
 - [sendpost.CopyTo](docs/CopyTo.md)
 - [sendpost.CountStat](docs/CountStat.md)
 - [sendpost.Device](docs/Device.md)
 - [sendpost.EmailMessage](docs/EmailMessage.md)
 - [sendpost.EmailResponse](docs/EmailResponse.md)
 - [sendpost.EventMetadata](docs/EventMetadata.md)
 - [sendpost.From](docs/From.md)
 - [sendpost.Os](docs/Os.md)
 - [sendpost.QEmailMessage](docs/QEmailMessage.md)
 - [sendpost.QEvent](docs/QEvent.md)
 - [sendpost.RDSuppression](docs/RDSuppression.md)
 - [sendpost.RSuppression](docs/RSuppression.md)
 - [sendpost.ReplyTo](docs/ReplyTo.md)
 - [sendpost.Suppression](docs/Suppression.md)
 - [sendpost.SuppressionEmail](docs/SuppressionEmail.md)
 - [sendpost.To](docs/To.md)
 - [sendpost.UserAgent](docs/UserAgent.md)
 - [sendpost.WebhookEvent](docs/WebhookEvent.md)


## Documentation for Authorization

Endpoints do not require authorization.

