(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{456:function(e,n,t){"use strict";t.r(n);var a=t(366);n.default={bind:function(e,n){n=n.value,e.$value=n,e.handler=function(){var n;e.$value?((n=document.createElement("textarea")).readOnly="readonly",n.style.position="absolute",n.style.left="-9999px",n.value=e.$value,document.body.appendChild(n),n.select(),n.setSelectionRange(0,n.value.length),document.execCommand("Copy")&&a.a.success("复制成功"),document.body.removeChild(n)):a.a.fail("无复制内容")},e.addEventListener("click",e.handler)},componentUpdated:function(e,n){n=n.value,e.$value=n},unbind:function(e){e.removeEventListener("click",e.handler)}}}}]);