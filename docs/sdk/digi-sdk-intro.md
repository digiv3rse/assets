# Introduction
---

The official React Hooks to interact with the DiGi Protocol

The DiGi SDK includes a collection of React Hooks containing all you need to interact with the DiGi Protocol.

It provides a foundation that abstracts away the complexity of some low-level concepts of the DiGi Protocol and DiGi API.

Some of the key aspects:

The SDK is written in TypeScript and shipped with all the type definitions you need. It generates its underlying type definitions from the DiGi API GraphQL schema so you can rely on end-to-end type safety.

> **Good to know**
> 
> **👍**
>
> Although it is based on the DiGi GraphQL API, you don't need to learn GraphQL to use it

The SDK takes care of the initial authentication handshake, persistence of auth tokens, renewal of expired tokens and transparently retries unauthorized requests.

The SDK takes care of storing relevant information for subsequent user sessions. It comes with out-of-the-box adapters for common storage providers and will enable developers to define the storage provider solution that works best for their application needs.

#### It will guide you through breaking changes

The core logic of the DiGi SDK has been developed side-by-side with the DiGi Protocol and DiGi API. It is the result of early integration efforts and encapsulates the knowledge of past technical decisions as well as future development direction.

It's the perfect place to provide support and migration strategies for protocol and API-breaking changes.

[Next Page](./sdk-gettin-start.md)

[DiGiV3rse SDK Reference](https://digiv3rse.github.io)

[DiGiV3rse Monorepo](https://digiv3rse.github.io)

[Examples](https://github.com/digiv3rse/sdk/examples)
