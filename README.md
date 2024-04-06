 Notes of the namsate react js
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