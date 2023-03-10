
Links:

- [Linux](../../../003%20Media/Linux.md)

Tags: #sci/pro/tech/os/linux

Date: 2022-10-24
Time: 17:04:30
____

#### Linux Shell
**The shell** is a command line interface that takes commands and executes them.

**Terminal**, or a terminal emulator, is a program that allows you to communicate with the shell through the window.

> [!info]- Standard Commands
> - **man** (short for "manual") returns a detailed manual of a command
> - **ps -aux** shows processes that are currently running; the list of the processes is static
> - **pwd** (short for "print working directory") prints the current working directory
> - **more** displays long text files per page at a time; you can navigate only forward
> - **less** displays long text files per page at a time; you can navigate both forward and backward
> - **ls -a** lists all files and directories in the current directory
> - **cd** (short for "change directory") changes the current working directory
> - **grep** searches content in text files
> - **mkdir** creates a new folder
> - **kill** terminates a process
> - **echo** prints a string of a text to the terminal window
> - **vi** a text editor
> - **cat** (short for "concatenate") reads data from a file and displays its content on the screen
> - **wget** download a file from the Internet
> - **top** shows processes that are currently running; the list of the processes is updated every second
> - **sudo** runs a program as a super user ("with admin rights")
> - **tree -L N** print files to Nth level

You can use `Tab` to complete the commands

#### File System
A **file system** is a system of storing files and organizing directories (catalogs). A file system allows to systematize programs and data, and ensure the orderly management of these objects.

If we compare Windows and Linux:
- modern Windows - the file system NTFS
- older Windows - FAT23
- Linux, mostly all - EXT3, EXT4

There are *no drives at all*. Linux has a hierarchical file system, where there is a *root* directory from which other directories branch.

![Scheme of main directories in Linux systems.](../../../300%20Utils/305%20Attachments/Pasted%20image%2020221024172615.png)

Directories are created along with FHS standard in *all* Linux systems:
Ex:
`/bin` - essential binaries for admin
`/etc` - config files of the system
`/home` - users
`/media` - additional storages
`/opt` - 3rd party apps
`/var` - often modified apps
`/root` - superuser directory

>[!info]- Where should you install programs?
> Put into opt or userlocal
> Use package manager if you are not sure

Linux has a lot of files for representing different devices like CDROM and even imaginary like null.

*Windows wouldn't even recognise files from Linux in most cases*

#### Users and groups
As in Windows, in Linux, the concepts of users and groups are used for *access control*.
Regular users can use commands **sudo** and **su** to get a temporary administrator’s rights. Also, users can be grouped in a “group,” or can be added to an existing one to get access rights associated with this group.

>[!info]- Commands
> Admin rights are
> - **useradd** creates a new user account
> - **userdel** deletes a user account
> - **addgroup** creates a new group
> - **chown** changes a user that owns a file
> - **groupdel** deletes a group
> - **chgrp** changes a group that owns a file
> - **passwd** changes a password for a user account
> - **chmod** changes the access mode of a file
> - **usermod** modifies a user account
> - **echo** prints a string of a text to the terminal window

`cat /etc/passwd` - show list of all users + home dir
`cat /etc/group` - show list of all groups

Ex:
- create user `sudo useradd --create-home [USER]`
- create user `sudo addgroup [USER]`
- create a password `sudo passwd [USER]` + enter a pass
- add to a group `sudo usermod -a -G [GROUP] [USER]`

![chmod mode codes](../../../300%20Utils/305%20Attachments/Pasted%20image%2020221024175205.png)

#### Environment variables
1. Read env vars -> `env`
2. Search for specific env var -> `env | gerp [NAME]`
3. Show value -> `echo $[NAME]`
4. Set env var for the session -> `export [NAME]=[VALUE]`
5. To save env var -> add a command in config file for some program and add the {4} command in the end. Like