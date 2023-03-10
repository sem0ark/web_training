  
Links:
- [Previous](EPAM%20Git%2002%20GitHub,%20GUI%20and%20basic%20commands.md)
- [Next](EPAM%20Git%2004%20Branching%20and%20merging.md)

Tags: #notes/web #sci/pro/tech/git #pcfix/tool/utility 

Date: [20230203](../../../200%20Diary/205%20Day/20230203.md)
Time: 18:29:44
_____

How to undo any changes? We should first understand what command to use based on the *level of undoing*.

```bash
### Working directory
git checkout -- file.txt # Undo one file
git checkout . # Undo all the files
git clean -xdf # remove unstaged files
# -x ignore potential .gitignore rules
# -d also remove directories
# -f actually remove the files

# all modifications would be changed to the staged ones
# Be careful, because it is deleting all changes one-way

### Staging area (index, still not commited)
git reset -- file.txt
# if we need to pull the files out of staged

### Local branch (undoing the commit)
git reset HEAD^^ #or HEAD~2
# ears = how many commits we need to move back
# the entire version/commit is wrong and needs to be deleted
# moves resetted data to the file system (b ydefault it is using mixed strategy)
git commit --amend -m "Commit message"
# if I need to just add something to/update the previous commit

### Remote repository
git revert <sha1 of the commit>
# we should use it if we've oushed some changes and now we need to get rid of it
# we would do a new commit, which would negate the changes we did previously
# we would be moved to the vi editor window, write some info to the commit and quit with the save
# "revert"'s can also be reverted ;D
```

![EPAM Git 03 Undoing changes-1675446725115](../../../300%20Utils/305%20Attachments/EPAM%20Git%2003%20Undoing%20changes-1675446725115.jpeg)

Be careful with --hard, it would disappear entirely.

#### .gitignore
With .gitignore file we can specify what files shoud be tracked by git and which shouldn't.

```gitignore
# ignore data.txt
data.txt

# no .log files
*.log

# but do track error.log even though you're ignoring .log files above
!error.log

# only ignore TODO file in the current directory, not subdir/TODO
/TODO

# ignore all files in build/ directory
build/

# ignore doc/notes.txt, but not doc/server/arch.txt
doc/*.txt

# ignore all .pdf files in the doc/ directory
doc/**/*.pdf
```

