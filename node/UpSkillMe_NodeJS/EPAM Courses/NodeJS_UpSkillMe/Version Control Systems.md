
Links:
- [PROD Introduction to productivity tools](../Productivity%20tools/PROD%20Introduction%20to%20productivity%20tools.md)

Tags: #notes/web #sci/pro/tech/git

Date: 2022-11-27
Time: 14:56:09
____


- Gain understanding of Git basic concepts and three-tree architecture in Git.
- Practice Git commands directly from the console view through tracking when files are added, edited, deleted, or moved.
- Understand how version control works in the change management process.
- Become aware of the basics of Markdown and use the GitLab editor.
- Get experience in creating and configurating a GitLab project, in staging and committing in the web IDE.
- Familiarize yourself with the concepts of tags, releases, and history.
- Practise using collaboration features in GitLab.

## Version control
Git - VCS - vercion control system for text files. It keeps track of all changes and allows you to fix bugs, for example.

History of VCS's:
1. 1972, SCCS - Source Code Control System, Unix only, stored *first* file + changes
2. 1980, Revision Control System, Open Source, stored last file + changes
3. 1986, CVS - Concurrent Version System, multiple files, entire projects
4. 2000, SVN - Apache Subversion, tracing changes in the whole folder, history of directories
5. 2000, BitKeeper, closed source, distributed version control, used in Linux 2002-2005
6. 2005, Git - created by Linus Torvalds:
	1. distributed version control system,
	2. Open Source and free,
	3. compatible with most platforms,
	4. 100 times faster
7. 2008, GitHub - host for Git repositories, in 2018 purchased by Microsoft

What is distributed version control?:
- Different users maintain their own repo's
- no central repo
- changes are stored in *change set*s
	- can be applied from other repo's
	- can be exchanged

So we can just swap changes with each other:
1. Everyone can keep working
2. Encourages participation and forking
3. All repo's are considered equal by Git

#### Git Configuration
For all users:
1. in `/etc/gitconfig` or `Program Files\Git\etc\gitconfig`
2. `git config --system`

User:
1. in `~./gitconfig` or `$HOME\.gitconfig`
2. `git config --global`

Project:
1. in `git/cofig`
2. `git config`

Commands: `git config` + 
1. `--global user.name "[NAME]"` - set username for the user
2. `--global user.email "[EMAIL]"` - set email for the user
3. `user.name` - show username
3. `user.email` - show email
4. `--list` - shows all system defaults, user defaults, user applied
5. `--global core.editor "vim"` - set standard editor for git
6. `--global color.ui true` - set colors on to Git

`git help` - returns useful info
`man git` - manual page for git

#### Git autocompletion
Autocomplete commands, file paths, branch names for Linux and Mac. on widows is preinstalled.

Download from GitHub git -> git-completion, install to user, add link to bash_profile with *source* command.

![Version Control Systems-1669556889622](../../../300%20Utils/305%20Attachments/Version%20Control%20Systems-1669556889622.jpeg)

#### **Further reading**
1. Additionally, read the article **[GUI Clients](https://git-scm.com/downloads/guis)** about built-in GUI tools for committing
2. Additionally, read the article **[Gitflow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow#:~:text=Gitflow%20Workflow%20is%20a%20Git,development%20and%20implementing%20DevOps%20practices.&text=The%20Gitflow%20Workflow%20defines%20a,framework%20for%20managing%20larger%20projects.)** about the workflow that helps with continuous software development and with implementing DevOps practices.

#### Git Concepts and Architecture
1. Structure
	1. Two (file) trees structure ![Version Control Systems-1669557954783](../../../300%20Utils/305%20Attachments/Version%20Control%20Systems-1669557954783.jpeg)
	2. Three (file) trees structure ![Version Control Systems-1669558011596](../../../300%20Utils/305%20Attachments/Version%20Control%20Systems-1669558011596.jpeg)
2. Hash values
	1. Git generates a checksum for each change set (SHA-1) -> 40-letter hex string
	2. Same data gives same checksum
	3. ![Version Control Systems-1669558234840](../../../300%20Utils/305%20Attachments/Version%20Control%20Systems-1669558234840.jpeg)
3. HEAD pointer
	1. points to a specific commit
	2. pointes to the tip of the current branch
	3. points to the place of start of the recording
	4. ![Version Control Systems-1669558358944](../../../300%20Utils/305%20Attachments/Version%20Control%20Systems-1669558358944.jpeg) ![Version Control Systems-1669558374733](../../../300%20Utils/305%20Attachments/Version%20Control%20Systems-1669558374733.jpeg)

#### Making atomic commits
1. Small commits 
2. Only affect a single aspect
3. Easier to understand
4. Increases cooperation

You can separately commit specific files, that share the topic of the commit.


## Commands
1. `project_folder> git init` -> create a `.git` folder for your repository tracking.
2. If remove `.git` -> completely removes git from the project
3. `git status` -> shows status of al files in the project
5. `git add .` -> add all changes from current directory
	1. `git add file_name` -> add specific file
6. `git commit -m "message"` -> commit to the git repo
	1. first message <= 50 chars, quick summary
	2. optionally followed by a blank line
	3. all lines less than 72 chars
	4. *write in present tense* -> 'fixes a bug'
	5. use bullet points with \*
	6. use bug tracking numbers
	7. descriptive ![Version Control Systems-1669557553438](../../../300%20Utils/305%20Attachments/Version%20Control%20Systems-1669557553438.jpeg)
	8. example ![Version Control Systems-1669557576247](../../../300%20Utils/305%20Attachments/Version%20Control%20Systems-1669557576247.jpeg)
		1. **ghi** - *github issue*
	9. First commit with adding files "Initial Commit"
	10. `git commit -a` - stages and commit *ALL* changes to files, *doesn't* add not staged files.
7. `git log` - show the commit log
	1. `-n 5` - show only recent 5 commits
	2. `--since=2019-01-01` - show commits from 01.01.2019
	2. `--until=2019-01-01` - show commits to 01.01.2019
	2. `--author=Kevin` - show commits by some RegEx `*Kevin*`
	3. `--grep="regex"` - globally search for regular expression
	4. `--oneline` - shows only first line of every commit
8. `git ls-tree HEAD` -> show the tree structure project for the last commit
9. `git diff` - shows changes to working files in a standard format compared to the last commit
	1. `--staged`/`--cashed` - shows changes in a staging area compared to the last commit
	2. `[6-8 chrs previous commit]..[6-8 chrs later commit]/HEAD` - compares two commits
10. removing file from the repo
	1. `git rm filename` - removes the file and apply change to staging, then we need to commit, we can copy it outside to keep it in either way
11. `git mv filename1.txt filename2.txt` -> renaming file, add the path to move it, because moving and renaming is the same thing
12. `git show [6-8 chars of the commit hash]` -> shows the commit changes
13. `git show/diff --color-words` -> gives changes in just colored words

#### Undoing changes
1. Resetting working files
	1. `git checkout -- filename` - get the last committed version of the file  without creating a new branch
2. Unstaging files
	1. `git reset HEAD filename` - to unstage the file, get it out of 'add'
	2. `git reset HEAD .` - undo staging
3. Amending the previous commit
	1. `git commit --amend` - add changes to the last commit without creating a new one
4. Undo changes, going to the previous commit
	1. *NB!* Undoing changes should be new commits!
	2. `git show [COMMIT HASH]` - shows changes in the commit
	3. `git checkout [COMMIT HASH] filename` - reverts previous version of a file
5. Revert a commit
	1. *Shortcut for the {4}*
	2. `git revert [COMMIT HASH]` -> creates a new commit as "undoing some changes"
6. Remove untracked files
	1. `git clean -n` -> shows what would be removed
	2. `git clean -f` -> removes unstaged files


#### Ignoring files

> Add `.gitignore` to the project directory

```gitignore
# It is a comment

# write down file names and paths to ignore,
# so you wouldn't have to commit them

filename.txt

videos/ # igonre all files in the directory
*?[aeiou][0-9] # use some basic regual expressions

*.php
!indev.php # ! -> negation, used to keep some files 
```

What you should ignore?
1. Compiled source code
2. Packages and compressed files
3. Logs and DB's
4. OS generated files
5. User-uploaded assets (PDFs, Images, Videos)

> You can find `github\gitignore` standard .gitignore files.

**Globally ignoring files:**
For user: `git config --global core.excludesfile 'pathto the file'`

**Ignore tracked files:**
1. `git rm --cached filename` -> removes cache of the file from  the git, so it could later be ignored.
2. After that `git commit` -> to make our file untracked for later as a commit.

**Track empty directories:**
1. Just add an empty dot file `.gitkeep`

#### MD info
```md
# Big heading
## Medium heading
##### TIny heading

* list utem 1
* list item 2
	* subitem
	* subs
* list item 3
	1. irdered subitem
1. Ordered lit item


**Bold text**
*italic*

[link text here](URL) text link
![Alt text](URL) Image link

To keep the formatting characters:
\*
\_
```

#### GitLab basics
GitLab is a web-based tool designed to help developers collaborate more effectively throughout each phase of the software development life cycle.

#### Further reading
1.  The article **[GUI Clients](https://git-scm.com/downloads/guis)** about built-in GUI tools for committing (reading time: **7 minutes**).
2.  The article **[Gitflow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow#:~:text=Gitflow%20Workflow%20is%20a%20Git,development%20and%20implementing%20DevOps%20practices.&text=The%20Gitflow%20Workflow%20defines%20a,framework%20for%20managing%20larger%20projects.)** about the workflow that helps with continuous software development and with implementing DevOps practices (reading time: **10 minutes**).
3.  The article **[GitLab Markdown](https://docs.gitlab.com/ee/user/markdown.html)** (reading time: **30 minutes**).



