# 101-Portfolio-Boilerplate-Boilerplate

This is a boilerplate code base for a portfolio website intended for a new developer to quickly begin building a website for themselves. After the "Merge Conflict" class lesson feel free to use it as a jumping off point for your last project: New Portfolio Website.

## Merge Conflict Instructions

To practice correcting merge conflicts we're going to work in pairs, create and work in separate branches, add a couple transformations to the web page, and make a pull requests.

### Part 1: Cloning the code, Creating a new repo, & Pointing the code at the new remote repo

1. Students pair up.
1. One of the students, we'll call Student A, will clone (NO FORK) this [101-Portfolio-Boilerplate-Boilerplate repo](https://github.com/AustinCodingAcademy/101-Portfolio-Boilerplate-Boilerplate/settings) into a place you usually work in.
1. Now go to GitHub and create a **NEW** public repo **without** a README called: " MyName-PartnerName-Portfolio-MergePractice " where `myName` equals Partner A's name and `PartnerName` equals Partner B's name.

    > *WHY? - We're creating this new repo so that you can push this cloned code into it and have your own repo shared between you and not forked off of ACA's repo.*

1. Partner A: Go back to the `101-Portfolio-Boilerplate-Boilerplate` folder in your terminal and run this command:

    > *NOTE 1: Make sure you're **inside** the right folder first!*

    ```console
      git remote set-url origin https://github.com/YOUR-USERNAME/MyName-PartnerName-Portfolio-MergePractice.git
    ```

    > *NOTE 2: Be sure to change our `YOUR-USERNAME` with your actual GitHub username.*

    > *NOTE 3: As well as change out `MyName-PartnerName-Portfolio-MergePractice` with your actual new empty repo's name. You can do this easily by clicking the "copy" button in the "clone" dropdown menu the same way you would normally clone another repo.*

    > *WHY?: - The last step you did was to [point the current code to be stored in your newly created repo](https://www.xenovation.com/blog/source-control-management/git/how-to-change-remote-git-repository) so YOU own it and NOT ACA.*

1. To finish this process you just need to confirm the folder is pointed at the right remote repo and then push the code to the remote repo!

1. Run this command: `git remote -v` to check what remote repo it's pointed at. The response you get should look just like the URL you pasted into the last command: `https://github.com/YOUR-USERNAME/MyName-PartnerName-Portfolio-MergePractice.git`.

    * If so, continue to the next step.
    * If not, repeat the previous step and try again.

1. Now run: `git push -u origin master` to push the cloned code into your new empty repo!! You're all set!

### Part 2: Creating a new CSS file + Branches

1. Partner A, create a new file called: `landingPage-transforms.css` in the CSS folder.
1. `git status, add, commit, push` that change.
1. Now share the link with Partner B so they can clone the repo.
1. Partner B, clone the repo.
1. Both partners should now create a new branch off of `master` to work in. Call them `partnerAname-transform-1` & `partnerBname-transform-2`.

### Part 3: Creating Animations & Transformations and Merging

Now is the time you both get to work together & individually. Your task is to create transitions for the `li` element for "Contact Information", "About", and "Portfolio" to `scale` up in size(transform) when hovered on and to increase `font-size` when clicked on(Animations).

  * `<li><a href="#contact-information">Contact Information</a></li>`
  * `<li><a href="#about-me">About Me</a></li>`
  * `<li><a href="#portfolio-pieces">Portfolio</a></li>`

1. Coordinate together on what class names or ids you'd like to use **but** decide on your **own** what size to scale and grow font-size with and what transition values you want to use on your own.
1. Work in your own branches.
1. Use the new `landingPage-transforms.css` to add your CSS rules.
1. When you've each satisfied the requirements `git status, add, commit, push`.
1. Go GitHub and create a pull request for your branch to be pulled into `master`.
1. Ask your partner to review the code with you. (Use Google Meet, breakout room, or Live-share to see each other's screen.)
1. Merge only one of the branches at a time.
1. When you've merged the first go to the second pull request together and work through the conflicts TOGETHER.

    > *You may use the online editor or VS Code. It's your choice.*

1. Once you both have worked through the conflicts, merge the branch and both of you should `git checkout master` & `git pull` the new changes. Now you both have a boilerplate website to begin with!!

## Repo Walk-through

This repo looks intimidating at first but be sure, you know enough skills to walk through this code and understand what's happening!!!

1. First we see code in the HTML like `<h1>{{YOUR NAME}}</h1>`. This is intended for you to replace it with your actual name.
1. Then we see code like: `<a href="#major-navigation" class="navigation-toggle-button">`. If you trace the class name in the CSS you'll see that it's using `transition` and `display` to hide or show other elements.
1. The JS file looks scary but it's also not. It's mostly handling the image gallery slide show (*line 12-109*) and creating a date at the bottom of the website. (*line 5 - 10*).
1. The CSS is broken into sections that help the developer navigate through. Read the code and see if you can gain some insights. You'll need to research `clear` and `float` since we've been using `display-flex`.
