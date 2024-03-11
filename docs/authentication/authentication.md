# Authentication
---

Authentication plays an important role in ensuring secure interactions with certain restricted endpoints of our API & SDK. In the documentation, we'll explicitly indicate when you're dealing with an endpoint or method that requires authentication.

We use JSON Web Tokens (JWT) as our authentication layer. This token can also be used in your own server-side application using the the [Verify JWT](./verify-jwt.md) functionality.

To validate their ownership of the EVM address linked to the Lens profile, we require a signed message from the associated Ethereum wallet as part of the authentication process. This is covered in detail in the following sections.

## Full authentication example using LensClient SDK

Using the SDK to authenticate requires a wallet / signer from your Ethereum library of choice and follow the steps:

1. Generate a challenge

2. Sign message with the associated wallet using your chosen library

3. Validate the signature

### Example with ethers

```typescript
export async function getAuthenticatedClientFromEthersWallet(wallet: Wallet): Promise<LensClient> {
  const lensClient = new LensClient({
    environment: development,
  });

  const address = await wallet.getAddress();

  const { id, text } = await lensClient.authentication.generateChallenge({
    signedBy: address,
    for: YOUR_PROFILE_ID,
  });
  const signature = await wallet.signMessage(text);

  await lensClient.authentication.authenticate({ id, signature });

  return lensClient;
}

```

### Example with viem

```typescript
import { LensClient, development } from "@lens-protocol/client";
import { WalletClient } from "viem";

export async function getAuthenticatedClient(walletClient: WalletClient) {
  const lensClient = new LensClient({
    environment: development,
  });

  const address = walletClient.account.address;

  const { id, text } = await lensClient.authentication.generateChallenge({
    signedBy: address,
    for: YOUR_PROFILE_ID,
  });
  const signature = await walletClient.signMessage({ account: address, message: text });

  lensClient.authentication.authenticate({ id, signature });

  return lensClient;
}

```

### Breakdown of Each Authentication Method

* [Login](./login.md)

* [Refresh JWT](./refres-jwt.md)

* [Verify JWT](./verify-jwt.md)