Installation Guide
1) Download the latest node version from https://nodejs.org/en/download/ .
2) Election_scoreboard_app is a GitHub project.
a) If you choose to install GitHub desktop and Git Shell then the project could be
downloaded using command “git clone
https://github.com/soumya-sundar/election_scoreboard_app.git ” in Git shell. GitHub
downloads are available here - https://desktop.github.com/
b) If you choose not to use GitHub tools you could simply download and extract the project
from the link - https://github.com/soumya-sundar/election_scoreboard_app
3) The App uses MongoDB hence MongoDB installation is essential. Downloads are available in
https://www.mongodb.com/download-center#community .
4) After extracting the project, navigate to the project root path and locate package.json file. This
file contains all the necessary libraries/packages to run the application. Using your preferred
terminal ( i.e., Git shell or cmd prompt) navigate to the project root path and run “npm install”
command. After successful installation you will be able to find node_modules folder in the same
path.
5) Run the following commands to start the application -
a) Start MongoDB server - “npm run mongo”
b) Load “Election-results” in MongoDB. A collection named ‘constituency’ will be created.
This command should be run only once - “npm run loadDB”
As soon as the Mongo collection is created the process can be stopped.
c) Start Server side Node Express program - “npm run server”
d) Start Client side program - “npm run client”
6) Open http://localhost:3000/ in your browser.
Click on the play button to start processing the election results.