  
Links:
- [BoP Modern Software Development Process Models](../Software%20Engineering/BoP%20Modern%20Software%20Development%20Process%20Models.md)
- [SE101 L03 Models of software development in the conditions of constant changes](../../00%20Uni/Semester%201/SE101%20Intro%20to%20Software%20Engineering/SE101%20L03%20Models%20of%20software%20development%20in%20the%20conditions%20of%20constant%20changes.md)
- [SE101 L05 Agile development](../../00%20Uni/Semester%201/SE101%20Intro%20to%20Software%20Engineering/SE101%20L05%20Agile%20development.md)
- [Previous](EPAM%20BA%2002%20Application%20Creation%20Process.md)

Tags: #notes/web #hobby/writing #sci/pro/BA #sci/pro/dev #sci/pro/practices

Date: [20230202](../../../200%20Diary/205%20Day/20230202.md)
Time: 15:53:40
_____

**The Software Development Life Cycle** (SDLC) is a commonly used concept that represents a structured flow of software development and explains the main activities that take place in this flow.

Obviously, the SDLC provides clarity into how software products can be effectively built with the highest level of quality.

![Pasted image 20221105150234](../../../300%20Utils/305%20Attachments/Pasted%20image%2020221105150234.png)

>[!info]- Requirement Definition
> 1. BA collects the input from stakeholders trying to understand their 'true' needs and what goals they are trying to pursue.
> 2. The objectives of the initiative are defined, and a BA  ensures that everyone involved has a shared understanding of those objectives.

>[!info]- Analysis
> 1. BA elaborates on the *high-level requirements received in the previous phase*.
> 2. The team determines the cost and resources required for implementing the identified requirements.
> 3. The risks associated with the initiative are analyzed to work out the mitigation plan if needed.

>[!info]- Design
> 1. Solution architecture is designed and described in a document.
> 2. Creating prototypes of the envisioned solution.
> 
> Prototyping -> useful for getting early feedback and eliminating risks associated with future development.

>[!info]- Coding
> 1. Fancy prototypes ---- go into --> a working solution. 
> 2. See how the parts of the application come together to form usable software.

>[!info]- Quality Assurance
> 1. The product is tested to confirm its quality and value for end users.
> 2. Any issues found should be fixed until the software meets the expected quality guidelines.

>[!info]- Deployment
> 1. The software is deployed to the production environment so that end users can start using it.

>[!info]- Maintenance
> 1. The existing product might be enhanced with new features, or any errors detected by real customers will be fixed as a part of this phase.
> 2. Active development is not expected;
> 3. The product should constantly evolve to support fast-changing business needs.

Nowadays, all SDLC models fall into one of the existing categories:
- Traditional,
- Agile.

The selected SDLC model impacts the business analysis activities and deliverables produced by a Business Analyst.

#### Waterfall Model
![Pasted image 20221105150444](../../../300%20Utils/305%20Attachments/Pasted%20image%2020221105150444.png)

The use of Waterfall in modern IT is rare; however, the model is applicable to small projects if:
- the requirements are known, understood, and well documented
- there are no conflicting requirements
- there is no problem with the availability of Developers with the required qualification level
- the product to be developed deals with the high-risk area (medical care, military industry, aircraft industry, etc.)

1. *Pros*
	- The Waterfall model is easy to use while managing a project.
	- Due to its rigidity, development is fast, cost and timeframe are predetermined.
2. *Cons*
	- The product is not accessible until the very end.
	- The model is not flexible to accommodate changes.
	- It is difficult to elicit all the requirements upfront and discover the ways of their possible implementation.
	- Requires to write a lot of technical documentation.
	- Problems in the system can only be discovered late in the process due to a strict sequence of phases.

There are other examples of traditional methodologies: Rational Unified Process (RUP) and V-Model.

They have been partially modified to solve some of the disadvantages listed above; however, their use remains limited.

#### Agile
**Agile** -> change-driven and focused on the rapid delivery of the business value.
- Accepts uncertainty and risk related to the overall solution delivery.
- Usually associated with iterative development, early feedback, and adaptability to changes.

From the BA's perspective:
- BA collects requirements in iterations, so s/he is engaged in the development process throughout the project life cycle.
- Agile does *not require to write formal detailed* documentation.
- BA is expected to write user stories and acceptance criteria with enough details, leaving enough room for conversations between a team and a Product Owner.

> Nowadays, Agile is widely used across the IT industry, as it is more adaptable to changes. In the fast-changing environment, this is the ultimate necessity to be able to adapt quickly.

![EPAM BA The Software Development Life Cycle, Scrum in Action-1675351094329](../../../300%20Utils/305%20Attachments/EPAM%20BA%20The%20Software%20Development%20Life%20Cycle,%20Scrum%20in%20Action-1675351094329.jpeg)

#### Agile Mindset
1. *Positive attitude towards work* -> Any challenges that they may face along the way should be transformed into opportunities.
2. *Collective ownership* -> Agile team members are collectively responsible for the product they are producing and for the success of this product. That is why, blaming, unhealthy competition, etc. are not acceptable.
3. *Team Work* -> Set primary focus on team success versus individual success. Team members should help and train each other.
4. *Common Goal* -> focus on short-term and long-term goals that derive from the product vision and align with the organization's strategy.
5. *Customer Focus* -> Agile can be characterized as a customer-centric approach; that is why it is associated with flexibility when it comes to changes and early customer feedback.
6. *Empowered Teams* -> Agile team members should be able to make decisions in their area of responsibility.
7. *Quality Consciousness* -> be keen on improving the quality of the product. This is done through refactoring, code reviews, and different types of testing. Remember *customer pays not only for the developed functionality but also for the provided quality*.
8. *Continuous Learning* -> Always learn and self-develop. It helps to be on track with new technologies and succeed in new challenges.
9. *Failure Acceptance* -> be ready to accept failures and learn from that experience.

The main document that describes the Agile values and principles is the [Agile Manifesto](https://agilemanifesto.org/).

#### Agile Manifesto Values
>[!tip]- *Individuals and Interactions over Processes and Tools*
> People build the software systems, and to succeed in that, they need to work together effectively. 
> 
> The Agile Manifesto encourages communication between teams instead of relying on procedures to manage the way forward.

>[!tip]- *Working Software over Comprehensive Documentation*
> Working software brings more business value than documents and slide decks that describe a future system.
> Agile offers to start creating software rather than spend months creating extensive documentation.
> *Requirements should be documented well enough to start the development.*

>[!tip]- *Customer Collaboration over Contract Negotiation*
> Only customers can tell you what they want.
> Of course, they are:
> - probably not skilled to exactly specify the system.
> - likely to change their minds somewhere in the midway.
> 
> Working together with customers is hard but the benefit it usually brings can be hardly overestimated.
> 
> In Agile, the development should be human-centered -> 
> > *only communication with customers can uncover the real need of building the software.*

>[!tip]- *Responding to Change over Following a Plan*
> The priorities in the feature development might change overtime, even the whole concept of the product can change. 
> 
> This might be triggered by:
> - market trends,
> - competitors’ achievements,
> - changes in the organization priorities.
> 
> Any change is the reality of software development.
> There is nothing wrong with having a project plan.
> However, *there must be room for changes*; otherwise, the initial plan quickly becomes irrelevant.

![BoP Modern Software Development Process Models-1670267968151](../../../300%20Utils/305%20Attachments/BoP%20Modern%20Software%20Development%20Process%20Models-1670267968151.jpeg)

There are a lot of different Agile frameworks that implement the values and principles described in the Agile Manifesto.

The examples of such frameworks are:
- Scrum,
- Kanban,
- Extreme Programming (XP),
- Lean, etc.

These frameworks describe roles, events, and artifacts that the software development process should have in order to benefit from adopting Agile.

#### Scrum Overview
Typically, the Scrum framework presupposes that the development team delivers working product pieces (called **product increments**) in order of priority and value set by the customer.

![Pasted image 20221105163310](../../../300%20Utils/305%20Attachments/Pasted%20image%2020221105163310.png)

Scrum is *divided into time-boxed iterations*, called **sprints**. During a sprint, a team implements all phases for a specific set of requirements.

A team *frequently delivers a working product increment*, and a customer can try it and share his/er feedback, based on which the priorities for the next sprint might get changed.

Scrum can be characterized by the following statements:
- **Iterative development**: each iteration usually takes several weeks and provides a full working version of the software.
- There is **continuous communication and collaboration** between the teams involved in the development process, including a client or stakeholders.
- Early customer **feedback** is a part of this framework.

![EPAM BA The Software Development Life Cycle, Scrum in Action-1675353819462](../../../300%20Utils/305%20Attachments/EPAM%20BA%20The%20Software%20Development%20Life%20Cycle,%20Scrum%20in%20Action-1675353819462.jpeg)

#### Scrum Roles
##### **Product Owner**
A Product Owner (PO) is:
- a stakeholder representative and the voice of a customer.
- accountable for the business value delivered by a team.
- maintains a product backlog by writing features (user stories) and prioritizing them.
- the one who owns the vision of the successful product and its functionality.
- accepting and rejecting the final results of the work.

Some responsibilities of PO's (requirements clarification, documenting user stories, etc.) can be performed by a Business Analyst.
*In this case, a Business Analyst works as a"proxy" Product Owner.*

##### **Scrum Master**
A Scrum Master:
- helps Scrum team members achieve their highest level of performance.
- assign tasks to individuals and provide day-to-day directions to a team.

A good Scrum Master shelters a team from outside distractions allowing Scrum team members during the Agile sprint to focus on the goal they have selected.

##### **Team**
- Should consist of 5–9 specialists with cross-functional skills.
- Does the actual work, such as analysis, design, development, testing, etc.
- Self-organized, and ideally, there are no titles, which enables all team members to help each other do the same work.
- Has will to achieve the sprint goals and it is expected that individuals will work beyond their preferred disciplines whenever they can in order to deliver a valuable product.

It means that Dev's, BA's, Testers have their primary responsibility; however, they can help each other to complete tasks.

#### Scrum Events
The Scrum framework defines the *events* that should be conducted during a sprint.
>[!info]- _Sprint Planning_
> -> meeting to decide on how much work would  be capable of doing during the sprint.
> ![EPAM BA The Software Development Life Cycle, Scrum in Action-1675355405323](../../../300%20Utils/305%20Attachments/EPAM%20BA%20The%20Software%20Development%20Life%20Cycle,%20Scrum%20in%20Action-1675355405323.jpeg)
> The output -> the *sprint backlog* -> list of the product backlog items (PBIs) that are planned to be delivered by a team.
> Usually, PBIs are additionally broken down into the list of tasks that are necessary in order to deliver PBIs.
> 
> Process:
> 1. PO presents the items (user stories) of the highest priority starting from the top of the product backlog.
> 2. The team asks questions to turn a high-level user story into more detailed tasks of the sprint backlog.
> 3. The team splits each sprint backlog item into technical tasks (such as developing UI, developing backend, etc.), 
> 4. Estimates the time to complete the items, and checks if they are able to commit to all tasks and deliver backlog items.
> 5. Based on this info, the team goes back to PO to share the info on the agreed number of backlog items that they can do.

>[!info]- Backlog Grooming
> -> meeting, during which PO, SM and a team:
> 
> 1. add necessary details to product backlog items,
> 2. add new features,
> 3. split large features,
> 4. prioritize and estimate the features.
> 
> The purpose -> prepare a product backlog.
> Backlog grooming *is not a separate Scrum event*, refinement activities are done as a part of the sprint planning meeting.
> 
> A prepared and groomed backlog helps to streamline the sprint planning meeting.

>[!info]- _Daily Scrum_
> -> meeting to share statuses on the work that is completed and is planned to be completed. Lasts 15 minutes.
> 
> Questions for each team member:
> 1. What did I do yesterday?
> 2. What will I do today?
> 3. Are there any impediments on my way?

>[!info]- _Sprint Review / Sprint Demo_
> -> meeting to show a Product Owner the completed work during the sprint. Done at the sprint's very end.
>
> 1. During this meeting, the team conducts a demo of new features.
> 2. Only fully completed and ready to be shipped backlog items are shown.
> 3. All other items are considered not done and moved to the next sprint or back to a product backlog.

>[!info]- _Sprint Retrospective_
> -> meeting to reflect on processes and find room for improvement in the team.
> 
> team members share the ideas on what they during the sprint:
> 1. did well
> 2. did not do very well and can improve
> 3. learned
> 
> The sprint retrospective is usually facilitated by a Scrum Master and is the last one in the sprint.
> 
> 1. All the ideas gathered from the team are discussed,
> 2. the team decides what specific items they would want to start improving during the next sprint.
> 3. As soon as high-priority items have been determined, the team converts the improvement items into an actionable plan.
> 
> Example of two week sprint:
> ![EPAM BA The Software Development Life Cycle, Scrum in Action-1675356384512](../../../300%20Utils/305%20Attachments/EPAM%20BA%20The%20Software%20Development%20Life%20Cycle,%20Scrum%20in%20Action-1675356384512.jpeg)
> ![EPAM BA The Software Development Life Cycle, Scrum in Action-1675356396398](../../../300%20Utils/305%20Attachments/EPAM%20BA%20The%20Software%20Development%20Life%20Cycle,%20Scrum%20in%20Action-1675356396398.jpeg)

#### Scrum Artifacts
##### **Product Backlog**
*Product backlog* -> prioritized features list that contains short descriptions of the features to be supported in the product.

There is no need to start a project with a full list of well-documented requirements, new ones can be added to a product backlog during the development.

> Items in a product backlog are prioritized by business value. A PO keeps high-priority items at the top of a backlog.

Usually, product backlog items are represented as user stories with the sub-tasks required to complete each user story.

##### **Sprint Backlog**
The *sprint backlog is a list of PBIs* identified as the ones *to be completed during a Scrum sprint*.

A team takes to a sprint backlog the items from the top of a product backlog as they have the highest priority.

##### **Product Increment**
The *product increment is a summary that includes all PBIs completed during a sprint* and integrated with the work from previous sprints.

A PBI can be added to the increment only if it is done. A product increment must be in a useable condition, so it can be released to production.

##### Scrum Board
A Scrum board is used to track and update the state of sprint backlog items and related tasks of the current sprint, such as "to do", "in progress", and "done".
This is a convenient way to monitor and visualize work in real time.

![EPAM BA The Software Development Life Cycle, Scrum in Action-1675357197926](../../../300%20Utils/305%20Attachments/EPAM%20BA%20The%20Software%20Development%20Life%20Cycle,%20Scrum%20in%20Action-1675357197926.jpeg)

##### Burndown chart
-> represents *the remaining effort required to complete the development of the sprint scope*.

It consists of:
- X-axis -> working days in the current sprint
- Y-axis -> the remaining effort to complete all the tasks

Example:
![EPAM BA The Software Development Life Cycle, Scrum in Action-1675356919836](../../../300%20Utils/305%20Attachments/EPAM%20BA%20The%20Software%20Development%20Life%20Cycle,%20Scrum%20in%20Action-1675356919836.jpeg)

#### **Additional Materials**
1. To watch two short, animated videos describing Spotify engineering culture, click [here](https://engineering.atspotify.com/2014/03/27/spotify-engineering-culture-part-1/) and [here](https://engineering.atspotify.com/2014/09/20/spotify-engineering-culture-part-2/).
2. To deepen your knowledge of Scrum, please review the [Scrum Guide](https://scrumguides.org/).
3. In the book [Scrum and XP from the Trenches - 2nd Edition](https://www.infoq.com/minibooks/scrum-xp-from-the-trenches-2/) you can find a detailed account of how one Swedish company implemented Scrum and XP with a team of approximately 40 people, and how they continuously improved their process during one year.
