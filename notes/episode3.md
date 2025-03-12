# Episode 3 Notes

npx parcel index.html - this will create a development server for us and we are then able to run on localhost:1234. the command means that we are executing (npx) a package named parcel and the source file is index.html.

but it is possible to create scripts, so that we do not need to do this. You can create a npm script inside package.json

"dev": "parcel index.html", // this is for the development process.
"build": "parcel build index.html", // this creates a production build of the application and makes it ready for deployment.

so now I can just type npm run dev.
using these script to create a devserver and build. READ MORE HERE!

Go into package.json in a project if you want to run the project.

const heading = React.createElement("h1", {id: head"}, "Namaste React"); // actually hard to read

The code above is creating an react element which is an object, and when we render this object on to the DOM - it becomes html.
React.createElement => Object => HTMLelement(render).

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

But this piece of code is actually not good.

ReactDOM takes the element/object heading and push it to the browser. It will then replace everything that was inside the div id="root" with the new content from the object heading.

JSX (Javascript syntax which makes it easier to create React elements. React and JSX is two different things actually and React can be written without JSX. But JSX is what makes our lives easier when we work with React.).

JSX is not pure javascript. The JS engine does not understand JSX. But with the help of Parcel (Babel) we are getting through. Because the JSX is getting transpiled before it reaches the JS engine.

JSX is not HTML, it is just html-like syntax.

Babel - opensource javascript compiler. Babel is what is transpiling the JSX code so that the JS engine understands it. It converts the code so that the JS engine know what it is.

React.createElement gives us an React Element which is also a js object, and then this element/object is rendered on the dom as html.

On the other hand when we work wit JSX,
JSX => React.createElement => React Element / JS object => Rendered on the DOM as an html element.
Also here Babel is converting the JSX code to React.createElement.

Classbased components - OLD way
Functional components - NEW way (Uses JS functions).

const HeadingComponent = () => {
    return ...
}
This is a HeadingComponent which is a functional component. It is basically just a js function and it return some piece of jsx code to us.

Component composition is basically just composing two components inside each other.

Writing Javascript inside of JSX. 