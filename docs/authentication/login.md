# Login
---

The process of logging in requires two different actions:

### 1. Challenge Generation:
Our server generates a challenge, which is a specific piece of text. The challenge is designed to be signed using your Ethereum wallet to validate ownership.

### 2. Authenticate with Signed Challenge:
After receiving the challenge text, you must sign it using your Ethereum wallet. The resulting signature will then be used to call the authenticate method. This action generates both an accessToken and a refreshToken


## Challenge Generation

To obtain a JWT token, the first step is to request a challenge from the server. This challenge text will be used to prove ownership by signing it with your Ethereum wallet. Keep in mind that each challenge remains valid for only 5 minutes. If it expires, a new challenge must be generated.

#### Using DiGiClientClient

```zsh

 const { id, text } = await digiClient.authentication.generateChallenge({
    signedBy: YOUR_WALLET_ADDRESS, // e.g "0xdfd7D26fd33473F475b57556118F8251464a24eb"
    for: YOUR_PROFILE_ID, // e.g "0x01"
  });

```

#### Using GraphQL API

**Example Operation**

```zsh

query Challenge {
  challenge(request: { 
    signedBy: "0xdfd7D26fd33473F475b57556118F8251464a24eb",
    for: "0x01"
  }) {
    text
  }
}

```

**Example Response**

```zsh

{
  "data": {
    "challenge": {
      "id": "example-challenge-id",
      "text": "I want to authenticate with digi and generate a JWT token at timestamp - 1645102996447. Auth request id - 6a01ffa229be678f03d705eb9b4c454554e2cef4be2c273fc0c9ed5be8762625"
    }
  }
}

```

Note we advise logging in with a profile to unlock the full API, but we also support logging in with just a wallet, which can do only a small set of features like act on free and paid actions. To authenticate with just a wallet, omit profile id from the challenge request.

## Authenticate with Signed Challenge

Once you've obtained the challenge text, you should sign it using your Ethereum wallet. The resulting signature should be provided to the authentication endpoint.

### Using DiGiClientClient

Successfully calling digiClient.authentication.authenticate returns void and gives the DiGiClientClient instance the ability to make authenticated requests.

Example using ethers to sign the message:

```typescript

import { Wallet } from "ethers";

const wallet = new Wallet(YOUR_PRIVATE_KEY);

const signature = await wallet.signMessage(text); // text returned from authentication.generateChallenge

await digiClient.authentication.authenticate({ 
  id, // returned from authentication.generateChallenge
  signature
});


```

#### Using GraphQL API

This mutation will return both an accessToken and a refreshToken.

* accessToken - Valid for 30 minutes before needed to be refreshed

* refreshToken - Valid for 7 days to allow users to remain logged in and then generate a new accessToken when they come back without them having to sign a challenge again.

**Example Operation**

```typescript

mutation Authenticate {
  authenticate(request: {
    id: "6e2ff9c2-3c9d-45c7-a990-7b7d23b989ba", # ChallengeId
    signature: "0x8f82e1a2c2cc35a2963c60eeb0a76aecc100686c4ffcb98fd522a90cba2f0b2642067c79cd6d0c9d239ed28a6882818f77bf546e774410236c730988bd14de5d1c"
  }) {
    accessToken
    refreshToken
  }
}

```

**Example Response**

```json

{
  "data": {
    "authenticate": {
      "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjB4YjE5QzI4OTBjZjk0N0FEM2YwYjdkN0U1QTlmZkJjZTM2ZDNmOWJkMiIsInJvbGUiOiJub3JtYWwiLCJpYXQiOjE2NDUxMDQyMzEsImV4cCI6MTY0NTEwNjAzMX0.lwLlo3UBxjNGn5D_W25oh2rg2I_ZS3KVuU9n7dctGIU",
      "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjB4YjE5QzI4OTBjZjk0N0FEM2YwYjdkN0U1QTlmZkJjZTM2ZDNmOWJkMiIsInJvbGUiOiJyZWZyZXNoIiwiaWF0IjoxNjQ1MTA0MjMxLCJleHAiOjE2NDUxOTA2MzF9.2Tdts-dLVWgTLXmah8cfzNx7sGLFtMBY7Z9VXcn2ZpE"
    }
  }
}

```

#### Full GraphQL API Example

| [Log in example](https://github.com/digiv3rse/api-examples/src/authentication/login.ts)  |
|:-----------------------------------------------------------------------------------------|

