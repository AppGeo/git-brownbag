Setup

* bare repo created at "\\taunton\git-bare\git-brownbag" for demonstration/experimentation

Outline

* local vs remote workflow

    * commits/branches/tags can all exist locally and remotely

    * `clone` lets you make a local copy of a repository

    * you can name remotes and have multiple

        * origin is the default if you clone a repo

        * upstream is often used if need to track an upstream repo

            * e.g. if we have a geonode repo on bit bucket then that would be origin, but the main geonode repo on github we could put in as upstream to merge in their changes

    * you can push things from local repo to a remote one

        * command line `git push remote branch`

        * -f forces it

            * good: allows you to ‘rewrite history’ like merge 5 small commits into one big commit

            * bad: allows you to push to a remote that has more commits then yours, (i.e. there are changes you need to pull in before you can push)

    * you can fetch a remote repo

        * command line `git fetch remote`

    * and you can pull changes from a remote repo to a local one (pull is just fetch + merge)

        * command line `git pull remote branch`

* staging

    * reviewing code while staging is good practice

        * prevents committing things that should be (git)ignored (.gitignore)

        * prevents committing debugging code

    * staging individual files

    * tracked files (files that have been committed in the past)

    * staging parts of a file (select lines) (advanced)

    * on command line 

        * `git add file1 [file2 etc]`

        * `git rm file1 [file2 etc]`

        * `git add .` adds all changed files

        * `git add -u` will remove deleted files

* commits

    * commit is not the same as checking in

    * committing is like voting, early and often

    * you can clean them up (squash them) later

    * on command line `git commit`

        * -m ‘message’ to add a message right there, if you don’t it’ll bring up a text editor

        * --amend if you want to amend the previous commit to include this data

        * -a automatically adds all changes to tracked files

* stashing

    * like a temporary commit

    * only exists locally

    * helpful either before a merge, or if you have to address and deploy a bugfix while in the middle of something else

    * you can have multiple stashes

    * only applies to tracked files (i.e. not files that are in the .gitignore or have never been staged)

    * command line 

        * `git stash`

        * bring back the most recent stash with `git stash apply`

* branches

    * know your ABBs always be branching

    * local branches give you the freedom to experiment

    * lets you separate out different directions

    * special names

        * ‘master’ is the default name for your main branch

        * ‘develop’ is used in this office for the branch we are developing on

        * ‘gh-pages’ is a branch on github that is automatically turned into a website (so you may see libraries that use this as the default branch)

    * command line

        * `git checkout name`

        * -b if you want to create a new branch

        * `git branch -d name` to delete a merged branch

            * `git branch -D name` is the same but won’t throw an error if you have unmerged stuff

* merging

    * brings changes from branch into other branch

    * ‘merge conflict’ if you both edit the same part of the same file

    * THIS CAN BE SCARY

    * but there are tools to resolve this

    * worst case scenario you can just open it in a text editor

    * format 

```
    stuff we both agree on
    stuff we both agree on
<<<<<< words
    stuff I have 
    stuff I have
=======
    stuff you have
    stuff you have
>>>>>>>words
   stuff we both have
```


* tags

    * human readable name for a commit

    * marks important parts in the history (milestone completions, releases like 0.9.5 or 1.0.0-RC.1, etc.)

    * can grab tarballs/zips of tags easily off bitbucket or github

    * command line 

        * `git tag name`

        * `git tag -d name` deletes a tag iif you screw up (and haven't pushed)