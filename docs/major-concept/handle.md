# Handle
======

[Suggest Edits](/edit/handle)

Handle is a new concept which was introduced in Lens v2.

Think about Handle as a name on a social network: like @alice, @bob or @vitalik.

Handles can exist and can be minted separately from profiles, and then can be linked and unlinked from one profile to another.

Handles exist in their own namespaces, and currently the only namespace is `lens`, so all currently available handles are technically under `lens/alice`.

The Handle part that follows the namespace is usually referred to as "local-name".

Resolve Address

[](#resolve-address)
---------------------------------------

Given an Lens Handle you can use it to resolve the owner address like in the examples below.

React SDKLensClientAPI

``// you can also find the same hook in @lens-protocol/react-native for RN integrations import { useResolveAddress } from '@lens-protocol/react-web';  // then in your component const { execute, loading } = useResolveAddress();  const resolve = async () => {   const result = await execute({ handle: 'lens/wagmi' });    if (result.isFailure()) {     console.error(result.error.message);     return;   }     console.log(`Resolved address: ${String(result.value)}`); };``

``import { LensClient, production } from '@lens-protocol/client';  const client = new LensClient({   environment: production, });  const address = await client.handle.resolveAddress({ handle: 'lens/wagmi' });  console.log(`Address: `, address);``

`query {   handleToAddress(request: { handle: "lens/wagmi" }) # EvmAddress scalar string }`

Updated 3 months ago

* * *

*   [Table of Contents](#)
*   *   [Resolve Address](#resolve-address)
