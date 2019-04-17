import DetectConnectionSpeed from 'detect-connection-speed';

export default class MiniSpeedChart {
  constructor(option) {
    this.option = {
      canvas: '',
      url: '',
      width: 180,
      height: 20,
      size: 2,
      backgroundColor: '#000',
      lineColor: '#4f0',
      detectCallback: result => result,
      ...option
    };

    this.dotMatrix = [];
    this.$canvas = document.querySelector(this.option.canvas);
    this.ctx = this.$canvas.getContext('2d');
    this.style();
    this.detect();
  }

  style() {
    this.$canvas.width = this.option.width;
    this.$canvas.height = this.option.height;
    this.$canvas.style.width = `${this.option.width}px`;
    this.$canvas.style.height = `${this.option.height}px`;
    this.$canvas.style.backgroundColor = this.option.backgroundColor;
  }

  detect() {
    this.detect = new DetectConnectionSpeed({
      url: this.option.url,
      detectCallback: result => {
        if (this.dotMatrix.length * this.option.size >= this.option.width) {
          this.dotMatrix.shift();
        }
        this.dotMatrix.push(Number(result.speedKbps.toFixed(2)));
        this.draw();
        this.option.detectCallback(result);
      }
    });
  }

  draw() {
    this.ctx.clearRect(0, 0, this.$canvas.width, this.$canvas.height);
    this.ctx.fillStyle = this.option.lineColor;
    const min = Math.min(...this.dotMatrix);
    const max = Math.max(...this.dotMatrix);
    const diff = max - min;
    const scale = diff / this.option.height;
    this.dotMatrix.forEach((item, index) => {
      if (this.dotMatrix.length === 1) {
        this.ctx.fillRect(0, 0, this.option.size, this.option.height);
      } else {
        const y = this.option.height - (item - min) / scale;
        const h = this.option.height - y;
        this.ctx.fillRect(index * this.option.size, y, this.option.size, h);
      }
    });
  }

  destroy() {
    if (this.detect) {
      this.detect.destroy();
    }
  }
}
