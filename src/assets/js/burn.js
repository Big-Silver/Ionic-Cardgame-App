var burnAnimation = function (canvasBody, parentBody, inBackground) {

	var canvas = canvasBody.getContext("2d"),

		w = canvasBody.width = parentBody.clientWidth,
		h = canvasBody.height = parentBody.clientHeight,

		tick = 0,
		opts = {
			canvas: {
				backgroundColor: "#100505",
				fireAmount: w / 35
			},
			fire: {
				height: h / 3,
				sparksAmount: 10,
				speed: 70,
				addedSpeed: 20,
				defaultWidth: 40,

				minWidthIncrement: 40,
				addedWidthIncrement: 20,

				minSparkHeightIncrement: 40,
				addedSparkHeightIncrement: 20
			},
			spark: {
				color: "hsla(hue,100%,40%,alpha)",
				startSize: 50,
				hueChange: 35
			}
		},
		fires = [],
		Fire = function (obj) {
			this.sparks = [];
			this.x = obj.x;
			this.y = obj.y;
			this.height = h - obj.y;
			this.init = function () {
				this.sparksAmount = Math.floor(obj.sparksAmount);
				this.sizeDecrement = this.height / opts.spark.startSize / 100;

				for (var i = 0; i < this.sparksAmount; i++) {
					this.sparks.push(new Spark({
						x: 0, //relative to the fire
						y: 20, //relative to the fire
						sizeDecrement: this.sizeDecrement,
						xIncrement: opts.fire.minWidthIncrement + Math.random() * opts.fire.addedWidthIncrement,
						yIncrement: h * 3 / opts.fire.minSparkHeightIncrement + Math.random() * opts.fire.addedSparkHeightIncrement,
						delay: 10 * i
					}));
				}
			};
			this.update = function () {
				this.sparks.map(function (Spark) {
					Spark.update();
				});
			};
			this.render = function () {
				var coords = [this.x, this.y + this.height]
				this.sparks.map(function (Spark) {
					Spark.render(coords[0], coords[1]);
				});
			};

			this.init(obj);
		},
		stoped  = false,
		Spark = function (obj) {
			this.x = obj.x;
			this.y = obj.y;
			this.delay = obj.delay;
			this.direction = Math.random() < 0.5 ? 1 : -1
			this.xIncrement = obj.xIncrement;
			this.yIncrement = obj.yIncrement;
			this.sizeDecrement = obj.sizeDecrement;
			this.size = opts.spark.startSize;

			this.phaseTime = opts.fire.speed + Math.random() * opts.fire.addedSpeed;
			this.hueFactor = opts.spark.hueChange / this.phaseTime;
			this.alphaFactor = 1 / this.phaseTime;
			this.time = obj.delay;
			this.pathPoints = [];
			this.color = opts.spark.color;
			this.equation = function () { };

			this.update = function () {
				this.size -= this.sizeDecrement;
				this.time > this.phaseTime ? this.restart() : this.time++;
				var r = 360 / this.phaseTime,
					e = r * this.time;
				this.color = opts.spark.color;
				this.color = this.color.replace("hue", 30 - this.hueFactor * this.time);
				this.color = this.color.replace("alpha", 1.25 - this.alphaFactor * this.time);
				this.x = this.equation(e)[0];
				this.y = this.equation(e)[1];
			};

			this.render = function (x, y) {
				canvas.beginPath();
				canvas.arc(this.x + x, this.y + y, Math.abs(this.size), 0, Math.PI * 2);
				canvas.closePath();
				canvas.fillStyle = this.color;
				canvas.fill()
			};

			this.start = function () {
				this.time = this.delay;
				this.size = opts.spark.startSize;
				this.sizeDecrement = opts.spark.startSize / this.phaseTime;
				this.equation = function (x) {
					var X = Math.radians(x);
					return [Math.sin(X) * this.xIncrement * this.direction, -X * this.yIncrement];
				}
			};
			this.restart = function () {
				this.time = 0;
				this.size = opts.spark.startSize;
				this.color = opts.spark.color;
			}
			this.start();
		};

	Math.radians = function (deg) {
		return deg * (Math.PI / 180);
	}

	

	function setup() {
		
		window.requestAnimationFrame(function(){

			w = canvasBody.width = parentBody.clientWidth;
			h = canvasBody.height = parentBody.clientHeight;

			for (var i = 0; i < opts.canvas.fireAmount; i++) {
				fires.push(new Fire({
					x: w / opts.canvas.fireAmount * i,
					y: h - opts.fire.height - Math.random() * (opts.fire.height / 3),
					sparksAmount: opts.fire.sparksAmount + Math.random() * (opts.fire.sparksAmount / 2)
				}));			
			}
			fires.map(function (Fire) {
				Fire.init();
				Fire.update();
			});
			window.requestAnimationFrame(loop);
		});

	};

	function cancel(){
		stoped = true;
		window.cancelAnimationFrame(loop);
	}

	function loop() {

		if(inBackground){
			canvas.fillStyle = 'black';
			canvas.fillRect(0, 0, w, h);
		}else{
			canvas.clearRect(0, 0, w, h);
		}

		tick++;
		fires.map(function (Fire) {
			Fire.update();
			Fire.render();
		});

		if(stoped == false)
			window.requestAnimationFrame(loop);
	};

	window.addEventListener("resize", function () {
		w = canvasBody.width = parentBody.clientWidth;
		h = canvasBody.height = parentBody.clientHeight;
	});

	return {
		setup : setup,
		cancel : cancel
	};
};