  
Links:
- [Previous](01%20Introduction%20to%20API%20design.md)
- [Next](03%20Creating%20the%20API.md)

Tags: #notes/web #sci/pro/tech/nodejs #sci/pro/web/api #sci/pro/dev 

Date: [20230119](../../../../200%20Diary/205%20Day/20230119.md)
Time: 22:42:05
_____

Notes on the course Designing RESTful API's from EPAM-UpSkillMe-Node.js Course
Complete by Arkadii Semenov on 2023.01.19

We need the clear understanding of our business processes and only then model an API:

1. Identify participants
2. Identify activities
3. Break into steps
4. Create API definitions
5. Validate API

## Identifying the participants

Participants - entities who will use the API. Not all of our participants are human.
So, who is involved, give them a name:

1. Who takes an action.
2. Who receives an action as a result.

_Participant info_:

1. Who are they -> name and role
2. Internal and external?
3. Active (taking an action) or Passive (waiting for action)?

Example - ordering a coffee:

1. Cashier
2. Customer
3. Barista

> **Determine the boundaries for a modeling process early.**
> So you wouldn't crash into an abyss of modeling everything.

## Identifying activities and breaking them into steps

The activities should describe:

1. The interactions between participants.
2. It shouldn't be tied to a specific perspective of one of the participants.
3. It shouldn't be too abstract.
4. It should also show the dependencies of every actions.

Example - ordering a coffee:

- Version 1 -> too abstract and considers only the customer's actions
  1. Order
  2. Wait
  3. Enjoy
- Version 2 -> Participants and interactions are defined also the dependencies.
  1. The customer creates an order with the cashier.
  2. The cashier passes the order to the barista.
  3. The barista acknowledges the order and adds to the queue.
  4. The cashier tells the customer the total bill.
  5. The customer provides the payment, which is accepted/rejected.
  6. The barista makes the orders and delivers it to the customer.

Example:

1. Define boundaries
   - -> Good: we can define the clear structure
   - -> Bad : it can be not what the user wanted
2. Check assumptions and document them: ask the future users or product managers.
3. What are our participants?
   1. Customer
   2. Stock clerk
   3. Customer support
   4. ~~Developer~~ -> is not in contact with the client
   5. ~~System admin~~ -> is not in contact with the client
4. Activities
   1. The _customer_ searches for the book.
   2. The customer adds the book to the cart.
   3. The customer adds or removes more things.
   4. The customer checks out.
   5. The stock clerk retrieves and ships the book.
   6. Customer support contacts the customer about the book.


We should flag all branches and assumptions we are making.
Instead of guessing, ask the product owner.