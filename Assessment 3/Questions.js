//Assessment #2 - NodeJS and ReactJs - 30th April

//NodeAPI
//1. Explain your knowledge of - statelessness, http, REST, spa and classical applications

//Statelessness is when a component doesn't have knowledge of previous interactions/pages, each interaction is treated separately.
//HTTP stands for HyperText Transfer Protol. It is stateless as each request is separate, saving information from requests must be done manually.
//REST stands for Representational State Transfer. It means a web service can handle standard HTTP requests. The client and server are separate.
//SPA stands for single page application. It is used to refer to web applications that have one single HTTP page and updates content on the page dynamically.
//Classical applications refer to applications that have multiple pages. What page gets returned depends on what the user is interacting with. They are inherently less
//  dynamic than SPAs and are generally slower since an entire page needs to be reloaded rather than components.MIT

//See NodeAPI folder for the following questions
//2. Create an express setup, with a capability to expose end points for restful api
//3. Create an API with name CreateUser as get verb and pass user info such as name, session, address and age as query param
//4. Save the information passed in #3 to a json file name userInfo in local

//React
//5. create a webpack setup, index html and one css file to show css in next questions (can use app.css from our project)

//See ReactApp folder

//6. how react renders dom in conservative manner - explain, also explain 

//React render DOM in a conservative manner through its use of the diffing algorithm. It creates a tree to compare the virtual DOM with the real DOM,
//  and by comparing these trees it can determine the minumum amount of changes necessary to get from real DOM to virtual DOM. Only parts that are
//  changed are updated.

//7. create a class component named - Success and show some quotes (messages) in it with h1,h2,h3 components

//See ReactApp folder, src/app/CommonComponents/SuccessComponent.js

//8. create a functional component SuccessChild, make it child of Success and pass Name and Address to it from Success

//See ReactApp folder, src/app/CommonComponents/SuccessChildComponent.js

//9. create SuccessStory as another component, pass this as props in SuccessChild from Success component

//See ReactApp folder, /src/app/CommonComponents/SuccessStoryComponent.js

//10. explain how virtual dom works and how it is coupled with state updates and state update API's

//Components render JSX, which react builds a virtual DOM tree from the JSX. React then compares this virtual DOM tree to the previous tree (current DOM)
//  and using the diffing algorithm it updates only what is necessary. State updates are using setState and forceUpdate state APIs. The setState function
//  calls the lifecycle methods such as shouldComponentUpdate. However, forceUpdate skips lifecycle methods and calls render, meaning shouldComponentUpdate is
//  not called. For example, if shouldComponentUpdate only returns true if a specfic variable, say "address" is different than the previous state: then setState
//  will call shouldComponentUpdate and if that variable is not different render() will not be called. On the other hand, forceUpdate will always call render and 
//  skip shouldComponentUpdate entirely.