(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{369:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n(60);e=n(19);var a=n(94),i=(e=n.n(a),n(2)),o=n(93),r=(n(92),function(){for(var t,e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];(t=console).log.apply(t,["bit-activity-request:"].concat(n))}),l=e.a.create({baseURL:"/",timeout:6e4,headers:{token:"",language:"zh",currency:"",brand:"",os:"",package:"",clientVersion:1,im:""}});l.interceptors.request.use((function(t){var e,n,a;return r("requestlog:",t),i.a.prototype.$store&&(n=(a=(e=i.a.prototype.$store.state).local).UA,a=a.locale,n.isBitKeep?Object.assign(t.headers,e.local.bitkeep,{language:a}):Object.assign(t.headers,{language:a})),t}),(function(t){return Promise.resolve({status:1})})),l.interceptors.response.use((function(t){return t.data}),(function(t){!function(){for(var t,e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];(t=console).log.apply(t,["bit-activity-response:"].concat(n))}("responselog:",t);var e="网路开了小差";e=(t=Object(o.b)()||{}).t?t.t("base.networkErro"):e;return Promise.resolve({status:1,data:e})}));var d={mBoxList:function(t){return l.get("user/activity/mBoxList",{params:t,headers:1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}})},openMBox:function(t){return l.get("user/activity/openMBox",{params:t})},helpMBox:function(t){return l.get("user/activity/helpMBox",{params:t})},userInviteList:function(t){return l.get("user/activity/inviteList",{params:t})},mBoxDetail:function(t){return l.get("user/activity/mBoxDetail",{params:t})},getCbkbSwapInfo:function(t){return l.get("user/cloudwallet/getCbkbSwapInfo",{params:t})},swapBkb:function(t){return l.get("user/cloudwallet/swapBkb",{params:t})},getAirDropCount:function(t){return l.post("user/cloudwallet/getAirDropCount",t)},getAirDrop:function(t){return l.post("user/cloudwallet/getAirDrop",t)},miningInfo:function(t){return l.post("swap/mining/info",t)},historyPhase:function(t){return l.post("swap/mining/historyPhase",t)},receiveAward:function(t){return l.post("swap/mining/receiveAward",t)},getInviteList:function(t){return l.post("user/friendship/getInviteList",t)},certifyFriendship:function(t){return l.post("user/friendship/certifyFriendship",t)},activityDoneRewardList:function(t){return l.post("swap/mining/activityDoneRewardList",t)}}},387:function(t,e,n){t.exports=n.p+"img/logo@2.ca1f304.png"},474:function(t,e,n){var a=n(554);(a="string"==typeof(a=a.__esModule?a.default:a)?[[t.i,a,""]]:a).locals&&(t.exports=a.locals),(0,n(110).default)("768ac61f",a,!0,{sourceMap:!1})},553:function(t,e,n){"use strict";n(474)},554:function(t,e,n){var a=n(109),i=n(239);n=n(555),a=a(!1),n=i(n);a.push([t.i,'.theme-light .textPrimary0[data-v-7b256c66] {\n  color: #080D21;\n}\n.theme-light .textSecond1[data-v-7b256c66] {\n  color: #4B5373;\n}\n.theme-light .textSecond2[data-v-7b256c66] {\n  color: #7F828F;\n}\n.theme-light .textSecond3[data-v-7b256c66] {\n  color: #9CA5B3;\n}\n.theme-light .colorDisable[data-v-7b256c66] {\n  background-color: #DADBDE;\n}\n.theme-light .colorLine[data-v-7b256c66] {\n  background-color: #F4F5FA;\n}\n.theme-light .colorBackground0[data-v-7b256c66] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackground1[data-v-7b256c66] {\n  background-color: #fff;\n}\n.theme-light .colorBackground2[data-v-7b256c66] {\n  background-color: #F3F5F6;\n}\n.theme-light .colorBackground3[data-v-7b256c66] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackgroundWhite[data-v-7b256c66] {\n  background-color: #fff;\n}\n.theme-light .colorBackgroundPrimary[data-v-7b256c66] {\n  background-color: #495BFF;\n}\n.theme-light .colorPrimary[data-v-7b256c66] {\n  color: #495BFF;\n}\n.theme-light .colorSecond01[data-v-7b256c66] {\n  color: #1CBDB5;\n}\n.theme-light .colorSecond02[data-v-7b256c66] {\n  color: #F04A4A;\n}\n.theme-light .colorSecond03[data-v-7b256c66] {\n  color: #26BC80;\n}\n.theme-light .colorSecond04[data-v-7b256c66] {\n  color: #FF8146;\n}\n.theme-light .colorSecond05[data-v-7b256c66] {\n  color: #2F80ED;\n}\n.theme-light .colorSecond06[data-v-7b256c66] {\n  color: #4A2FD2;\n}\n.theme-light .colorSecond07[data-v-7b256c66] {\n  color: #F04E98;\n}\n.theme-light .colorBlack[data-v-7b256c66] {\n  color: #000;\n}\n.theme-light .colorwhite[data-v-7b256c66] {\n  color: #fff;\n}\n.theme-light .colorSecond10[data-v-7b256c66] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-light .colorSecond11[data-v-7b256c66] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-light .colorSecond12[data-v-7b256c66] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-light .colorSecond13[data-v-7b256c66] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-light .colorSecond14[data-v-7b256c66] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-light .colorSecond15[data-v-7b256c66] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-dark .textPrimary0[data-v-7b256c66] {\n  color: #DFE0E3;\n}\n.theme-dark .textSecond1[data-v-7b256c66] {\n  color: #9CA5B3;\n}\n.theme-dark .textSecond2[data-v-7b256c66] {\n  color: #7F828F;\n}\n.theme-dark .textSecond3[data-v-7b256c66] {\n  color: #6D707D;\n}\n.theme-dark .colorDisable[data-v-7b256c66] {\n  background-color: #5F626D;\n}\n.theme-dark .colorLine[data-v-7b256c66] {\n  background-color: #1F212E;\n}\n.theme-dark .colorBackground0[data-v-7b256c66] {\n  background-color: #0A0E1F;\n}\n.theme-dark .colorBackground1[data-v-7b256c66] {\n  background-color: #171A26;\n}\n.theme-dark .colorBackground2[data-v-7b256c66] {\n  background-color: #131620;\n}\n.theme-dark .colorBackground3[data-v-7b256c66] {\n  background-color: #212331;\n}\n.theme-dark .colorBackgroundPrimary[data-v-7b256c66] {\n  background-color: #495BFF;\n}\n.theme-dark .colorPrimary[data-v-7b256c66] {\n  color: #495BFF;\n}\n.theme-dark .colorSecond01[data-v-7b256c66] {\n  color: #1CBDB5;\n}\n.theme-dark .colorSecond02[data-v-7b256c66] {\n  color: #F04A4A;\n}\n.theme-dark .colorSecond03[data-v-7b256c66] {\n  color: #26BC80;\n}\n.theme-dark .colorSecond04[data-v-7b256c66] {\n  color: #FF8146;\n}\n.theme-dark .colorSecond05[data-v-7b256c66] {\n  color: #2F80ED;\n}\n.theme-dark .colorSecond06[data-v-7b256c66] {\n  color: #4A2FD2;\n}\n.theme-dark .colorSecond07[data-v-7b256c66] {\n  color: #F04E98;\n}\n.theme-dark .colorBlack[data-v-7b256c66] {\n  color: #000;\n}\n.theme-dark .colorwhite[data-v-7b256c66] {\n  color: #fff;\n}\n.theme-dark .colorSecond10[data-v-7b256c66] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-dark .colorSecond11[data-v-7b256c66] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorSecond12[data-v-7b256c66] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-dark .colorSecond13[data-v-7b256c66] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-dark .colorSecond14[data-v-7b256c66] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-dark .colorSecond15[data-v-7b256c66] {\n  color: rgba(47,128,237,0.1);\n}\n.loading[data-v-7b256c66] {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.detail_box_back[data-v-7b256c66] {\n  background: url("http://cdn.bitkeep.vip/u_b_4dcd9190-5bec-11ec-bdbc-7722494dfa58.png") no-repeat;\n  background-size: 100% 100%;\n}\n.detail_box h1[data-v-7b256c66] {\n  font-size: 0.64rem;\n}\n.detail_box .detail_box_header[data-v-7b256c66] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.21rem 0.59rem 0.21rem 0.43rem;\n  align-items: center;\n}\n.detail_box .detail_box_header img[data-v-7b256c66] {\n  width: 2.88rem;\n  height: 0.75rem;\n}\n.detail_box .detail_box_header .detail_box_lang .langBox[data-v-7b256c66] {\n  box-sizing: border-box;\n}\n.detail_box .detail_box_header .detail_box_lang .langBox .curLang[data-v-7b256c66] {\n  font-size: 0.37rem;\n}\n.detail_box .detail_box_header .detail_box_lang .langBox .icon[data-v-7b256c66] {\n  transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  -moz-transform: rotate(90deg);\n  -webkit-transform: rotate(90deg);\n  -o-transform: rotate(90deg);\n}\n.detail_box .detail_box_header .detail_box_lang .langList[data-v-7b256c66] {\n  position: absolute;\n  right: 0.43rem;\n  overflow: hidden;\n  padding: 0.32rem 0.59rem;\n  background: #fff;\n  border-radius: 0.16rem;\n  box-shadow: 0 0.8rem 1.07rem 0 #0e1b400d;\n  font-size: 0.37rem;\n  line-height: 0.8rem;\n  text-align: center;\n  margin-top: 0.16rem;\n}\n.detail_box .detail_box_text[data-v-7b256c66] {\n  margin: 0.75rem 0.43rem 0;\n}\n.detail_box .detail_box_text p[data-v-7b256c66] {\n  width: 6.13rem;\n  font-weight: bold;\n  font-size: 0.64rem;\n  line-height: 0.64rem;\n}\n.detail_box .detail_box_flex_content[data-v-7b256c66] {\n  display: flex;\n  align-items: center;\n  margin: 0.27rem 0.43rem;\n}\n.detail_box .detail_box_flex_content .detail_box_flex_content_first[data-v-7b256c66] {\n  width: 2.96rem;\n  font-size: 0.37rem;\n}\n.detail_box .detail_box_flex_content .detail_box_flex_content_last[data-v-7b256c66] {\n  font-size: 0.37rem;\n}\n.detail_box .detail_box_flex_content .detail_box_flex_content_right[data-v-7b256c66] {\n  margin-left: 1.76rem;\n}\n.detail_box .detail_box_flex_content .detail_box_flex_content_right .detail_box_flex_font[data-v-7b256c66] {\n  font-size: 0.37rem;\n}\n.detail_box .detail_box_flex_content img[data-v-7b256c66] {\n  width: 0.64rem;\n  height: 0.64rem;\n}\n.detail_box .detail_box_address[data-v-7b256c66] {\n  margin: 1.33rem 0.43rem 1.07rem;\n  height: 6.99rem;\n  border-radius: 0.43rem;\n  padding: 0.27rem;\n  background: #fff;\n}\n.detail_box .detail_box_address .detail_box_address_header[data-v-7b256c66] {\n  font-size: 0.48rem;\n  line-height: 0.64rem;\n  font-weight: 600;\n  text-align: center;\n}\n.detail_box .detail_box_address .detail_box_address_desc[data-v-7b256c66] {\n  font-size: 0.35rem;\n  line-height: 0.37rem;\n  text-align: center;\n  margin-top: 0.27rem;\n}\n.detail_box .detail_box_address .detail_box_address_textarea[data-v-7b256c66] {\n  margin: 0.53rem 0;\n  height: 2.93rem;\n  border-radius: 0.21rem;\n}\n.detail_box .detail_box_address .detail_box_address_textarea textarea[data-v-7b256c66] {\n  border-radius: 0.21rem;\n  border: none;\n  width: 7.23rem;\n  height: 0.85rem;\n  padding: 0.37rem;\n  text-align: center;\n  line-height: 0.85rem;\n  outline: none;\n  background: #f3f5f6;\n  resize: none;\n  font-size: 0.32rem;\n}\n.detail_box .detail_box_address .detail_box_address_textarea textarea[data-v-7b256c66]::placeholder {\n  color: #4b5373;\n}\n.detail_box .detail_box_address .detail_box_address_textarea textarea.focus[data-v-7b256c66] {\n  line-height: 0.43rem;\n  font-size: 0.32rem;\n  text-align: left;\n}\n.detail_box .detail_box_address .detail_box_address_textarea .detail_box_address_textarea_btn[data-v-7b256c66] {\n  background: #495bff;\n  border-radius: 0.21rem;\n  color: #fff;\n  height: 1.33rem;\n  line-height: 1.33rem;\n  text-align: center;\n  font-size: 0.43rem;\n}\n.detail_box .detail_box_address .detail_box_address_textarea .detail_box_address_textarea_link[data-v-7b256c66] {\n  margin: 0.4rem 1.87rem;\n  text-align: center;\n  font-size: 0.37rem;\n}\n.detail_box .setMargin[data-v-7b256c66] {\n  margin: 1.07rem 0.43rem 0.53rem;\n}\n.detail_box .setBottom[data-v-7b256c66] {\n  padding: 0 0.43rem 0.91rem;\n}\n.detail_box .detail_box_wallet>h1[data-v-7b256c66] {\n  font-size: 0.64rem;\n}\n.detail_box .detail_box_wallet img[data-v-7b256c66] {\n  width: 100%;\n}\n.detail_box .detail_box_wallet .detail_box_wallet_title_content .detail_box_wallet_title[data-v-7b256c66] {\n  font-weight: 600;\n}\n.detail_box .detail_box_wallet .detail_box_wallet_title_content .detail_box_wallet_ul[data-v-7b256c66] {\n  margin-top: 0.37rem;\n  line-height: 0.53rem;\n  color: #0e1b40;\n}\n.detail_box .detail_box_wallet .detail_box_wallet_title_content .detail_box_wallet_ul li[data-v-7b256c66] {\n  margin-left: 0.48rem;\n  font-size: 0.32rem;\n}\n.detail_box .detail_box_wallet .detail_box_wallet_title_content .detail_box_wallet_ul li[data-v-7b256c66]::before {\n  content: "1";\n  display: block;\n  position: absolute;\n  left: 0.37rem;\n  margin-top: 0.08rem;\n  width: 0.37rem;\n  height: 0.37rem;\n  background: url('+n+') no-repeat;\n  background-size: 100% auto;\n}\n.detail_box .setBackground[data-v-7b256c66] {\n  margin-top: 0.91rem;\n  background: url("http://cdn.bitkeep.vip/u_b_efc07e80-5e4f-11ec-85be-634c19e2b84d.png") no-repeat;\n  background-size: 100% 100%;\n}\n.detail_box .detail_box_nft[data-v-7b256c66] {\n  margin: 0.8rem 0.43rem;\n}\n.detail_box .detail_box_nft h2[data-v-7b256c66] {\n  font-size: 0.59rem;\n}\n.detail_box .detail_box_nft .detail_box_nft_desc[data-v-7b256c66] {\n  color: #0e1b40;\n  font-size: 0.32rem;\n  line-height: 0.43rem;\n}\n.detail_box .detail_box_nft img[data-v-7b256c66] {\n  width: 100%;\n  margin-top: 0.8rem;\n}\n.detail_box .detail_box_bitkeep[data-v-7b256c66] {\n  position: relative;\n  box-sizing: border-box;\n  height: 14.51rem;\n  padding: 0.8rem 0.43rem 0;\n  background: #0e1b40;\n}\n.detail_box .detail_box_bitkeep>h1[data-v-7b256c66] {\n  font-size: 0.59rem;\n  color: #fff;\n}\n.detail_box .detail_box_bitkeep p[data-v-7b256c66] {\n  color: #fff;\n  font-size: 0.37rem;\n  line-height: 0.53rem;\n  font-weight: 400;\n}\n.detail_box .detail_box_bitkeep div[data-v-7b256c66] {\n  color: #fff;\n  font-size: 0.37rem;\n  line-height: 0.53rem;\n  font-weight: 400;\n}\n.detail_box .detail_box_bitkeep ul li[data-v-7b256c66] {\n  margin-top: 0.8rem;\n  font-size: 0.37rem;\n}\n.detail_box .detail_box_bitkeep ul li .num[data-v-7b256c66] {\n  font-size: 0.64rem;\n  font-weight: 600;\n}\n.detail_box .detail_box_bitkeep ul li .num span[data-v-7b256c66] {\n  font-size: 0.37rem;\n}\n.detail_box .detail_box_bitkeep .people[data-v-7b256c66] {\n  position: absolute;\n  bottom: 0;\n  left: 2.5%;\n  width: 95%;\n}\n.detail_box .detail_box_bitkeep .people img[data-v-7b256c66] {\n  display: block;\n  width: 100%;\n}\n.detail_box .blindbox_logo[data-v-7b256c66] {\n  width: 100%;\n  margin: 0.4rem auto 1.87rem;\n  display: flex;\n  justify-content: center;\n  padding: 0.4rem;\n  box-sizing: border-box;\n  align-items: center;\n}\n.detail_box .blindbox_logo .logo[data-v-7b256c66] {\n  width: 2.8rem;\n  height: 0.75rem;\n  display: flex;\n}\n.detail_box .blindbox_logo .logo img[data-v-7b256c66] {\n  width: 100%;\n  height: 100%;\n}\n.detail_box .download[data-v-7b256c66] {\n  box-sizing: border-box;\n  position: fixed;\n  z-index: 100;\n  bottom: 0;\n  width: 100%;\n  height: 2rem;\n  padding: 0 0.43rem;\n  background: #fff;\n  border-top: 0.03rem solid #f4f5fa;\n}\n.detail_box .download .left[data-v-7b256c66] {\n  box-sizing: border-box;\n  float: left;\n  width: 50%;\n  padding-right: 1%;\n}\n.detail_box .download .right[data-v-7b256c66] {\n  box-sizing: border-box;\n  float: left;\n  width: 50%;\n  padding-left: 1%;\n}\n.detail_box .download a[data-v-7b256c66] {\n  display: block;\n  width: 100%;\n  margin: 0.32rem 0 0;\n}\n.detail_box .download a img[data-v-7b256c66] {\n  display: block;\n  width: 100%;\n}\n.detail_box .download .version[data-v-7b256c66] {\n  width: 100%;\n  color: #9ca5b3;\n  font-size: 0.32rem;\n  margin-top: 0.13rem;\n  text-align: center;\n}\n.detail_box .setFont[data-v-7b256c66] {\n  font-size: 0.32rem;\n}\n.detail_box a[data-v-7b256c66] {\n  text-decoration: none;\n  -webkit-tap-highlight-color: transparent;\n  -moz-tap-highlight-color: transparent;\n}',""]),t.exports=a},555:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALwSURBVHgBxZgxb9NQEMf/FxJVEIYMIDbqwgeg/QQkEyliCEyIFhEWJiTYGDK0GUAwgBqJBRgaBK2YUCYaBFJTwcCARGBhA3dELBlICorC613ipLZrx3bjOH/J8lP8ru/Xu3u+dyYEVO6y0v4dQo6AMwpIg5CC4ktEaPBY716ELZVApVomPcCfZzOfOn9F5RXhGgQimOqkUHqzTmU/kz2BLiyqdEdhlYcaRpPOYEUvMFegdF6lDrexxMPbCFcrOwkUa2VqwC9QNq80tFGRPMF4pHN+ZZzyi5xgqI1NjB6iA0FZgIwwfYkApq86hy9jDl/M/NTIGQ3RadZYc6CBh4xtvYoJiNfNVF9STcYx049LmJBI7TmiCyTeQbShskszGAwPEW5hwjKqAMjY5j8xRiWTwOmTwLfvw+epDmbiDJPDGHXiOHC/wPdjwI9t4GbBfS5x0Y6p4MXyQDCiU9M9b7kCcWWIcRJNIwIYUeUt0Gy624hzxEMaIoB5/wF4+sLTNCW7LIUQ5Qbz6Ikv81TMzwK5c737mGG6EqDGsAmywI2rwOO7vaQMAvPpczAYYRkKlDyyt4CMHxScoZxgZIs/fIag0gVoy+1pswWsvbYC2qHcYO7cG76jnKQUtgWoPmySALlBhQkjIkKNstzW8BvSs3QsXOpdfYn3/rTCgxFJ6eieh+YXlBxZ014GdiizRoVh1TfWaK677Tl2z/1Y2MMXIowwlOQ+ODGylyRsmh9js6fCgGHp7J0ZGcQHhITrfHLb9GMtXvr1GzjKCf7u48gw4p1if2zpOuYX1QpXuGgPaxyqjXUaNKOW0jEVxzJ5vAZClr7TwrL5BwtQhfuj/x1clImIAIa3eaZWsbbU+4pr9RV1J44Tio88X2UNWcv+zLHay8SpBOY4w0oIn6b0t4m0E4zI83NMltsTolA6Wl12cr8hdJPvD1YCFuN2id09i2CqyYu3GtYHq31gvdqXY8uz/N7S+L/WbJ/0GiQQvTypuIXGTbsmLywLavrgRwAAAABJRU5ErkJggg=="},592:function(t,e,n){"use strict";n.r(e);var a=[function(){var t=this.$createElement;return(t=this._self._c||t)("div",[t("img",{attrs:{src:n(387)}})])},function(){var t=this.$createElement;return(t=this._self._c||t)("div",[t("img",{attrs:{src:"http://cdn.bitkeep.vip/u_b_2d8ec1f0-5bed-11ec-bdbc-7722494dfa58.png",alt:""}})])},function(){var t=this.$createElement;return(t=this._self._c||t)("div",[t("img",{attrs:{src:"http://cdn.bitkeep.vip/u_b_2d96d840-5bed-11ec-bdbc-7722494dfa58.png",alt:""}})])},function(){var t=this.$createElement;return(t=this._self._c||t)("div",[t("img",{attrs:{src:"http://cdn.bitkeep.vip/u_b_2d97e9b0-5bed-11ec-bdbc-7722494dfa58.png",alt:""}})])},function(){var t=this.$createElement;return(t=this._self._c||t)("div",[t("img",{attrs:{src:"http://cdn.bitkeep.vip/u_b_2d8f1010-5bed-11ec-bdbc-7722494dfa58.png",alt:""}})])},function(){var t=this.$createElement;return(t=this._self._c||t)("div",{staticClass:"num GB"},[this._v("4,000,000"),t("span",[this._v("+")])])},function(){var t=this,e=t.$createElement;return(e=t._self._c||e)("div",{staticClass:"num"},[e("span",[t._v("$")]),t._v("5,000"),e("span",[t._v("+ 亿")])])},function(){var t=this.$createElement;return(t=this._self._c||t)("div",{staticClass:"num"},[this._v("168"),t("span",[this._v("+")])])},function(){var t=this.$createElement;return(t=this._self._c||t)("div",{staticClass:"people"},[t("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_e27e3060-d0b9-11eb-a1fd-1b9796c35a14.png",alt:"people"}})])},function(){var t=this.$createElement;return(t=this._self._c||t)("div",{staticClass:"blindbox_logo"},[t("span",{staticClass:"logo"},[t("img",{attrs:{src:n(387)}})])])},function(){var t=this.$createElement;return(t=this._self._c||t)("div",{staticClass:"left"},[t("a",{attrs:{href:"https://itunes.apple.com/app/bitkeep/id1395301115",target:"_blank"}},[t("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_333f4110-d0ba-11eb-a1fd-1b9796c35a14.png",alt:"btn1"}})])])},function(){var t=this.$createElement;return(t=this._self._c||t)("div",{staticClass:"right"},[t("a",{attrs:{href:"https://www.bitkeep.com/testFlight.html"}},[t("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_33418b00-d0ba-11eb-a1fd-1b9796c35a14.png",alt:"btn2"}})])])},function(){var t=this.$createElement;return(t=this._self._c||t)("div",{staticClass:"left"},[t("a",{attrs:{href:"https://www.bitkeep.com/",target:"_blank"}},[t("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_33740cb0-d0ba-11eb-a1fd-1b9796c35a14.png",alt:"btn1"}})])])},function(){var t=this.$createElement;return(t=this._self._c||t)("div",{staticClass:"right"},[t("a",{staticClass:"btnDwonload",attrs:{href:"https://www.bitkeep.com/"}},[t("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_337433c0-d0ba-11eb-a1fd-1b9796c35a14.png",alt:"btn2"}})])])}],i=(n(55),n(41),n(61),n(80),n(48),n(81),n(14)),o=n(35),r=(n(68),n(91)),l=n(369),d=n(165);function c(t,e){var n,a=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)),a}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){Object(o.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}d={name:"Detail",data:function(){return{isLoading:!0,address:"",focus:!1,langShow:!1,langText:"English"}},computed:s(s({},Object(r.b)(["local"])),{},{locale:function(){return this.local.locale},isIos:function(){return this.local.UA.ios}}),mounted:function(){var t=this;this.$nextTick((function(){t.isLoading=!1,window.addEventListener("load",(function(){t.langText={en:"English",zh:"English",ja:"日本語",ko:"한국어",vi:"Tiếng Việt"}[t.locale],t.$store.commit("CHANGE_LANG",t.locale)}))}))},methods:{handlerFocus:function(){this.focus=!0},handlerBlur:function(){this.focus=!1},submitAddress:Object(d.b)(Object(i.a)(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""==this.address)return t.abrupt("return",this.$toast(this.$t("blindboxInvite.emptyToast")));t.next=2;break;case 2:return t.next=4,l.a.certifyFriendship({address:this.address,token:this.$route.query.token});case 4:if(e=t.sent,n=e.data,1==e.status)return this.isLoading=!1,t.abrupt("return",this.$toast(n));t.next=10;break;case 10:this.address="",0==n?this.$toast(this.$t("blindboxInvite.toast0")):1==n?this.$router.push("/activity/blindboxInvite/download"):this.$toast(this.$t("blindboxInvite.toast2"));case 12:case"end":return t.stop()}}),t,this)})))),changeLang:function(){var t=this;this.langShow=!0;for(var a=document.getElementsByClassName("langItem"),e=0;e<a.length;e++)!function(e){var n=a[e];n.addEventListener("click",(function(){var e=n.getAttribute("data-val");t.langShow=!1,t.langText=n.getAttribute("data"),t.$store.commit("CHANGE_LANG",e)}))}(e)}}},n(553),i=n(79),a=Object(i.a)(d,(function(){var t=this,e=t.$createElement;return(e=t._self._c||e)("div",[t.isLoading?e("div",{staticClass:"loading"},[e("van-loading",{attrs:{color:"#1989fa",vertical:""}},[t._v(t._s(t.$t("base.loading"))+"...")])],1):e("div",{staticClass:"detail_box"},[e("div",{staticClass:"detail_box_back"},[e("div",{staticClass:"detail_box_header"},[t._m(0),t._v(" "),e("div",{staticClass:"detail_box_lang"},[e("div",{staticClass:"langBox",attrs:{id:"showLang"},on:{click:t.changeLang}},[e("span",{staticClass:"curLang"},[t._v(t._s(t.langText))]),t._v(" "),e("van-icon",{staticClass:"icon setFont",attrs:{name:"play"}})],1),t._v(" "),e("ul",{directives:[{name:"show",rawName:"v-show",value:t.langShow,expression:"langShow"}],staticClass:"langList",attrs:{id:"langList"}},[e("li",{staticClass:"langItem",attrs:{"data-val":"en",data:"English"}},[t._v("English")]),t._v(" "),e("li",{staticClass:"langItem",attrs:{"data-val":"ko",data:"한국어"}},[t._v("한국어")]),t._v(" "),e("li",{staticClass:"langItem",attrs:{"data-val":"ja",data:"日本語"}},[t._v("日本語")]),t._v(" "),e("li",{staticClass:"langItem",attrs:{"data-val":"vi",data:"Tiếng Việt"}},[t._v("Tiếng Việt")])])])]),t._v(" "),e("div",{staticClass:"detail_box_text"},[e("p",{staticClass:"textPrimary0"},[t._v(t._s(t.$t("blindboxInvite.detailWallet")))])]),t._v(" "),e("div",{staticClass:"detail_box_flex"},[e("div",{staticClass:"detail_box_flex_content"},[e("div",[t._m(1),t._v(" "),e("div",{staticClass:"detail_box_flex_content_first"},[t._v("\n            "+t._s(t.$t("blindboxInvite.detailWallet1"))+"\n          ")])]),t._v(" "),e("div",{staticClass:"detail_box_flex_content_right"},[t._m(2),t._v(" "),e("div",{staticClass:"detail_box_flex_content_last"},[t._v("\n            "+t._s(t.$t("blindboxInvite.detailWallet2"))+"\n          ")])])]),t._v(" "),e("div",{staticClass:"detail_box_flex_content"},[e("div",[t._m(3),t._v(" "),e("div",{staticClass:"detail_box_flex_content_first"},[t._v(t._s(t.$t("blindboxInvite.detailWallet3")))])]),t._v(" "),e("div",{staticClass:"detail_box_flex_content_right"},[t._m(4),t._v(" "),e("div",{staticClass:"detail_box_flex_font"},[t._v(t._s(t.$t("blindboxInvite.detailWallet4")))])])])]),t._v(" "),e("div",{staticClass:"detail_box_address colorBackgroundWhite"},[e("div",{staticClass:"detail_box_address_header textPrimary0"},[t._v("\n        "+t._s(t.$t("blindboxInvite.yourFrinedInvite"))+"\n      ")]),t._v(" "),e("div",{staticClass:"detail_box_address_desc textSecond1"},[t._v("\n                "+t._s(t.$t("blindboxInvite.friendsText"))+"\n      ")]),t._v(" "),e("div",{staticClass:"detail_box_address_textarea colorBackground2"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],ref:"textarea",class:{focus:t.focus||!!t.address},attrs:{type:"text",placeholder:t.focus?"":t.$t("blindboxInvite.detailInput")},domProps:{value:t.address},on:{focus:t.handlerFocus,blur:function(e){return t.handlerBlur()},input:function(e){e.target.composing||(t.address=e.target.value)}}}),t._v(" "),e("div",{staticClass:"detail_box_address_textarea_btn",on:{click:t.submitAddress}},[t._v(t._s(t.$t("blindboxInvite.detailBtn")))]),t._v(" "),e("div",{staticClass:"detail_box_address_textarea_link"},[e("a",{staticClass:"colorPrimary",attrs:{href:"https://www.bitkeep.org/"}},[t._v("\n          "+t._s(t.$t("blindboxInvite.detailJust"))+"\n          ")])])])])]),t._v(" "),e("div",{staticClass:"detail_box_wallet setMargin"},[e("h1",[t._v(t._s(t.$t("blindboxInvite.detailWhy")))]),t._v(" "),e("img",{attrs:{src:"http://cdn.bitkeep.vip/u_b_916160b0-5a59-11ec-bdbc-7722494dfa58.png",alt:""}}),t._v(" "),e("div",{staticClass:"detail_box_wallet_title_content"},[e("h1",{staticClass:"detail_box_wallet_title"},[t._v(t._s(t.$t("blindboxInvite.detailContro")))]),t._v(" "),e("ul",{staticClass:"detail_box_wallet_ul"},[e("li",[t._v(t._s(t.$t("blindboxInvite.detailUl1")))]),t._v(" "),e("li",[t._v(t._s(t.$t("blindboxInvite.detailUl2")))]),t._v(" "),e("li",[t._v(t._s(t.$t("blindboxInvite.detailUl3")))])])])]),t._v(" "),e("div",{staticClass:"detail_box_wallet setBackground"},[e("img",{attrs:{src:"http://cdn.bitkeep.vip/u_b_22575140-5bec-11ec-bdbc-7722494dfa58.png",alt:""}}),t._v(" "),e("div",{staticClass:"detail_box_wallet_title_content setBottom"},[e("h1",{staticClass:"detail_box_wallet_title"},[t._v(t._s(t.$t("blindboxInvite.detailCrypto")))]),t._v(" "),e("ul",{staticClass:"detail_box_wallet_ul"},[e("li",[t._v(t._s(t.$t("blindboxInvite.detailAny")))]),t._v(" "),e("li",[t._v(t._s(t.$t("blindboxInvite.detailAggregate")))])])])]),t._v(" "),e("div",{staticClass:"detail_box_nft"},[e("h1",{staticClass:"textPrimary0"},[t._v(t._s(t.$t("blindboxInvite.detailNFT")))]),t._v(" "),e("div",{staticClass:"detail_box_nft_desc"},[t._v("\n        "+t._s(t.$t("blindboxInvite.detailNFTCon"))+"\n      ")]),t._v(" "),e("img",{attrs:{src:"http://cdn.bitkeep.vip/u_b_d35394b0-5e1f-11ec-bd49-b1b354a240c8.png",alt:""}})]),t._v(" "),e("div",{staticClass:"detail_box_bitkeep"},[e("h1",{attrs:{bklang:"five_1"}},[t._v(t._s(t.$t("blindboxInvite.foot1")))]),t._v(" "),e("p",{attrs:{bklang:"five_2"}},[t._v("\n        "+t._s(t.$t("blindboxInvite.foot2"))+"\n      ")]),t._v(" "),e("ul",[e("li",[e("p",{attrs:{bklang:"five_3"}},[t._v(t._s(t.$t("blindboxInvite.foot3")))]),t._v(" "),t._m(5)]),t._v(" "),e("li",[e("p",{attrs:{bklang:"five_4"}},[t._v(t._s(t.$t("blindboxInvite.foot4")))]),t._v(" "),t._m(6)]),t._v(" "),e("li",[e("p",[t._v(t._s(t.$t("blindboxInvite.foot5")))]),t._v(" "),t._m(7)])]),t._v(" "),t._m(8)]),t._v(" "),t._m(9),t._v(" "),t.isIos?e("div",{staticClass:"download",attrs:{id:"IosBtnen"}},[t._m(10),t._v(" "),t._m(11)]):e("div",{staticClass:"download",attrs:{id:"AndroidBtnen"}},[t._m(12),t._v(" "),t._m(13)])])])}),a,!1,null,"7b256c66",null),e.default=a.exports}}]);