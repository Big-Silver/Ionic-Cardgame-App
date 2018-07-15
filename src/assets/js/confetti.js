var Progress = (function () {
    function Progress(param) {
        if (param === void 0) { param = {}; }
        this.timestamp = null;
        this.duration = null;
        this.progress = null;
        this.delta = null;
        this.isLoop = false;
        this.timestamp = null;
        this.duration = param.duration;
        this.progress = 0;
        this.delta = 0;
        this.progress = 0;
        this.isLoop = !!param.isLoop;
        this.reset();
    }
    Progress.prototype.reset = function () {
        this.timestamp = null;
    };
    Progress.prototype.start = function (now) {
        this.timestamp = now;
    };
    Progress.prototype.tick = function (now) {
        if (this.timestamp) {
            this.delta = now - this.timestamp;
            this.progress = this.delta / this.duration;
            return this.progress;
        }
        else {
            return 0;
        }
    };
    return Progress;
})();
var Confetti = (function () {
    function Confetti(param) {
        this.parent = null;
        this.canvas = null;
        this.ctx = null;
        this.width = null;
        this.height = null;
        this.length = null;
        this.yRange = null;
        this.rotationRange = null;
        this.speedRange = null;
        this.sprites = null;
        this.progress = null;
        this.parent = param.elm || document.body;
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.width = param.width || this.parent.offsetWidth;
        this.height = param.height || this.parent.offsetHeight;
        this.length = param.length || Confetti.CONST.PAPER_LENGTH;
        this.yRange = param.yRange || this.height * 2;
        this.rotationRange = typeof param.rotationLength === "number" ? param.rotationRange : 20;
        this.speedRange = typeof param.speedRange === "number" ? param.speedRange : 10;
        this.sprites = [];
        this.progress = new Progress({
            duration: param.duration,
            isLoop: false
        });
        this.canvas.style.cssText = [
            "display: block",
            "position: absolute",
            "top: 0",
            "left: 0",
            "right : 0",
            "bottom : 0",
            "z-index : 10",
            "height: 100%",
            "width : 100%"
        ].join(";");
        this.render = this.render.bind(this);
        this.build();
        this.parent.appendChild(this.canvas);
        requestAnimationFrame(this.render);
    }
    Object.defineProperty(Confetti, "CONST", {
        get: function () {
            return {
                SPRITE_WIDTH: 6,
                SPRITE_HEIGHT: 10,
                PAPER_LENGTH: 400,
                DURATION: 8000,
                ROTATION_RATE: 50,
                COLORS: ["#EF5350", "#EC407A", "#AB47BC", "#7E57C2", "#5C6BC0", "#42A5F5", "#29B6F6", "#26C6DA", "#26A69A", "#66BB6A", "#9CCC65", "#D4E157", "#FFEE58", "#FFCA28", "#FFA726", "#FF7043", "#8D6E63", "#BDBDBD", "#78909C"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Confetti.prototype.build = function () {
        this.ctx.imageSmoothingQuality = 'high';
        for (var i = 0; i < this.length; ++i) {
            var canvas = document.createElement("canvas"), ctx = canvas.getContext("2d");
            canvas.width = Confetti.CONST.SPRITE_WIDTH;
            canvas.height = Confetti.CONST.SPRITE_HEIGHT;
            canvas.position = {
                initX: Math.random() * this.width,
                initY: -canvas.height - Math.random() * this.yRange
            };
            canvas.rotation = (this.rotationRange / 2) - Math.random() * this.rotationRange;
            canvas.speed = (this.speedRange / 2) + Math.random() * (this.speedRange / 2);
            canvas.friction = Math.random() + 0.5;
            canvas.friction = Math.min(canvas.friction, 1.1);
            ctx.save();
            ctx.fillStyle = Confetti.CONST.COLORS[(Math.random() * Confetti.CONST.COLORS.length) | 0];
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.rotate(canvas.rotation);
            ctx.restore();
            this.sprites.push(canvas);
        }
    };
    Confetti.prototype.render = function (now) {
        var progress = this.progress.tick(now);
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.canvas.style.width = this.width;
        this.canvas.style.height = this.height;
        for (var i = 0; i < this.sprites.length; ++i) {
            this.ctx.save();
            var translateX = this.sprites[i].position.initX + this.sprites[i].rotation * Confetti.CONST.ROTATION_RATE * progress;
            var translateY = (this.sprites[i].position.initY + progress * (this.height + this.yRange)) * this.sprites[i].friction;
            this.ctx.translate(translateX, translateY);
            this.ctx.rotate(this.sprites[i].rotation);
            this.ctx.drawImage(this.sprites[i], -Confetti.CONST.SPRITE_WIDTH * Math.abs(Math.sin(progress * Math.PI * 2 * this.sprites[i].speed)) / 2, -Confetti.CONST.SPRITE_HEIGHT / 2, Confetti.CONST.SPRITE_WIDTH * Math.abs(Math.sin(progress * Math.PI * 2 * this.sprites[i].speed)), Confetti.CONST.SPRITE_HEIGHT);
            this.ctx.restore();
            if (translateY > this.height) {
                this.sprites.splice(i, 1);
                i--;
            }
            else if (translateX < 0 && translateX > this.width) {
                this.sprites.splice(i, 1);
                i--;
            }
        }
        if (this.sprites.length < 20) {
            this.canvas.style.pointerEvents = 'default';
            if (this.sprites.length < 3) {
                this.canvas.remove();
                return;
            }
        }
        requestAnimationFrame(this.render);
    };
    Confetti.prototype.start = function () {
        this.progress.start(performance.now());
    };
    return Confetti;
})();
