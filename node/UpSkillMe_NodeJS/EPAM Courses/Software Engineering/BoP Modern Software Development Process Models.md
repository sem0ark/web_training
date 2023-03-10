
Links:
Tags: #notes/web #sci/pro/dev #sci/pro/practices 

Date: 2022-11-05
Time: 15:01:47
____

Modern Software Development Process Models

Software development life cycle:
![Pasted image 20221105150234](../../../300%20Utils/305%20Attachments/Pasted%20image%2020221105150234.png)

The *software development model* describes which stages of the *life cycle (SDLC)* it goes through and what happens at each of them.
It is chosen based on:
- the direction of the project
- its budget
- the timing of the final product
- the nature and temperament of the project manager and his team.

### "Traditional" SLC Models
>[!quote]- Waterfall
> The *Waterfall Model* (or cascade) is one of the old traditional software development models which implies a sequential flow of stages, each of which must be fully completed before the next one starts.
> 
> The application of this model in a modern IT enterprise is still rare. It is mostly used in relatively small projects when:
> - the requirements are known, understood, and documented
> - there are no conflicting requirements
> - there is no problem with the availability of programmers of the right qualifications
> In addition, this model can be applied when we are talking about high-risk areas.
> ![BoP Modern Software Development Process Models-1670266830299](../../../300%20Utils/305%20Attachments/BoP%20Modern%20Software%20Development%20Process%20Models-1670266830299.jpeg)
> 
> *Advantages*
> 1. Easy-to-use for managing a project
> 2. Due to its rigidity, development is fast
> 3. Cost and timeframe are predetermined
> 
> *Disadvantages*
> 1. The model is not flexible.
> 2. it is difficult to know the requirements and the ways to implement them in advance
> 3. Developers are required to write a lot of technical documentation which delays work.
> 4. Problems in the system can only be discovered late in the process


>[!quote]- V-Model
> The *V-Model* is based on the idea of validation and verification. It inherited the structure of the Waterfall Model.
> ![Pasted image 20221105150703](../../../300%20Utils/305%20Attachments/Pasted%20image%2020221105150703.png)
> This approach is mostly recommended for small and medium projects when:
> - uninterrupted product operation is crucial
> - the requirements are clearly defined and fixed, and strict product testing is required
> - there is no problem with the availability of engineers with the necessary qualifications, especially testers
> 
> *Advantages*
> 1. The model is quite easy to use
> 2. Test design and testing activities themselves are performed at the early stages
> 
> *Disadvantages*
> 1. The model is quite rigid and not flexible.
> 2. No prototypes can be created at early stages; therefore, there is a high risk of not meeting customer’s expectations.
> 3. If a mistake was made during the development of the architecture, then it will be expensive to return and fix it, as in the Waterfall Model.


>[!tip]- Incremental Model
> Incremental Model combines the sequential functions of the Waterfall Model and consists of several development cycles (the assembly of modules). The complete system requirements are also divided into different iterations.
> ![Pasted image 20221105151118](../../../300%20Utils/305%20Attachments/Pasted%20image%2020221105151118.png)
> Incremental Models are used in the following situations:
> - when the basic requirements for the system are clear and understandable, but some details can be improved over time
> - when an early market launch is required
> - if a new technology is used to develop a project
> - if there are not enough resources (primarily, human resources of the required skills) available
> - if there are several risky features or goals
> 
> *Advantages*
> 1. The working versions of the software are ready at the early stages of functionality development process
> 2. If there is a parallel development, it also increases the speed of execution
> 3. The flexibility is higher than in case with Waterfall or V-Model.
> 4. Easier to test and debug small pieces of the product during each run
> 5. lower risk of the overall failure because risky pieces can be found earlier
> 
> *Disadvantages*
> 1. requires good planning and design
> 2. many repetitive cycles of sequential development
> 3. final product should be clearly specified at the very beginning of the process
> 4. Total development costs are usually higher than that of Waterfall

>[!tip]- Iterative Model
>With the Iterative Model, the creation begins with the definition and implementation of a part of the functionality which becomes the basis for defining further requirements.
> ![Pasted image 20221105152431](../../../300%20Utils/305%20Attachments/Pasted%20image%2020221105152431.png)
> The Iterative Model is best used when:
> - the requirements for the final system are clear and understandable in advance
> - the project is large or very large
> - the main challenge needs to be defined but the details can evolve over time
> - the development team uses and learns new technology while working on the project
> - there aren't any high-risk features and goals that may change in the future
> Typically, iterative development is used in conjunction with incremental development -> a longer cycle is broken down into smaller segments that build on top of each other.
> 
> *Advantages*
> 1. working versions of the software are ready at the early stages of the functionality development process
> 2. Changing requirements and project scope is more flexible and less expensive than in Waterfall or V-Model.
> 3. Overall costs of the development process are usually lower than under other models
> 4. a lower risk of the overall failure because risky pieces can be found earlier
> 
> *Disadvantages*
> 1. requires good planning and design.
> 2. It might be quite time-consuming as each development stage is quite rigid and there should not be any time overlap between the stages.
> 3. The overall system architecture should meet all the requirements that arise during the software development process and sometimes they cannot be clearly predetermined

>[!warning]- RAD Model
> RAD (Rapid Application Development) Model is an incremental development model.
> In RAD model, *highly qualified teams* in parallel, like several mini-projects, are developing components and functions. The time frame for one cycle is strictly limited.
> The generated modules are then assembled into one working prototype in a short time period.
> ![Pasted image 20221105153300](../../../300%20Utils/305%20Attachments/Pasted%20image%2020221105153300.png)
> Stages:
> 1. *Business modeling:* we form a list of information flows between different departments.
> 2. *Data modeling:* based on the previously collected information, we determine the objects and other entities necessary for the exchange of information.
> 3. *Process modeling:* we establish links between simulated data to achieve development goals.
> 4. *Building the application:* it uses auto assembly tools to convert models of computer-aided design (CAD) system to code.
> 5. *Testing:* new components and interfaces are tested.
> 
> RAD model should only be used when *all of the following* conditions are held:
> - The system to be developed *can be reasonably divided into modules*.
> - There are highly-qualified and highly-specialized architects available for a project.
> - The budget of a project is sufficient to pay for these specialists along with the cost of ready-made automated assembly tools.
> - It can be chosen with comprehensive knowledge of the target business and the *need for urgent production of a system within 2-3 months*.
> 
> RAD model is not suitable for projects with a high probability of risks or in the case of developing the systems that have a frequent change of the components' interfaces.
> 
> *Advantages*
> 1. The development process takes less time.
> 2. System components can be reused during the development process.
> 3. Users’ feedback can be collected at the early stages of the development process.
> 4. There is a lower risk of integration failure because the integration of modules starts from the very beginning.
> 
> *Advantages*
> 1. *a lot of limitations on the use*
> 2. High costs of modeling and automatic code generating
> 3. The result highly depends on the individual performance of team members while identifying business requirements.


>[!warning]- Spiral Model
> The **Spiral Model** is similar to the Incremental Model but with a focus on risk assessment.
> Stages:
> 1. The determination of requirements and constraints.
> 2. Risk analysis and assessment of alternatives.
> 3. Project implementation.
> 4. Evaluation of the result and, if the quality is satisfactory, the transition to a new stage.
> ![Pasted image 20221105153958](../../../300%20Utils/305%20Attachments/Pasted%20image%2020221105153958.png)
> 
> Applications:
> - the costs of a project are quite high and risk evaluation is necessary
> - long-term project commitment cannot be taken
> - users are not sure about their needs and the risk of the change of requirements is high
> - project requirements are too complex
> - we are going to set up a new product line or enter a new market
> 
> *Advantages*:
> 1. The model pays great attention to the study of risks.
> 2. There is a strong approval and documentation control.
> 3. There are working versions ready for use at the early stages.
> 
> *Disadvantages*
> 1. The participation of a large number of experts with experience in risk assessment is required.
> 2. An excessive number of iterations might lead to increased development costs and delayed application submission.

>[!u]- Agile Model
> The Agile Model is used:
> 1. in almost any start-up initiative where quick feedback from users is needed
> 2. in medium-sized projects where it’s not difficult to translate business requirements into the detailed requirements for a software product
> 3. in large projects that can be easily divided into small functional parts and to which an iterative model can be applied
> Some Examples of the Agile Model:
> - Extreme Development
> - Feature-Driven Development
> - Test-Driven Development
> 
> ![BoP Modern Software Development Process Models-1670267968151](../../../300%20Utils/305%20Attachments/BoP%20Modern%20Software%20Development%20Process%20Models-1670267968151.jpeg)
> 
> *Advantages*
> - little attention to detailed documentation (plan) of software which contributes to its rapid development.
> - It places emphasis on software testing.
> - Frequent **releases** are typical
> At the end of each iteration, the development progress is checked and the importance of tasks for the next iteration is assessed in order to increase the return on investment (ROI):
> - It allows to continuously improve the software with simple fixes and changes.
> - It enables quick updates and new functions which makes a software product more attractive.
> 
> *Disadvantages*
> 1. It pays little attention to the detailed documentation (plan): Complicated maintenance
> 2. difficult to accurately estimate the required budget, development time, and the size of the team required

>[!u]- XP (Extreme Programming) Model
> **Extreme Programming Model** is an informal and progressive approach to software development *based on the method of agile* software development, where *each developer is usually a professional* in their field.
> ![Pasted image 20221105154950](../../../300%20Utils/305%20Attachments/Pasted%20image%2020221105154950.png)
> The main thing in extreme programming is not to lose control of what is happening.
> XP Model is one of the most difficult methodologies to implement as it includes as many as thirteen practices.
> 
> ![BoP Modern Software Development Process Models-1670320090683](../../../300%20Utils/305%20Attachments/BoP%20Modern%20Software%20Development%20Process%20Models-1670320090683.jpeg)
> 
> *Advantages*
> 1. Good for small software projects with high risk.
> 2. Product development is carried out in short iterations.
> 3. It has the advantage of adapting to rapid changes in user requirements in the IT field.
> 4. It allows developers to focus on coding and avoid unnecessary work related to document management.
> 5. The customer receives exactly the product that they need even if at the beginning of development, they do not have an exact final picture of this product.
> 6. A team easily maintains the code as it is written according to a single standard and is constantly refactored.
> 
> *Disadvantages*
> 1. The first simple solution that was accepted and launched might turn quite risky for a project.
> 2. The success of a project depends on customer involvement which is not easy to enhance.
> 3. It is difficult to predict the time spent on a project because in the beginning, no one knows the entire list of requirements.
> 4. *implemented effectively only by senior specialists*.
> 5. Regular meetings with programmers are expensive for customers.

Software development organizations are adopting process methodologies to streamline the development process.

Today, the most common Agile subtypes are Scrum and Kanban which are called frameworks. A **framework** is a more mature methodology with strict rules.

>[!todo]- Scrum
> It consists of the same stages as the Agile Model.
> 
> *Scrum Master* is often a part of a team and he/she ensures the continuous work of the whole team by creating the necessary conditions for it:
> 1. keeping morale high,
> 2. organizing procedures,
> 3. facilitating meetings
> ![BoP Modern Software Development Process Models-1670316357696](../../../300%20Utils/305%20Attachments/BoP%20Modern%20Software%20Development%20Process%20Models-1670316357696.jpeg)
> 
> There is also a *Product Owner* on a project – a person who:
> - leads the development,
> - monitors the product, and like a business analyst,
> - acts as the main link between the client's mission and the result of a team.
> - Clears user stories and prioritises it -> basically TODO list
> - Responsible for initial planning
> 
> Iterations/*sprints* usually last *no longer than 1 month* and are preceded by careful planning and evaluation of the previous sprint. Once the sprint actions are defined, no changes are allowed.
> *Such a system is suitable for projects with a small team of up to ten people.*
> ![Pasted image 20221105163310](../../../300%20Utils/305%20Attachments/Pasted%20image%2020221105163310.png)
> 
> Scrum Artefacts
> ![Scrum Artefacts](../../../300%20Utils/305%20Attachments/BoP%20Modern%20Software%20Development%20Process%20Models-1670316418852.jpeg)


>[!todo]- Kanban
> Kanban ("card") is distinguished by its visualization of the life cycle and the lack of vivid iterations.
>  A team organizes work using a virtual whiteboard which is divided into project stages. Each stage must go through all the columns (columns can be changed individually):
>  - To do,
>  - In progress,
>  - Code review,
>  - In testing,
>  - Done.
>  
>  Each team member sees which tasks are in progress, which ones are stuck at one of the stages, and which ones have already reached the necessary column and require attention.
>  The goal of each team member is to reduce the number of tasks in the first column, since you can take urgent tasks into development right away without waiting for the start of the next sprint.
>  
>  This approach makes it easy to understand where the problem has appeared and provides a chance to see how the entire project is organized.
>  ![Pasted image 20221105163556](../../../300%20Utils/305%20Attachments/Pasted%20image%2020221105163556.png)
>  ![BoP Modern Software Development Process Models-1670319439292](../../../300%20Utils/305%20Attachments/BoP%20Modern%20Software%20Development%20Process%20Models-1670319439292.jpeg)

![BoP Modern Software Development Process Models-1670321742550](../../../300%20Utils/305%20Attachments/BoP%20Modern%20Software%20Development%20Process%20Models-1670321742550.jpeg)

#### Further reading
1.  To learn why SDLC is needed, what phases of SDLC are distinguished, and what SDLC models exist, you can read the article [Software Development Life Cycle (SDLC)](https://professionalqa.com/software-development-life-cycle).
2.  In the book [Scrum and XP from the Trenches - 2nd Edition](https://www.infoq.com/minibooks/scrum-xp-from-the-trenches-2/), you can find a detailed account of how one Swedish company implemented Scrum and XP with a team of approximately 40 people, and how they continuously improved their process over a year’s time.
3.  [Here](https://www.youtube.com/playlist?list=PLCku-ULHIQvlLC2gFqeoX-JtbEvmeoDhl) you can find videos describing models of software development.
4.  To catch the difference between Scrum and Agile, watch the video [Difference between Scrum and Agile | Scrum vs Agile](https://www.youtube.com/watch?v=K7YMEFjh724&ab_channel=Uzility).
5.  Watch the [video](https://www.youtube.com/watch?v=h736bEHkT_Y&ab_channel=AlZimmerman) by Al Zimmerman to learn more about flow charts.

#### Books
1. Kent Beck, Extreme programming explained
2. Kent Beck, Test-Driven Development by example
3. John Smart, BDD in Action