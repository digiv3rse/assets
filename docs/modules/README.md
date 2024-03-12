# Introduction to Modules
---

Learn to understand and work with modules!

Modules are an integral part of the Lens Protocol: they allow profile owners to include unique, custom functionality on follow, reference (i.e. mirrors, quotes and comments) and acting on a publication. This vastly opens the door to exciting new community-created features that greatly expand on the basic Lens Protocol social graph!

From a more technical perspective, modules are smart contracts that adhere to a specified interface which are called at defined execution steps. In other terms, modules present code akin to "hooks" that are run at predetermined points.

Not making a module? jump straight into knowing how to integrate custom modules into your app

## Understanding modules

### Follow Modules

Follow modules are called when a user attempts to follow a profile. Profile owners can set their follow module at profile creation and can change it at any time thereafter. Profile owners can also opt to have no follow module, allowing anyone to follow them without any restrictions or additional actions.

These modules allow for logic such as a "fee-on-follow" or even a "subscription" mechanism -- and frankly, basically anything else you can think up!

### Reference Modules

Reference modules are called when a profile attempts to reference a given profile's publication. These are set once at publication creation and are immutable! However, publications can opt to have no reference module, allowing any profile to comment, quote or mirror the publication.

Custom rule sets can be built for reference modules--for example, you may want to allow only specific Follower NFT ID holders to comment and follow. In addition, reference modules include separate functions for validating mirrors, quotes and comments, so the rules can be different for each! (With the limitation that the functions are called on the same contract.)

### Publication Action Modules (aka Open Actions)

Publication Actions modules (which are also known as Open Actions) are called when a user wants to act on a given publication. These are set once at publication creation and are immutable once the publication is live! Furthermore, publications can have many Open Actions attached to them.

There's a ton of stuff that can be built with publication action modules:

* collect

* donate or tip

* mint an NFT directly from the post promoting it

* buy user's shares

* stake

* vote on publication's poll

* join an on-chain raffle

* etc

Publication Actions give so much freedom, so the only limiting factor is your imagination!

Referral System

Every reference and action module can support an Advanced Referral System--meaning that when a user acts or references a publication, a referral publication or profile that let to its discovery can be passed by the user or a UI/App they are using.

Referral System automatically verifies if the passed referral publication is connected to a publication being acted on (is it in the same thread, or are they referring to each other, etc--more on that in the Referral System section)