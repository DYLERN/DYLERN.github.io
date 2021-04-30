var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var gl;
var init = function () {
    var canvas = document.getElementById("draw-canvas");
    gl = canvas.getContext("webgl");
    var colorFront = normalizeRgb(193, 128, 255);
    var colorRight = normalizeRgb(255, 136, 128);
    var colorBack = normalizeRgb(128, 255, 162);
    var colorLeft = normalizeRgb(254, 220, 129);
    var colorBottom = normalizeRgb(255, 145, 0);
    var colorRoofFront = normalizeRgb(130, 0, 250);
    var colorRoofRight = normalizeRgb(255, 17, 0);
    var colorRoofBack = normalizeRgb(0, 255, 69);
    var colorRoofLeft = normalizeRgb(252, 186, 3);
    var colorDoor = normalizeRgb(0, 0, 0);
    var colorWindow = normalizeRgb(117, 170, 255);
    var cubeVertices = __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([
        // Walls
        -0.4, -0.4, -0.4
    ], colorFront), [
        -0.4, 0.4, -0.4
    ]), colorFront), [
        0.4, 0.4, -0.4
    ]), colorFront), [
        -0.4, -0.4, -0.4
    ]), colorFront), [
        0.4, 0.4, -0.4
    ]), colorFront), [
        0.4, -0.4, -0.4
    ]), colorFront), [
        -0.4, 0.4, -0.4
    ]), colorRight), [
        -0.4, 0.4, 0.4
    ]), colorRight), [
        -0.4, -0.4, 0.4
    ]), colorRight), [
        -0.4, 0.4, -0.4
    ]), colorRight), [
        -0.4, -0.4, 0.4
    ]), colorRight), [
        -0.4, -0.4, -0.4
    ]), colorRight), [
        -0.4, -0.4, 0.4
    ]), colorBack), [
        -0.4, 0.4, 0.4
    ]), colorBack), [
        0.4, 0.4, 0.4
    ]), colorBack), [
        -0.4, -0.4, 0.4
    ]), colorBack), [
        0.4, 0.4, 0.4
    ]), colorBack), [
        0.4, -0.4, 0.4
    ]), colorBack), [
        0.4, -0.4, -0.4
    ]), colorLeft), [
        0.4, -0.4, 0.4
    ]), colorLeft), [
        0.4, 0.4, 0.4
    ]), colorLeft), [
        0.4, -0.4, -0.4
    ]), colorLeft), [
        0.4, 0.4, 0.4
    ]), colorLeft), [
        0.4, 0.4, -0.4
    ]), colorLeft), [
        // Floor
        -0.4, -0.4, -0.4
    ]), colorBottom), [
        -0.4, -0.4, 0.4
    ]), colorBottom), [
        0.4, -0.4, 0.4
    ]), colorBottom), [
        -0.4, -0.4, -0.4
    ]), colorBottom), [
        0.4, -0.4, -0.4
    ]), colorBottom), [
        0.4, -0.4, 0.4
    ]), colorBottom), [
        // Roof triangles
        -0.4, 0.4, -0.4
    ]), colorRoofFront), [
        0.4, 0.4, -0.4
    ]), colorRoofFront), [
        0.0, 0.8, 0.0
    ]), colorRoofFront), [
        -0.4, 0.4, -0.4
    ]), colorRoofRight), [
        -0.4, 0.4, 0.4
    ]), colorRoofRight), [
        0.0, 0.8, 0.0
    ]), colorRoofRight), [
        0.4, 0.4, 0.4
    ]), colorRoofBack), [
        -0.4, 0.4, 0.4
    ]), colorRoofBack), [
        0.0, 0.8, 0.0
    ]), colorRoofBack), [
        0.4, 0.4, 0.4
    ]), colorRoofLeft), [
        0.4, 0.4, -0.4
    ]), colorRoofLeft), [
        0.0, 0.8, 0.0
    ]), colorRoofLeft), [
        // Door
        -0.1, -0.4, -0.401
    ]), colorDoor), [
        -0.1, 0.0, -0.401
    ]), colorDoor), [
        0.1, 0.0, -0.401
    ]), colorDoor), [
        -0.1, -0.4, -0.401
    ]), colorDoor), [
        0.1, -0.4, -0.401
    ]), colorDoor), [
        0.1, 0.0, -0.401
    ]), colorDoor), [
        // Right window
        -0.401, -0.1, -0.1
    ]), colorWindow), [
        -0.401, -0.1, 0.1
    ]), colorWindow), [
        -0.401, 0.1, 0.1
    ]), colorWindow), [
        -0.401, -0.1, -0.1
    ]), colorWindow), [
        -0.401, 0.1, -0.1
    ]), colorWindow), [
        -0.401, 0.1, 0.1
    ]), colorWindow), [
        // Left window
        0.401, -0.1, -0.1
    ]), colorWindow), [
        0.401, -0.1, 0.1
    ]), colorWindow), [
        0.401, 0.1, 0.1
    ]), colorWindow), [
        0.401, -0.1, -0.1
    ]), colorWindow), [
        0.401, 0.1, -0.1
    ]), colorWindow), [
        0.401, 0.1, 0.1
    ]), colorWindow);
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(0.75, 0.85, 0.8, 1.0);
    gl.enable(gl.DEPTH_TEST);
    var program = initShaders(gl, "vertex-shader", "fragment-shader");
    gl.useProgram(program);
    // Vertex positions
    var houseVertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, houseVertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cubeVertices), gl.STATIC_DRAW);
    var vPosition = gl.getAttribLocation(program, "vPosition");
    var vColor = gl.getAttribLocation(program, "vColor");
    gl.vertexAttribPointer(vPosition, 3, gl.FLOAT, gl.FALSE, 6 * Float32Array.BYTES_PER_ELEMENT, 0);
    gl.vertexAttribPointer(vColor, 3, gl.FLOAT, gl.FALSE, 6 * Float32Array.BYTES_PER_ELEMENT, 3 * Float32Array.BYTES_PER_ELEMENT);
    gl.enableVertexAttribArray(vPosition);
    gl.enableVertexAttribArray(vColor);
    var mWorld = gl.getUniformLocation(program, "mWorld");
    var mView = gl.getUniformLocation(program, "mView");
    var mProjection = gl.getUniformLocation(program, "mProjection");
    var worldMatrix = mat4(1);
    var viewMatrix = lookAt([0, 0, -5], [0, 0, 0], [0, 1, 0]);
    var projectionMatrix = perspective(45, canvas.width / canvas.height, 0.1, 1000);
    gl.uniformMatrix4fv(mWorld, gl.FALSE, flatten(worldMatrix));
    gl.uniformMatrix4fv(mView, gl.FALSE, flatten(viewMatrix));
    gl.uniformMatrix4fv(mProjection, gl.FALSE, flatten(projectionMatrix));
    var angle = 0;
    var axis = [0, 1, 0];
    var xRadio = document.getElementById("inDirectionX");
    var yRadio = document.getElementById("inDirectionY");
    var loop = function () {
        angle = performance.now() / 10;
        if (xRadio.checked) {
            axis = [1, 0, 0];
        }
        else if (yRadio.checked) {
            axis = [0, 1, 0];
        }
        else {
            axis = [0, 0, 1];
        }
        worldMatrix = rotate(angle, axis);
        gl.uniformMatrix4fv(mWorld, gl.FALSE, flatten(worldMatrix));
        render();
        requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
};
var render = function () {
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLES, 0, 60);
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
var normalizeRgb = function (r, g, b) {
    return [r / 255, g / 255, b / 255];
};
