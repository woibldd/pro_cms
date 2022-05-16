
export const getImageInfo = (src) => new Promise(resolve => {

    // img.setAttribute("crossOrigin", 'Anonymous')
    let image = new Image()
    image.setAttribute("crossorigin", "anonymous")
    image.src = 'http://cdn.bitkeep.vip/u_b_c1f944e0-db1f-11eb-9ad0-ddefb611a80f.png';
    // image.src = src
    if (image.complete) {

        resolve(toBase64(image))
    } else {
        image.onload = function () {

            resolve(toBase64(image))
            image.onload = null;
            // image=null
        }


    }
})
export const LowerCase=(str='')=>{
        return (str || '').toLowerCase()
}

function toBase64(img) {
    let canvas = document.createElement("canvas")
    let ctx = canvas.getContext("2d")
    console.log({ ctx })
    ctx.drawImage(img, 0, 0);
    base64 = canvas.toDataURL("image/png");
    console.log({ base64 })
    dataURL = dataURL.replace(/^data:image\/(png|jpg|jpeg);base64,/, "");

    return dataURL
}

export const Download = function (data, filename, mime, bom) {
    return new Promise((resolve, reject) => {
        var blobData = typeof bom !== "undefined" ? [bom, data] : [data];
        var blob = new Blob(blobData, {
            type: mime || "application/octet-stream"
        });
        if (typeof window.navigator.msSaveBlob !== "undefined") {
            // IE workaround for "HTML7007: One or more blob URLs were
            // revoked by closing the blob for which they were created.
            // These URLs will no longer resolve as the data backing
            // the URL has been freed."
            window.navigator.msSaveBlob(blob, filename);
            resolve();
        } else {
            var blobURL =
                window.URL && window.URL.createObjectURL
                    ? window.URL.createObjectURL(blob)
                    : window.webkitURL.createObjectURL(blob);
            var tempLink = document.createElement("a");
            tempLink.style.display = "none";
            tempLink.href = blobURL;
            tempLink.setAttribute("download", filename);

            // Safari thinks _blank anchor are pop ups. We only want to set _blank
            // target if the browser does not support the HTML5 download attribute.
            // This allows you to download files in desktop safari if pop up blocking
            // is enabled.
            if (typeof tempLink.download === "undefined") {
                tempLink.setAttribute("target", "_blank");
            }

            document.body.appendChild(tempLink);
            tempLink.click();

            // Fixes "webkit blob resource error 1"
            setTimeout(function () {
                document.body.removeChild(tempLink);
                window.URL.revokeObjectURL(blobURL);
                resolve(true);
            }, 200);
        }
    });
}

//base64转blob

export const base64ToBlob = code => {
    let parts = code.split(';base64,');
    let contentType = parts[0].split(':')[1];
    let raw = window.atob(parts[1]);
    let rawLength = raw.length;

    let uInt8Array = new Uint8Array(rawLength);

    for (let i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i);
    }
    return new Blob([uInt8Array], { type: contentType });
}
//下载
export const downloadFile = (fileName, content) => {
    let aLink = document.createElement('a');
    let blob = base64ToBlob(content); //new Blob([content]);

    let evt = document.createEvent("HTMLEvents");
    evt.initEvent("click", true, true);//initEvent 不加后两个参数在FF下会报错  事件类型，是否冒泡，是否阻止浏览器的默认行为
    aLink.download = fileName;
    aLink.href = URL.createObjectURL(blob);

    // aLink.dispatchEvent(evt);
    //aLink.click()
    aLink.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));//兼容火狐
}
export const throttle = (fn, delay) => {
    var timer = null;
    var delay = delay || 300;
    return function () {
        var args = arguments;
        var that = this;
        clearTimeout(timer)
        timer = setTimeout(function () {
            fn.apply(that, args)
        }, delay)
    }
}
// compareVersion('1.11.0', '1.9.9') // 1
export const compareVersion = (v2 = '1.0.0') => {
    const uaArray = window.navigator.userAgent.split('/')
    let v1 = uaArray[uaArray.length - 1]
    v1 = v1.split('.')
    v2 = v2.split('.')
    const len = Math.max(v1.length, v2.length)

    while (v1.length < len) {
        v1.push('0')
    }
    while (v2.length < len) {
        v2.push('0')
    }

    for (let i = 0; i < len; i++) {
        const num1 = parseInt(v1[i])
        const num2 = parseInt(v2[i])

        if (num1 > num2) {
            return 1
        } else if (num1 < num2) {
            return -1
        }
    }
    return 0
}

/**
* deep clone
* @param  {[type]} parent object 需要进行克隆的对象
* @return {[type]}        深克隆后的对象
*/
export const deepClone = oldObj => {
    // 维护两个储存循环引用的数组
    const oldObjArr = [];
    const newObjArr = [];

    const clone = oldObj => {

        let newObj, proto;

        const type = _getType(oldObj);

        switch (type) {
            case 'boolean':
            case 'number':
            case 'string':
            case 'null':
            case 'undefined':
            case 'function': {
                return oldObj;
                break;
            }
            case 'symbol': {
                return Symbol(Symbol.keyFor(oldObj).toString());
                break;
            }
            case 'array': {
                newObj = [];
                break;
            }
            case 'regExp': {
                newObj = new RegExp(oldObj.source, _getRegExp(oldObj));
                if (oldObj.lastIndex) newObj.lastIndex = oldObj.lastIndex;
                break;
            }
            case 'date': {
                newObj = new Date(oldObj.getTime());
                break;
            }
            //case 'obj':
            default: {
                // 处理对象原型
                proto = Object.getPrototypeOf(oldObj);
                // 利用Object.create切断原型链
                newObj = Object.create(proto);
                break;
            }
        }

        // 处理循环引用
        const index = oldObjArr.indexOf(oldObj);
        if (index != -1) {// 如果父数组存在本对象,说明之前已经被引用过,直接返回此对象
            return newObjArr[index];
        }

        oldObjArr.push(oldObj);
        newObjArr.push(newObj);
        /*数组和对象都可以用forin语句，虽然数组使用forin会有一个问题(具体看最下面）。
        但是这里不会影响，所以这么用
        */
        for (let i in oldObj) {// 递归
            newObj[i] = clone(oldObj[i]);
        }

        return newObj;
    };


    return clone(oldObj);
}



export function getStyle(element, attr) {
    if (window.getComputedStyle) {
        return attr
            ? window.getComputedStyle(element, null)[attr]
            : window.getComputedStyle(element, null);
    }
    return attr ? element.currentStyle[attr] : element.currentStyle;
}

export const parseUA = (userAgent, headerUa) => {
    const ua = userAgent || (process.client ? (navigator.userAgent || window.navigator.userAgent )  : '')
    const isIosEnv = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
    const isPhonx = _ => !!(isIosEnv && screen.height == 812 && screen.width == 375)

    const ret = {
        ios: isIosEnv,
        android: ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1,
        Mobile: /(Mobile)/i.test(ua),
        // MobileAll: ua.indexOf('Android') > -1 || ua.indexOf('iPhone') > -1 || ua.indexOf('SymbianOS') > -1 || ua.indexOf('Windows Phone') > -1 || ua.indexOf('iPad') > -1 || ua.indexOf('iPod') > -1,
        wPhone: /(Windows Phone|windows[\s+]phone)/i.test(ua),
        PC: ua.indexOf('Win') > -1 || ua.indexOf('Mac') > -1 || ua.indexOf('Linux') > -1,
        weixin: ua.indexOf('MicroMessenger') > -1,
        isBitKeep:/(BitKeep)/i.test(headerUa),  //app
        isDinhgDing: /(DingTalk)/i.test(ua)
    }
    ret.bitKeepAndroid = ret.isBitKeep && ret.android
    ret.bitKeepIos = ret.isBitKeep && ret.ios
    return process.client ? Object.assign(ret, { isPhonx: isPhonx() }) : ret
}

export function parseUrl(url){
    if(!url) return {}
    let reuslt = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/.exec(url);
    let keys=[
      "url", "scheme", "slash", "host", "port", "path", "query", "hash"
    ]
    if(!reuslt) return {}
    let Obj = {};
    keys.forEach((key, i) => {
      Obj[key] = reuslt[i];
    });

    return Obj;
  };

  export function debounce(func, wait) {
    let timeout;
    return function() {
        let context = this;
        let args = arguments;

        if (timeout) clearTimeout(timeout);

        timeout = setTimeout(() => {
            func.apply(context, args);
        }, wait || 200);
    };
}

export function DPR() {
    if (window.devicePixelRatio && window.devicePixelRatio > 1) {
        return window.devicePixelRatio;
    }
    return 1;
}
export function filterTime(date) {
    let val = new Date(date)
    var Y = val.getFullYear()
    var M = val.getMonth() + 1 >= 10 ? (val.getMonth() + 1) : '0' + (this.getMonth() + 1)
    var D = val.getDate() >= 10 ? val.getDate() : '0' + val.getDate()
    var H = val.getHours() >= 10 ? val.getHours() : '0' + val.getHours()
    var MI = val.getMinutes() >= 10 ? val.getMinutes():'0'+val.getMinutes()
    var S = val.getSeconds() >= 10 ? val.getSeconds() : '0' + val.getSeconds()
    return Y + "-" + M + "-" + D + " " + H + ":" + MI + ":" + S 
  }
