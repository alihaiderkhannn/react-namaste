const heading = React.createElement(
"h1",
{className: "heading"},
"Hello World from React!");

// the above are the props. 

console.log(heading); //this returns a js object. a react element.
        
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);