# N0de tree
Generate a node tree with simple JS, this can be used to visualize data or create teams. the usage is simple
1. download and import [script](./scripts/tree-node-script.js)
```
    <script src="./scripts/tree-node-script.js"></script>
```
2. Add canvas to html
```
    <canvas id="myCanvas" width="1000" height="1000%">Your browser does not support the HTML canvas tag.</canvas>
```
3. Format data and execute function
```
    //load canvas
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

    //prepare data to graph
    var data = {
        // PARENT: [CHILD1, CHILD2]
        Daniel: ["Peter", "John", "Khor"],
        Jonathan: ["Alice", "Jana"],
        Peter: ["Daniel", "Jonathan", "Khor"]
    }
    //execute script with canvas data and data to graph
    generateTree(ctx, data)
```
4. Have fun