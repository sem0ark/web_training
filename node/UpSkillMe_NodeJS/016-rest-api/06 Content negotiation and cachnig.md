Notes on the course Designing RESTful API's from EPAM-UpSkillMe-Node.js Course
Complete by Arkadii Semenov on 2023.01.21

## Content Negotiation, Caching, Documentation, and SDK Design


We can use Headers for:
1. Status Codes
2. Versioning
3. Content negotiation
4. Caching

**Content negotiation** - Mechanisms which allow multiple versions of a document to exist at a single URL, so the client-server can determine which version to use. It happens all the time.

Example:
Clerk: Hello! (Means to continue talk in English) Bonjour! (in French)
Client: Hello! (Chose English)
Clerk: How may I help you?

Client: "Here are the formats I understand"
Server: "I can support _this_ one. Let's continue."

**Caching** - A way of storing and retrieving data so that future requests can retrieve it faster, without duplicating an operation (calculation or network request). IT is implemented with teh use of _ETags_.

Example:
1. Client makes a request
2. The server responds and created an ETag based on the resource state. (often a hash of the response).
3. The client makes a HEAD request (same request as before).
4. If the data is unchanged the server returns the same ETag -> complete.
5. If the data has changed the server returns a new ETag.
6. If the ETag is changed the client makes the full request.

It is even more important for building apps with unstable internet connection.

> Further reading
> [Caching](https://restfulapi.net/caching/)
> [Content negotiation](https://restfulapi.net/content-negotiation/)

### Documentation approaches
 Bad idea:
 - Don't distribute a PDF -> you would shuffle around different versions.
 - Don't use WordPress or other basic CMS -> if the API changes, users wouldn't understand the changes.

What are the goals for the documentation:
1. We need snippet-friendly code. -> syntax highlighting gis important!
2. We need page history, specifically user facing to show the changes.
3. We need something that is easy to update.
4. Searchable -> is we can't find it, it doesn't exist. Should be able to search via Google and inner searching.

| Goals            | MediaWiki | Confluence | Others |
| ---------------- | --------- | ---------- | ------ |
| Code Snippets    | plugins   | V          | varies |
| Page histories   | V         | V          | V      |
| Easy to maintain | V         | V          | V      |
| Search friendly  | V         | varies     | varies |

_The Big drawback of wikis:_
It is either updated or not -> there's no workflow/staging space in most systems.

Documentation via _Static Site_ (ex: Jekyll)
1. leverages generations
2. Easy to configure
3. No version control built in; leverages GIT version control
4. Easy to maintain
5. Search engine friendly.
6. _But you are working in raw text/markup, which may be a challenge for your team._

**Slate** - based on Jekyll
- Five minutes to configure and deploy;
- Preconfigured with various code samples in mind;
- Language-specific samples are directly linkable;
- Consistent look and feel and navigation throughout the site.

__Main Goal__  -> Users need to find answers quickly with clear, accurate descriptions.

### SDK design considerations
> If you've used HTTP properly and established JSON media type, a simple HTTP and JSON parser should be enough.

In reality APIs are usually more complex.

Build a great SDK experience:
- **S**uccinct: concise btu precise
- **P**urposeful: apply teh same care as you would to the API
- **O**pen Source: encourage wrappers, 
- **I**diomatic: use the patterns and conventions of the language you are using
- **L**ogical: be consistent and repeat common pattern

The goal of an SDK is to make user's life easier.
Choose wisely -> Before you build libraries for any language, ask your users which ones matter and which ones they need.

### Next Steps
1. Join local API groups, like [AustinAPI.com](https://AustinAPI.com)
2. Read anything, written by Mike Amundsen. [his website](http://amundsen.com/blog)
3. Read practical approach to API design
4. [LinkedIn blog](https://link.in/gXN8xacy) or @APiNewsletter on Twitter.
