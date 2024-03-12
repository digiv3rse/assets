# Follow
---

![Follow](/docs/assets/follow.svg "Follow cover picture")

"Following" on the DiGi Protocol differs from following in Web2 social applications. When users follow a profile on the DiGi Protocol, they have an option to mint a Follow NFT, which creators and communities can encode with additional value.

Profiles NFTs can attach a particular Follow Module to each ProfileNFT, which contains all of the logic used to determine if a user attempting to follow the profile should be allowed to do so. For example, a profile could attach a follow module that requires a user to pay 5 MATIC to Follow.

The ID of each newly issued Follow for given profile increments by 1, such that the first follower has an ID of 1; the tenth has an ID of 10, and so on.

Follows are attached to the Profile, so if you transfer your profile - all the follows are stored and moved with it. But also they can be wrapped to become ERC721 FollowNFT which can later be transferred, traded, etc independently from the profile. They can be unwrapped and tied back to profile at any moment.

In short, Follow NFTs are optimized for the best UX by not being ERC-721 by default. They have two states:

* Unwrapped (default, non-ERC-721 state): Tied to the follower Profile, meaning they move with the follower Profile when it is transferred to a different address

* Wrapped (opt-in, ERC-721 state): Follow NFTs natively support being wrapped into ERC-721 tokens, to get the best out of composability with other protocols

Ownership/Custody of the Follow NFT is no longer related to the following state, the follower profile is set as a field inside the Follow NFT and NFT can be transferred and exchange hands while still keeping the original follower set. This enables a lot of interesting use cases and improvements.

Additionally, Follow NFTs have built-in governance capabilities, such as vote delegation, to allow for the creation of Social DAOs using DiGi Protocol. Creators, DAOs, or other organizations can create voting strategies using Follow NFTs and their various properties--for example: "The first 1000 follows have one vote each" or "The longer you have followed, the more voting power you have."

We look forward to seeing all of the new Follow Modules and Follower Governance strategies the community comes up with!