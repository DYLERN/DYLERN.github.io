var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var gl;
var init = function () {
    var canvas = document.getElementById("draw-canvas");
    gl = canvas.getContext("webgl");
    var colorWall = [0.811, 0.725, 0.592];
    var colorRoof = [0.647, 0.164, 0.164];
    var colorDoor = [0.388, 0.372, 0.749];
    var baseVertices = __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([
        -0.4, -0.6
    ], colorWall), [
        0.4, 0.2
    ]), colorWall), [
        -0.4, 0.2
    ]), colorWall), [
        -0.4, -0.6
    ]), colorWall), [
        0.4, -0.6
    ]), colorWall), [
        0.4, 0.2
    ]), colorWall);
    var roofVertices = __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([
        -0.5, 0.2
    ], colorRoof), [
        0.5, 0.2
    ]), colorRoof), [
        0.0, 0.7
    ]), colorRoof);
    var doorVertices = __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([
        -0.1, -0.6
    ], colorDoor), [
        0.1, -0.2
    ]), colorDoor), [
        -0.1, -0.2
    ]), colorDoor), [
        -0.1, -0.6
    ]), colorDoor), [
        0.1, -0.6
    ]), colorDoor), [
        0.1, -0.2
    ]), colorDoor);
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(0.75, 0.85, 0.8, 1.0);
    var program = initShaders(gl, "vertex-shader", "fragment-shader");
    gl.useProgram(program);
    // Vertex positions
    var houseVertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, houseVertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(concat(baseVertices, roofVertices, doorVertices)), gl.STATIC_DRAW);
    var vPosition = gl.getAttribLocation(program, "vPosition");
    var vColor = gl.getAttribLocation(program, "vColor");
    gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 5 * Float32Array.BYTES_PER_ELEMENT, 0);
    gl.vertexAttribPointer(vColor, 3, gl.FLOAT, false, 5 * Float32Array.BYTES_PER_ELEMENT, 2 * Float32Array.BYTES_PER_ELEMENT);
    gl.enableVertexAttribArray(vPosition);
    gl.enableVertexAttribArray(vColor);
    render();
};
var render = function () {
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLES, 0, 15);
};
var concat = function () {
    var arrays = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arrays[_i] = arguments[_i];
    }
    var outArray = [];
    arrays.forEach(function (array) {
        outArray = outArray.concat(array);
    });
    return outArray;
};
