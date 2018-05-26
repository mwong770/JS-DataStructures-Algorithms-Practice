https://www.browsersync.io
sudo npm install -g browser-sync

TO SERVE UP EVERYTHING IN DIRECTORY:
If nothing in it it will at least show us the directory
We say what files we want to watch for changes and reloads them when they change
"**/*" means watch any directory and anything in that directory

browser-sync start --server --directory --files "**/*"
--- shows list of files watching. Just click on one want to see. Now, as soon as save a change in the editor, it shows up on browser without having to manually reload/refresh browser.

git add . -> means add everything in the directory

git status -> will tell you what need to do next

WANT HIGH COHESION AND LOW COUPLING

HIGH COHESION - when smaller pieces of functionality are strongly related to each other within some code boundary (in some languages, this could be a class or a module or a function etc.) - how well does that one thing stick to doing just that one thing.

LOOSE COUPLING - least possible dependency of one component on another component - if change one component, don't have to change the other component

ViewModel - representation of the state of the view
		  - holds the data that's displayed in the view
		  - responds to view events, aka presentation logic
		  - calls other functionality for business logic processing
		  - never directly asks the view to display anything

ONE DISIGN PATTERN IS MVVM PATTERN:

VIEW (UI/PRESENTATION) - DATA BINDING - VIEWMODEL (PRESENTATION LOGIC) - MODEL (DATA/BUSINESS LOGIC)








