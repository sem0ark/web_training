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
| Code Snippets    | varies    | V          | Varies |
| Page histories   | V         | V          | V      |
| Easy to maintain | V         | V          | V      |
| Search friendly  | V         | Varies     | Varies |
| ---------------- | --------- | ---------- | ------ |

