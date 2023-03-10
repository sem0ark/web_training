
Links:
- [01 Introduction to API design](../NodeJS_UpSkillMe/API%20Design/01%20Introduction%20to%20API%20design.md)
- [SE Software Licenses](SE%20Software%20Licenses.md)
- [CS105 L01 Basics of web technologies](../../00%20Uni/CS105/CS105%20L01%20Basics%20of%20web%20technologies.md)

Tags: #toprocess/tocreate 

Date: 2022-11-03
Time: 19:50:04
____

#### Client-Server Model

![Pasted image 20221103195113](../../../300%20Utils/305%20Attachments/Pasted%20image%2020221103195113.png)

In the client-server model, clients, or programs that represent users who need services, and servers, or programs that provide services, are separate logical objects that communicate over a network to perform tasks together.
- A client makes a request for a service and receives a reply to that request;
- a server receives and processes a request and sends back the required response.

Most client-server applications have three components:
>[!tip]- Presentation
> This is essentially a user interface. The presentation component is responsible for displaying information and sending user’s requests to the business logic component.

>[!tip]- Business logic
> This is the software processing client’s requests. It coordinates the application and makes decisions.

>[!tip]- Data storage
> The component responsible for storing and retrieving the data as requested by business logic. This is typically a database.

These components are separated into different tiers:

![Pasted image 20221103195442](../../../300%20Utils/305%20Attachments/Pasted%20image%2020221103195442.png)
All components are kept on a single machine. Such design lacks scalability because it runs on a single machine.

![Pasted image 20221103195454](../../../300%20Utils/305%20Attachments/Pasted%20image%2020221103195454.png)
In a 2-Tier architecture, the business logic lives in the presentation tier. The data storage is physically separated from the client in a different tier.
The logic layer is still hard to modify because it is tightly connected to the presentation layer.

![Pasted image 20221103195507](../../../300%20Utils/305%20Attachments/Pasted%20image%2020221103195507.png)
Each layer runs on a separate machine. Presentation, logic, and data components can be modified almost without affecting other layers.

Depending how much logic is built into the client, the clients can be further classified into *thick and thin* clients.
- Thick -> It runs on a user’s computer and does most of computing using local resources. It can often work without network connection at all, or with limited connection.
- Thin -> It relies on a server to do all computing and does not work offline. A typical example would be a web browser.

