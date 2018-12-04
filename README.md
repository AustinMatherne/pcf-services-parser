# pcf-services-parser

[![npm](https://img.shields.io/npm/v/pcf-services-parser.svg)](https://www.npmjs.com/package/pcf-services-parser)
[![node](https://img.shields.io/node/v/pcf-services-parser.svg)](https://www.npmjs.com/package/pcf-services-parser)
[![David](https://img.shields.io/david/AustinMatherne/pcf-services-parser.svg)](https://david-dm.org/AustinMatherne/pcf-services-parser)
[![Greenkeeper badge](https://badges.greenkeeper.io/AustinMatherne/pcf-services-parser.svg)](https://greenkeeper.io/)

[![Travis (.com)](https://img.shields.io/travis/com/AustinMatherne/pcf-services-parser.svg)](https://travis-ci.com/AustinMatherne/pcf-services-parser/)
[![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability/AustinMatherne/pcf-services-parser.svg)](https://codeclimate.com/github/AustinMatherne/pcf-services-parser)
[![Code Climate coverage](https://img.shields.io/codeclimate/coverage/AustinMatherne/pcf-services-parser.svg)](https://codeclimate.com/github/AustinMatherne/pcf-services-parser)

A parser for PCF service credentials

Returns PCF service credentials as an object of ENV formatted strings.

Given the service configuration:

```json
{
  "VCAP_SERVICES": {
    "user-provided": [
      {
        "name": "db-service",
        "credentials": {
          "username": "db-username",
          "password": "db-password"
        }
      }
    ],
    "p-rabbitmq": [
      {
        "name": "message-broker",
        "credentials": {
          "username": "broker-username",
          "password": "broker-password"
        }
      }
    ]
  }
}
```

```typescript
const serviceCredentials = getPcfServiceCredentials();
console.log(serviceCredentials);
// {
//   DB_SERVICE_USERNAME: "db-username",
//   DB_SERVICE_PASSWORD: "db-password",
//   MESSAGE_BROKER_USERNAME: "broker-username",
//   MESSAGE_BROKER_PASSWORD: "broker-password"
// };
```
