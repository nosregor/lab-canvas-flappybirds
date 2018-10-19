class Pipe {
  constructor(_ctx, url, y, height) {
    this.ctx = _ctx;
    // console.log(this.ctx);
    // console.log(this.ctx.canvas);
    // console.log(this.ctx.canvas.width);


    this.x = this.ctx.canvas.width - 50;
    this.y = y || 0;
    this.width = 80;
    this.height = height || 100;

    this.img = new Image();
    this.img.src = url;
    this.img.onload = () => {
      this.draw();
    };
  }

  draw() {
    this.x -= 2;
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}
