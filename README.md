
Used Technologies versions:   
     -> react version - 12.1.1;         
     -> Node          - 14.16.0;       
     
To Run:    
     -> import the proj in IDE & open the cmd/terminal in the appropriate directory where node_modules/src available & hit below cmds.   
     -> npm install  
     -> npm start 
     
To Test & Coverage:                                     
     -> npm test      
     -> npm run test -- --coverage --watchAll=false
     
1) Views: Created the Upbox website in 3 different views as per given UI Figma wireframe view pixels;    
       -> Desktop view;      
       ->Tab view - 376px;     
       ->Mobile view - 768px;   

2) Folder/File structure:

    -Created component folder under src  to store all react js files
    -Created styles folder to store all css files (however all css files are compiled to single webpack css file, but created
        individual css file for easy readability & easy debugging , find the css files & to fix).
    -created asset folder to store all the images & logo under public folder.

3)  TopMenu.js & navbar.js files are responsible for displaying the top menu bar
     -> Instead of creating the static menu bar, created dynamic menu bar details using array to supply menu bar details & .map() to create each menu bar in UI template & which we can replace with api in future.

4)  Footer.js  are responsible for footer template

5)  HomeContainer.js is responsible for displaying courasel/gallery image & showcase steps containers.
        Below of gallery image Instead of creating static templates for works(1,2,3)
        created array of data & supplied data(works step deatails) which dynamically creates showcase containers instead static
        by this we can reuse the showcase containers 

6)  showcase.js , showcase1-container.js & showcase2-container.js
        responsible for creating middle template layout to display 1,2,3 works steps.
        created in component based structure so in future if possible to add more work steps we can use the same existing containers & just need to supply extra data/props & also in future we can replace the arraydata with api data by calling api to fetch details from backend.

7) Created the website by keeping in mind i,e optimizing, dynamic, reusable, zero console errors,warings & easy to enhance in future with backend api integration  


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
