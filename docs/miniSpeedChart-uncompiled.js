(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.MiniSpeedChart = factory());
}(this, function () { 'use strict';

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    }
  }

  var arrayWithoutHoles = _arrayWithoutHoles;

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  var iterableToArray = _iterableToArray;

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  var nonIterableSpread = _nonIterableSpread;

  function _toConsumableArray(arr) {
    return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
  }

  var toConsumableArray = _toConsumableArray;

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var defineProperty = _defineProperty;

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  var objectSpread = _objectSpread;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var classCallCheck = _classCallCheck;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var createClass = _createClass;

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var detectConnectionSpeed = createCommonjsModule(function (module, exports) {
  !function(e,t){module.exports=t();}(commonjsGlobal,function(){var o=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e};var n=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(e){o(t,e,n[e]);});}return t};var r=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r);}}var e=function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e};var t=null;function s(e,a,u){return fetch(e).then(function(e){t=e.body.getReader(),function i(){var s=Date.now();t.read().then(function(e){var t=e.done,n=e.value;if(t)u();else{var r=Date.now()-s,o=new Uint8Array(n).byteLength;a(o,r),i();}}).catch(function(e){throw e});}();}),{destroy:function(){t&&t.cancel();}}}var u=null;function a(e,r,t){(u=new XMLHttpRequest).open("GET",e,!0),u.responseType="moz-chunked-arraybuffer";var o=null,n=function(){var e=Date.now(),t=e-o,n=new Uint8Array(u.response).byteLength;r(n,t),o=e;},i=function(){2===u.readyState&&(o=Date.now());},s=function(){t();},a=function e(){throw e};return u.addEventListener("progress",n),u.addEventListener("readystatechange",i),u.addEventListener("loadend",s),u.addEventListener("error",a),u.send(),{destroy:function(){u&&(u.abort(),u.removeEventListener("progress",n),u.removeEventListener("readystatechange",i),u.removeEventListener("loadend",s),u.removeEventListener("error",a));}}}function c(){if("undefined"!=typeof Response&&Object.prototype.hasOwnProperty.call(Response.prototype,"body")&&"function"==typeof Headers)return s;if(function(e){try{var t=new XMLHttpRequest;return t.responseType=e,t.responseType===e}catch(e){return !1}}("moz-chunked-arraybuffer"))return a;throw new Error("Your browser does not currently support stream factory")}return function(){function t(e){r(this,t),this.option=n({url:"",loop:!0,detectCallback:function(e){return e}},e),this.loopTimer=null,this.stream=null,this.seconds=[],this.calculateSecond=0,this.streamFactory=c(),this.detectStartTime=Date.now(),this.detect();}return e(t,[{key:"detect",value:function(){this.requestUrl=this.option.url+"?time="+Date.now(),this.stream=this.streamFactory(this.requestUrl,this.updateCallback.bind(this),this.doneCallback.bind(this));}},{key:"updateCallback",value:function(e,t){var n={streamSize:e,streamTime:t},r=Math.ceil((Date.now()-this.detectStartTime)/1e3);this.seconds[r]?this.seconds[r].push(n):(this.calculate(),this.seconds[r]=[n]);}},{key:"doneCallback",value:function(){this.option.loop&&(this.stream&&"function"==typeof this.stream.destroy&&this.stream.destroy(),this.detect());}},{key:"calculate",value:function(){var e=this.seconds[this.calculateSecond++]||[],t=this.resultSum(e,"streamTime")||0,n=this.resultSum(e,"streamSize")||0,r=n/t||0,o=r/1024;this.option.detectCallback({downloadTime:t,downloadSize:n,speedKbps:r,speedMbps:o});}},{key:"resultSum",value:function(e,n){return e.reduce(function(e,t){return e+t[n]},0)}},{key:"destroy",value:function(){this.option.loop=!1,this.loopTimer&&clearTimeout(this.loopTimer),this.stream&&"function"==typeof this.stream.destroy&&this.stream.destroy();}}]),t}()});
  });

  var MiniSpeedChart =
  /*#__PURE__*/
  function () {
    function MiniSpeedChart(option) {
      classCallCheck(this, MiniSpeedChart);

      this.option = objectSpread({
        canvas: '',
        url: '',
        width: 180,
        height: 20,
        backgroundColor: '#000',
        lineColor: '#4f0',
        lineWidth: 2,
        detectCallback: function detectCallback(result) {
          return result;
        }
      }, option);
      this.speeds = [];
      this.$canvas = document.querySelector(this.option.canvas);
      this.ctx = this.$canvas.getContext('2d');
      this.style();
      this.detect();
    }

    createClass(MiniSpeedChart, [{
      key: "style",
      value: function style() {
        this.$canvas.width = this.option.width;
        this.$canvas.height = this.option.height;
        this.$canvas.style.width = "".concat(this.option.width, "px");
        this.$canvas.style.height = "".concat(this.option.height, "px");
        this.$canvas.style.backgroundColor = this.option.backgroundColor;
      }
    }, {
      key: "detect",
      value: function detect() {
        var _this = this;

        this.detect = new detectConnectionSpeed({
          url: this.option.url,
          detectCallback: function detectCallback(result) {
            if (_this.speeds.length * _this.option.lineWidth >= _this.option.width) {
              _this.speeds.shift();
            }

            _this.speeds.push(Number(result.speedKbps.toFixed(2)));

            _this.draw();

            _this.option.detectCallback(result);
          }
        });
      }
    }, {
      key: "draw",
      value: function draw() {
        var _this2 = this;

        this.ctx.clearRect(0, 0, this.$canvas.width, this.$canvas.height);
        this.ctx.fillStyle = this.option.lineColor;
        var min = Math.min.apply(Math, toConsumableArray(this.speeds));
        var max = Math.max.apply(Math, toConsumableArray(this.speeds));
        var diff = max - min;
        var scale = diff / this.option.height;
        this.speeds.forEach(function (item, index) {
          var y = _this2.option.height - (item - min) / scale;
          var h = _this2.option.height - y;

          _this2.ctx.fillRect(index * _this2.option.lineWidth, y, _this2.option.lineWidth, h);
        });
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.speeds = [];
        this.ctx.clearRect(0, 0, this.$canvas.width, this.$canvas.height);

        if (this.detect) {
          this.detect.destroy();
        }
      }
    }]);

    return MiniSpeedChart;
  }();

  return MiniSpeedChart;

}));
//# sourceMappingURL=miniSpeedChart-uncompiled.js.map
