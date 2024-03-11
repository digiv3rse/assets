# Revoke Authentication

Revoke an existing pair of tokens validation. After calling this method user will not be able to use accessToken to get access and neither refreshToken to get a new pair of tokens.

### Request

* authorizationId: String (required)
  * The authorization ID from the list of valid sessions obtained from endpoint approvedAuthentications

### Invocation

```GraphQL

mutation RevokeAuthentication {
  revokeAuthentication(request: {
  	authorizationId: "xxxxx"
  })
}
```
### Response

```JSON

{
  "data": null
}
```