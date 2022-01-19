exports.ids = [11,12,14,15,16];
exports.modules = {

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(143);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("cbba6d14", content, true, context)
};

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Painter; });
const QR = __webpack_require__(83);

const GD = __webpack_require__(84);

class Painter {
  constructor(ctx, data) {
    this.ctx = ctx;
    this.data = data;
    this.globalWidth = {};
    this.globalHeight = {};
  }

  paint(callback) {
    this.style = {
      width: this.data.width.toPx(),
      height: this.data.height.toPx()
    };

    this._background();

    if (this.data.views && this.data.views.length > 0) {
      for (const view of this.data.views) {
        this._drawAbsolute(view);
      }
    }

    callback && callback();
  }

  _background() {
    this.ctx.save();
    const {
      width,
      height
    } = this.style;
    const bg = this.data.background;
    this.ctx.translate(width / 2, height / 2);

    this._doClip(this.data.borderRadius, width, height);

    if (!bg) {
      // 如果未设置背景，则默认使用透明色
      this.ctx.fillStyle = 'transparent';
      this.ctx.fillRect(-(width / 2), -(height / 2), width, height);
    } else if (bg.src) {
      // 背景填充图片
      this.ctx.drawImage(bg, -(width / 2), -(height / 2), width, height);
    } else if (bg.startsWith('#') || bg.startsWith('rgba') || bg.toLowerCase() === 'transparent') {
      // 背景填充颜色
      this.ctx.fillStyle = bg;
      this.ctx.fillRect(-(width / 2), -(height / 2), width, height);
    } else if (GD.api.isGradient(bg)) {
      GD.api.doGradient(bg, width, height, this.ctx);
      this.ctx.fillRect(-(width / 2), -(height / 2), width, height);
    }

    this.ctx.restore();
  }

  _drawAbsolute(view) {
    if (!(view && view.type)) {
      // 过滤无效 view
      return;
    } // 证明 css 为数组形式，需要合并


    if (view.css && view.css.length) {
      /* eslint-disable no-param-reassign */
      view.css = Object.assign(...view.css);
    }

    switch (view.type) {
      case 'image':
        this._drawAbsImage(view);

        break;

      case 'text':
        this._fillAbsText(view);

        break;

      case 'rect':
        this._drawAbsRect(view);

        break;

      case 'qrcode':
        this._drawQRCode(view);

        break;

      default:
        break;
    }
  }

  _border({
    borderRadius = 0,
    width,
    height,
    borderWidth = 0,
    borderStyle = 'solid'
  }) {
    let r1 = 0,
        r2 = 0,
        r3 = 0,
        r4 = 0;
    const minSize = Math.min(width, height);

    if (borderRadius) {
      const border = borderRadius.split(/\s+/);

      if (border.length === 4) {
        r1 = Math.min(border[0].toPx(false, minSize), width / 2, height / 2);
        r2 = Math.min(border[1].toPx(false, minSize), width / 2, height / 2);
        r3 = Math.min(border[2].toPx(false, minSize), width / 2, height / 2);
        r4 = Math.min(border[3].toPx(false, minSize), width / 2, height / 2);
      } else {
        r1 = r2 = r3 = r4 = Math.min(borderRadius && borderRadius.toPx(false, minSize), width / 2, height / 2);
      }
    }

    const lineWidth = borderWidth && borderWidth.toPx(false, minSize);
    this.ctx.lineWidth = lineWidth;

    if (borderStyle === 'dashed') {
      this.ctx.setLineDash([lineWidth * 4 / 3, lineWidth * 4 / 3]); // this.ctx.lineDashOffset = 2 * lineWidth
    } else if (borderStyle === 'dotted') {
      this.ctx.setLineDash([lineWidth, lineWidth]);
    }

    const notSolid = borderStyle !== 'solid';
    this.ctx.beginPath();
    notSolid && r1 === 0 && this.ctx.moveTo(-width / 2 - lineWidth, -height / 2 - lineWidth / 2); // 顶边虚线规避重叠规则

    r1 !== 0 && this.ctx.arc(-width / 2 + r1, -height / 2 + r1, r1 + lineWidth / 2, 1 * Math.PI, 1.5 * Math.PI); //左上角圆弧

    this.ctx.lineTo(r2 === 0 ? notSolid ? width / 2 : width / 2 + lineWidth / 2 : width / 2 - r2, -height / 2 - lineWidth / 2); // 顶边线

    notSolid && r2 === 0 && this.ctx.moveTo(width / 2 + lineWidth / 2, -height / 2 - lineWidth); // 右边虚线规避重叠规则

    r2 !== 0 && this.ctx.arc(width / 2 - r2, -height / 2 + r2, r2 + lineWidth / 2, 1.5 * Math.PI, 2 * Math.PI); // 右上角圆弧

    this.ctx.lineTo(width / 2 + lineWidth / 2, r3 === 0 ? notSolid ? height / 2 : height / 2 + lineWidth / 2 : height / 2 - r3); // 右边线

    notSolid && r3 === 0 && this.ctx.moveTo(width / 2 + lineWidth, height / 2 + lineWidth / 2); // 底边虚线规避重叠规则

    r3 !== 0 && this.ctx.arc(width / 2 - r3, height / 2 - r3, r3 + lineWidth / 2, 0, 0.5 * Math.PI); // 右下角圆弧

    this.ctx.lineTo(r4 === 0 ? notSolid ? -width / 2 : -width / 2 - lineWidth / 2 : -width / 2 + r4, height / 2 + lineWidth / 2); // 底边线

    notSolid && r4 === 0 && this.ctx.moveTo(-width / 2 - lineWidth / 2, height / 2 + lineWidth); // 左边虚线规避重叠规则

    r4 !== 0 && this.ctx.arc(-width / 2 + r4, height / 2 - r4, r4 + lineWidth / 2, 0.5 * Math.PI, 1 * Math.PI); // 左下角圆弧

    this.ctx.lineTo(-width / 2 - lineWidth / 2, r1 === 0 ? notSolid ? -height / 2 : -height / 2 - lineWidth / 2 : -height / 2 + r1); // 左边线

    notSolid && r1 === 0 && this.ctx.moveTo(-width / 2 - lineWidth, -height / 2 - lineWidth / 2); // 顶边虚线规避重叠规则

    if (!notSolid) {
      this.ctx.closePath();
    }
  }
  /**
   * 根据 borderRadius 进行裁减
   */


  _doClip(borderRadius, width, height, borderStyle) {
    if (borderRadius && width && height) {
      // 防止在某些机型上周边有黑框现象，此处如果直接设置 fillStyle 为透明，在 Android 机型上会导致被裁减的图片也变为透明， iOS 和 IDE 上不会
      // globalAlpha 在 1.9.90 起支持，低版本下无效，但把 fillStyle 设为了 white，相对默认的 black 要好点
      this.ctx.globalAlpha = 0;
      this.ctx.fillStyle = 'white';

      this._border({
        borderRadius,
        width,
        height,
        borderStyle
      });

      this.ctx.fill(); // 在 ios 的 6.6.6 版本上 clip 有 bug，禁掉此类型上的 clip，也就意味着，在此版本微信的 ios 设备下无法使用 border 属性

      this.ctx.clip();
      this.ctx.globalAlpha = 1;
    }
  }
  /**
   * 画边框
   */


  _doBorder(view, width, height) {
    if (!view.css) {
      return;
    }

    const {
      borderRadius,
      borderWidth,
      borderColor,
      borderStyle
    } = view.css;

    if (!borderWidth) {
      return;
    }

    this.ctx.save();

    this._preProcess(view, true);

    this.ctx.strokeStyle = borderColor || 'black';

    this._border({
      borderRadius,
      width,
      height,
      borderWidth,
      borderStyle
    });

    this.ctx.stroke();
    this.ctx.restore();
  }

  _preProcess(view, notClip) {
    let width = 0;
    let height;
    let extra;

    const paddings = this._doPaddings(view);

    switch (view.type) {
      case 'text':
        {
          const textArray = view.text.split('\n'); // 处理多个连续的'\n'

          for (let i = 0; i < textArray.length; ++i) {
            if (textArray[i] === '') {
              textArray[i] = ' ';
            }
          } // const fontWeight = view.css.fontWeight === 'bold' ? 'bold' : 'normal'


          const fontWeightArr = ['normal', 'bold', 'bolder', 'lighter', '100', '200', '300', '400', '500', '600', '700', '800', '900'];
          const fontWeight = fontWeightArr.includes(view.css.fontWeight) ? view.css.fontWeight : 'normal';
          const textStyle = view.css.textStyle === 'italic' ? 'italic' : 'normal';
          let textIndent = view.css.textIndent ? view.css.textIndent.toPx() : 0;

          if (!view.css.fontSize) {
            view.css.fontSize = '20rpx';
          }

          this.ctx.font = `${textStyle} ${fontWeight} ${view.css.fontSize.toPx()}px "${view.css.fontFamily || 'sans-serif'}"`; // 计算行数

          let lines = 0;
          const linesArray = [];

          for (let i = 0; i < textArray.length; ++i) {
            const textLength = this.ctx.measureText(textArray[i]).width; // 最小长度

            const minWidth = view.css.fontSize.toPx() + paddings[1] + paddings[3];
            let partWidth = view.css.width ? view.css.width.toPx(false, this.style.width) - paddings[1] - paddings[3] : textLength;

            if (partWidth < minWidth) {
              partWidth = minWidth;
            } // textIndent 最大为一行


            textIndent = textIndent > partWidth ? partWidth : textIndent;
            const calLines = Math.ceil((textLength + textIndent) / partWidth); // 取最长的作为 width

            width = partWidth > width ? partWidth : width;
            lines += calLines;
            linesArray[i] = calLines;
          }

          lines = view.css.maxLines < lines ? view.css.maxLines : lines;
          const lineHeight = view.css.lineHeight ? view.css.lineHeight.toPx() : view.css.fontSize.toPx();
          height = lineHeight * lines;
          extra = {
            textIndent,
            lines: lines,
            lineHeight: lineHeight,
            textArray: textArray,
            linesArray: linesArray
          };
          break;
        }

      case 'image':
        {
          // 有css却未设置width或height，则默认为auto
          if (view.css) {
            if (!view.css.width) {
              view.css.width = 'auto';
            }

            if (!view.css.height) {
              view.css.height = 'auto';
            }
          }

          if (!view.css || view.css.width === 'auto' && view.css.height === 'auto') {
            width = Math.round(view.sWidth);
            height = Math.round(view.sHeight);
          } else if (view.css.width === 'auto') {
            height = view.css.height.toPx(false, this.style.height);
            width = view.sWidth / view.sHeight * height;
          } else if (view.css.height === 'auto') {
            width = view.css.width.toPx(false, this.style.width);
            height = view.sHeight / view.sWidth * width;
          } else {
            width = view.css.width.toPx(false, this.style.width);
            height = view.css.height.toPx(false, this.style.height);
          }

          break;
        }

      default:
        if (!(view.css.width && view.css.height)) {
          console.error('You should set width and height');
          return;
        }

        width = view.css.width.toPx(false, this.style.width);
        height = view.css.height.toPx(false, this.style.height);
        break;
    }

    let x;

    if (view.css && view.css.right) {
      if (typeof view.css.right === 'string') {
        x = this.style.width - view.css.right.toPx(true, this.style.width);
      } else {
        // 可以用数组方式，把文字长度计算进去
        // [right, 文字id, 乘数（默认 1）]
        const rights = view.css.right;
        x = this.style.width - rights[0].toPx(true, this.style.width) - this.globalWidth[rights[1]] * (rights[2] || 1);
      }
    } else if (view.css && view.css.left) {
      if (typeof view.css.left === 'string') {
        x = view.css.left.toPx(true, this.style.width);
      } else {
        const lefts = view.css.left;
        x = lefts[0].toPx(true, this.style.width) + this.globalWidth[lefts[1]] * (lefts[2] || 1);
      }
    } else {
      x = 0;
    } //const y = view.css && view.css.bottom ? this.style.height - height - view.css.bottom.toPx(true) : (view.css && view.css.top ? view.css.top.toPx(true) : 0);


    let y;

    if (view.css && view.css.bottom) {
      y = this.style.height - height - view.css.bottom.toPx(true, this.style.height);
    } else {
      if (view.css && view.css.top) {
        if (typeof view.css.top === 'string') {
          y = view.css.top.toPx(true, this.style.height);
        } else {
          const tops = view.css.top;
          y = tops[0].toPx(true, this.style.height) + this.globalHeight[tops[1]] * (tops[2] || 1);
        }
      } else {
        y = 0;
      }
    }

    const angle = view.css && view.css.rotate ? this._getAngle(view.css.rotate) : 0; // 当设置了 right 时，默认 align 用 right，反之用 left

    const align = view.css && view.css.align ? view.css.align : view.css && view.css.right ? 'right' : 'left';
    const verticalAlign = view.css && view.css.verticalAlign ? view.css.verticalAlign : 'top'; // 记录绘制时的画布

    let xa = 0;

    switch (align) {
      case 'center':
        xa = x;
        break;

      case 'right':
        xa = x - width / 2;
        break;

      default:
        xa = x + width / 2;
        break;
    }

    let ya = 0;

    switch (verticalAlign) {
      case 'center':
        ya = y;
        break;

      case 'bottom':
        ya = y - height / 2;
        break;

      default:
        ya = y + height / 2;
        break;
    }

    this.ctx.translate(xa, ya); // 记录该 view 的有效点击区域
    // TODO ，旋转和裁剪的判断
    // 记录在真实画布上的左侧

    let left = x;

    if (align === 'center') {
      left = x - width / 2;
    } else if (align === 'right') {
      left = x - width;
    }

    var top = y;

    if (verticalAlign === 'center') {
      top = y - height / 2;
    } else if (verticalAlign === 'bottom') {
      top = y - height;
    }

    if (view.rect) {
      view.rect.left = left;
      view.rect.top = top;
      view.rect.right = left + width;
      view.rect.bottom = top + height;
      view.rect.x = view.css && view.css.right ? x - width : x;
      view.rect.y = y;
    } else {
      view.rect = {
        left: left,
        top: top,
        right: left + width,
        bottom: top + height,
        x: view.css && view.css.right ? x - width : x,
        y: y
      };
    }

    view.rect.left = view.rect.left - paddings[3];
    view.rect.top = view.rect.top - paddings[0];
    view.rect.right = view.rect.right + paddings[1];
    view.rect.bottom = view.rect.bottom + paddings[2];

    if (view.type === 'text') {
      view.rect.minWidth = view.css.fontSize.toPx() + paddings[1] + paddings[3];
    }

    this.ctx.rotate(angle);

    if (!notClip && view.css && view.css.borderRadius && view.type !== 'rect') {
      this._doClip(view.css.borderRadius, width, height, view.css.borderStyle);
    }

    this._doShadow(view);

    if (view.id) {
      this.globalWidth[view.id] = width;
      this.globalHeight[view.id] = height;
    }

    return {
      width: width,
      height: height,
      x: x,
      y: y,
      extra: extra
    };
  }

  _doPaddings(view) {
    const {
      padding
    } = view.css ? view.css : {};
    let pd = [0, 0, 0, 0];

    if (padding) {
      const pdg = padding.split(/\s+/);

      if (pdg.length === 1) {
        const x = pdg[0].toPx();
        pd = [x, x, x, x];
      }

      if (pdg.length === 2) {
        const x = pdg[0].toPx();
        const y = pdg[1].toPx();
        pd = [x, y, x, y];
      }

      if (pdg.length === 3) {
        const x = pdg[0].toPx();
        const y = pdg[1].toPx();
        const z = pdg[2].toPx();
        pd = [x, y, z, y];
      }

      if (pdg.length === 4) {
        const x = pdg[0].toPx();
        const y = pdg[1].toPx();
        const z = pdg[2].toPx();
        const a = pdg[3].toPx();
        pd = [x, y, z, a];
      }
    }

    return pd;
  } // 画文字的背景图片


  _doBackground(view) {
    this.ctx.save();

    const {
      width: rawWidth,
      height: rawHeight
    } = this._preProcess(view, true);

    const {
      background
    } = view.css;

    let pd = this._doPaddings(view);

    const width = rawWidth + pd[1] + pd[3];
    const height = rawHeight + pd[0] + pd[2];

    this._doClip(view.css.borderRadius, width, height, view.css.borderStyle);

    if (GD.api.isGradient(background)) {
      GD.api.doGradient(background, width, height, this.ctx);
    } else {
      this.ctx.fillStyle = background;
    }

    this.ctx.fillRect(-(width / 2), -(height / 2), width, height);
    this.ctx.restore();
  }

  _drawQRCode(view) {
    this.ctx.save();

    const {
      width,
      height
    } = this._preProcess(view);

    QR.api.draw(view.content, this.ctx, -width / 2, -height / 2, width, height, view.css.background, view.css.color);
    this.ctx.restore();

    this._doBorder(view, width, height);
  }

  _drawAbsImage(view) {
    if (!view.url) {
      return;
    }

    this.ctx.save();

    const {
      width,
      height
    } = this._preProcess(view); // 图片失败


    if (typeof view.url === 'string') {
      this.ctx.fillStyle = '#ddd';
      this.ctx.fillRect(-(width / 2), -(height / 2), width, height);
      this.ctx.restore();
      return;
    } // 获得缩放到图片大小级别的裁减框


    let rWidth = view.sWidth;
    let rHeight = view.sHeight;
    let startX = 0;
    let startY = 0; // 绘画区域比例

    const cp = width / height; // 原图比例

    const op = view.sWidth / view.sHeight;

    if (cp >= op) {
      rHeight = rWidth / cp;
      startY = Math.round((view.sHeight - rHeight) / 2);
    } else {
      rWidth = rHeight * cp;
      startX = Math.round((view.sWidth - rWidth) / 2);
    }

    if (view.css && view.css.mode === 'scaleToFill') {
      this.ctx.drawImage(view.url, -(width / 2), -(height / 2), width, height);
    } else {
      this.ctx.drawImage(view.url, startX, startY, rWidth, rHeight, -(width / 2), -(height / 2), width, height);
      view.rect.startX = startX / view.sWidth;
      view.rect.startY = startY / view.sHeight;
      view.rect.endX = (startX + rWidth) / view.sWidth;
      view.rect.endY = (startY + rHeight) / view.sHeight;
    }

    this.ctx.restore();

    this._doBorder(view, width, height);
  }

  _fillAbsText(view) {
    if (!view.text) {
      return;
    }

    if (view.css.background) {
      // 生成背景
      this._doBackground(view);
    }

    this.ctx.save();

    const {
      width,
      height,
      extra
    } = this._preProcess(view, view.css.background && view.css.borderRadius);

    this.ctx.fillStyle = view.css.color || 'black';
    const {
      lines,
      lineHeight,
      textArray,
      linesArray,
      textIndent
    } = extra; // 如果设置了id，则保留 text 的长度

    if (view.id) {
      let textWidth = 0;

      for (let i = 0; i < textArray.length; ++i) {
        const _w = this.ctx.measureText(textArray[i]).width;
        textWidth = _w > textWidth ? _w : textWidth;
      }

      this.globalWidth[view.id] = width ? textWidth < width ? textWidth : width : textWidth;
    }

    let lineIndex = 0;
    let tabWidth = 0;

    for (let j = 0; j < textArray.length; ++j) {
      const preLineLength = Math.ceil(textArray[j].length / linesArray[j]);
      const firstLineLength = Math.ceil((width - textIndent) / width * (textArray[j].length / linesArray[j]));
      let start = 0;
      let alreadyCount = 0;

      for (let i = 0; i < linesArray[j]; ++i) {
        // 绘制行数大于最大行数，则直接跳出循环
        if (lineIndex >= lines) {
          break;
        }

        tabWidth = i == 0 ? textIndent : 0;
        alreadyCount = i == 0 ? firstLineLength : preLineLength;
        let text = textArray[j].substr(start, alreadyCount);
        let measuredWith = this.ctx.measureText(text).width; // 如果测量大小小于width一个字符的大小，则进行补齐，如果测量大小超出 width，则进行减除
        // 如果已经到文本末尾，也不要进行该循环

        while (start + alreadyCount <= textArray[j].length && (width - measuredWith - tabWidth > view.css.fontSize.toPx() || measuredWith - width > view.css.fontSize.toPx())) {
          if (measuredWith < width) {
            text = textArray[j].substr(start, ++alreadyCount);
          } else {
            if (text.length <= 1) {
              // 如果只有一个字符时，直接跳出循环
              break;
            }

            text = textArray[j].substr(start, --alreadyCount); // break
          }

          measuredWith = this.ctx.measureText(text).width;
        }

        start += text.length; // 如果是最后一行了，发现还有未绘制完的内容，则加...

        if (lineIndex === lines - 1 && (j < textArray.length - 1 || start < textArray[j].length)) {
          while (this.ctx.measureText(`${text}...`).width > width) {
            if (text.length <= 1) {
              // 如果只有一个字符时，直接跳出循环
              break;
            }

            text = text.substring(0, text.length - 1);
          }

          text += '...';
          measuredWith = this.ctx.measureText(text).width;
        }

        this.ctx.textAlign = view.css.textAlign ? view.css.textAlign : 'left';
        let x;
        let lineX;

        switch (view.css.textAlign) {
          case 'center':
            x = 0;
            lineX = x - measuredWith / 2 + tabWidth;
            break;

          case 'right':
            x = width / 2;
            lineX = x - measuredWith + tabWidth;
            break;

          default:
            x = -(width / 2) + tabWidth;
            lineX = x;
            break;
        }

        const y = -(height / 2) + (lineIndex === 0 ? view.css.fontSize.toPx() : view.css.fontSize.toPx() + lineIndex * lineHeight);
        lineIndex++;

        if (view.css.textStyle === 'stroke') {
          this.ctx.strokeText(text, x, y, measuredWith);
        } else {
          this.ctx.fillText(text, x, y, measuredWith);
        }

        const fontSize = view.css.fontSize.toPx();

        if (view.css.textDecoration) {
          this.ctx.lineWidth = fontSize / 13;
          this.ctx.beginPath();

          if (/\bunderline\b/.test(view.css.textDecoration)) {
            this.ctx.moveTo(lineX, y);
            this.ctx.lineTo(lineX + measuredWith, y);
          }

          if (/\boverline\b/.test(view.css.textDecoration)) {
            this.ctx.moveTo(lineX, y - fontSize);
            this.ctx.lineTo(lineX + measuredWith, y - fontSize);
          }

          if (/\bline-through\b/.test(view.css.textDecoration)) {
            this.ctx.moveTo(lineX, y - fontSize / 3);
            this.ctx.lineTo(lineX + measuredWith, y - fontSize / 3);
          }

          this.ctx.closePath();
          this.ctx.strokeStyle = view.css.color;
          this.ctx.stroke();
        }
      }
    }

    this.ctx.restore();

    this._doBorder(view, width, height);
  }

  _drawAbsRect(view) {
    this.ctx.save();

    const {
      width,
      height
    } = this._preProcess(view);

    if (GD.api.isGradient(view.css.color)) {
      GD.api.doGradient(view.css.color, width, height, this.ctx);
    } else {
      this.ctx.fillStyle = view.css.color;
    }

    const {
      borderRadius,
      borderStyle,
      borderWidth
    } = view.css;

    this._border({
      borderRadius,
      width,
      height,
      borderWidth,
      borderStyle
    });

    this.ctx.fill();
    this.ctx.restore();

    this._doBorder(view, width, height);
  } // shadow 支持 (x, y, blur, color), 不支持 spread
  // shadow:0px 0px 10px rgba(0,0,0,0.1);


  _doShadow(view) {
    if (!view.css || !view.css.shadow) {
      return;
    }

    const box = view.css.shadow.replace(/,\s+/g, ',').split(/\s+/);

    if (box.length > 4) {
      console.error("shadow don't spread option");
      return;
    }

    this.ctx.shadowOffsetX = parseInt(box[0], 10);
    this.ctx.shadowOffsetY = parseInt(box[1], 10);
    this.ctx.shadowBlur = parseInt(box[2], 10);
    this.ctx.shadowColor = box[3];
  }

  _getAngle(angle) {
    return Number(angle) * Math.PI / 180;
  }

}

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidUrl", function() { return isValidUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equal", function() { return equal; });
const isValidUrl = url => {
  return /(ht|f)tp(s?):\/\/([^ \\/]*\.)+[^ \\/]*(:[0-9]+)?\/?/.test(url);
};
/**
 * 深度对比两个对象是否一致
 * from: https://github.com/epoberezkin/fast-deep-equal
 * @param  {Object} a 对象a
 * @param  {Object} b 对象b
 * @return {Boolean}   是否相同
 */

/* eslint-disable */


const equal = (a, b) => {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    var arrA = Array.isArray(a),
        arrB = Array.isArray(b),
        i,
        length,
        key;

    if (arrA && arrB) {
      length = a.length;
      if (length != b.length) return false;

      for (i = length; i-- !== 0;) if (!equal(a[i], b[i])) return false;

      return true;
    }

    if (arrA != arrB) return false;
    var dateA = a instanceof Date,
        dateB = b instanceof Date;
    if (dateA != dateB) return false;
    if (dateA && dateB) return a.getTime() == b.getTime();
    var regexpA = a instanceof RegExp,
        regexpB = b instanceof RegExp;
    if (regexpA != regexpB) return false;
    if (regexpA && regexpB) return a.toString() == b.toString();
    var keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      key = keys[i];
      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  return a !== a && b !== b;
};



/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_canvas_poster_vue_vue_type_style_index_0_id_b137f4e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(102);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_canvas_poster_vue_vue_type_style_index_0_id_b137f4e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_canvas_poster_vue_vue_type_style_index_0_id_b137f4e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_canvas_poster_vue_vue_type_style_index_0_id_b137f4e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_canvas_poster_vue_vue_type_style_index_0_id_b137f4e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".canvas[data-v-b137f4e8] {\n  position: fixed;\n  top: 53.33rem;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./components/vue-create-poster/layout/painter.js
var painter = __webpack_require__(104);

// EXTERNAL MODULE: ./components/vue-create-poster/layout/util.js
var util = __webpack_require__(105);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/vue-create-poster/layout/canvas-poster.vue?vue&type=script&lang=js&


/* harmony default export */ var canvas_postervue_type_script_lang_js_ = ({
  name: 'VueCanvasPoster',
  props: {
    painting: {
      type: Object,
      default: function () {
        return {};
      }
    },
    dirty: {
      type: Boolean,
      default: false
    },
    widthPixels: {
      type: Number,
      default: 750
    }
  },
  watch: {
    painting: {
      handler(newVal, oldVal) {
        if (this.isNeedRefresh(newVal, oldVal)) {
          this.paintCount = 0;
          this.startPaint();
        }
      },

      deep: true,
      immediate: true
    }
  },

  data() {
    return {
      paintCount: 0,
      painterStyle: '',
      canvasWidthInPx: 375,
      canvasHeightInPx: 375,
      width: 100,
      height: 100,
      canvas: null,
      ctx: null
    };
  },

  render(h) {
    return h('div', [h('canvas', {
      ref: 'canvas',
      class: 'canvas',
      style: this.painterStyle
    })]);
  },

  mounted() {
    this.$nextTick(() => {
      this.canvas = this.$refs.canvas; // 指定canvas

      this.ctx = this.canvas.getContext('2d'); //设置2D渲染区域
    });
  },

  methods: {
    /**
     * 判断一个 object 是否为 空
     * @param {object} object
     */
    isEmpty(object) {
      for (const i in object) {
        return false;
      }

      return true;
    },

    isNeedRefresh(newVal, oldVal) {
      if (!newVal || this.isEmpty(newVal) || this.dirty && Object(util["equal"])(newVal, oldVal)) {
        return false;
      }

      return true;
    },

    // 开始绘画
    startPaint() {
      if (this.isEmpty(this.painting)) {
        return;
      }

      setStringPrototype(1); // 下载图片

      this.downloadImages().then(res => {
        const {
          width,
          height
        } = res;

        if (!width || !height) {
          console.error(`You should set width and height correctly for painter, width: ${width}, height: ${height}`);
          return;
        }

        this.canvasWidthInPx = width.toPx();

        if (this.widthPixels) {
          // 重设宽度，高度
          setStringPrototype(this.widthPixels / this.canvasWidthInPx);
          this.canvasWidthInPx = this.widthPixels;
        }

        this.canvasHeightInPx = height.toPx();
        this.painterStyle = `width:${this.canvasWidthInPx}px;height:${this.canvasHeightInPx}px;`;
        this.canvas = this.$refs.canvas; // 指定canvas

        this.canvas.width = this.canvasWidthInPx;
        this.canvas.height = this.canvasHeightInPx;
        const ctx = this.canvas.getContext('2d'); //设置2D渲染区域

        const pen = new painter["default"](ctx, res);
        pen.paint(() => {
          var imageBase64 = this.canvas.toDataURL('image/png');
          this.$emit('success', imageBase64);
        });
      }).catch(err => {
        this.$emit('fail', err);
      });
    },

    // 下载所有图片
    downloadImages() {
      return new Promise(resolve => {
        let preCount = 0;
        let completeCount = 0;
        const paintCopy = JSON.parse(JSON.stringify(this.painting));

        if (paintCopy.background) {
          preCount++;
          this.loadImage(paintCopy.background).then(image => {
            paintCopy.background = image;
            completeCount++;
            preCount === completeCount && resolve(paintCopy);
          }, err => {
            completeCount++;
            preCount === completeCount && resolve(paintCopy);
            console.log(err);
          });
        }

        if (paintCopy.views) {
          for (const view of paintCopy.views) {
            if (view && view.type === 'image' && view.url) {
              preCount++;
              /* eslint-disable no-loop-func */

              this.loadImage(view.url).then(image => {
                completeCount++;
                view.url = image; // 获得一下图片信息，供后续裁减使用

                view.sWidth = image.width;
                view.sHeight = image.height;
                preCount === completeCount && resolve(paintCopy);
              }, err => {
                completeCount++;
                preCount === completeCount && resolve(paintCopy);
                console.log(err);
              });
            }
          }
        }

        preCount === 0 && resolve(paintCopy); // if (preCount !== completeCount) {
        //   reject('paintCopy');
        // }
      });
    },

    // 下载图片
    loadImage(src) {
      return new Promise((resolve, reject) => {
        if (src.startsWith('#')) {
          resolve(src);
          return;
        }

        const img = new Image();

        img.onload = () => resolve(img);

        img.onerror = () => reject(`下载图片失败 ${src}`);

        img.crossOrigin = 'anonymous';
        img.src = src;

        if (img.complete === true) {
          // Inline XML images may fail to parse, throwing an Error later on
          setTimeout(() => resolve(img), 500);
        }
      });
    }

  }
});

function setStringPrototype(scale) {
  /* eslint-disable no-extend-native */

  /**
   * 是否支持负数
   * @param {Boolean} minus 是否支持负数
   */
  String.prototype.toPx = function toPx(minus, baseSize) {
    if (this === '0') {
      return 0;
    }

    let reg;

    if (minus) {
      reg = /^-?[0-9]+([.]{1}[0-9]+){0,1}(px|%)$/g;
    } else {
      reg = /^[0-9]+([.]{1}[0-9]+){0,1}(px|%)$/g;
    }

    const results = reg.exec(this);
    const unit = results[2];
    const value = parseFloat(this);
    let res = 0;

    if (unit === 'px') {
      res = Math.round(value * (scale || 1));
    } else if (unit === '%') {
      res = Math.round(value * baseSize / 100);
    }

    return res;
  };
}
// CONCATENATED MODULE: ./components/vue-create-poster/layout/canvas-poster.vue?vue&type=script&lang=js&
 /* harmony default export */ var layout_canvas_postervue_type_script_lang_js_ = (canvas_postervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/vue-create-poster/layout/canvas-poster.vue
var render, staticRenderFns


function injectStyles (context) {
  
  var style0 = __webpack_require__(142)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  layout_canvas_postervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "b137f4e8",
  "6d693a28"
  
)

/* harmony default export */ var canvas_poster = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "api", function() { return api; });
/* eslint-disable */
// alignment pattern
var adelta = [0, 11, 15, 19, 23, 27, 31, 16, 18, 20, 22, 24, 26, 28, 20, 22, 24, 24, 26, 28, 28, 22, 24, 24, 26, 26, 28, 28, 24, 24, 26, 26, 26, 28, 28, 24, 26, 26, 26, 28, 28]; // version block

var vpat = [0xc94, 0x5bc, 0xa99, 0x4d3, 0xbf6, 0x762, 0x847, 0x60d, 0x928, 0xb78, 0x45d, 0xa17, 0x532, 0x9a6, 0x683, 0x8c9, 0x7ec, 0xec4, 0x1e1, 0xfab, 0x08e, 0xc1a, 0x33f, 0xd75, 0x250, 0x9d5, 0x6f0, 0x8ba, 0x79f, 0xb0b, 0x42e, 0xa64, 0x541, 0xc69]; // final format bits with mask: level << 3 | mask

var fmtword = [0x77c4, 0x72f3, 0x7daa, 0x789d, 0x662f, 0x6318, 0x6c41, 0x6976, //L
0x5412, 0x5125, 0x5e7c, 0x5b4b, 0x45f9, 0x40ce, 0x4f97, 0x4aa0, //M
0x355f, 0x3068, 0x3f31, 0x3a06, 0x24b4, 0x2183, 0x2eda, 0x2bed, //Q
0x1689, 0x13be, 0x1ce7, 0x19d0, 0x0762, 0x0255, 0x0d0c, 0x083b //H
]; // 4 per version: number of blocks 1,2; data width; ecc width

var eccblocks = [1, 0, 19, 7, 1, 0, 16, 10, 1, 0, 13, 13, 1, 0, 9, 17, 1, 0, 34, 10, 1, 0, 28, 16, 1, 0, 22, 22, 1, 0, 16, 28, 1, 0, 55, 15, 1, 0, 44, 26, 2, 0, 17, 18, 2, 0, 13, 22, 1, 0, 80, 20, 2, 0, 32, 18, 2, 0, 24, 26, 4, 0, 9, 16, 1, 0, 108, 26, 2, 0, 43, 24, 2, 2, 15, 18, 2, 2, 11, 22, 2, 0, 68, 18, 4, 0, 27, 16, 4, 0, 19, 24, 4, 0, 15, 28, 2, 0, 78, 20, 4, 0, 31, 18, 2, 4, 14, 18, 4, 1, 13, 26, 2, 0, 97, 24, 2, 2, 38, 22, 4, 2, 18, 22, 4, 2, 14, 26, 2, 0, 116, 30, 3, 2, 36, 22, 4, 4, 16, 20, 4, 4, 12, 24, 2, 2, 68, 18, 4, 1, 43, 26, 6, 2, 19, 24, 6, 2, 15, 28, 4, 0, 81, 20, 1, 4, 50, 30, 4, 4, 22, 28, 3, 8, 12, 24, 2, 2, 92, 24, 6, 2, 36, 22, 4, 6, 20, 26, 7, 4, 14, 28, 4, 0, 107, 26, 8, 1, 37, 22, 8, 4, 20, 24, 12, 4, 11, 22, 3, 1, 115, 30, 4, 5, 40, 24, 11, 5, 16, 20, 11, 5, 12, 24, 5, 1, 87, 22, 5, 5, 41, 24, 5, 7, 24, 30, 11, 7, 12, 24, 5, 1, 98, 24, 7, 3, 45, 28, 15, 2, 19, 24, 3, 13, 15, 30, 1, 5, 107, 28, 10, 1, 46, 28, 1, 15, 22, 28, 2, 17, 14, 28, 5, 1, 120, 30, 9, 4, 43, 26, 17, 1, 22, 28, 2, 19, 14, 28, 3, 4, 113, 28, 3, 11, 44, 26, 17, 4, 21, 26, 9, 16, 13, 26, 3, 5, 107, 28, 3, 13, 41, 26, 15, 5, 24, 30, 15, 10, 15, 28, 4, 4, 116, 28, 17, 0, 42, 26, 17, 6, 22, 28, 19, 6, 16, 30, 2, 7, 111, 28, 17, 0, 46, 28, 7, 16, 24, 30, 34, 0, 13, 24, 4, 5, 121, 30, 4, 14, 47, 28, 11, 14, 24, 30, 16, 14, 15, 30, 6, 4, 117, 30, 6, 14, 45, 28, 11, 16, 24, 30, 30, 2, 16, 30, 8, 4, 106, 26, 8, 13, 47, 28, 7, 22, 24, 30, 22, 13, 15, 30, 10, 2, 114, 28, 19, 4, 46, 28, 28, 6, 22, 28, 33, 4, 16, 30, 8, 4, 122, 30, 22, 3, 45, 28, 8, 26, 23, 30, 12, 28, 15, 30, 3, 10, 117, 30, 3, 23, 45, 28, 4, 31, 24, 30, 11, 31, 15, 30, 7, 7, 116, 30, 21, 7, 45, 28, 1, 37, 23, 30, 19, 26, 15, 30, 5, 10, 115, 30, 19, 10, 47, 28, 15, 25, 24, 30, 23, 25, 15, 30, 13, 3, 115, 30, 2, 29, 46, 28, 42, 1, 24, 30, 23, 28, 15, 30, 17, 0, 115, 30, 10, 23, 46, 28, 10, 35, 24, 30, 19, 35, 15, 30, 17, 1, 115, 30, 14, 21, 46, 28, 29, 19, 24, 30, 11, 46, 15, 30, 13, 6, 115, 30, 14, 23, 46, 28, 44, 7, 24, 30, 59, 1, 16, 30, 12, 7, 121, 30, 12, 26, 47, 28, 39, 14, 24, 30, 22, 41, 15, 30, 6, 14, 121, 30, 6, 34, 47, 28, 46, 10, 24, 30, 2, 64, 15, 30, 17, 4, 122, 30, 29, 14, 46, 28, 49, 10, 24, 30, 24, 46, 15, 30, 4, 18, 122, 30, 13, 32, 46, 28, 48, 14, 24, 30, 42, 32, 15, 30, 20, 4, 117, 30, 40, 7, 47, 28, 43, 22, 24, 30, 10, 67, 15, 30, 19, 6, 118, 30, 18, 31, 47, 28, 34, 34, 24, 30, 20, 61, 15, 30]; // Galois field log table

var glog = [0xff, 0x00, 0x01, 0x19, 0x02, 0x32, 0x1a, 0xc6, 0x03, 0xdf, 0x33, 0xee, 0x1b, 0x68, 0xc7, 0x4b, 0x04, 0x64, 0xe0, 0x0e, 0x34, 0x8d, 0xef, 0x81, 0x1c, 0xc1, 0x69, 0xf8, 0xc8, 0x08, 0x4c, 0x71, 0x05, 0x8a, 0x65, 0x2f, 0xe1, 0x24, 0x0f, 0x21, 0x35, 0x93, 0x8e, 0xda, 0xf0, 0x12, 0x82, 0x45, 0x1d, 0xb5, 0xc2, 0x7d, 0x6a, 0x27, 0xf9, 0xb9, 0xc9, 0x9a, 0x09, 0x78, 0x4d, 0xe4, 0x72, 0xa6, 0x06, 0xbf, 0x8b, 0x62, 0x66, 0xdd, 0x30, 0xfd, 0xe2, 0x98, 0x25, 0xb3, 0x10, 0x91, 0x22, 0x88, 0x36, 0xd0, 0x94, 0xce, 0x8f, 0x96, 0xdb, 0xbd, 0xf1, 0xd2, 0x13, 0x5c, 0x83, 0x38, 0x46, 0x40, 0x1e, 0x42, 0xb6, 0xa3, 0xc3, 0x48, 0x7e, 0x6e, 0x6b, 0x3a, 0x28, 0x54, 0xfa, 0x85, 0xba, 0x3d, 0xca, 0x5e, 0x9b, 0x9f, 0x0a, 0x15, 0x79, 0x2b, 0x4e, 0xd4, 0xe5, 0xac, 0x73, 0xf3, 0xa7, 0x57, 0x07, 0x70, 0xc0, 0xf7, 0x8c, 0x80, 0x63, 0x0d, 0x67, 0x4a, 0xde, 0xed, 0x31, 0xc5, 0xfe, 0x18, 0xe3, 0xa5, 0x99, 0x77, 0x26, 0xb8, 0xb4, 0x7c, 0x11, 0x44, 0x92, 0xd9, 0x23, 0x20, 0x89, 0x2e, 0x37, 0x3f, 0xd1, 0x5b, 0x95, 0xbc, 0xcf, 0xcd, 0x90, 0x87, 0x97, 0xb2, 0xdc, 0xfc, 0xbe, 0x61, 0xf2, 0x56, 0xd3, 0xab, 0x14, 0x2a, 0x5d, 0x9e, 0x84, 0x3c, 0x39, 0x53, 0x47, 0x6d, 0x41, 0xa2, 0x1f, 0x2d, 0x43, 0xd8, 0xb7, 0x7b, 0xa4, 0x76, 0xc4, 0x17, 0x49, 0xec, 0x7f, 0x0c, 0x6f, 0xf6, 0x6c, 0xa1, 0x3b, 0x52, 0x29, 0x9d, 0x55, 0xaa, 0xfb, 0x60, 0x86, 0xb1, 0xbb, 0xcc, 0x3e, 0x5a, 0xcb, 0x59, 0x5f, 0xb0, 0x9c, 0xa9, 0xa0, 0x51, 0x0b, 0xf5, 0x16, 0xeb, 0x7a, 0x75, 0x2c, 0xd7, 0x4f, 0xae, 0xd5, 0xe9, 0xe6, 0xe7, 0xad, 0xe8, 0x74, 0xd6, 0xf4, 0xea, 0xa8, 0x50, 0x58, 0xaf]; // Galios field exponent table

var gexp = [0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1d, 0x3a, 0x74, 0xe8, 0xcd, 0x87, 0x13, 0x26, 0x4c, 0x98, 0x2d, 0x5a, 0xb4, 0x75, 0xea, 0xc9, 0x8f, 0x03, 0x06, 0x0c, 0x18, 0x30, 0x60, 0xc0, 0x9d, 0x27, 0x4e, 0x9c, 0x25, 0x4a, 0x94, 0x35, 0x6a, 0xd4, 0xb5, 0x77, 0xee, 0xc1, 0x9f, 0x23, 0x46, 0x8c, 0x05, 0x0a, 0x14, 0x28, 0x50, 0xa0, 0x5d, 0xba, 0x69, 0xd2, 0xb9, 0x6f, 0xde, 0xa1, 0x5f, 0xbe, 0x61, 0xc2, 0x99, 0x2f, 0x5e, 0xbc, 0x65, 0xca, 0x89, 0x0f, 0x1e, 0x3c, 0x78, 0xf0, 0xfd, 0xe7, 0xd3, 0xbb, 0x6b, 0xd6, 0xb1, 0x7f, 0xfe, 0xe1, 0xdf, 0xa3, 0x5b, 0xb6, 0x71, 0xe2, 0xd9, 0xaf, 0x43, 0x86, 0x11, 0x22, 0x44, 0x88, 0x0d, 0x1a, 0x34, 0x68, 0xd0, 0xbd, 0x67, 0xce, 0x81, 0x1f, 0x3e, 0x7c, 0xf8, 0xed, 0xc7, 0x93, 0x3b, 0x76, 0xec, 0xc5, 0x97, 0x33, 0x66, 0xcc, 0x85, 0x17, 0x2e, 0x5c, 0xb8, 0x6d, 0xda, 0xa9, 0x4f, 0x9e, 0x21, 0x42, 0x84, 0x15, 0x2a, 0x54, 0xa8, 0x4d, 0x9a, 0x29, 0x52, 0xa4, 0x55, 0xaa, 0x49, 0x92, 0x39, 0x72, 0xe4, 0xd5, 0xb7, 0x73, 0xe6, 0xd1, 0xbf, 0x63, 0xc6, 0x91, 0x3f, 0x7e, 0xfc, 0xe5, 0xd7, 0xb3, 0x7b, 0xf6, 0xf1, 0xff, 0xe3, 0xdb, 0xab, 0x4b, 0x96, 0x31, 0x62, 0xc4, 0x95, 0x37, 0x6e, 0xdc, 0xa5, 0x57, 0xae, 0x41, 0x82, 0x19, 0x32, 0x64, 0xc8, 0x8d, 0x07, 0x0e, 0x1c, 0x38, 0x70, 0xe0, 0xdd, 0xa7, 0x53, 0xa6, 0x51, 0xa2, 0x59, 0xb2, 0x79, 0xf2, 0xf9, 0xef, 0xc3, 0x9b, 0x2b, 0x56, 0xac, 0x45, 0x8a, 0x09, 0x12, 0x24, 0x48, 0x90, 0x3d, 0x7a, 0xf4, 0xf5, 0xf7, 0xf3, 0xfb, 0xeb, 0xcb, 0x8b, 0x0b, 0x16, 0x2c, 0x58, 0xb0, 0x7d, 0xfa, 0xe9, 0xcf, 0x83, 0x1b, 0x36, 0x6c, 0xd8, 0xad, 0x47, 0x8e, 0x00]; // Working buffers:
// data input and ecc append, image working buffer, fixed part of image, run lengths for badness

var strinbuf = [],
    eccbuf = [],
    qrframe = [],
    framask = [],
    rlens = []; // Control values - width is based on version, last 4 are from table.

var version, width, neccblk1, neccblk2, datablkw, eccblkwid;
var ecclevel = 2; // set bit to indicate cell in qrframe is immutable.  symmetric around diagonal

function setmask(x, y) {
  var bt;

  if (x > y) {
    bt = x;
    x = y;
    y = bt;
  } // y*y = 1+3+5...


  bt = y;
  bt *= y;
  bt += y;
  bt >>= 1;
  bt += x;
  framask[bt] = 1;
} // enter alignment pattern - black to qrframe, white to mask (later black frame merged to mask)


function putalign(x, y) {
  var j;
  qrframe[x + width * y] = 1;

  for (j = -2; j < 2; j++) {
    qrframe[x + j + width * (y - 2)] = 1;
    qrframe[x - 2 + width * (y + j + 1)] = 1;
    qrframe[x + 2 + width * (y + j)] = 1;
    qrframe[x + j + 1 + width * (y + 2)] = 1;
  }

  for (j = 0; j < 2; j++) {
    setmask(x - 1, y + j);
    setmask(x + 1, y - j);
    setmask(x - j, y - 1);
    setmask(x + j, y + 1);
  }
} //========================================================================
// Reed Solomon error correction
// exponentiation mod N


function modnn(x) {
  while (x >= 255) {
    x -= 255;
    x = (x >> 8) + (x & 255);
  }

  return x;
}

var genpoly = []; // Calculate and append ECC data to data block.  Block is in strinbuf, indexes to buffers given.

function appendrs(data, dlen, ecbuf, eclen) {
  var i, j, fb;

  for (i = 0; i < eclen; i++) strinbuf[ecbuf + i] = 0;

  for (i = 0; i < dlen; i++) {
    fb = glog[strinbuf[data + i] ^ strinbuf[ecbuf]];
    if (fb != 255)
      /* fb term is non-zero */
      for (j = 1; j < eclen; j++) strinbuf[ecbuf + j - 1] = strinbuf[ecbuf + j] ^ gexp[modnn(fb + genpoly[eclen - j])];else for (j = ecbuf; j < ecbuf + eclen; j++) strinbuf[j] = strinbuf[j + 1];
    strinbuf[ecbuf + eclen - 1] = fb == 255 ? 0 : gexp[modnn(fb + genpoly[0])];
  }
} //========================================================================
// Frame data insert following the path rules
// check mask - since symmetrical use half.


function ismasked(x, y) {
  var bt;

  if (x > y) {
    bt = x;
    x = y;
    y = bt;
  }

  bt = y;
  bt += y * y;
  bt >>= 1;
  bt += x;
  return framask[bt];
} //========================================================================
//  Apply the selected mask out of the 8.


function applymask(m) {
  var x, y, r3x, r3y;

  switch (m) {
    case 0:
      for (y = 0; y < width; y++) for (x = 0; x < width; x++) if (!(x + y & 1) && !ismasked(x, y)) qrframe[x + y * width] ^= 1;

      break;

    case 1:
      for (y = 0; y < width; y++) for (x = 0; x < width; x++) if (!(y & 1) && !ismasked(x, y)) qrframe[x + y * width] ^= 1;

      break;

    case 2:
      for (y = 0; y < width; y++) for (r3x = 0, x = 0; x < width; x++, r3x++) {
        if (r3x == 3) r3x = 0;
        if (!r3x && !ismasked(x, y)) qrframe[x + y * width] ^= 1;
      }

      break;

    case 3:
      for (r3y = 0, y = 0; y < width; y++, r3y++) {
        if (r3y == 3) r3y = 0;

        for (r3x = r3y, x = 0; x < width; x++, r3x++) {
          if (r3x == 3) r3x = 0;
          if (!r3x && !ismasked(x, y)) qrframe[x + y * width] ^= 1;
        }
      }

      break;

    case 4:
      for (y = 0; y < width; y++) for (r3x = 0, r3y = y >> 1 & 1, x = 0; x < width; x++, r3x++) {
        if (r3x == 3) {
          r3x = 0;
          r3y = !r3y;
        }

        if (!r3y && !ismasked(x, y)) qrframe[x + y * width] ^= 1;
      }

      break;

    case 5:
      for (r3y = 0, y = 0; y < width; y++, r3y++) {
        if (r3y == 3) r3y = 0;

        for (r3x = 0, x = 0; x < width; x++, r3x++) {
          if (r3x == 3) r3x = 0;
          if (!((x & y & 1) + !(!r3x | !r3y)) && !ismasked(x, y)) qrframe[x + y * width] ^= 1;
        }
      }

      break;

    case 6:
      for (r3y = 0, y = 0; y < width; y++, r3y++) {
        if (r3y == 3) r3y = 0;

        for (r3x = 0, x = 0; x < width; x++, r3x++) {
          if (r3x == 3) r3x = 0;
          if (!((x & y & 1) + (r3x && r3x == r3y) & 1) && !ismasked(x, y)) qrframe[x + y * width] ^= 1;
        }
      }

      break;

    case 7:
      for (r3y = 0, y = 0; y < width; y++, r3y++) {
        if (r3y == 3) r3y = 0;

        for (r3x = 0, x = 0; x < width; x++, r3x++) {
          if (r3x == 3) r3x = 0;
          if (!((r3x && r3x == r3y) + (x + y & 1) & 1) && !ismasked(x, y)) qrframe[x + y * width] ^= 1;
        }
      }

      break;
  }

  return;
} // Badness coefficients.


var N1 = 3,
    N2 = 3,
    N3 = 40,
    N4 = 10; // Using the table of the length of each run, calculate the amount of bad image 
// - long runs or those that look like finders; called twice, once each for X and Y

function badruns(length) {
  var i;
  var runsbad = 0;

  for (i = 0; i <= length; i++) if (rlens[i] >= 5) runsbad += N1 + rlens[i] - 5; // BwBBBwB as in finder


  for (i = 3; i < length - 1; i += 2) if (rlens[i - 2] == rlens[i + 2] && rlens[i + 2] == rlens[i - 1] && rlens[i - 1] == rlens[i + 1] && rlens[i - 1] * 3 == rlens[i] // white around the black pattern? Not part of spec
  && (rlens[i - 3] == 0 // beginning
  || i + 3 > length // end
  || rlens[i - 3] * 3 >= rlens[i] * 4 || rlens[i + 3] * 3 >= rlens[i] * 4)) runsbad += N3;

  return runsbad;
} // Calculate how bad the masked image is - blocks, imbalance, runs, or finders.


function badcheck() {
  var x, y, h, b, b1;
  var thisbad = 0;
  var bw = 0; // blocks of same color.

  for (y = 0; y < width - 1; y++) for (x = 0; x < width - 1; x++) if (qrframe[x + width * y] && qrframe[x + 1 + width * y] && qrframe[x + width * (y + 1)] && qrframe[x + 1 + width * (y + 1)] || // all black
  !(qrframe[x + width * y] || qrframe[x + 1 + width * y] || qrframe[x + width * (y + 1)] || qrframe[x + 1 + width * (y + 1)])) // all white
    thisbad += N2; // X runs


  for (y = 0; y < width; y++) {
    rlens[0] = 0;

    for (h = b = x = 0; x < width; x++) {
      if ((b1 = qrframe[x + width * y]) == b) rlens[h]++;else rlens[++h] = 1;
      b = b1;
      bw += b ? 1 : -1;
    }

    thisbad += badruns(h);
  } // black/white imbalance


  if (bw < 0) bw = -bw;
  var big = bw;
  var count = 0;
  big += big << 2;
  big <<= 1;

  while (big > width * width) big -= width * width, count++;

  thisbad += count * N4; // Y runs

  for (x = 0; x < width; x++) {
    rlens[0] = 0;

    for (h = b = y = 0; y < width; y++) {
      if ((b1 = qrframe[x + width * y]) == b) rlens[h]++;else rlens[++h] = 1;
      b = b1;
    }

    thisbad += badruns(h);
  }

  return thisbad;
}

function genframe(instring) {
  var x, y, k, t, v, i, j, m; // find the smallest version that fits the string

  t = instring.length;
  version = 0;

  do {
    version++;
    k = (ecclevel - 1) * 4 + (version - 1) * 16;
    neccblk1 = eccblocks[k++];
    neccblk2 = eccblocks[k++];
    datablkw = eccblocks[k++];
    eccblkwid = eccblocks[k];
    k = datablkw * (neccblk1 + neccblk2) + neccblk2 - 3 + (version <= 9);
    if (t <= k) break;
  } while (version < 40); // FIXME - insure that it fits insted of being truncated


  width = 17 + 4 * version; // allocate, clear and setup data structures

  v = datablkw + (datablkw + eccblkwid) * (neccblk1 + neccblk2) + neccblk2;

  for (t = 0; t < v; t++) eccbuf[t] = 0;

  strinbuf = instring.slice(0);

  for (t = 0; t < width * width; t++) qrframe[t] = 0;

  for (t = 0; t < (width * (width + 1) + 1) / 2; t++) framask[t] = 0; // insert finders - black to frame, white to mask


  for (t = 0; t < 3; t++) {
    k = 0;
    y = 0;
    if (t == 1) k = width - 7;
    if (t == 2) y = width - 7;
    qrframe[y + 3 + width * (k + 3)] = 1;

    for (x = 0; x < 6; x++) {
      qrframe[y + x + width * k] = 1;
      qrframe[y + width * (k + x + 1)] = 1;
      qrframe[y + 6 + width * (k + x)] = 1;
      qrframe[y + x + 1 + width * (k + 6)] = 1;
    }

    for (x = 1; x < 5; x++) {
      setmask(y + x, k + 1);
      setmask(y + 1, k + x + 1);
      setmask(y + 5, k + x);
      setmask(y + x + 1, k + 5);
    }

    for (x = 2; x < 4; x++) {
      qrframe[y + x + width * (k + 2)] = 1;
      qrframe[y + 2 + width * (k + x + 1)] = 1;
      qrframe[y + 4 + width * (k + x)] = 1;
      qrframe[y + x + 1 + width * (k + 4)] = 1;
    }
  } // alignment blocks


  if (version > 1) {
    t = adelta[version];
    y = width - 7;

    for (;;) {
      x = width - 7;

      while (x > t - 3) {
        putalign(x, y);
        if (x < t) break;
        x -= t;
      }

      if (y <= t + 9) break;
      y -= t;
      putalign(6, y);
      putalign(y, 6);
    }
  } // single black


  qrframe[8 + width * (width - 8)] = 1; // timing gap - mask only

  for (y = 0; y < 7; y++) {
    setmask(7, y);
    setmask(width - 8, y);
    setmask(7, y + width - 7);
  }

  for (x = 0; x < 8; x++) {
    setmask(x, 7);
    setmask(x + width - 8, 7);
    setmask(x, width - 8);
  } // reserve mask-format area


  for (x = 0; x < 9; x++) setmask(x, 8);

  for (x = 0; x < 8; x++) {
    setmask(x + width - 8, 8);
    setmask(8, x);
  }

  for (y = 0; y < 7; y++) setmask(8, y + width - 7); // timing row/col


  for (x = 0; x < width - 14; x++) if (x & 1) {
    setmask(8 + x, 6);
    setmask(6, 8 + x);
  } else {
    qrframe[8 + x + width * 6] = 1;
    qrframe[6 + width * (8 + x)] = 1;
  } // version block


  if (version > 6) {
    t = vpat[version - 7];
    k = 17;

    for (x = 0; x < 6; x++) for (y = 0; y < 3; y++, k--) if (1 & (k > 11 ? version >> k - 12 : t >> k)) {
      qrframe[5 - x + width * (2 - y + width - 11)] = 1;
      qrframe[2 - y + width - 11 + width * (5 - x)] = 1;
    } else {
      setmask(5 - x, 2 - y + width - 11);
      setmask(2 - y + width - 11, 5 - x);
    }
  } // sync mask bits - only set above for white spaces, so add in black bits


  for (y = 0; y < width; y++) for (x = 0; x <= y; x++) if (qrframe[x + width * y]) setmask(x, y); // convert string to bitstream
  // 8 bit data to QR-coded 8 bit data (numeric or alphanum, or kanji not supported)


  v = strinbuf.length; // string to array

  for (i = 0; i < v; i++) eccbuf[i] = strinbuf.charCodeAt(i);

  strinbuf = eccbuf.slice(0); // calculate max string length

  x = datablkw * (neccblk1 + neccblk2) + neccblk2;

  if (v >= x - 2) {
    v = x - 2;
    if (version > 9) v--;
  } // shift and repack to insert length prefix


  i = v;

  if (version > 9) {
    strinbuf[i + 2] = 0;
    strinbuf[i + 3] = 0;

    while (i--) {
      t = strinbuf[i];
      strinbuf[i + 3] |= 255 & t << 4;
      strinbuf[i + 2] = t >> 4;
    }

    strinbuf[2] |= 255 & v << 4;
    strinbuf[1] = v >> 4;
    strinbuf[0] = 0x40 | v >> 12;
  } else {
    strinbuf[i + 1] = 0;
    strinbuf[i + 2] = 0;

    while (i--) {
      t = strinbuf[i];
      strinbuf[i + 2] |= 255 & t << 4;
      strinbuf[i + 1] = t >> 4;
    }

    strinbuf[1] |= 255 & v << 4;
    strinbuf[0] = 0x40 | v >> 4;
  } // fill to end with pad pattern


  i = v + 3 - (version < 10);

  while (i < x) {
    strinbuf[i++] = 0xec; // buffer has room    if (i == x)      break;

    strinbuf[i++] = 0x11;
  } // calculate and append ECC
  // calculate generator polynomial


  genpoly[0] = 1;

  for (i = 0; i < eccblkwid; i++) {
    genpoly[i + 1] = 1;

    for (j = i; j > 0; j--) genpoly[j] = genpoly[j] ? genpoly[j - 1] ^ gexp[modnn(glog[genpoly[j]] + i)] : genpoly[j - 1];

    genpoly[0] = gexp[modnn(glog[genpoly[0]] + i)];
  }

  for (i = 0; i <= eccblkwid; i++) genpoly[i] = glog[genpoly[i]]; // use logs for genpoly[] to save calc step
  // append ecc to data buffer


  k = x;
  y = 0;

  for (i = 0; i < neccblk1; i++) {
    appendrs(y, datablkw, k, eccblkwid);
    y += datablkw;
    k += eccblkwid;
  }

  for (i = 0; i < neccblk2; i++) {
    appendrs(y, datablkw + 1, k, eccblkwid);
    y += datablkw + 1;
    k += eccblkwid;
  } // interleave blocks


  y = 0;

  for (i = 0; i < datablkw; i++) {
    for (j = 0; j < neccblk1; j++) eccbuf[y++] = strinbuf[i + j * datablkw];

    for (j = 0; j < neccblk2; j++) eccbuf[y++] = strinbuf[neccblk1 * datablkw + i + j * (datablkw + 1)];
  }

  for (j = 0; j < neccblk2; j++) eccbuf[y++] = strinbuf[neccblk1 * datablkw + i + j * (datablkw + 1)];

  for (i = 0; i < eccblkwid; i++) for (j = 0; j < neccblk1 + neccblk2; j++) eccbuf[y++] = strinbuf[x + i + j * eccblkwid];

  strinbuf = eccbuf; // pack bits into frame avoiding masked area.

  x = y = width - 1;
  k = v = 1; // up, minus

  /* inteleaved data and ecc codes */

  m = (datablkw + eccblkwid) * (neccblk1 + neccblk2) + neccblk2;

  for (i = 0; i < m; i++) {
    t = strinbuf[i];

    for (j = 0; j < 8; j++, t <<= 1) {
      if (0x80 & t) qrframe[x + width * y] = 1;

      do {
        // find next fill position
        if (v) x--;else {
          x++;

          if (k) {
            if (y != 0) y--;else {
              x -= 2;
              k = !k;

              if (x == 6) {
                x--;
                y = 9;
              }
            }
          } else {
            if (y != width - 1) y++;else {
              x -= 2;
              k = !k;

              if (x == 6) {
                x--;
                y -= 8;
              }
            }
          }
        }
        v = !v;
      } while (ismasked(x, y));
    }
  } // save pre-mask copy of frame


  strinbuf = qrframe.slice(0);
  t = 0; // best

  y = 30000; // demerit
  // for instead of while since in original arduino code
  // if an early mask was "good enough" it wouldn't try for a better one
  // since they get more complex and take longer.

  for (k = 0; k < 8; k++) {
    applymask(k); // returns black-white imbalance

    x = badcheck();

    if (x < y) {
      // current mask better than previous best?
      y = x;
      t = k;
    }

    if (t == 7) break; // don't increment i to a void redoing mask

    qrframe = strinbuf.slice(0); // reset for next pass
  }

  if (t != k) // redo best mask - none good enough, last wasn't t
    applymask(t); // add in final mask/ecclevel bytes

  y = fmtword[t + (ecclevel - 1 << 3)]; // low byte

  for (k = 0; k < 8; k++, y >>= 1) if (y & 1) {
    qrframe[width - 1 - k + width * 8] = 1;
    if (k < 6) qrframe[8 + width * k] = 1;else qrframe[8 + width * (k + 1)] = 1;
  } // high byte


  for (k = 0; k < 7; k++, y >>= 1) if (y & 1) {
    qrframe[8 + width * (width - 7 + k)] = 1;
    if (k) qrframe[6 - k + width * 8] = 1;else qrframe[7 + width * 8] = 1;
  }

  return qrframe;
}

var _canvas = null;
const api = {
  get ecclevel() {
    return ecclevel;
  },

  set ecclevel(val) {
    ecclevel = val;
  },

  get size() {
    return _size;
  },

  set size(val) {
    _size = val;
  },

  get canvas() {
    return _canvas;
  },

  set canvas(el) {
    _canvas = el;
  },

  getFrame: function (string) {
    return genframe(string);
  },
  //这里的utf16to8(str)是对Text中的字符串进行转码，让其支持中文
  utf16to8: function (str) {
    var out, i, len, c;
    out = "";
    len = str.length;

    for (i = 0; i < len; i++) {
      c = str.charCodeAt(i);

      if (c >= 0x0001 && c <= 0x007F) {
        out += str.charAt(i);
      } else if (c > 0x07FF) {
        out += String.fromCharCode(0xE0 | c >> 12 & 0x0F);
        out += String.fromCharCode(0x80 | c >> 6 & 0x3F);
        out += String.fromCharCode(0x80 | c >> 0 & 0x3F);
      } else {
        out += String.fromCharCode(0xC0 | c >> 6 & 0x1F);
        out += String.fromCharCode(0x80 | c >> 0 & 0x3F);
      }
    }

    return out;
  },

  /**
   * 新增$this参数，传入组件的this,兼容在组件中生成
   * @param bg 目前只能设置颜色值
   */
  draw: function (str, ctx, startX, startY, cavW, cavH, bg, color, $this, ecc) {
    var that = this;
    ecclevel = ecc || ecclevel;

    if (!ctx) {
      console.warn('No canvas provided to draw QR code in!');
      return;
    }

    var size = Math.min(cavW, cavH);
    str = that.utf16to8(str); //增加中文显示

    var frame = that.getFrame(str);
    var px = size / width;

    if (bg) {
      ctx.fillStyle = bg;
      ctx.fillRect(startX, startY, cavW, cavW);
    }

    ctx.fillStyle = color || 'black';

    for (var i = 0; i < width; i++) {
      for (var j = 0; j < width; j++) {
        if (frame[j * width + i]) {
          ctx.fillRect(startX + px * i, startY + px * j, px, px);
        }
      }
    }
  }
};

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "api", function() { return api; });
/* eslint-disable */
const api = {
  isGradient: function (bg) {
    if (bg && (bg.startsWith('linear') || bg.startsWith('radial'))) {
      return true;
    }

    return false;
  },
  doGradient: function (bg, width, height, ctx) {
    if (bg.startsWith('linear')) {
      linearEffect(width, height, bg, ctx);
    } else if (bg.startsWith('radial')) {
      radialEffect(width, height, bg, ctx);
    }
  }
};

function analizeGrad(string) {
  const colorPercents = string.substring(0, string.length - 1).split('%,');
  const colors = [];
  const percents = [];

  for (let colorPercent of colorPercents) {
    colors.push(colorPercent.substring(0, colorPercent.lastIndexOf(' ')).trim());
    percents.push(colorPercent.substring(colorPercent.lastIndexOf(' '), colorPercent.length) / 100);
  }

  return {
    colors: colors,
    percents: percents
  };
}

function radialEffect(width, height, bg, ctx) {
  const colorPer = analizeGrad(bg.match(/radial-gradient\((.+)\)/)[1]);
  const grd = ctx.createRadialGradient(0, 0, 0, 0, 0, width < height ? height / 2 : width / 2);

  for (let i = 0; i < colorPer.colors.length; i++) {
    grd.addColorStop(colorPer.percents[i], colorPer.colors[i]);
  }

  ctx.fillStyle = grd; //ctx.fillRect(-(width / 2), -(height / 2), width, height);
}

function analizeLinear(bg, width, height) {
  const direction = bg.match(/([-]?\d{1,3})deg/);
  const dir = direction && direction[1] ? parseFloat(direction[1]) : 0;
  let coordinate;

  switch (dir) {
    case 0:
      coordinate = [0, -height / 2, 0, height / 2];
      break;

    case 90:
      coordinate = [width / 2, 0, -width / 2, 0];
      break;

    case -90:
      coordinate = [-width / 2, 0, width / 2, 0];
      break;

    case 180:
      coordinate = [0, height / 2, 0, -height / 2];
      break;

    case -180:
      coordinate = [0, -height / 2, 0, height / 2];
      break;

    default:
      let x1 = 0;
      let y1 = 0;
      let x2 = 0;
      let y2 = 0;

      if (direction[1] > 0 && direction[1] < 90) {
        x1 = width / 2 - (width / 2 * Math.tan((90 - direction[1]) * Math.PI * 2 / 360) - height / 2) * Math.sin(2 * (90 - direction[1]) * Math.PI * 2 / 360) / 2;
        y2 = Math.tan((90 - direction[1]) * Math.PI * 2 / 360) * x1;
        x2 = -x1;
        y1 = -y2;
      } else if (direction[1] > -180 && direction[1] < -90) {
        x1 = -(width / 2) + (width / 2 * Math.tan((90 - direction[1]) * Math.PI * 2 / 360) - height / 2) * Math.sin(2 * (90 - direction[1]) * Math.PI * 2 / 360) / 2;
        y2 = Math.tan((90 - direction[1]) * Math.PI * 2 / 360) * x1;
        x2 = -x1;
        y1 = -y2;
      } else if (direction[1] > 90 && direction[1] < 180) {
        x1 = width / 2 + (-(width / 2) * Math.tan((90 - direction[1]) * Math.PI * 2 / 360) - height / 2) * Math.sin(2 * (90 - direction[1]) * Math.PI * 2 / 360) / 2;
        y2 = Math.tan((90 - direction[1]) * Math.PI * 2 / 360) * x1;
        x2 = -x1;
        y1 = -y2;
      } else {
        x1 = -(width / 2) - (-(width / 2) * Math.tan((90 - direction[1]) * Math.PI * 2 / 360) - height / 2) * Math.sin(2 * (90 - direction[1]) * Math.PI * 2 / 360) / 2;
        y2 = Math.tan((90 - direction[1]) * Math.PI * 2 / 360) * x1;
        x2 = -x1;
        y1 = -y2;
      }

      coordinate = [x1, y1, x2, y2];
      break;
  }

  return coordinate;
}

function linearEffect(width, height, bg, ctx) {
  const param = analizeLinear(bg, width, height);
  const grd = ctx.createLinearGradient(param[0], param[1], param[2], param[3]);
  const content = bg.match(/linear-gradient\((.+)\)/)[1];
  const colorPer = analizeGrad(content.substring(content.indexOf(',') + 1));

  for (let i = 0; i < colorPer.colors.length; i++) {
    grd.addColorStop(colorPer.percents[i], colorPer.colors[i]);
  }

  ctx.fillStyle = grd; //ctx.fillRect(-(width / 2), -(height / 2), width, height);
}

/***/ })

};;
//# sourceMappingURL=vue-create-poster-layout-canvas-poster.js.map