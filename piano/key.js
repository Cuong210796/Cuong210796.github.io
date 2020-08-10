const BLACK_KEY = 1;
const WHITE_KEY = 2;

class Key extends Entity {
    constructor(x, y, width, height, type, src, color, name = '') {
        super();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        if (type === BLACK_KEY) {
            this.x = x + width * 0.25
            this.width = width / 2;
            this.height = height * 0.6;
        }
        this.type = type;
        this.color = color;
        this.color1 = color;
        this.name = name;
        this.audio = new Audio()
        this.audio.src = src;
    }
    update() {

    }

    render() {
        var ctx = gameEngine.context;
        ctx.fillStyle = this.color;
        ctx.strokeStyle = "black";
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.strokeRect(this.x, this.y, this.width, this.height);
    }

    contains(x, y) {
        if (x > this.x && y > this.y && x < this.x + this.width && y < this.y + this.height) {
            return true;
        } else {
            return false;
        }
    }

    play() {
        this.audio.currentTime = 0;
        this.audio.play();
        this.highlight();
    }

    highlight() {
        this.color = 'greenyellow';
        setTimeout(() => this.color = this.color1, 0.1);
        ctx.strokeRect(this.x, this.y, this.width, this.height)
    }
}