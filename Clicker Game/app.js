let rileyImg
let heading
function setup() {
    createCanvas(windowWidth, windowHeight)
rileyImg = createImg('/riley.png','riley image')
rileyImg.size(200,100)
heading = createElement('h2', 'Click Riley/s face')
heading.position(width / 3, height / 4)
}

function draw() {
    rileyImg.position(random(width), random(height))
    rileyImg.mousepressed('You Won!')
}

function youWon() {
    heading.html('You Won!')
    rileyImg.remove()
}