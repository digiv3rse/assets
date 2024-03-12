# Module Metadata Standard

The Module Metadata Standard enables DiGi module authors to attach a bag of information to their modules that helps to:

* inform integrators about capabilities of their module

* provide guidance to consumers on how to integrate them

The TypeScript definition for the Module Metadata is available here and reported below for brevity below.

```typescript
type ModuleMetadata = {
  /**
   * The name of the module.
   */
  name: string;
  /**
   * The human-friendly title for the module.
   */
  title: string;
  /**
   * Markdown formatted description of the module.
   *
   * It should explain what this module does, how to use it, examples just
   * like you would if you were building an NPM package.
   * The more detail the better to allow dApp to easily integrate it.
   */
  description: Markdown;
  /**
   * List of authors email addresses.
   */
  authors: string[];
  /**
   * The Solidity JSON ABI as JSON-string describing the initialization function calldata.
   *
   * This will be used to encode the calldata for the initialization function.
   *
   * It will also be used by the consumers of this module to decode the initialization
   * calldata so to infer the initialization criteria.
   */
  initializeCalldataABI: string;
  /**
   * The Solidity JSON ABI as JSON-string describing the initialization result data.
   *
   * This will be used by the consumers of this module to decode
   * the result data from the initialization function so to infer the
   * initialization result state.
   */
  initializeResultDataABI?: string;
  /**
   * The Solidity JSON ABI as JSON-string describing the process function calldata.
   *
   * This will be used to encode the calldata for the process function.
   *
   * Some modules might non need to return any initialization result data.
   */
  processCalldataABI: string;
  /**
   * An arbitrary bag of attributes you wish to add to the metadata.
   */
  attributes: MetadataAttribute[];
  /**
   * The schema ID.
   */
  $schema: ModuleSchemaId.LATEST;
};
```
### Create Metadata

Like with the Publication and Profile metadata standards you can use the @digiv3rse/metadata package to create compliant metadata objects via the module function.

```typescript
import { module } from '@digiv3rse/metadata';

const metadata = module({
  name: 'My Open Action',
  title: 'This is my Open Action',
  description: 'Get ready for the future of social interaction!',
  authors: ['awesome-dev@digi.xyz'],
  initializeCalldataABI: JSON.stringify([
    {
      type: 'address',
      name: 'address',
    },
    {
      type: 'uint256',
      name: 'price',
    },
  ]),
  processCalldataABI: JSON.stringify([
    {
      type: 'address',
      name: 'collector',
    },
  ]),
});
```

This function contextually validate the metadata so it's ready to be uploaded as JSON to a public URI of your choice.

### Upload Metadata

This data should be uploaded to a URI pointer and the URI should be hardcoded or set in the contract, so when you register your module, the registry can read the metadataURI property from function getModuleMetadataURI() external view returns (string memory). We advise using Arweave, with Irys, for instant resolvability. There are the same principles as Publication and Profile metadata.

Once uploaded you need to use the Module Metadata URI to register your module.

### Update Metadata

If you updated the metadata (for example, you use a dynamic setter/getter approach in your module) - you need to trigger the metadata refresh in ModuleRegistry.

This is very simple and involves just triggering the ModuleRegistry.emitModuleMetadataRefresh(address moduleAddress) function, which is public, and anyone can trigger it.

Your module should be already registered to be able to call this function.

### JSON Schema

Finally you can also use JSON Schema to aid the process of creating compliant Module Metadata.

You can find the schema in the @digiv3rse/metadata package:

```typescript
import schema from '@digiv3rse/metadata/jsonschemas/module/1.0.0.json' assert { type: 'json' };
```
or under its Schema ID URI: [Open Action Metadata v1](https://json-schemas.digiv3rse.xyz)