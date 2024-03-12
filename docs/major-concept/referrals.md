# Referrals
---

In DiGi V2 we introduced a complex Referral System, which supports verified and non-verified referrals for any module action that is performed on a publication (Reference Modules, Action Modules). Referral system allows to reward users that helped to discover a publication, and also to reward original posters for any activity that happens below, and reward the applications and UIs that are used to interact with DiGi Protocol and help the discovery of content.

### DiGi V2 Referral System supports:

* Passing multiple referrals.

* Passing any publication as a referral as long as it originates from the same post (any from a multi-branch tree of comments/quotes/mirrors of a single post).

* Upwards and downwards referrals (a post can be a referral for it’s comment/quote, and vice-versa), allowing to award original posters for any activity that happens below.

* Non-verified referrals: you can pass a profile as a referral (good for mentions, or front-ends, anything that allowed a person to discover something).

### Referral System Rules

As we upgrade from DiGi V1 to DiGi V2, we need to take into account that not all publications would support the new Referral system (DiGi V1 publications are supported only partly):

* Rule #1 - About Pure-V2 Trees: all the new complex interactions and referrers that were introduced in V2 work as expected.

  * Mirrors cannot be a target, but any other publication (post, comment, quote) can.
   
  * The same publication cannot be simultaneously a target and a referrer. Basically, a publication cannot be referrer of itself.

  * Any publication can be referrer of another publication if exists a path (conformed by quotes, comments and/or mirrors) from each of them to the same root post.

  * The path can go upwards and downwards (later comments can be referrer of the earlier ones, and vice versa).

* Rule #2 - About Non-Pure Trees: referrers only work for “direct/pointed” publications:

  * Only 1 level of depth between target and referrer is allowed (as root publication is not forwarded on non-pure v2 trees).
   
  * Only downwards publication can be a referral (e.g. in a post←comment situation, only the comment can refer a post, but not the other way around).

  * V2 pubs support referrals for act and reference modules. Basically, referrals are supported when acting, mirroring, quoting and commenting.
  
  * V1 publications did not support referrals in the reference modules, so any comment/mirror interaction on a V1 pub should not support a referral.

  * During Legacy Collect of V1 publications only a single mirror (either V1 or V2 mirror) directly pointing to the target is supported as a referrer.

* Rule #3 - Non-Verified Referrals (profile referrals): should work in all V1 and V2 publications that support referrals

### Why there is a difference between Pure and Non-Pure trees?

In V2 we introduced a “ROOT” - which is a post, and all the comments/quotes have this root copied recursively. So all the publication tree can always refer and check if two publications belong to the same ROOT - originating from the same post.

But in V1 we didn’t have a concept of a “ROOT”, so the existing V1 trees don’t have it.