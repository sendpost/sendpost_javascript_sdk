# send_post_api

sendpost - JavaScript client for send_post_api
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
const { EmailApi, EmailMessage } = require('sendpost_js');
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

## Documentation for API Endpoints

All URIs are relative to *https://api.sendpost.io/api/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*sendpost.EmailApi* | [**sendEmail**](docs/EmailApi.md#sendEmail) | **POST** /subaccount/email/ | 
*sendpost.EmailApi* | [**sendEmailWithTemplate**](docs/EmailApi.md#sendEmailWithTemplate) | **POST** /subaccount/email/template | 


## Documentation for Models

 - [sendpost.Attachment](docs/Attachment.md)
 - [sendpost.City](docs/City.md)
 - [sendpost.CopyTo](docs/CopyTo.md)
 - [sendpost.Device](docs/Device.md)
 - [sendpost.EmailMessage](docs/EmailMessage.md)
 - [sendpost.EmailResponse](docs/EmailResponse.md)
 - [sendpost.EventMetadata](docs/EventMetadata.md)
 - [sendpost.From](docs/From.md)
 - [sendpost.Os](docs/Os.md)
 - [sendpost.QEmailMessage](docs/QEmailMessage.md)
 - [sendpost.QEvent](docs/QEvent.md)
 - [sendpost.ReplyTo](docs/ReplyTo.md)
 - [sendpost.To](docs/To.md)
 - [sendpost.UserAgent](docs/UserAgent.md)
 - [sendpost.WebhookEvent](docs/WebhookEvent.md)


## Documentation for Authorization

Endpoints do not require authorization.

