# Refresh JWT

The accessToken obtained through the authentication method has a lifespan of 30 minutes. You will need to refresh it using refreshToken in order to obtain a renewed access token.

Your client application holds the responsibility of managing this refreshing process to ensure the access token is renewed before its expiration.

### Request
 
* refreshToken: String (required)
 * The refresh token.

### Invocation

```typescript
mutation refreshToken: String (required)
The refresh token.
mutation Refresh {
  refresh(request: {
    refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjB4YjE5QzI4OTBjZjk0N0FEM2YwYjdkN0U1QTlmZkJjZTM2ZDNmOWJkMiIsInJvbGUiOiJyZWZyZXNoIiwiaWF0IjoxNjQ1MTA0MjMxLCJleHAiOjE2NDUxOTA2MzF9.2Tdts-dLVWgTLXmah8cfzNx7sGLFtMBY7Z9VXcn2ZpE"
  }) {
    accessToken
    refreshToken
  }
}

{
  "data": {
    "refresh": {
      "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjB4YjE5QzI4OTBjZjk0N0FEM2YwYjdkN0U1QTlmZkJjZTM2ZDNmOWJkMiIsInJvbGUiOiJub3JtYWwiLCJpYXQiOjE2NDUxMDQyMzEsImV4cCI6MTY0NTEwNjAzMX0.lwLlo3UBxjNGn5D_W25oh2rg2I_ZS3KVuU9n7dctGIU",
      "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjB4YjE5QzI4OTBjZjk0N0FEM2YwYjdkN0U1QTlmZkJjZTM2ZDNmOWJkMiIsInJvbGUiOiJyZWZyZXNoIiwiaWF0IjoxNjQ1MTA0MjMxLCJleHAiOjE2NDUxOTA2MzF9.2Tdts-dLVWgTLXmah8cfzNx7sGLFtMBY7Z9VXcn2ZpE"
    }
  }
}

```
> ### ℹ️ Decode your JWT token
> 
> Use [https://jwt.io/](https://jwt.io/) to decode your JWT token. In the payload you will see some claims. See the field exp, this is the unix timestamp for when the token will expire.

### DiGiClient

The DiGiClient does not expose a method to refresh the JWT as this is handled for you within the SDK itself.

-----

> #### 📘 [Refresh JWT: GraphQL API Full Example](https://github.com/digiv3rse/api-examples/blob/feat/v2/src/authentication/refresh.ts)