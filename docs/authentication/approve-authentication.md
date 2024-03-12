# Approved Authentications

Retrieve a comprehensive list of all the authorized tokens associated with their accounts or applications.

### Request

   * empty

### Invocation

```GraphQL

query ApprovedAuthentication($request: ApprovedAuthenticationRequest!) {
  approvedAuthentication(request: $request) {
    pageInfo {
      prev
      next
    }
    items {
      authorizationId
      browser
      device
      os
      origin
      expiresAt
      createdAt
      updatedAt
    }
  }
}
```
### Response

```JSON

{
  "data": {
    "approvedAuthentication": {
      "pageInfo": {
        "prev": null,
        "next": null
      },
      "items": [
        {
          "authorizationId": UuidType,
          "browser": String,
          "device": String,
          "os": String,
          "origin": String | null,
          "expiresAt": Date,
          "createdAt": Date,
          "updatedAt": Date
        }
      ]
    }
  }
}
```

## DiGiClient

TODO: Needs to be implemented