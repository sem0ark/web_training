
Links:
- [DevOps Introduction to DevOps](../DevOps/DevOps%20Introduction%20to%20DevOps.md)
- [CO Core concepts](../Cloud%20Overview/CO%20Core%20concepts.md)

Tags: #sci/pro/tech/vm #notes/web

Date: 2022-11-03
Time: 17:05:53
____

Virtualization is the process of creating a software-based, or virtual, representation of real objects (e.g. applications, servers, and networks) by using special software (called a _hypervisor_).

These obtained virtual objects have access to the resources of a primary (also called _host_ or _physical_) system.

![Pasted image 20221103170744](../../../300%20Utils/305%20Attachments/Pasted%20image%2020221103170744.png)

In general, VMs have the following characteristics:
- *Partitioning:* there might be several VMs on a single "host" and the resources of the physical system are divided between VMs.
- *Isolation:* a VM can be isolated from other VMs on the same physical machine in order to prevent any security issues and guarantee a high level of the utilization of resources.
- *Encapsulation:* in fact, VMs and their states are files saved on a host. Thus, they can be easily moved/copied (also to a different “host” machine) and checked by antimalware programs.


Virtualization process is highly appreciated by many IT organizations as it enables them to reduce their costs while *increasing their efficiency and productivity*.

Types of virtualization:
![Pasted image 20221103171117](../../../300%20Utils/305%20Attachments/Pasted%20image%2020221103171117.png)
>[!info]- Hardware/server virtualization
> A technology that creates a situation when multiple operating systems run as VMs on a single "host".
> Such virtualization increases the efficiency of the system, provides higher server availability, and reduces operating costs.

>[!info]- Mobile virtualization
> This is hardware virtualization applied to a mobile phone or a connected wireless device.

>[!info]- Network virtualization
> A process of combining resources of several physical networks into a single virtual network or dividing a single physical network into segments or separate virtual networks.
> It enables the movement of VMs across different domains without reconfiguring network settings, and reduces the time needed to deploy or update applications.
> It enables the implementation of cloud techniques.

>[!info]- Desktop virtualization
> A technology that creates a situation when the desktop environment and its applications are separated from the physical machine used to access it.
> In this case, workstation load is simulated in order to access the required desktop which, as a result, can be reached from different devices.

>[!info]- Application virtualization
> A technology that enables users to access the applications using different devices than those where these applications are installed.

>[!info]- Storage virtualization / Cloud storage
> A technology that allows to combine all physical storage resources so that they look and can be managed like a single storage.

>[!i]- Full virtualization
> - The guest OS is fully isolated by a VM from the virtualization layer and computer hardware.
> - It uses binary translation and the direct approach as techniques for operations.
> - It is considered to be less secure, slower, but more portable and compatible compared to paravirtualization.

### Hypervisors and Their Types
A **hypervisor** is computer software, firmware, or hardware that creates and runs virtual machines.

![Pasted image 20221103172456](../../../300%20Utils/305%20Attachments/Pasted%20image%2020221103172456.png)

Types of hypervisors:
>[!abstract]- "Native" hypervisor
> This type assumes that a hypervisor is located above hardware as a hardware and software implementation. Operating systems come from a hypervisor. This type is typical for server computers.
> Examples: VMware ESXi, Citrix XenServer.
> ![Pasted image 20221103172655](../../../300%20Utils/305%20Attachments/Pasted%20image%2020221103172655.png)

>[!abstract]- "Hosted" hypervisor
> This type assumes that the parent operating system is located above hardware, and the hypervisor is installed in it.
> Guest operating systems come from a hypervisor. The type is typical for user computers when the virtualization task is a secondary task of the computer.
> Examples: VMware Workstation, QEMU, Parallels Desktop, VirtualBox.
> ![Pasted image 20221103172820](../../../300%20Utils/305%20Attachments/Pasted%20image%2020221103172820.png)

>[!abstract]- "Hybrid" hypervisors
> This type is a middle ground between Native and Hosted types. A Hybrid hypervisor consists of two parts: a thin hypervisor that controls the processor and memory, and a special service OS that runs under its control.
> Examples: Microsoft Virtual Server, Sun Logical Domains, Xen, Citrix XenServer, Microsoft Hyper-V, VMware Workstation.
> ![Hyper-V hypervisor architecture](../../../300%20Utils/305%20Attachments/Pasted%20image%2020221103172928.png)

Pros of native hypervisors:
- Native hypervisors are considered *more secure* than hosted ones, because they are not dependent on the hosting OS.
- They are also *faster and more efficient* as they generate less overhead, while under hosted hypervisors, the OS does not directly communicate with computer’s hardware.

Cons:
- Harder to install and configure
