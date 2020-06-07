/*
    * Author: Daniel Rosel
    * Date: June 7 2020
*/
function generateTree(ctx, data) {
    var yParent = 50    
    var yChild = 150

    var canvasH = 500
    var canvasW = 1000

    var xParent = canvasW/2

    var initalNodeX = canvasW / 2
    var initalNodeY = 40

    for (var parent in data) {
        console.log(parent)
        console.log(data[parent])
        plotInitialNode(xParent, yParent, ctx, parent)

        var subNodesDist = canvasW / (data[parent].length + 1)
        var subNodesDistInitial = canvasW / (data[parent].length + 1)

        for (var child in data[parent]) {
            plotNode(subNodesDist, yChild, ctx, data[parent][child])
            plotLine(xParent, yParent, subNodesDist, yChild, ctx)
            subNodesDist+=subNodesDistInitial
        }
        yParent += 200
        yChild += 200

    }
}

function plotNode(x, y, ctx, name) {
    ctx.beginPath();
    ctx.arc(x, y, 40, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.font = "15px Arial";
    ctx.textAlign = "center";
    ctx.fillText(name, x, y);
}

function plotInitialNode(x, y, ctx, name) {
    ctx.beginPath();
    ctx.arc(x, y, 40, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.font = "15px Arial";
    ctx.textAlign = "center";
    ctx.fillText(name, x, y);
}

function plotLine(x1, y1, x2, y2, ctx) {
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();

}
