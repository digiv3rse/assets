# Publication
---

![publication](/docs/assets/publication.svg "Publication Cover Photo")

Publications are the lifeblood of the DiGi Protocol. They are all of the original content, comments, quotes and mirrors produced by creators, curators, and users alike. Publications come in four primary types: posts, comments, quotes and mirrors. Posts are the base object, with mirror, quote and comment providing additional functionality. To learn more about [Mirrors](/docs/mirror), Quotes and [Comments](/docs/comment) please go to their respective documentation pages.

Publications are posted directly to a user's [ProfileNFTs](/docs/profile); this ensures that all content created by a user remains user-owned and in their wallet. Publications are **NOT** NFT's.

Publications have a ContentURI which points to the specific content the publication contains, this can point to text, an image, a video, or other arbitrary content stored on either a decentralized protocol such as [IPFS](https://ipfs.io/) or [Arweave](https://www.arweave.org/), or a centralized storage provider like AWS S3.

Publications also have two attached modules: a Publication Action Module, and a Reference Module. The Publication Action Module contains the logic that allows other users to act on your publication. The Reference Module controls references to the publication itself. It contains the logic that determines who can quote, [comment](/docs/comment) and [mirror](/docs/mirror) the publication.
