
Links:
- [Windows PowerToys](../../../003%20Media/Windows%20PowerToys.md)
- [OS Linux](OS%20Linux.md)

Tags: #sci/pro/tech/os/win #notes/web

Date: 2022-10-24
Time: 15:56:27
____

#### Processes
When you run any program, the program creates *processes*. Each process provides the resources needed to execute the program.

A **thread** is the basic unit to which the operating system allocates processor time. A thread can execute any part of the process code, including the parts currently being executed by another thread.

Each process can create a **child process**. In this case, the process which has a child process is called the **parent process**.

![Pasted image 20221024155937](../../../300%20Utils/305%20Attachments/Pasted%20image%2020221024155937.png)

They can be *killed* or sorted in the task manager. It can be opened by `Ctrl+Shift+Esc`. For inspection there are some graphs. We can check all processes and see their information. You can even kill system applications, but its not safe.

We can start processes by running with applications panel in task manager.
We can edit columns in Task Manager, like command line options.

Recommended - Process Explorer. It has additional functionality. Ex: find the process that is using specific file.

#### Services

Can be watched from *task managed* or distinct inner app Services (can be run `Win+r`, `secvices.msc`). They can be sorted, killed or restarted. We can check the information of services. We can turn of win update... We can delete process, but it can be restarted by a process.

Sometimes there are cases when you need to restart a service. You can do this using the command-line program, SC.
```sh
sc <server> [command] [service name] <option1> <option2>...
```

>[!info]- Translation
> `<server>` Specifies the name of the remote server on which the service is located. The name must use the Universal Naming Convention (UNC) format (for example, `\\myserver`). To run SC.exe locally, omit this parameter.
> `<service name>` - Specifies the service name returned by the *getkeyname* operation.
> Specifies the service arguments that should be passed for the service to be started.

>[!info]- Commands
> To stop a service: `sc stop [service name]`
> To start a service: `sc start [service name]`
> To restart a running service: `sc stop [service name] && sc start [service name]`
> If you are not sure whether a service is already running, and want *to restart or to start it*: `sc stop [service name] & sc start [service name]`
> Deleting service from the PC: `sc delete <ServiceName>` as an admin

> && -> AND - second command will run only if the first command has been finished successfully.
> &  -> OR  - the second command will run after the first command in any situation.

#### Users and user groups
In simple terms, a user account is a kind of a folder that contains information about a user. 

>[!info]- `lusrmng.msc`
> local users and user groups manager
> we can search, edit

>[!info]- with powershell
> 1. run as an admin
> 2. `New-LocalUser -Name [NAME] -NoPassword`

>[!info]- with CMD
> Rather old and deprecated way
> 1. run `cmd` as admin
> 2. `net user [NAME] [PASSWORD] \add`

We can create groups of users with the same permissions. We can modify permissions to some files and folders with settings in context menu.

#### Environment vars
An *environment variable* is a text variable of the operating system storing some information, for example, system settings data, a path to a folder, etc.

There are two types of environment variables:
- User variables
- System variables

Applications:
1. For quick access to a folder. You can create an environment variable which will contain the path to the required folder.
2. Use them in scripts.

> [!info]- How to create and access?
> - `set [varname]=[value]` create var for session
> - `setx [varname] [value]` create var for user veriables
> - as admin `setx \m [varname] [value]` create var for the whole system
> - access via syntax `%varname%`

EX:
We can use path system variable for accessing and running flies from anywhere.