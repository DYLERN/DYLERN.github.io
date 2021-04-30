declare function initShaders(gl: WebGLRenderingContext, vertexShaderId: string, fragmentShaderId: string): WebGLProgram
declare function mat4(...params: any): any
declare function lookAt(eye: number[], at: number[], up: number[]): any
declare function perspective(fovy: number, aspect: number, near: number, far: number): any
declare function flatten(v: any): any[]
declare function rotate(angle, axis): any

let gl

const init = () => {
    const canvas = document.getElementById("draw-canvas") as HTMLCanvasElement
    gl = canvas.getContext("webgl")

    const colorFront = normalizeRgb(193, 128, 255)
    const colorRight = normalizeRgb(255, 136, 128)
    const colorBack = normalizeRgb(128, 255, 162)
    const colorLeft = normalizeRgb(254, 220, 129)
    const colorBottom = normalizeRgb(255, 145, 0)

    const colorRoofFront = normalizeRgb(130, 0, 250)
    const colorRoofRight = normalizeRgb(255, 17, 0)
    const colorRoofBack = normalizeRgb(0, 255, 69)
    const colorRoofLeft = normalizeRgb(252, 186, 3)

    const colorDoor = normalizeRgb(0, 0, 0)

    const colorWindow = normalizeRgb(117, 170, 255)

    const cubeVertices = [
        // Walls
        -0.4, -0.4, -0.4,   ...colorFront,
        -0.4, 0.4, -0.4,    ...colorFront,
        0.4, 0.4, -0.4,     ...colorFront,
        -0.4, -0.4, -0.4,   ...colorFront,
        0.4, 0.4, -0.4,     ...colorFront,
        0.4, -0.4, -0.4,    ...colorFront,

        -0.4, 0.4, -0.4,    ...colorRight,
        -0.4, 0.4, 0.4,     ...colorRight,
        -0.4, -0.4, 0.4,    ...colorRight,
        -0.4, 0.4, -0.4,    ...colorRight,
        -0.4, -0.4, 0.4,    ...colorRight,
        -0.4, -0.4, -0.4,   ...colorRight,

        -0.4, -0.4, 0.4,    ...colorBack,
        -0.4, 0.4, 0.4,     ...colorBack,
        0.4, 0.4, 0.4,      ...colorBack,
        -0.4, -0.4, 0.4,    ...colorBack,
        0.4, 0.4, 0.4,      ...colorBack,
        0.4, -0.4, 0.4,     ...colorBack,

        0.4, -0.4, -0.4,    ...colorLeft,
        0.4, -0.4, 0.4,     ...colorLeft,
        0.4, 0.4, 0.4,      ...colorLeft,
        0.4, -0.4, -0.4,    ...colorLeft,
        0.4, 0.4, 0.4,      ...colorLeft,
        0.4, 0.4, -0.4,     ...colorLeft,

        // Floor
        -0.4, -0.4, -0.4,   ...colorBottom,
        -0.4, -0.4, 0.4,    ...colorBottom,
        0.4, -0.4, 0.4,     ...colorBottom,
        -0.4, -0.4, -0.4,   ...colorBottom,
        0.4, -0.4, -0.4,    ...colorBottom,
        0.4, -0.4, 0.4,     ...colorBottom,

        // Roof triangles
        -0.4, 0.4, -0.4,    ...colorRoofFront,
        0.4, 0.4, -0.4,     ...colorRoofFront,
        0.0, 0.8, 0.0,      ...colorRoofFront,

        -0.4, 0.4, -0.4,    ...colorRoofRight,
        -0.4, 0.4, 0.4,     ...colorRoofRight,
        0.0, 0.8, 0.0,      ...colorRoofRight,

        0.4, 0.4, 0.4,      ...colorRoofBack,
        -0.4, 0.4, 0.4,     ...colorRoofBack,
        0.0, 0.8, 0.0,      ...colorRoofBack,

        0.4, 0.4, 0.4,      ...colorRoofLeft,
        0.4, 0.4, -0.4,     ...colorRoofLeft,
        0.0, 0.8, 0.0,      ...colorRoofLeft,

        // Door
        -0.1, -0.4, -0.401,     ...colorDoor,
        -0.1, 0.0, -0.401,      ...colorDoor,
        0.1, 0.0, -0.401,       ...colorDoor,

        -0.1, -0.4, -0.401,     ...colorDoor,
        0.1, -0.4, -0.401,      ...colorDoor,
        0.1, 0.0, -0.401,       ...colorDoor,

        // Right window
        -0.401, -0.1, -0.1,     ...colorWindow,
        -0.401, -0.1, 0.1,      ...colorWindow,
        -0.401, 0.1, 0.1,       ...colorWindow,
        -0.401, -0.1, -0.1,     ...colorWindow,
        -0.401, 0.1, -0.1,      ...colorWindow,
        -0.401, 0.1, 0.1,       ...colorWindow,

        // Left window
        0.401, -0.1, -0.1,     ...colorWindow,
        0.401, -0.1, 0.1,      ...colorWindow,
        0.401, 0.1, 0.1,       ...colorWindow,
        0.401, -0.1, -0.1,     ...colorWindow,
        0.401, 0.1, -0.1,      ...colorWindow,
        0.401, 0.1, 0.1,       ...colorWindow,
    ]

    gl.viewport(0, 0, canvas.width, canvas.height)
    gl.clearColor(0.75, 0.85, 0.8, 1.0)
    gl.enable(gl.DEPTH_TEST)

    const program = initShaders(gl, "vertex-shader", "fragment-shader")
    gl.useProgram(program)

    // Vertex positions
    const houseVertexBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, houseVertexBuffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cubeVertices), gl.STATIC_DRAW)

    const vPosition = gl.getAttribLocation(program, "vPosition")
    const vColor = gl.getAttribLocation(program, "vColor")

    gl.vertexAttribPointer(vPosition, 3, gl.FLOAT, gl.FALSE, 6 * Float32Array.BYTES_PER_ELEMENT, 0)
    gl.vertexAttribPointer(vColor, 3, gl.FLOAT, gl.FALSE, 6 * Float32Array.BYTES_PER_ELEMENT, 3 * Float32Array.BYTES_PER_ELEMENT)

    gl.enableVertexAttribArray(vPosition)
    gl.enableVertexAttribArray(vColor)

    const mWorld = gl.getUniformLocation(program, "mWorld")
    const mView = gl.getUniformLocation(program, "mView")
    const mProjection = gl.getUniformLocation(program, "mProjection")

    let worldMatrix = mat4(1)
    const viewMatrix = lookAt([0, 0, -5], [0, 0, 0], [0, 1, 0])
    const projectionMatrix = perspective(45, canvas.width / canvas.height, 0.1, 1000)

    gl.uniformMatrix4fv(mWorld, gl.FALSE, flatten(worldMatrix))
    gl.uniformMatrix4fv(mView, gl.FALSE, flatten(viewMatrix))
    gl.uniformMatrix4fv(mProjection, gl.FALSE, flatten(projectionMatrix))

    let angle = 0
    let axis = [0, 1, 0]

    const xRadio = document.getElementById("inDirectionX") as HTMLInputElement
    const yRadio = document.getElementById("inDirectionY") as HTMLInputElement
    const checkWireframe = document.getElementById("inWireframe") as HTMLInputElement

    const loop = () => {
        angle = performance.now() / 10

        if(xRadio.checked) {
            axis = [1, 0, 0]
        } else if (yRadio.checked) {
            axis = [0, 1, 0]
        } else {
            axis = [0, 0, 1]
        }

        worldMatrix = rotate(angle, axis)
        gl.uniformMatrix4fv(mWorld, gl.FALSE, flatten(worldMatrix))

        render(checkWireframe.checked)

        requestAnimationFrame(loop)
    }
    requestAnimationFrame(loop)
}

const render = (wireframe: boolean) => {
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
    if(wireframe == true) {
        for(let i = 0; i < 60; i += 3) {
            gl.drawArrays(gl.LINE_LOOP, i, 3)
        }
    } else {
        gl.drawArrays(gl.TRIANGLES, 0, 60)
    }
}

const concat = (...arrays: any[]) => {
    let outArray = []
    arrays.forEach(array => {
        outArray = outArray.concat(array)
    })
    return outArray
}

const normalizeRgb = (r: number, g: number, b: number) => {
    return [r / 255, g / 255, b / 255]
}

