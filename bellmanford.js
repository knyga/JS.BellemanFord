var Graph = function(N, M, edges) {
    this.N = N;
    this.M = M;
    this.vertexes = [];
    this.edges = edges;
};

Graph.prototype.bellmanFord = function(sourceId, destId) {
    this.isNegativeCicle = false;
    this.predecessors = {};

    for(var i = 0;i<this.N; i++) {
        this.vertexes[i] = Number.MAX_VALUE;
    }

    this.vertexes[sourceId] = 0;

    for(var i=0; i<this.N-1; i++) {

        for(var j=0;j<this.M;j++) {
            var edge = this.edges[j];

            if(this.vertexes[edge.to] > this.vertexes[edge.from] + edge.weight) {
                this.vertexes[edge.to] = this.vertexes[edge.from] + edge.weight;
                this.predecessors[edge.to] = edge.from;
            }
        }
    }

    //check negative cicle
    for(var j=0;j<this.M && !this.isNegativeCicle;j++) {
        var edge = this.edges[j];

        if(this.vertexes[edge.to] > this.vertexes[edge.from] + edge.weight) {
            this.isNegativeCicle = true;
        }
    }
};

var cs1 = new Graph(5, 8, [
    {from: 0, to: 1, weight: -1},
    {from: 0, to: 2, weight: 4},
    {from: 1, to: 2, weight: 3},
    {from: 1, to: 3, weight: 2},
    {from: 1, to: 4, weight: 2},
    {from: 3, to: 1, weight: 1},
    {from: 3, to: 2, weight: 5},
    {from: 4, to: 3, weight: -3}
]);
cs1.bellmanFord(0, 4);
console.log(cs1);

var cs2 = new Graph(3, 3, [
    {from: 0, to: 1, weight: 1},
    {from: 1, to: 2, weight: 2},
    {from: 2, to: 0, weight: -4}
]);
cs2.bellmanFord(0, 4);
console.log(cs2);

var cs3 = new Graph(5, 9, [
    {from: 0, to: 1, weight: 10},
    {from: 0, to: 2, weight: 3},
    {from: 1, to: 2, weight: 1},
    {from: 1, to: 3, weight: 2},
    {from: 2, to: 1, weight: 4},
    {from: 3, to: 2, weight: 8},
    {from: 2, to: 4, weight: 2},
    {from: 3, to: 4, weight: 7},
    {from: 4, to: 3, weight: 9},
]);
cs3.bellmanFord(0, 4);
console.log(cs3);