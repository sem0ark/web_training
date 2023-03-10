  
Links:
Tags: #notes/web #sci/pro/tech/git #pcfix/tool/utility

Date: [20230205](../../../200%20Diary/205%20Day/20230205.md)
Time: 13:17:31
_____

#### Branching concept
Branching - version control feature in Git, we can add different versions of the application, to store different stages of the app and later merge them one into another.

Example of branching in Git repo:
![EPAM Git 04 Branching and merging-1675599506568](../../../300%20Utils/305%20Attachments/EPAM%20Git%2004%20Branching%20and%20merging-1675599506568.jpeg)
As we can see the branching it mostly lineal.

After some of the stage of the development and testing of the feature branch it is merged to the next *pre-release branch* for further development. After all the testing pre-release is merged to with the master branch.

#### Types of merge

Fast-forward merge:
1. We have the branch `master` with changes A,B,C and the branch feature with the next changes D,E,F going after A,B,C.
2. master HEAD -> C, feature HEAD -> F
3. To fast-forward the merge we just place the master HEAD pointer to the HEAD of feature. So, the graph looks like: ![EPAM Git 04 Branching and merging-1675600001204](../../../300%20Utils/305%20Attachments/EPAM%20Git%2004%20Branching%20and%20merging-1675600001204.jpeg)

We would see the message `Fast-forward` after merging like `git merge feature` while being on the master branch.

Non fast-forward merge:
1. We have the branch `master` with changes A,B,C, *D* and the branch feature with the next changes F,G,H going after A,B,C.
2. master HEAD -> D, feature HEAD -> H
3. Git creates additional commit X, that shows the process of merge of two branches, to keep the previous commits in place. ![EPAM Git 04 Branching and merging-1675600291640](../../../300%20Utils/305%20Attachments/EPAM%20Git%2004%20Branching%20and%20merging-1675600291640.jpeg)

Mentioned commands:
```bash
git checkout <name of the branch> # switches to another branch
git branch <new branch name> # add new branch starting from the current one to the git repo
git merge <branch to merge> # merge the branch to the current branch
```

#### Conflict solving
If we are trying to merge some two branches. Sometimes when the same files are changed in two different branches, git cannot decide which one to keep and which to delete, so we usually need to specify it manually.

If we try to merge two conflicting files we would first get an error, then in the code we would see:
```
some code
the is the same
in the first and second
files;
<<<<<<<< HEAD
some code from the branch
we are currently in
========
# ^ this parts wouldn't compile in any languages, so we would see them immeadiately
some code from the merging branch
>>>>>>>> feature
```

If we would run the status command we would see the conflicting files in the part unmerged files.

We can run `git merge --abort` if we wouldn't like to do the merging now and want to just return everything back. Else we would sort all the conflicts, make a new commit and call it a day or use `git merge --continue` (it works in the same way).

1. `git merge --abort` -> abort merge
2. `git checkout [--Xours/--Xtheirs]` -> just select one of the branches as the best one, so any conflicts would be just selected from one of the branches
3. `git diff` -> resolve manually, check all the conflicting parts
4. `git revert <sha>` -> Undo merge
5. User merge tool -> used for solving any changes between complicated files such as Excel sheets.

**Avoiding conflicts**:
1. Short commits
2. No edits to whitespaces
3. Merge often

#### Rebase for synchronizing
It is another way to manage our branches. Consider this example:
The `master` branch keeps changing and we are still working on our feature which is not ready yet for merge with the master branch, but we want to somehow update only our code. Then we should use the *rebase* command.
It changes the parent of the first commit in our branch.

![EPAM Git 04 Branching and merging-1675618027021](../../../300%20Utils/305%20Attachments/EPAM%20Git%2004%20Branching%20and%20merging-1675618027021.jpeg)

**NB!** It is also a dangerous command, so don't use it for public repos, only your local repo. 

![EPAM Git 04 Branching and merging-1675618216552](../../../300%20Utils/305%20Attachments/EPAM%20Git%2004%20Branching%20and%20merging-1675618216552.jpeg)

When you shouldn't perform the rebase:
Don't rebase into public branches, we can break the commit history, because it's shifting something in the middle.

#### Cherry-pick
It is very simple and is used mostly with rebase, but it is really not often used.
It is when we really want to grab some commit from any other branch to our own branch, so it is called a `cherry-pick`
![EPAM Git 04 Branching and merging-1675618385668](../../../300%20Utils/305%20Attachments/EPAM%20Git%2004%20Branching%20and%20merging-1675618385668.jpeg)
![EPAM Git 04 Branching and merging-1675618399066](../../../300%20Utils/305%20Attachments/EPAM%20Git%2004%20Branching%20and%20merging-1675618399066.jpeg)

