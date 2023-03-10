  
Links:
- [Previous](04%20The%20work%20of%20your%20API.md)
- [Next](06%20Content%20negotiation%20and%20cachnig.md)

Tags: #notes/web #sci/pro/tech/nodejs #sci/pro/web/api #sci/pro/dev 

Date: [20230201](../../../../200%20Diary/205%20Day/20230201.md)
Time: 20:14:35
_____

Notes on the course Designing RESTful API's from EPAM-UpSkillMe-Node.js Course
Complete by Arkadii Semenov on 2023.01.21

API design patterns that are common in wild:

### Authentication and Authorization
Authentication (authn):
1. Establishing who you are.
2. Login with credentials.

Authorization (authz):
1. Establishing your permissions.
2. restricted access.

It can be implemented in different ways:
**API Keys**
Benefits:
- Easy to add to header / URL
- Framework and programming language agnostic -> easy to use
Drawbacks:
- URLs are not secret -> security breach
- Difficult to update/rotate if compromised

~~Writing your own protocol~~
Benefits: **None**
Drawbacks:
- Not useful tools
- Create your own system
- If it is compromised -> it is the end
- Large training costs

**OAuth** - Authorization protocol
- It defines only that you must authenticate with a trusted entity.
- It doesn't define how you are authenticating.
- Upon authentication, a token maps to an authorization description (the set of permissions).

Recommended - _OAuth 2.0_
Benefits:
- Reliable and well established
- Massive ecosystem
- Open-source and commercial options

Drawbacks:
- Complicated
- Initial implementation is time consuming

> Further reading
> LinkedIn Learning: "Web Security: OAuth and OpenID Connect"
> [REST API Security Essentials ](https://restfulapi.net/security-essentials/)

### API Versioning
The goal -> ease to use and comprehensibility.
We need to use versioning to support compatibility with the API even after updates.

There are two approaches to the Versioning:
1. Through Headers
   - Readable and simple URLs
   - The user needs to provide the `access` header for the API call
   - _More proper_
2. Through URLs
   - URL is less readable
   - All needed data can be just copy-parted via URL
   - _More clear and explicit_

All APIs in an organization should take the same versioning approach:
- Simplify training
- Increase predictability for users
- Maintain clarity

### Content and Media Types
What data is going in the payload and how should it be structured?
1. "JSON key:value pairs are fine" - difficult to extend and add detail about data
2. Media types
   - Shared data structures for JSON
   - Growing ecosystem
   - Supported by libraries

#### Popular Media Types

**Collection+JSON** -> designed by Mike Amundsen
- designed specifically to deal with groups or collections of resources
- It looks like:
   - Array of `"collection": {"items": [ {"[Data About items]" and "[Additional links about those items]" } ]}`

**Hypertext Application Language (HAL)** -> designed by Mike Kelly
- Separates the payload into two parts: `data` and `_links`
- Simple, but effective. Similar to choose your own
- Can be verbose.
- Having metadata in _links from data is odd; easy to lose context and not explore as appropriate.

**Ion Hypermedia Type** -> designed by Les Hazelwood
- Designed specifically for key data
- Metadata logically grouped and easier to process and apply
- Little use and few helper libraries, similar to HAL, additional links aren't separated from the data
- Easier to read and understand

**SIREN**
SIREN aims to represent generic entities along with actions for modifying those entities and links for client navigation.

**JSON-LD**
JSON-LD is great for augmenting existing APIs without introducing breaking changes. This augmentation mostly serves as a way to self document your API.

**JSON:API**
JSON:API provides a robust set of features for most APIs. In addition, it has arguably the broadest industry support.

Summary:
- If you want the broadest industry support, choose JSON:API.
- If you are augmenting existing API responses, choose JSON-LD.
- If you are keeping it simple, choose HAL.
- If you are looking for a full featured media type, choose Collection+JSON.

> Further reading:
> [on choosing a hypermedia type for your API - HAL, JSON-LD, Collection+JSON, SIREN, Oh My!](https://sookocheff.com/post/api/on-choosing-a-hypermedia-format/)

### Hyper media approaches
Information exists in various formats, so we can choose our way of the representation data.
Hypermedia - non-linear beginning, middle, and end.

Idea - API - only an entry point. The API would send the data with useful and available URL links for the specified API version.
Hypermedia is common in APIs such as companies GitHub, Octal, etc.