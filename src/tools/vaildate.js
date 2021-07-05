export const regExp = {
    regMobile: /^[1][3,4,5,7,8][0-9]{9}$/, // 验证手机号
    regFullname: /^[\u4e00-\u9fa5]{2,8}$/, // 验证中文姓名
    regEmail: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, // 验证邮箱
    regCredentials: /^[1-9]{1}[0-9]{14}$|^[1-9]{1}[0-9]{16}([0-9]|[xX])$/, // 验证身份证
    regPassport: /^[a-zA-Z]{5,17}$|^[a-zA-Z0-9]{5,17}$/,//护照身份证
    regHongKongMacao: /^[a-zA-Z0-9]{1,15}$/,//验证港澳通行证
    regTaiwan: /^[a-zA-Z0-9]{1,15}$/,//验证台湾通行证
    regLetters: /^[A-z]{2,}$/, // 必须是英文并且是两个字以上
    regOfficers: /^\w+$/, // 正英文数字，不限制字数 验证军官证
    regTaiwanCompatriots: /^\w+$/, // 正英文数字，不限制字数 验证台胞证
    regHometown: /^\w+$/, // 正英文数字，不限制字数 验证回乡证
    regAccount: /^\w{15,18}$/, // 正英文数字，不限制字数 验证户口本
  }

export const regChinese = /[\u4E00-\u9FA5\uF900-\uFA2D]/