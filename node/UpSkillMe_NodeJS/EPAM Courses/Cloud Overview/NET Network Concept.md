
Links:
Tags: #notes/web #sci/pro/tech/networking

Date: 2022-11-03
Time: 14:20:15
____

A **computer network** is a group of devices (e.g. a laptop, a computer, a printer, a mobile phone, a camera, etc.) to exchange data.

Connection types:
- Wireless connection
- Cable connection

Choosing the right topology type can increase performance and reduce risks. Also, it can increase energy and data efficiency which can in turn help to reduce operational and maintenance costs.

Computer Network Topology:
- Bus -> There is a common data transmission channel.
- Star -> a central point connected to computers like rays of a star. An example of such a topology is a modem to which a laptop, a tablet and a phone are connected.
- Point-to-point -> connects two devices directly together with a common link
- Tree (or hierarchical) -> there is a central (or root) node at the top level in the hierarchy which is connected to one or more other nodes from the second level in the hierarchy with a point-to-point physical link.
- Hybrid -> a combination of several topology types is used rather than one specific topology

## Network models

#### OSI Model

The **Open Systems Interconnection (OSI) model** is a conceptual model used to describe the constituent parts and the functions of a networking system.
The classic OSI model has 7 layers:
![Pasted image 20221103143117](../../../300%20Utils/305%20Attachments/Pasted%20image%2020221103143117.png)

#### TCP/IP Model

The **Transmission Control Protocol/Internet Protocol (TCP/IP) model** is a concise version of the OSI model.

It consists of 4 layers. In this model, compared to OSI, some layers are combined with each other.
![Pasted image 20221103143218](../../../300%20Utils/305%20Attachments/Pasted%20image%2020221103143218.png)

## Protocols
On each layer, certain protocols work.
![Pasted image 20221103143304](../../../300%20Utils/305%20Attachments/Pasted%20image%2020221103143304.png)

In this way, on the Application layer we can use a browser.

1. Here data is generated using the **HTTP** protocol.
2. If we transfer files, then **FTP** (File transfer protocol) can be used. 
3. The data that we see on the page can be presented in multiple different formats: for example, illustrations in **PNG** format or lists in **JSON** format.
4. To receive this data, the **TCP** or **UDP** protocol is used, which is responsible for transportation.
5. If we look at the layer just below, we will see the protocols of network interactions. The **IP** protocol is responsible for addressing and routing across the network.
6. Below is the **Ethernet** protocol.
7. The last Physical layer can be directly occupied by the technology which enables you to connect to the network: **DSL, Bluetooth, OTN.**

Thus, each upstream protocol uses a downstream protocol which is responsible only for its own task.

#### IP, DNS, URL
The *Internet Protocol (IP)* is a communications protocol for routing and addressing packets of data across a computer network.
 
The *Domain Name System (DNS)* is basically the phonebook of the Internet. The purpose of DNS is to translate domain names to IP addresses.
*DNS resolution* is a process of converting a hostname into an IP address.

The DNS resolution process involves 4 types of servers:
- DNS resolver - responsible for handling DNS resolution requests from clients.
- Root nameserver -  are known to every resolver. Based on the extension of the domain (.com, .org, .edu, etc), the root name server directs the resolver to a specific *top-level domain (TLD)* name server.
- TLD  -  responsible for all domain names that have a common domain extension. If the request was for google.com, the TLD name server would point the resolver to the Authoritative name server responsible for this domain name.
- Authoritative name servers contain information specific to the domain name it serves (for example, google.com). It returns the IP address to the resolver.

This chain of requests takes a lot of time. To speed up the process, DNS records are temporarily saved (cached) at various stages of the process:
- Browser DNS caching
- Operating system caching
- DNS server caching

A **Uniform Resource Locator (URL)**, often called a web address, is a reference to a web resource that specifies its location on a computer network and a protocol for retrieving it.

![Pasted image 20221103152709](../../../300%20Utils/305%20Attachments/Pasted%20image%2020221103152709.png)

#### HTTP
The *Hypertext Transfer Protocol (HTTP)* is the foundation of the World Wide Web. It is *the essential protocol* to view web pages and surf the Internet. HTTP is an *application layer* protocol. The most used version of HTTP is HTTP/2.

A typical process of communications over HTTP:
- a client making a request to a server
- then sends a response message

##### HTTP headers
![Pasted image 20221103153129](../../../300%20Utils/305%20Attachments/Pasted%20image%2020221103153129.png) ![Pasted image 20221103153145](../../../300%20Utils/305%20Attachments/Pasted%20image%2020221103153145.png)

This response has the following elements:
- *The version of the HTTP protocol* (here, HTTP/1.1)
- *HTTP status code*. It is “200 OK” in this case.
	- 1XX – Informational
	- 2XX – Successful
	- 3XX – Redirection
	- 4XX – Client Error
	- 5XX – Server Error
- *HTTP response headers* They are there to help a client interpret the received information.
	- Content-Encoding -> compression method used by a server
	- Content-Type -> type of content returned in the response body
	- Content-Length -> length of the response body in bytes
- *Response body*. Typically, this is an HTML page returned by a server.

The POST method also includes a request *body*. It contains information that is submitted to a web server.

#### HTTPS
1. **HTTPS** is an encrypted version of HTTP.
2. HTTP by default uses 80 port and HTTPS uses 443.
3. HTTPS operates at the TCP/IP level just as HTTP does, but it uses an encrypted *TLS/SSL* connection.

## CMD
- *hostname* - displays the hostname of a computer
- *ipconfig* - displays network configuration
- *ping* - sends echo request messages to another computer
- *tracert* - shows the path taken by packets to a destination computer
- *netstat* - displays active TCP connections
	- *-r* - table look
	- *-no* - shows ports that use connection
- *nslookup* - performs a DNS query

#### Further reading
1. https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview
2. https://en.wikipedia.org/wiki/Internet_protocol_suite

_____

#### Self-practice

We expect your solution to the task to meet the following criteria: 
-   You have installed the Visual Studio Code Editor _(3 points)_.
-   You have installed node.js _(3 points)_.
-   You have installed the required language extensions _(8 points)_.
-   You have created the main.js file _(8 points)_.
-   Your code works correctly _(8 points)_.

You can earn a maximum of **30 points** for this task.