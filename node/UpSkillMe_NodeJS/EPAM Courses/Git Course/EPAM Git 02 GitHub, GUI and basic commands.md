  
Links:
- [Previous](EPAM%20Git%2001%20Installation%20and%20Configuration.md)
- [Next](EPAM%20Git%2003%20Undoing%20and%20ignoring%20changes.md)

Tags: #notes/web #sci/pro/tech/git #pcfix/tool/utility

Date: [20230203](../../../200%20Diary/205%20Day/20230203.md)
Time: 17:33:43
_____

#### Creating the repository
It is easier to create the repo we need on the GitHub than trying to push our own.
Create the name and the type and click create. Now we should clone to the local machine.

```bash
git clone SHH_LINK
# confirm the connection and type the password we've specified

### Do some changes
git status
git commit -m "Comment fo rthe commit"
git log # will show th ecommit history
git push # push changes to the remote server
```

#### Pulling from the remote
Someone else has performed the commit, so we need to synchronize the changes with our own local repository.

```bash
git fetch #remote link#
# by that we synchronize the repos ans the new repo is added to another 
git merge #new branch we've got#
# so we merge all the changes into our repo

#=========================================#

git pull #remote link#
# does the same as two previous commands
```

#### Git GUI and gitk
Previously we were using the console commands to do all the work but it can quickly become tedious if you need to do a lot at the same time, so if we need to manage all the changes.

It is better to commit changes from the same place every time, so your username and email would stay the same.

```bash
git gui&
# run the git GUI in another process,
# so we could work in Git Bash and GUi at the same time
```

We would get a pretty simple UI to complete all the commands, but it may be useful. We can even commit only a several lines of the file, so it is much more flexible to use than cmd.

**gitk** -> used to check and traverse all the history of the project. We would see the graphic representation of all the branches.

#### Git structure
All the data we commit to the Git repo ends up in the objects directory.

refs contain references and links to all needed data we have in the git commit structure. HEAD -> points to the last commit.

How git stores objects:
1. Standard object types:
	1. commit -> reference tree and previous commits.
	2. tree -> reference the names of the files we are committing and the data used in the commit. 
	3. blob (Binary Large OBject) -> minimum atomic cell of the information in git.

We can check the structure:
```bash
git show -s --pretty=raw 63b9 # first part of the commit number
# we can see more detailad info about the commit
# - tree reference
# - parent reference


git ls-tree # first symbols of tree SHA #
# The tree is located in the commit and references some blobs

git show #blob SHA symbols#
# shows the data of the blob
```

To find the blob in the file structure: two first symbols -> directory names, other -> file name.

NB! It is better to stay away from the .git folder, so don't change anything here.