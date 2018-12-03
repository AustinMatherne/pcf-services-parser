# pcf-services-parser

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
