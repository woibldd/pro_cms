exports.ids = [29];
exports.modules = {

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var vant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vant__WEBPACK_IMPORTED_MODULE_0__);

const vCopy = {
  // 名字爱取啥取啥

  /*
   bind 钩子函数，第一次绑定时调用，可以在这里做初始化设置
   el: 作用的 dom 对象
   value: 传给指令的值，也就是我们要 copy 的值
  */
  bind(el, {
    value
  }) {
    el.$value = value; // 用一个全局属性来存传进来的值，因为这个值在别的钩子函数里还会用到

    el.handler = () => {
      if (!el.$value) {
        // 值为空的时候，给出提示，我这里的提示是用的 vant 的提示
        vant__WEBPACK_IMPORTED_MODULE_0__["Toast"].fail('Some error occurred');
        return;
      } // 动态创建 textarea 标签


      const textarea = document.createElement('textarea'); // 将该 textarea 设为 readonly 防止 iOS 下自动唤起键盘，同时将 textarea 移出可视区域

      textarea.readOnly = 'readonly';
      textarea.style.position = 'absolute';
      textarea.style.left = '-9999px'; // 将要 copy 的值赋给 textarea 标签的 value 属性

      textarea.value = el.$value; // 将 textarea 插入到 body 中

      document.body.appendChild(textarea); // 选中值并复制

      textarea.select();
      textarea.setSelectionRange(0, textarea.value.length);
      const result = document.execCommand('Copy');

      if (result) {
        Object(vant__WEBPACK_IMPORTED_MODULE_0__["Toast"])('Copied');
      }

      document.body.removeChild(textarea);
    }; // 绑定点击事件，就是所谓的一键 copy


    el.addEventListener('click', el.handler);
  },

  // 当传进来的值更新的时候触发
  componentUpdated(el, {
    value
  }) {
    el.$value = value;
  },

  // 指令与元素解绑的时候，移除事件绑定
  unbind(el) {
    el.removeEventListener('click', el.handler);
  }

};
/* harmony default export */ __webpack_exports__["default"] = (vCopy);

/***/ })

};;
//# sourceMappingURL=copy.js.map