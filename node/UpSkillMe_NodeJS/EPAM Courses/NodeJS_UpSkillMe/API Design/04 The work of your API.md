
Links:
- [Previous](03%20Creating%20the%20API.md)
- [Next](05%20Common%20Design%20Challenges%20and%20Patterns.md)
- Further reading
	- [Idempotent REST APIs](https://restfulapi.net/idempotent-rest-apis/)
	- [Statelessness in REST APIs](https://restfulapi.net/statelessness/)
	- [REST Architectural Constraints](https://restfulapi.net/rest-architectural-constraints/)

Tags: #notes/web #sci/pro/tech/nodejs #sci/pro/web/api #sci/pro/dev  

Date: [20230201](../../../../200%20Diary/205%20Day/20230201.md)
Time: 20:13:20
____

Notes on the course Designing RESTful API's from EPAM-UpSkillMe-Node.js Course
Complete by Arkadii Semenov on 2023.01.20

#### REST and HTML
HTTP makes the web work!
HTTP - protocol. XML - markup language. JSON - notation.

XML standards can add structure to HTTP.
JSON specifications can add context to HTTP.

REST -> is not a protocol/markup language/notation.
REST -> set of principles / constraints.

Example comparison:
1. SOAP
   - a fixed process
   - lots of documents up front
   - detailed scenarios
   - complex error handling
2. REST
   - few requirements
   - documentation is discovered as you go
   - Flexible, based on needs
   - FLexible, based on patterns

HTTP -> well understood protocol.
HTTP Request and Response has two parts:
1. Header
2. Payload
   - HTML
   - JSON
   - XML

## HTTP response Codes and Headers
To access to the information:
1. Chrome / Firefox -> live headers extension
2. Or use `curl -I URL\HERE` to see the list of headers, example `curl -I https://api.github.com`

#### HTTP Response Codes
- 100 - 199 -> Informational, rare
- 200 - 299 -> the request was successful
   - 200 OK -> the request was successful
   - 201 Created -> resource was created
   - 202 Accepted -> action has started, but isn't completed
   - 204 No content -> delete a resource
   - Others are more specific
- 300 - 399 -> resource moved from its original URL
   - 301 -> Moved Permanently
   - 302 -> Moved Temporarily
- 400 - 499 -> Error
   - 400 -> Bad request, general error made by a client
   - 401 -> Authentication is required
   - 403 -> Forbidden -> user was authenticated, but s/he isn't allowed to access or do something
   - 404 -> Not Found -> resource wasn't fount
- 500 - 599 -> Server error
   - it is completely

>[!danger] Don't create your own error codes, so you could be understood anywhere.

#### HTTP Headers
- Content-Type -> It defines the type of payload, but not how it is structured
   - For standard sites -> `text/html`
   - For API's -> `application/json` or `text/xml`
- 'something'-Media-Type -> specifically named and structured payloads that allowed to be customized by the clients
- some custom headers to tell additional info to the user

#### REST API constraints
You don't have to use them, but then your API would be more unreadable and incomprehensible.


**1. Client-server architecture**:
It allows us to change implementation details.

**2. Stateless architecture**
Process each and every request is on its own in isolation from other data.

It gives us:
- Stability - one error wouldn't ruin the whole server
- Scalability - we can add more servers without thinking about the order of requests
- Reliability - the process is fault tolerant
- Flexibility

**3. Cashable**
Improves the network performance.

We can save some results for later just sending the data without recomputing everything:
- Idempotent/Safe -> commands that don't change the state of resources on the server
   - GET / PUT / DELETE
   - _Cashable_
- POST -> changes the state, so often not cashable


**4. Layered systems**

The client shouldn't be built with an assumption that it's communicating directly to the server.

The web has a series of layers working together to pass traffic.

Counting on direct connections/interactions adds hidden dependencies
EX: if IP address of a DB si coded into an application the application will fail if the IP address of the server changes. 

Leverage the layers:
   - DNS Lookups
   - Load balancers
   - Caching servers
   - Logging
   - Audit trails
   - Authentication
   - Authorization

Layers provide flexibility.

**5. Code on demand** - optional, but useful
When a client requests a resource, it also receives the code to act upon it.
Allows:
- Flexibility
- Upgradability
- Extensibility

The client only have to know about how to execute the code.
Every website using JS, so it should be able to execute the code.

**6. Uniform interfaces**
1. Identification of resources
   -> each resource should be uniquely addressable better through only one URL.
2. Manipulation of resources through these representations
   -> we should use only URL we've already gave to the user to acces and change the data. _ID is a part of the URL_.
3. Self-descriptive messages
   -> messages are standalone
   -> message are easily cashable
4. (_HATEOAS_) Hypermedia as the engine of application state
   -> Hyper media is like Choose your own adventure book.
   -> At every point in an API, all links are accessible

Example: calling `https://api.github.com` provides a help with the list of all available URLs for the API.

Request URLs from API based on the name, and the applications of the users can adapt to the new features of the API on the fly.

