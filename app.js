/*
    <div id="parent">
        <div class="child1">
            <h1>Heading 1</h1>
            <h1>Heading 2</h1>
        </div>
        <div class="child2">
            <h1>Heading 1</h1>
            <h1>Heading 2</h1>
        </div>
    </div>
*/

const heading = React.createElement("div",{ id: "parent"}, 
    [React.createElement("div", {id: "child1"}, 
        [React.createElement("h1", {}, "Heading 1"),
         React.createElement("h1", {}, "Heading 2")
    ])],
    [React.createElement("div", {id: "child2"}, 
        [React.createElement("h1", {}, "Heading 1"), 
        React.createElement("h1", {}, "Heading 2")])]);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);