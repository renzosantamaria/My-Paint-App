const clearButton = document.querySelector('.clear')
const stroke_weight = document.querySelector('.stroke-weight')
const color_picker = document.querySelector('.color-picker')






const blue_color = document.querySelector('.blue')
const red_color = document.querySelector('.red')
const colors_backgroundColor = document.querySelector('.colors')
// colors_backgroundColor.style.background =color_picker.value
blue_color.addEventListener('click', function(){
    // console.log("estoy en el boton azul")
    // console.log(blue_color.className)
    ctx.strokeStyle = blue_color.className
    console.log(ctx.strokeStyle);
    colors_backgroundColor.style.background = ctx.strokeStyle
    color_picker.value = "blue"
    
})

red_color.addEventListener('click', function(){
    // console.log("estoy en el boton azul")
    // console.log(blue_color.className)
    ctx.strokeStyle = red_color.className
    console.log(ctx.strokeStyle);
    colors_backgroundColor.style.background = ctx.strokeStyle
    color_picker.value = "red"
})

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
let isDrawing = false

canvas.width = window.innerWidth
canvas.height = window.innerHeight

canvas.addEventListener('mousedown', start)
canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mouseup', stop)

clearButton.addEventListener('click', clearCanvas)

function start(e) {
    isDrawing = true
    draw(e)
}

function draw({clientX: x, clientY: y}) {
    if (!isDrawing) return;
    
    //-----Changing the color of the "actual color circle"
    colors_backgroundColor.style.background = color_picker.value

    ctx.lineWidth = stroke_weight.value
    ctx.lineCap = 'round'
    ctx.strokeStyle = color_picker.value


    ctx.lineTo(x, y)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(x,y)
}

function stop() {
    isDrawing = false
    ctx.beginPath()
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}

window.addEventListener('resize', resizeCanvas)
function resizeCanvas() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
}

console.log("Probando")

