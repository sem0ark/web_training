  
Links:
- [The course link](https://elearn.epam.com/courses/course-v1:EPAM+CIS210DE+0422UpSkillMe/courseware/0f6d261d64854542a9a6e114f77dada0/b4100e5fa7974364978327ee4a61ba93/)
- [Version Control Systems](../NodeJS_UpSkillMe/Version%20Control%20Systems.md)

Tags: #notes/web #sci/pro/tech/git

Date: [20230203](../../../200%20Diary/205%20Day/20230203.md)
Time: 16:29:10
_____

The goal of the course - search and understand the functionality of the Git and possible extensions of it.

#### VSL Concept
How can we contain and managed the team project:
1. Just files in the folder: difficult to maintain and version.
2. Network share: can be accessed from anywhere, but there is not versioning, so someone can break the files being edited by someone else.
3. Cloud storages: There is still an issue of file synchronisation and there is still no versioning.
4. *VSL* (Version Control System): it goals to:
	1. Backup and restoring.
	2. Synchronization.
	3. Undo for some files or actions.
	4. Track changes ans ownership.
	5. Sandboxing -> create a dummy version to experiment on.
	6. Branching -> managing a number of different versions of the app running at the same time.

#### Types of VSL

We can see some different types of the VSL's, so let's write them down:
1. By strategies:
	1. LOCK-MODIFY-UNLOCK (Ex: SCSS, VAULT)
	2. COPY-MODIFY-MERGE (Ex: CVS, Git, Mercurial, GNU Bazaar)
	3. COMBINED (Ex: SVN, TFS, Perforce)
2. By Structure:
	1. Centralized
	2. Distributed

##### LOCK-MODIFY-UNLOCK
There are two developers A and B. They are editing the file song.txt.

1. Alice is locking the file, so only she can write to the file, but it can be read by everyone.
2. Alice is writing some changes on the local file and commits the changes to the server.
3. Alice unlocks the file. Bob locks the file and updates his local copy, it's called *update / pull*.
4. Bob  added changes to the local file and commits the changes to the server. After that he unlocks the file.
5. Now Alice can continue working on the file. ETC...

##### COPY-MODIFY-MERGE
There are two developers A and B. They are editing the file song.txt.

1. Alice and Bob is writing the changes to their local file at the same time. Version of the file on the server -> 0.
2. Alice commits the changes first, so the server is comparing the files from Alice and the one on the server. The new version looks OK, so the server applies changes. Version of the file on the server -> 1.
3. Now Bob is trying to commit some changes. The server can see that the versions doesn't match to the version on the server. Bob's version - 0.
4. The server identifies the conflict and sends the conflict file to Bob:
	1. First block before '>>>>>' -> original version of the files bob started with.
	2. Second block after '>>>>>' -> the version o the server.
	3. The third version after '<<<<<' -> the version Bob is trying to push.
5. The Bob makes the decision which lines of the files should we keep in place, after that he commits the changes to the server and the conflict was resolved.

##### Centralized systems
The server is in charge of keeping all the changes and versioning, so the users keep only files and push them to the server.

Pros:
1. It is simple.
2. It is lightweight for the users.
Cons:
1. Only one place to keep the files.
2. Hard to scale.
3. Requires having a server.

##### Distributed systems
Everyone contains their own repository, so they push changes to their own repos to the server to show them.

Pros:
1. Much faster, because they are kept locally.
2. More reliable.
Cons:
1. More complex. We need to check the versioning with all the people.


#### Why Git?
1. 2005, Git - created by Linus Torvalds:
	1. distributed version control system,
	2. Open Source and free,
	3. compatible with most platforms,
	4. 100 times faster

9/10 developers use Git VSL.
EPAM also has something similar to GitHub, but closed and secured.

With Git it is really difficult to loose something, because it is using the data integrity checks with the usage of SHA1 hashing. git is pretty simple, but very reliable and fast.