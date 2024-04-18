 Notes for the namsate react js
 <script>
     const heading =    document.createElement("h1");
     heading.innerHTML = "Hello world";
     const root = document.getElementById("root");
     root.appendChild(heading);``
    </script>
    const heading  =  React.createElement("h1",{id:"heading"},"Hello world from react");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

~version “Approximately equivalent to version”, will update you to all future patch versions, without incrementing the minor version. ~1.2.3 will use releases from 1.2.3 to <1.3.0.

^version “Compatible with version”, will update you to all future minor/patch versions, without incrementing the major version. ^1.2.3 will use releases from 1.2.3 to <2.0.0.

#parcel
-dev build
-local server
-HMR = hot Module replacement -refresh karna tha
-File watching algorthim - written in c++
-catching fasting the build -next build in faster
-Image optimization
-Minification
-Bunding or bundler
-Compressing your file
-Consistent hashing
-Code spliting
-differential bundling -to support  older versions of the browser
-Diagonstic  = beautifull diagonstic of the errors
-Error handling
-SSL feature also provided
-Tree shaking algorthim -remove the unused code for you.
-different dev and prod buildes


Caret is used and tidle


Example of react
// const heading  =  React.createElement("h1",{id:"heading"},"Hello world from react");
import  React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child"},[React.createElement( "h1",{},"This is a namsate react "),
React.createElement( "h1",{},"I am a h2 tag")
]
)],
[React.createElement("div",{id:"child2"},[React.createElement( "h1",{},"I am a h1 tag"),
React.createElement( "h1",{},"I am a h2 tag")
]
)]

);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

Example of the react js
const heading  = React.createElement("h1",{id:"heading"},"Hello from namsate react course");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

node module is a databses
Package json and package lock json keeps track exact track of the version
Parcel is dependent on all the depencies



// const heading  =  React.createElement("h1",{id:"heading"},"Hello world from react");
import  React from "react";
import ReactDOM from "react-dom/client";

//React.createElement = >ReactElement-JS Object =>HTMLElement(render)
//JSX is not html in JS
//JSX HTML- like syntax or XL-syntax
//JSX(Transplied before it goes to JS Engine) -Parcel -Babel
//Babel covert the code that react will understand
//JSX =>Babel transplies it to=>React.createElement = >ReactElement-JS Object =>HTMLElement(render)
//babel converting the JSX into React create Element   
//babel is a javascript compiler 
//babel transplied into e6 features for e6 features
// const jsxHeading = <h1 id="heading"  className="head">Namsate from react js using jsx</h1>;
//React element
const   title = (
    <div>
<h1 id="heading"  className="head">Namsate react by using using jsx
</h1>
<h2>
    Test two
</h2>
</div>

);
//React component
//Two types of the component
//Class component
//Functional component
//Component compositions
const numbers = 10000;
const HeadingComponent = ()=>{
return <div className="container">
    <h1>Namsate React functional component</h1>
   {title}
    </div>
};
const HeadingComponent2 = () =><h1 className="heading">Namsate React functional component</h1>;


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(< HeadingComponent/>);



React is a fast due to effective dom mapluation because the virtual dom
Virtual dom tags javascipt reperenattion
Diff algorthim

Render cycle is fast.




const arr = useState(resList);
Array destruction
Array on fly
const listOfArr = arr[0];
const setListArrRest= arr[1];

Monolith All code the api ui db connection  auhtenication  sms in  smae project
Micro services Different  articheture
Separate project br ui  auht sm authenication is called as
Separation of concerns
Single responsobiltiy 
Different services are talk to each other
UI MICROSERVICE  you can different tech stacks


Loads ->API -> Render
        500ms

Loads->Render-> API => Render

UseEffect hook 
Hook is a normal  javascript functions
It has use specific  function 

Useffect is a normal function 
Two arguments
arrow function callback function

render cycle is finshed 
Then call the callback function is called
Deepoedncy array

CROSS policy  Through  youtube read karna hai

//Optionally chaining 

Shimer Ui
We load the fake page until showing
//Condition rendering
rendering based on the  rendering

whenever the state varaiable changes Render the header component
All update values are there.It will different old virtual and new virtual DOM. Differential algorthim are there.
Reconalition alogorthim trigger again 
Why react is fast.

Local state variable changes
React is rendered

whenver state variable variables udate , react triggers a
Reconciliation, cycle (re rendering the components) take place 
virtual object reprenstation jsx
React fiber 
Reconciliation, in the context of React, is the process of determining how to update the Document Object Model (DOM) to match the most recent state of a React component.
Config driven UI
Gives you data for different locations
useEffect (()=>{
},[])
Useffect has two arguments 
first callback functions.
second dependncy array.

use effect is called everytime after every render of the compoenent

use effect without dependcy array it will render everytime when the
component rendered.
//if no depency array => useeffect is called on every render
//if dependcy array is empty [] = > useEffect is called on 
inital render(just once)

// useEffect(()=>{
console.log("useffect is calling");
    },[btnName]);
    if dependency  array is [btnName] => called everytime btnName is upadted 

    Hook is function at end

React router dom give access important hook useRouteError
Outlet will filled with children according to path what page we are
is a tunnel all the chidren goes into it.
Super react give Link from react-route-dom

Two types of routing in web app
client side routing
Compoent are getting changed
Server side routing

Dynamic routing 

Link is a component which given by react router dom
Behind seens the link using a anchor tag

Functional component is a function which return some jsx
Class based component it is normal class 
rednder() return some jsx
The purpose of using the super constructor with a props argument is to allow a component to inherit the properties of its parent component and also pass in additional properties as arguments to the component.
Loading the class based component  you are creating the instance of the class

componentDidMount
It is used for  making the api calling
Why we are using for compoentDidMount for api call
Quiclky render the compoent then making  the api call

Life cycle of react js
Parent constructor
Parent render

Chidren one constructor
chidren one render

chidren two constructor
children two constructor 
Batch process are done
batch process for children for 
DOM manilpution very expensive
-DOM Updated in single batch
commit 
chidren one componentDidMount()
chidlren two componentDidMount()
parent  componentDidMount()

/***
*Constructor(dummy)
*Render (dummy)
*<Html>  (dummy)
*Component Did Mount
*<API CALL>
*this.setState
*Mounting state is finshed
*
*--Update
*render(API DATA)
*HTML (NEW API DATA)
*
*componentDidUpdate()
*
*
***/

useEffect(()=>{
})  after every rendered when the component is update

useEffect(()=>{

},[]) It will call only once when the compenet is renderd

useEffect(()=>{

},[count])
Everytime the count upadate the useffect is called

single responsibility principle

When you are testing this small the compoenents
Distrubting your code into smaller peices 
smaller components
-Modular
-Tesable

Hook Uility function normal function which return some jsx

useEffect(()=>{

    },[]);
    It will be excuted only once

    Small bundling is known as chunking
    // code spliting
    //dynamic budling
    //on demand laoding
    //smaller logic chunks
    //lazy laoding
    //on demand loading
    when the bundle size is increased we used
    the
    // code spliting
    //dynamic budling
    //on demand laoding
    //smaller logic chunks
    //lazy laoding

    lazy is a function given by react js


How to readuce the bundle size  of the react js 
//chunking
//Code spliting 
//Dynmaic Budling
//Lazy laoding
//on demand laoding
//dynamic import

Different UI --
Ant desgin
chakra UI
Material UI
SASS
SCSS
style compoenets used by uber
Tailwind CSS

Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.

Installing the tailwindcss
npm install -D tailwindcss postcss
PostCSS is a powerful tool for transforming CSS with JavaScript plugins

Invoking the tailwindcss
npx tailwindcss init
created new file as tailwind.config.js file

Tailwind CSS is very lightweight

Higher order compoenets
Higher order compoenets is a function takes a compoenets and return the compoenets 
Higer order compoents enchances the feature in compoenets and return back the
compoenets 

There are two layers in application
UI layer
Data layer 
Data layer contains states, props and local  varaiables




