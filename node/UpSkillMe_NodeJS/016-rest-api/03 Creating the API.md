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
