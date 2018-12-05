# react-redux-1

This is a react/redux tutorial. I had to make a few changes to get it working, namely 

- resolve an es-lint conflict 
I think during this step: 
> npm install redux react-redux redux-thunk --save
A different version of eslint is installed that conflicts with an already installed version. 
By deleting package-lock.json and node_modules and re-installing I got some helpful hints in 
the error message. Namely to run npm ls eslint which showed me in the dependency where the two 
instances were. I removed one of them (the one indicated by npm ls that was not needed) and that
seems to have resolved the issue. 

- some simple casing changes in file names. 
In the tutorial, some files are named with camel case (e.g. "simpleAction.js") but are import as
"SimpleAction"; maybe the casing was resolved in some other version of react, or maybe its a setting. 
Anyways, I just changed the names to cameCase. 

This little app is based on this article: 
https://medium.com/backticks-tildes/setting-up-a-redux-project-with-create-react-app-e363ab2329b8
