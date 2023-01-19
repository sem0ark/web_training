Notes on the course Designing RESTful API's from EPAM-UpSkillMe-Node.js Course
Complete by Arkadii Semenov on 2023.01.19

Updated set of actions from the previous example:

1. View items.
2. Add items to the cart.
3. Place order.

## Creating API definitions

API resources -> anything users interact with / _nouns_.
Identifying the resources -> _just circle the nouns_.

Now we should create a list of actions we can do with our nouns:
From the CRUD model (Create, Read, Update, Delete):

1. Items
   - view items
   - edit items
   - add items
   - list items
   - search for items
2. Cart
   - List items
   - view items
   - add item to cart
   - view cart
3. Order
   - check out
   - list orders
   - view orders
   - cancel orders
4. _Maybe Customer_

But, how would we checkout the order?
It looks like we need to create an _account system_. We should:

- ask the product manager
- make an assumption
- document it

## Mapping actions to nouns

From the example we can see that we can use the CRUD scheme for our HTTP requests:

_Verbs_ _CRUD -> HTTP_:

- Create -> POST -> used
  - to create a new resource
  - to change the status/state of a resource
  - for anything else that doesn't fit into other verbs
- Read -> GET -> used to retrieve the data
- Update -> PUT -> updates an existing resource
- Delete -> DELETE -> delete the data

> Difference between PUT and POST
> https://restfulapi.net/rest-put-vs-post/

Do we need a customer resource? -> go to the product owner and ask about changes.

> Unknowns are OK.
> **BUT** Don't make assumptions when you have the opportunity to ask the product owner or customer. It could become a hard requirement, which the customer haven't asked at all.

1. Item
   - List items -> GET items
   - VIew item -> GET item
2. Cart
   - Create cart -> POST cart
   - Add item to cart -> PUT cart
   - Check out cart to order -> POST cart
3. Order
   - Create order -> complete before checkout
   - View order -> GET order
   - Cancel order -> POST order (it is cancel (change of status), not delete/erase order)
4. Customer resource
   - Customer registration => _Not in this story - note it_
   - view customer -> GET customer

#### API relationships

1. Independent -> can exist on its own without any other resources
2. Dependent -> con only exist if another resource already exists
3. Associative -> can be in/dependent, but need additional information to describe it

Example, movie:

1. Independent: movies and actors
2. Dependent: character in movies
3. Associative:
   one actor plays multiple characters
   one character is played by multiple actors

Book ordering:

- Items - independent
- Cart must have items (dependent)
- Orders com from carts (dependent)
- Orders must have customers (dependent)

> Even if it looks like your DB schema, don't just reveal it.
> The DB and the API have different goals, so the activities can be different.

## Validating API
We now should validate the API to check if we are missing something or not.

#### Approach 1: Cards
1. Get the list of use-cases.
2. For every use-case:
   - if we can rearrange the cards of activities we've written before to get the desired result -> OK
   - if there is a problem -> we should check the structure again.

#### Approach 2: Coding
1. Step through API calls.
2. Write code as if am API exists.
3. Looks for gaps and potential issues.

#### Approach 3: Colleagues
Do Approach 1/2 with your colleague or two.

#### Approach 4: Use a micro-framework
1. Use hapi.js (Node), Sinatra (Ruby), Slim/Silex (PHP)
2. Accept incoming requests
3. Validate verbs and URL patterns
4. Return static HTTP response code and payloads

#### Approach 5: Write a documentation as if API existed
1. List the end points -> describe what they do
2. List the parameters -> describe what they mean
3. List the response codes -> describe when you get each
4. Show the response payloads -> define the fields

Goal: Quickly create a simple, imperfect document in a shareable format.
Use just a Google Doc.

**Risks**:
1. Team may try to _perfect_ the documentation -> the document should be quick, not perfect.
2. Documentation mey lead to some _false_ assumptions:
   - Be clear with stakeholders that this documentation is for evaluation and validation purposes.

**Reward**:
1. Documentation is almost done.
2. Regular updates will yield robust production documentation.

> API Modeling and Design Process
> http://work.haufegroup.io/api-style-guide/api-design-process/api-design-process.html

