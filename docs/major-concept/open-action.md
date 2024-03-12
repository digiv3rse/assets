# Open Actions
---

Open Actions (aka Publication Actions) provide a way for developers to build custom operations that can be executed on or through publications.

### When is it worth to build a publication action?

Anytime you want to link the provenance of that action to a publication, potentially distributing rewards to the users that contributed to the action to occur. Let’s use the tipping example to illustrate this better.

Imagine @alice has done a great post and @bob wants to tip her because of it.

Someone can say that there is no need for building any custom action for this, as tipping can be done by simply executing an ERC-20 token transfer from the owner of @bob profile to the owner of @alice profile.

This is technically true - However, let’s see all the use cases that making this through a tipping publication action can bring to the table:

* Publication actions are executed by DiGi profiles. Thus, @alice can see that @bob has tipped her, instead of receiving a tip from an unknown address.

* Using a tipping publication action allows indexers to link the ERC-20 transfer to the publication where the action was executed. This allows @alice to track how much tipping revenue each of her publications has done or, combining it with the previous item, she can track which profiles are her top tippers, and many other useful stats.

* Publication actions can allow rewards through a referral system. For example, @alice can setup the tipping action to recompense users that interact or share her publications by giving them a percentage of the tip if they helped it to happen.

* So, if @carl quotes @alice's publication, and @bob ends up discovering @alice's publication because of @carl's quote, then when @bob tips @alice, @carl receives a part of it as commission. This not only applies to quotes, but to mirrors and comments too. 

Here are other examples of publication actions that can be developed. In all of them, the referral system can be applied.

* Collecting the publication.

* Minting an NFT from a public collection through a publication that announces or recommends it.

* Buying an NFT from a publication that is communicating that it is on sale.

* Voting on a publication’s poll.

* Join a publication’s on-chain raffle.
