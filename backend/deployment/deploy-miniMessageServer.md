# How to deploy with Railway from GitHub

There are multiple ways to deploy to Railway using: GitHub connect, CLI,
and Docker image.

I chose the GitHub connection method.

1. Make sure that a Git repo is set up properly for the project. In my
   case, my project exists as a subtree inside this repo. See the file
   [[add-subTree....md]] on my main Obsidian vault for more instructions
   on how this was done.

2. Select the Git repo from Railway UI. Some configurations may be
   needed.

3. Generate a random domain: _Settings > Networking > Generate domain_
