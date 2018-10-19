class Flappy {
  constructor(_ctx, url, _speed) {
    this.ctx = _ctx;
    this.speed = _speed;
    this.x = 100;
    this.y = 300;
    this.width = 60;
    this.height = 40;

    this.img = document.createElement('img');
    this.img.src = url;
    this.img.onload = () => {
      this.draw();
    };

    this.gravity = 0;
    this.crash = new Audio();
    this.crash.src = 'crash.mp3';
  }

  draw() {
    if (this.y < this.ctx.canvas.height - this.height) this.y += this.gravity;
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    this.gravity *= 1.02;
  }

  crashWith(pipe) {
    // console.log(pipe);
    const crash = (this.x < pipe.x + pipe.width)
      && (this.x + this.width > pipe.x)
      && (this.y < pipe.y + pipe.height)
      && (this.y + this.height > pipe.y);
    if (crash) this.crash.play();
    return crash;
  }
}
