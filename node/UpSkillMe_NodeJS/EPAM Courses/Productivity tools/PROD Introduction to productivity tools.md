
Links:
- [PROD How to use search engine](PROD%20How%20to%20use%20search%20engine.md)
- [PROD Virtualization and Remote Machines](PROD%20Virtualization%20and%20Remote%20Machines.md)

Tags: #health/productivity #sci/pro/tech/vm

Date: 2022-11-03
Time: 16:47:31
____

## Hotkeys
Hotkey - specific combination of some keys

For Windows:
![Pasted image 20221103165030](../../../300%20Utils/305%20Attachments/Pasted%20image%2020221103165030.png)
For browser:
![Pasted image 20221103165921](../../../300%20Utils/305%20Attachments/Pasted%20image%2020221103165921.png)

## Backups
A **data backup** (or **backup**) is a saved and stored copy of computer data that can be used to recover these data in case of their damage, deletion, or when an early version of these data is required.

An **information repository** is a storage used to aggregate and save the data from the source system.

A computer **backup rotation scheme** is a system that determines how many backups of different dates should be stored for each piece of data, and for how long they should be stored before they are replaced with the next backup versions.

>[!tip]- 3-2-1 Rule
> - There should be *at least 3* copies of data.
> - Copies should be stored *on 2 different types* of storage media – this eliminates the possibility of data loss due to similar reasons.
> - *1 copy should be kept offsite*; this might be a remote geographical location or cloud storage. This reduces the possibility of data loss due to factors like fire and floods as well as the possibility of theft of the physical data storage.

#### Backup Methods
1. *Unstructured* -> One does not properly record the information about the data stored.
2. *Full Only / System Imaging* -> Complete source data copies are taken at one or more specific points in time.
3. *Incremental* -> It stores the data that was changed since some reference point in time. Copies of unchanged data are not stored.
4. *CDP Continuous Data Protection*. Near-CDP systems make a backup very frequently, at a specific time interval, say every 15 minutes, or every hour.
5. *Reverse Incremental* - The first step is the creation of a full backup. Then, when each new backup is created, all data from the previous (full) backup is moved to a new backup, and the previous backup is replaced by an increment. Therefore, the latest (the newest) backup is always full, and the pervious (old) backups, on the contrary, are always increments.
6. *Differential* - The starting point is a full backup. Then, each successive backup stores data that was changed since the initial full copy, not the previous backup.

Backup destination:
1. Hard disk
2. Optical storage
3. Solid-state storage
4. Remote backup service