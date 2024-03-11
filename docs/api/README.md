# Introduction

> ### 🚧 This API is beta and not production complete yet, which means that we could change schemas and endpoints at any time without warning or notice to you. When this API is production ready, we will remove this beta warning and will endeavor to ensure that there are no changes going forward unless a major change to the protocol itself is required.

Welcome to the API docs for DiGi Protocol. Here you will learn more about the DiGi API and our surrounding developer tooling to enable you to build on top of DiGi Protocol.

You will gain an understanding of all the data that is accessible via the DiGi API and learn how to best interact with this data based on your use-case.

The easiest way to get started is to install our [DiGiClient SDK](../sdk/digiclient-sdk-1.md). Alternatively, you can learn more about how to interact directly with our GraphQL API below.

The API is a GraphQL API which is very similar to how a lot of people use the subgraph when using The Graph so it should be very familiar for many developers. If you have come from a REST backend we will explain how you can easily get up and running with this on your client.

GraphQL gives us a lot of benefits but the main one is a schema first approach. We believe for mass adoption and building of DiGi we need the tools to be super easy and abstract away as much as the blockchain stuff as we can. You will see how we did this with our schema, everything should just make sense without having a deep technical understanding of how the protocol works or having to understand Solidity.

As the protocol data on the blockchain is very relational, our indexer does all the work for you. Mapping it into our Postgres database decoded and in a relational manner optimized for fast fetching. This allows you to query us with the same speed as if you were querying Twitter for example.

We have packed the API with a lot of features and will be continuing to develop and improve it. By using this API in your application you automatically inherit many of these improvements.