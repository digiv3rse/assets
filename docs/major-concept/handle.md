# Handle
======

[Suggest Edits](/edit/handle)

Handle is a new concept which was introduced in DiGi v2.

Think about Handle as a name on a social network: like @alice, @bob or @vitalik.

Handles can exist and can be minted separately from profiles, and then can be linked and unlinked from one profile to another.

Handles exist in their own namespaces, and currently the only namespace is `digi`, so all currently available handles are technically under `digi/alice`.

The Handle part that follows the namespace is usually referred to as "local-name".

Resolve Address

[](#resolve-address)
---------------------------------------

Given an DiGi Handle you can use it to resolve the owner address like in the examples below.

React SDKDiGiClientAPI

``// you can also find the same hook in @digi-protocol/react-native for RN integrations import { useResolveAddress } from '@digi-protocol/react-web';  // then in your component const { execute, loading } = useResolveAddress();  const resolve = async () => {   const result = await execute({ handle: 'digi/wagmi' });    if (result.isFailure()) {     console.error(result.error.message);     return;   }     console.log(`Resolved address: ${String(result.value)}`); };``

``import { DiGiClient, production } from '@digi-protocol/client';  const client = new DiGiClient({   environment: production, });  const address = await client.handle.resolveAddress({ handle: 'digi/wagmi' });  console.log(`Address: `, address);``

`query {   handleToAddress(request: { handle: "digi/wagmi" }) # EvmAddress scalar string }`

Updated 3 months ago

* * *

*   [Table of Contents](#)
*   *   [Resolve Address](#resolve-address)
