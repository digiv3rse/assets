# Overview

The purpose of the DiGiV3rse protocol is to empower creators to own the links between themselves and their community, forming a fully composable, decentralized social graph. This is achieved by allowing users to create profiles and interact with each other via these profiles. "Profile" (as used here) refers specifically to DiGi profiles; "user" refers to standard crypto-wallets.

The protocol is built from the ground up with modularity in mind. DiGiV3rse protocol is currently overseen by a multisig, which will be expanded to a broader DAO, which can develop and vote on new modules and expanded functionality.

### Architecture

Let's first dig into profile creation and publishing. Users must create a profile on the hub, for which they will receive a sequentially ID'd profile NFT. This NFT controls the profile, and thus, its owner becomes the de facto controller of the given profile.

Profile owners can:

1. Publish to the profile. Publication types are:

  * Post: A standard piece of content.

  * Comment: A standard piece of content with a pointer to another publication.

    * Since comments include a pointer, this executes the pointed publication's "reference module" logic, if any.

  * Quote: Very similar to Comment, also with a pointer to another publication, but usually shown as a separate publication on a timeline

  * Mirror: The equivalent of a "share" in a traditional sense, having no content but a pointer to another publication.

    * Since mirrors only include a pointer, this executes the pointed publication's "reference module" logic, if any.

2. Set the profile's "follow module":

  * This logic contract determines the logic that must be executed when a wallet attempts to follow the given profile; for example, some followers may incur a fee to the profile owner via the fee follow module contract.

3. Set the profile's metadata URI

4. Set the profile's "Delegated Executors" (aka Profile Managers):

  * This is an address that can act on behalf of a profile's owner; it can:

    * Publish to the given profile.

    * Follow
   
    * Act

    * Set the given profile's metadata URI.

5. Follow other profiles:

  * This executes the profile's "follow module" logic, if any.
 
  * This creates a "follow NFT" unique to that profile and sequentially ID'd and is tied to the following profile.

  * Follow NFTs can be wrapped into a regular ERC721

  * And unwrapped again to be tied to the profile

6. Act on publications:

  * This executes any logic in the publication's "Action module."

### Tokenization

The DiGiV3rse protocol has three layers of tokenization via ERC721 NFTs. All three are ERC721-compliant and fully composable.

The **DiGiHub** upgradeable contract is the core entry point for the majority of interactions in the DiGiV3rse protocol. Nearly all interactions begin and doubles as the ERC721 NFT contract for profile NFTs, which are minted upon profile creation.

Upon a profile's first follow, a **FollowNFT** contract is deployed (via minimal proxy cloning), unique to the profile; this is the ERC721 NFT contract that represents follower positions.

Users can also mint Handles NFTs and link them to their profiles (and unlink at any time to be linked to another profile).

### Modularity

Modularity is at the core of the DiGiV3rse protocol. Everything is built with community expansion and the continued development of new, innovative features in mind.

Modules are standalone, governance-whitelisted contracts that adhere to a specific interface. They hold state and are unlimited in potential scope beyond adhering to the interface.

There are three types of modules:

1. Follow modules:

   1. These modules are tied to a profile and contain logic to be executed upon a user attempting to follow the given profile.

2. Action modules:
  
   1. These modules are tied to specific publications (except mirrors, which cannot be acted on) and contain logic to be executed upon a user attempting to act on the given publication.

3. Reference modules:
  
   1. These modules are tied to specific publications and contain logic to be executed upon a user attempting to comment or mirror the given publication.
 
   2. Note that the original content and its reference module are used in the case where a mirror attempts to point to a mirror.

### Closing Notes

The DiGiV3rse protocol is a composable social graph protocol built to be community-owned and ever-evolving. It empowers its users by allowing them to decide how they want their social graph to be built and how they want it to be monetized, if at all.

Furthermore, the protocol is engineered with the concept of modularity at its core, allowing for an infinitely expanding amount of use cases. This, from the user's perspective, translates to a new paradigm of ownership and customization that isn't possible (or financially feasible) in Web2.
