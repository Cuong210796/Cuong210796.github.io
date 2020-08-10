class Piano extends Entity {
    constructor(x, y, width, height, num_of_white_keys) {
        super();
        [this.x, this.y, this.width, this.height] = [x, y, width, height];
        this.num_of_white_keys = Math.min(num_of_white_keys, keyNotes.length);
        this.keys = [];
        this.blackKeys = [];
        this.whiteKeys = [];

        this.keyScale = 0.8;
        this.keyOffsetX = this.width * (1 - this.keyScale) / 2;
        this.keyOffsetY = this.height * (1 - this.keyScale) / 2;

        this.key_width = this.width * this.keyScale / num_of_white_keys;
        this.key_height = this.height * this.keyScale;
        this.generateKeys();
    }

    update() {
        if (mouse.downTick || mouse.dragging) {
            let whiteKey = null;
            for (let i = 0; i < this.keys.length; i++) {
                let key = this.keys[i];
                if (key.contains(mouse.x, mouse.y)) {
                    if (key.type === BLACK_KEY) {
                        key.play();
                        whiteKey = null;
                        break;
                    } else {
                        whiteKey = key;
                    }
                }
            }
            if (whiteKey) {
                whiteKey.play();
            }
        }
    }

    render() {
        let ctx = gameEngine.context;
        ctx.fillStyle = "gray";
        ctx.strokeStyle = "black";
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.strokeRect(this.x, this.y, this.width, this.height);
    }

    generateKeys() {
        let whiteKeyIndex = 0;
        for (let i = 0; i < keyNotes.length; i++) {
            let key = keyNotes[i];
            if (key.name.includes('s')) {
                key.x = this.x + this.keyOffsetX + whiteKeyIndex * this.key_width - this.key_width / 2;
                this.blackKeys.push(key);
            } else {
                key.x = this.x + this.keyOffsetX + whiteKeyIndex * this.key_width;
                this.whiteKeys.push(key);
                whiteKeyIndex++;
            }
            if (whiteKeyIndex >= this.num_of_white_keys)
                break;
        }
        for (let i = 0; i < this.whiteKeys.length; i++) {
            let whiteKey = new Key(
                this.whiteKeys[i].x, this.y + this.keyOffsetY,
                this.key_width, this.key_height,
                WHITE_KEY, this.whiteKeys[i].src, "white", this.whiteKeys[i].name);
            this.keys.push(whiteKey);
        }

        for (let i = 0; i < this.blackKeys.length; i++) {
            let blackKey = new Key(
                this.blackKeys[i].x, this.y + this.keyOffsetY,
                this.key_width, this.key_height,
                BLACK_KEY, this.blackKeys[i].src, "black", this.blackKeys[i].name);
            this.keys.push(blackKey);
        }
    }
}