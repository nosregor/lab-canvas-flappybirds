class Background {
  constructor(_ctx, url, _speed) {
    this.ctx = _ctx;
    this.speed = _speed;
    this.x = 0;
    this.y = 0;
    this.img = document.createElement('img');
    this.img.src = url;
    this.img.onload = () => {
      this.draw();
    };
    this.height = this.ctx.canvas.height;
    this.width = this.ctx.canvas.width;
    // this.width = this.height * this.img.width / this.img.height;

    this.music = new Audio();
    this.music.src = 'http://66.90.93.122/ost/donkey-kong-country/ayamsjqd/01%20-%20Theme.mp3';
  }

  draw() {
    this.x -= this.speed;
    if (this.x < -this.width) return this.x += this.width;

    this.ctx.drawImage(this.img, this.x, this.y = 0, this.width, this.height);
    this.ctx.drawImage(this.img, this.x + this.width, this.y = 0, this.width, this.height);

    this.ctx.font = '50px Avenir';
    this.ctx.fillStyle = 'white';
    this.ctx.fillText(pipes.length > 0 ? `Level ${pipes.length / 2}` : 'Level 1', 100, 100);
  }
}
