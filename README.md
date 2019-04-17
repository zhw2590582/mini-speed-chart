# mini-speed-chart

Detect connection speed with JavaScript

## Install

Install with `npm`

```
$ npm install mini-speed-chart
```

Or install with `yarn`

```
$ yarn add mini-speed-chart
```

```js
import MiniSpeedChart from 'mini-speed-chart';
```

Or umd builds are also available

```html
<script src="path/to/miniSpeedChart.js"></script>
```

Will expose the global variable to `window.MiniSpeedChart`.

## Usage

```js
// Init
var chart = new MiniSpeedChart({
  canvas: '',
  url: '',
  width: 180,
  height: 20,
  size: 2,
  backgroundColor: '#000',
  lineColor: '#4f0',
  detectCallback: result => result
});

// Destroy
chart.destroy();
```

## License

MIT © [Harvey Zack](https://www.zhw-island.com/)
