declare function initShaders(gl: WebGLRenderingContext, vertexShaderId: string, fragmentShaderId: string): WebGLProgram
declare function flatten(vector: any[]): any[]

let gl

const init = () => {
    const canvas = document.getElementById("draw-canvas") as HTMLCanvasElement
    gl = canvas.getContext("webgl")

    const colorWall = [0.811, 0.725, 0.592]
    const colorRoof = [0.647, 0.164, 0.164]
    const colorDoor = [0.388, 0.372, 0.749]

    const baseVertices = [
        -0.4, -0.6,     ...colorWall,
        0.4, 0.2,       ...colorWall,
        -0.4, 0.2,      ...colorWall,

        -0.4, -0.6,     ...colorWall,
        0.4, -0.6,      ...colorWall,
        0.4, 0.2,       ...colorWall,
    ]

    const roofVertices = [
        -0.5, 0.2,      ...colorRoof,
        0.5, 0.2,       ...colorRoof,
        0.0, 0.7,       ...colorRoof,
    ]

    const doorVertices = [
        -0.1, -0.6,     ...colorDoor,
        0.1, -0.2,      ...colorDoor,
        -0.1, -0.2,     ...colorDoor,

        -0.1, -0.6,     ...colorDoor,
        0.1, -0.6,      ...colorDoor,
        0.1, -0.2,      ...colorDoor,
    ]

    gl.viewport(0, 0, canvas.width, canvas.height)
    gl.clearColor(0.75, 0.85, 0.8, 1.0)

    const program = initShaders(gl, "vertex-shader", "fragment-shader")
    gl.useProgram(program)

    // Vertex positions
    const houseVertexBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, houseVertexBuffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(concat(baseVertices, roofVertices, doorVertices)), gl.STATIC_DRAW)

    const vPosition = gl.getAttribLocation(program, "vPosition")
    const vColor = gl.getAttribLocation(program, "vColor")

    gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 5 * Float32Array.BYTES_PER_ELEMENT, 0)
    gl.vertexAttribPointer(vColor, 3, gl.FLOAT, false, 5 * Float32Array.BYTES_PER_ELEMENT, 2 * Float32Array.BYTES_PER_ELEMENT)

    gl.enableVertexAttribArray(vPosition)
    gl.enableVertexAttribArray(vColor)

    render()
}

const render = () => {
    gl.clear(gl.COLOR_BUFFER_BIT)
    gl.drawArrays(gl.TRIANGLES, 0, 15)
}

const concat = (...arrays: any[]) => {
    let outArray = []
    arrays.forEach(array => {
        outArray = outArray.concat(array)
    })
    return outArray
}
