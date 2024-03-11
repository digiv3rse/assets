# DiGiClient SDK
---

The DiGiClient SDK provides an easy way to interact with the DiGi Protocol GraphQL schema. It's built with TypeScript but can be used in any JavaScript-based environment.

All methods are grouped by module, a full overview can be seen on the [DiGiClient SDK reference page.](https://digiv3rse.github.io)

You can view the full source code on [Github](https://github.com/digiv3rse/sdk).

Getting the DiGiClient setup and querying data in just a few steps

## 1. Install the DiGi Client SDK

Open the terminal.

If using npm:

````zsh
npm install @digiv3rse/client

````

If using pnpm:

````zsh
pnpm add @digiv3rse/client

````
If using yarn:

````zsh
yarn add @digiv3rse/client

````

## 2. Initialise a DiGiClient

The SDK supports the DiGi Protocol development and production environments and exposes utilities for each environment to allow you to target them.

### Development (Polygon Mumbai):

````typescript
import { DiGiClient, development } from "@digiv3rse/client";

const digiClient = new DiGiClient({
  environment: development
});
````
### Production (Polygon Mainnet):

````typescript
import { DiGiClient, production } from "@digiv3rse/client";

const digiClient = new DiGiClient({
  environment: production
});

````
### Configure storage (optional):

DiGiClient manages the authentication tokens for you, it can also store them for future use if you provide a storage instance.

It could be a browser-based LocalStorage or a React-Native storage solution. It's up to you. You need to ensure your implementation conforms to the IStorageProvider interface below:

````typescript
export interface IStorageProvider {
  getItem(key: string): Promise<string | null> | string | null;
  setItem(key: string, value: string): Promise<string> | Promise<void> | void | string;
  removeItem(key: string): Promise<string> | Promise<void> | void;
}
````

A full example implementation using local storage:

````typescript
import { DiGiClient, development, IStorageProvider } from "@digiv3rse/client";

class LocalStorageProvider implements IStorageProvider {
  getItem(key: string) {
    return window.localStorage.getItem(key);
  }

  setItem(key: string, value: string) {
    window.localStorage.setItem(key, value);
  }

  removeItem(key: string) {
    window.localStorage.removeItem(key);
  }
}

const digiClientConfig = {
  environment: development,
  storage: new LocalStorageProvider()
}

const digiClient = new DiGiClient(digiClientConfig);

````

## 3. Query DiGi Protocol data

You are now in a position to start to query the protocol data.

For example, to test if your setup is correct, you can fetch some publications.

````typescript
const publications = await digiClient.publications.fetchAll();

````

The next step is to [authenticate with the API](../authentication/authentication.md) to perform queries or mutations that are protected.