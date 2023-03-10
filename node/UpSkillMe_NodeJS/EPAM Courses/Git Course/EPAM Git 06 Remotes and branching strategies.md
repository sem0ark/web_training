  
Links:
- [Previous](EPAM%20Git%2005%20Tags%20and%20stashing.md)

Tags: #notes/web #sci/pro/tech/git #pcfix/tool/utility

Date: [20230205](../../../200%20Diary/205%20Day/20230205.md)
Time: 19:26:26
_____

![EPAM Git 06 Remotes-1675621614708](../../../300%20Utils/305%20Attachments/EPAM%20Git%2006%20Remotes-1675621614708.jpeg)

When we are working with some project we always have to repos: git on the local machine and the repo on some server.

```bash
# Adding the remote repo
git remote add <name> <url>
# example
git remote add origin git@github,com:user/repo.git

git remote remove <remotename> # to delete preexisting remote

# View 
git remote -v # view the list of connected remotes
git remote show <name> # view the info about some specific remote

git push # push changes to the remote
git fetch # get the updates from the remote
```


#### Branching Strategies
>[!tip]- Centralized strategy
> ![EPAM Git 06 Remotes and branching strategies-1675622832045](../../../300%20Utils/305%20Attachments/EPAM%20Git%2006%20Remotes%20and%20branching%20strategies-1675622832045.jpeg)
> Everyone is working on the same master branch. That's all.
> It is really simple and can be used for something requiring rapid short period development such as hackathon.
> ![EPAM Git 06 Remotes and branching strategies-1675622941379](../../../300%20Utils/305%20Attachments/EPAM%20Git%2006%20Remotes%20and%20branching%20strategies-1675622941379.jpeg)

>[!tip]- Feature-branch workflow
> ![EPAM Git 06 Remotes and branching strategies-1675622967047](../../../300%20Utils/305%20Attachments/EPAM%20Git%2006%20Remotes%20and%20branching%20strategies-1675622967047.jpeg)
> One feature for the app - one feature. The command is using the same feature-managing app, so every feature has its own name and can be quickly found.

>[!tip]- Gitflow
> ![EPAM Git 06 Remotes and branching strategies-1675623040482](../../../300%20Utils/305%20Attachments/EPAM%20Git%2006%20Remotes%20and%20branching%20strategies-1675623040482.jpeg)
> Here we don't have a bunch of branches here and there, but a bit modified version:
> 1. We have *master* branch for the users of our project.
> 2. *development* branch for the pre-release for the next version in the master branch.
> 3. A big number of *feature* branches to add to the development.
> [Link to the post about gitflow](https://nvie.com/posts/a-successful-git-branching-model/)
> Gitflow - system where we use some standard branches + optional.

>[!tip]- Integration manager workflow
> It is created for either super big groups or too separated ones, so we would create a hierarchy of commit and pushes from one repos to other.
> ![EPAM Git 06 Remotes and branching strategies-1675623479332](../../../300%20Utils/305%20Attachments/EPAM%20Git%2006%20Remotes%20and%20branching%20strategies-1675623479332.jpeg)
> ![EPAM Git 06 Remotes and branching strategies-1675623628794](../../../300%20Utils/305%20Attachments/EPAM%20Git%2006%20Remotes%20and%20branching%20strategies-1675623628794.jpeg)
> We would have a group of separate remotes, so some users would commit to their repos and push changes only to next in the hierarchy.

>[!tip]- Forking workflow
> ![EPAM Git 06 Remotes and branching strategies-1675623803585](../../../300%20Utils/305%20Attachments/EPAM%20Git%2006%20Remotes%20and%20branching%20strategies-1675623803585.jpeg)
> It is mostly create the open source projects. Some the developer of the project provides the functionality to fork the repository of the developer.
> Some other developers fork and change the code, create a pull request and send it to the developer, who would check the requests and add it to the main repository.


#### Extras
![EPAM Git 06 Remotes and branching strategies-1675624007153](../../../300%20Utils/305%20Attachments/EPAM%20Git%2006%20Remotes%20and%20branching%20strategies-1675624007153.jpeg)

Check out the books on Git, such as Pro Git (full comprehensive guide).

Additional commands:
```bash
git config --global user.name <name> # globally set your name
git config --global user.email <email> # globally set your email
git config --global core.editor "Path to your preferred editor" # globally set your preferred editor to add commits and merge

git blame # select the file and see who edited it
git bisect # find the commit that contains the issue with the code

# a bit modified version of logging
git log --pretty=oneline
git log --pretty=format: "%h %s" -graph

# Create our own git command to see the last commit
git config --global alias.last 'log -1 HEAD'

git log master..experiment
# compare two branches and log the difference between them

git filter-branch --tree-filter 'rm -f password.txt' HEAD
# it is a dangerous command that would run the script on every commit on every branch to e.g. delete the file with passwords

git rerere
# re-reuse recorded resolution
# we can record some patterns of merging strategies and apply them later

git submodule
# we can creat git repos embedded into other repositories
```

Further reading:
Training Presentation: [DevTestOps-Version_Control_with_Git.pdf](https://elearn.epam.com/assets/courseware/v1/d8b3970d06d567a94e0bb179b8d84acb/asset-v1:EPAM+VCG+ENG+type@asset+block/DevTestOps-Version_Control_with_Git.pdf)

Git official website: [https://git-scm.com/](https://git-scm.com/)

The book "ProGit", second edition, in Russian: [https://git-scm.com/book/ru/v2](https://git-scm.com/book/ru/v2)