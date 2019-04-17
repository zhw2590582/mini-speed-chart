import DetectConnectionSpeed from 'detect-connection-speed';

export default class MiniSpeedChart {
  constructor(option) {
    this.option = {
      canvas: '',
      url: '',
      width: 180,
      height: 20,
      backgroundColor: '#000',
      lineColor: '#4f0',
      lineWidth: 2,
      detectCallback: result => result,
      ...option
    };

    this.speeds = [];
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
        if (this.speeds.length * this.option.lineWidth >= this.option.width) {
          this.speeds.shift();
        }
        this.speeds.push(Number(result.speedKbps.toFixed(2)));
        this.draw();
        this.option.detectCallback(result);
      }
    });
  }

  draw() {
    this.ctx.clearRect(0, 0, this.$canvas.width, this.$canvas.height);
    this.ctx.fillStyle = this.option.lineColor;
    const min = Math.min(...this.speeds);
    const max = Math.max(...this.speeds);
    const diff = max - min;
    const scale = diff / this.option.height;
    this.speeds.forEach((item, index) => {
      const y = this.option.height - (item - min) / scale;
      const h = this.option.height - y;
      this.ctx.fillRect(index * this.option.lineWidth, y, this.option.lineWidth, h);
    });
  }

  destroy() {
    this.speeds = [];
    if (this.detect) {
      this.detect.destroy();
    }
  }
}
