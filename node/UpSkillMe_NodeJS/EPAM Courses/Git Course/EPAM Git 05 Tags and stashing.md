  
Links:
- [Previous](EPAM%20Git%2003%20Undoing%20and%20ignoring%20changes.md)
- [Next](EPAM%20Git%2006%20Remotes%20and%20branching%20strategies.md)

Tags: #notes/web #sci/pro/tech/git #pcfix/tool/utility

Date: [20230205](../../../200%20Diary/205%20Day/20230205.md)
Time: 18:37:16
_____

#### Tags
Tag is a short message to decorate and later refer to some commit. It is not a different commit. It is really useful for catching an eye. We can simply use the tag compared to the using a hash.

```bash
git tag <tagname> # tag the last commit with some name
git tag -list # view the whole list of tags
git push --tags # push the changes in tags to the remote after pushing the tags
```

#### Stashing
![EPAM Git 05 Tags and stashing-1675620834646](../../../300%20Utils/305%20Attachments/EPAM%20Git%2005%20Tags%20and%20stashing-1675620834646.jpeg)

If we got a critical bug on the master branch, but we are working on some code on the feature branch. We need to switch branches, but in that case we would need to abandon the work we've completed so far. We don't want to commit, because our code is not done yet too.

So, here we can use stashing, we can save a code to the temporary stash.

```bash
git stash save "work in progress(some description)" # saving the tracked files and don't touch the untracked files at all
git stash list # view all the stashes we've got

git stash pop <identifier> # delete the demi-commit from the stash and apply it to the current folder
git stash apply <identifier> # apply the stahed changes without deleting the 

git stash drop # clear the stashed changes, clear the stash
```

