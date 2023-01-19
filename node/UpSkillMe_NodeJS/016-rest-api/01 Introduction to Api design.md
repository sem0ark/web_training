Notes on the course Designing RESTful API's from EPAM-UpSkillMe-Node.js Course
Complete by Arkadii Semenov on 2023.01.19

## Introduction

You must understand your business processes to understand the future structure of the API.

Contents:

1. Definition of requirements
2. Nouns amd verbs our users would use
3. HTTP concepts and REST constraints
4. Common API patterns

## You need to understand

1. Your business model
2. HTTP is expressive and can tell a lot of info to our users

> Recommended tom install:
>
> 1. Live headers for mozilla/chrome
> 2. Postman

## API Design

API design is complex.
API must be deliberate.

We need to provide:

1. Functionality to expose
2. Best way to expose it
3. Test our assumptions + user testing
4. Repeat the cycle

Challenges in API design:

1. Clear naming and directions
2. Knowledge of the use cases
3. Adaptability
4. Versioning and backwards compatibility

> Affordance - something that allows you to perform an action
> ex: door knob or light switch

Potential risk - we need to balance three main things for the API:

1. _Ease_ -> What the API makes easy
2. _Functionality_ -> What API does
3. _User needs_ -> What the user wants to do

If they don't feet - you've got a 'garbage'.

## Approaches of adding API

- Bolt-on
  1. Created for already existing systems.
  2. Brute-force and The fastest way.
  3. _Benefit_ -> takes advantage of existing code and systems.
  4. _Drawbacks_ -> problems in the structure in the application leak through into the API.
- Greenfield
  1. For new systems, so you can do and create anything
  2. API and mobile-first mindset
  3. _Benefits_ -> takes advantage of new technologies and architectures. Can upgrade your team
  4. _Drawbacks_ -> often requires massive upfront investment before any benefits appear
- Facade _recommended_
  1. Use the existing system and adapt it piece by piece
  2. _Benefit_ -> ideal for legacy systems as the application is always functional. Example: a company has a big amount of _SOAP_ services and adapts to a new technologies by wrapping them with REST interfaces.
  3. _Drawback_ -> if you are not careful it would be a mess. It is hard to replicate behavior for a full one-on-one conversion.

## Modeling API tips -> key to a success

We need to make sure that capabilities/:

1. Don't worry about the tools. Choose a tool that works for your process
2. Have a consistent process. Any changes
3. Involve teams early to get any ideas and prone errors. Various perspectives would help -> reinforce strengths and find weaknesses.
4. It doesn't count unless it is written down. Document everything:
   _Assumptions, Decisions, Deferred tasks_.
   Document for shared understanding, you would be able to faster understand possible problems and tackle errors in the structure.

> Further reading
> https://restfulapi.net/what-is-an-api/
