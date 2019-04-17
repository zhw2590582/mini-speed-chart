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
  !function(e,t){module.exports=t();}(commonjsGlobal,function(){var i=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e};var r=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(e){i(t,e,r[e]);});}return t};var n=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n);}}var e=function(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),e};return function(){function t(e){n(this,t),this.option=r({url:"",loop:!0,time:1e3,detectCallback:function(e){return e}},e),this.transportFactory=this.getStreamFactory(),this.detect();}return e(t,[{key:"supportsXhrResponseType",value:function(e){try{var t=new XMLHttpRequest;return t.responseType=e,t.responseType===e}catch(e){return !1}}},{key:"getStreamFactory",value:function(){if("undefined"!=typeof Response&&Object.prototype.hasOwnProperty.call(Response.prototype,"body")&&"function"==typeof Headers)return this.fetchRequest;return this.supportsXhrResponseType("moz-chunked-arraybuffer")?this.mozXhrRequest:this.xhrRequest}},{key:"detect",value:function(){this.timer=null,this.result=[],this.detectStartTime=(new Date).getTime(),this.requestUrl=this.option.url+"?time="+this.detectStartTime,this.transportFactory();}},{key:"fetchRequest",value:function(){var t=this;if("function"!=typeof window.fetch)throw new Error("fetch function is not supported in your environment");return this.reader=null,fetch(this.requestUrl).then(function(e){if("function"!=typeof e.body.getReader)throw new Error("response.body.getReader function is not supported in your environment");t.reader=e.body.getReader(),function i(){var o=this,s=(new Date).getTime();this.reader.read().then(function(e){var t=e.done,r=e.value;if(t)return o.summary(),void(o.option.loop&&(o.timer=setTimeout(o.detect.bind(o),o.option.time)));var n=(new Date).getTime();o.calculate(new Uint8Array(r),n-s),i.call(o);}).catch(function(e){throw e});}.call(t);})}},{key:"mozXhrRequest",value:function(){var r=this;this.xhr=new XMLHttpRequest,this.xhr.open("GET",this.requestUrl,!0),this.xhr.responseType="moz-chunked-arraybuffer";var n=null,e=function(){var e=(new Date).getTime(),t=e-n;r.calculate(new Uint8Array(r.xhr.response),t),n=e;},t=function(){2===r.xhr.readyState&&(n=(new Date).getTime());},i=function(){r.summary(),r.option.loop&&(r.timer=setTimeout(r.detect.bind(r),r.option.time));},o=function e(){throw e};this.xhr.addEventListener("progress",e),this.xhr.addEventListener("readystatechange",t),this.xhr.addEventListener("loadend",i),this.xhr.addEventListener("error",o),this.xhr.destroy=function(){r.xhr.removeEventListener("progress",e),r.xhr.removeEventListener("readystatechange",t),r.xhr.removeEventListener("loadend",i),r.xhr.removeEventListener("error",o);},this.xhr.send();}},{key:"calculate",value:function(e,t){this.result.push({streamSize:e.byteLength,streamTime:t});}},{key:"summary",value:function(){var e=(new Date).getTime()-this.detectStartTime,t=this.resultSum("streamTime"),r=e-t,n=this.resultSum("streamSize"),i=n/t,o=i/1024;this.option.detectCallback({detectTime:e,downloadTime:t,downloadSize:n,waitingTime:r,speedKbps:i,speedMbps:o});}},{key:"resultSum",value:function(r){return this.result.reduce(function(e,t){return e+t[r]},0)}},{key:"destroy",value:function(){this.option.loop=!1,this.timer&&clearTimeout(this.timer),this.reader&&"function"==typeof this.reader.cancel&&this.reader.cancel(),this.xhr&&"function"==typeof this.xhr.abort&&(this.xhr.abort(),this.xhr.destroy());}}]),t}()});
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
        size: 2,
        backgroundColor: '#000',
        lineColor: '#4f0',
        detectCallback: function detectCallback(result) {
          return result;
        }
      }, option);
      this.dotMatrix = [];
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
            if (_this.dotMatrix.length * _this.option.size >= _this.option.width) {
              _this.dotMatrix.shift();
            }

            _this.dotMatrix.push(Number(result.speedKbps.toFixed(2)));

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
        var min = Math.min.apply(Math, toConsumableArray(this.dotMatrix));
        var max = Math.max.apply(Math, toConsumableArray(this.dotMatrix));
        var diff = max - min;
        var scale = diff / this.option.height;
        this.dotMatrix.forEach(function (item, index) {
          if (_this2.dotMatrix.length === 1) {
            _this2.ctx.fillRect(0, 0, _this2.option.size, _this2.option.height);
          } else {
            var y = _this2.option.height - (item - min) / scale;
            var h = _this2.option.height - y;

            _this2.ctx.fillRect(index * _this2.option.size, y, _this2.option.size, h);
          }
        });
      }
    }, {
      key: "destroy",
      value: function destroy() {
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
