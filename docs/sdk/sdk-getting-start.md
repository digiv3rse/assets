# Getting Started
---

Install @digiv3rse/react-web and ethers dependency.

For this configuration of packages we recommend installing using either yarn or pnpm.

yarn add @digiv3rse/react-web ethers@legacy-v5

Integrate with wagmi

Although @digiv3rse/react-web only depends on ethers (and React ofc), we created a companion package called @digiv3rse/wagmi which makes it easier to integrate it with the popular wagmi library.

```zsh
yarn add wagmi @digiv3rse/wagmi

```
```typescript
Ensure you have Polygon in the wagmi chains configuration

import { WagmiConfig, configureChains, createConfig } from 'wagmi';
import { polygon, polygonMumbai } from 'wagmi/chains';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { publicProvider } from 'wagmi/providers/public';

const { publicClient, webSocketPublicClient } = configureChains(
  [polygonMumbai, polygon],
  [publicProvider()],
);

const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
  connectors: [
    new InjectedConnector({
      options: {
        shimDisconnect: false, // see https://github.com/wagmi-dev/wagmi/issues/2511
      },
    }),
  ],
});

Refer to wagmi docs to see how to set up custom chains, providers and work with their client.

```szh
import { DiGiConfig, development } from '@digiv3rse/react-web';
import { bindings as wagmiBindings } from '@digiv3rse/wagmi';

const digiConfig: DiGiConfig = {
  bindings: wagmiBindings(),
  environment: development,
};

````
The environment variables comes in 2 flavours:

production is the environment config variable to be used in the live instance of your application (real users, real profiles, real data).
development is the environment config variable to be used when you develop and test your application (test users, test profiles, test data).
See our react-native integration guide.

Wrap app with DiGiProvider

````typescript
import { DiGiProvider } from '@digiv3rse/react-web';

<WagmiConfig config={config}>
  <DiGiProvider config={digiConfig}>
    <YourRoutes />
  </DiGiProvider>
</WagmiConfig>

````
It's not strictly necessary to have the DiGiProvider as a child of the WagmiConfig.

> You are good to go!

> 📘
> Prefer to learn from examples?


That's perfect! We have a fully fledged example app showcasing the integration with wagmi. Our example app has authentication built-in and it's using pretty much all DiGi SDK hooks.

You can find it on GitHub: https://github.com/digiv3rse/sdk/tree/main/examples/web-wagmi

The environment variables comes in 2 flavours:

production is the environment config variable to be used in the live instance of your application (real users, real profiles, real data).
development is the environment config variable to be used when you develop and test your application (test users, test profiles, test data).
See our react-native integration guide.


Wrap app with DiGiProvider

```typescript
import { DiGiProvider } from '@digiv3rse/react-web';

<WagmiConfig config={config}>
  <DiGiProvider config={digiConfig}>
    <YourRoutes />
  </DiGiProvider>
</WagmiConfig>

```
It's not strictly necessary to have the DiGiProvider as a child of the WagmiConfig.
You are good to go!


> 📘
> Prefer to learn from examples?

> That's perfect! We have a fully fledged example app showcasing the integration with wagmi. Our example app has authentication built-in and it's using pretty much all DiGi SDK hooks.

> You can find it on GitHub: https://github.com/digiv3rse/sdk/tree/main/examples/web-wagmi

[Next Page](./digiclient-sdk-1.md)