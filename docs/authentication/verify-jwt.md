# Verify JWT
---

If you intend to implement may wish to use the same authentication on your server-side to save you having to do authentication yourself as the claims hold the Ethereum address in it; the issue you would face is verifying that token is actually signed by the server and the user or if it has just been generated and is not secure. This endpoint solves this for you.

## Invocation

```typescript
const isVerified = await digiClient.authentication.verify(accessToken);

```

## Response

```json
JSON

{
  "data": {
    "verify": true
  }
}

```

## Full DiGiClient Example

## 📘
##### [Verify JWT: GraphQL API Full Example](https://github.com/digiv3rse/api-examples)