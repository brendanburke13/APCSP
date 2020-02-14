let rileyImg
let heading
function setup() {
    createCanvas(windowWidth, windowHeight)
    frameRate(1)
rileyImg = createImg('riley.png','riley image')
rileyImg.size(200,100)
heading = createElement('h2', 'Click Rileys face')
heading.position(width / 3, height / 4)
}

function draw() {
    rileyImg.position(random(width), random(height))
    rileyImg.mousePressed('You Won!')
}

function youWon() {
    heading.html('You Won!')
    rileyImg.remove()
}