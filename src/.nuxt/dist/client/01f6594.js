(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{709:function(e,n,t){"use strict";t.r(n);var a=t(433);n.default={bind:function(e,n){n=n.value,e.$value=n,e.handler=function(){var n;e.$value?((n=document.createElement("textarea")).readOnly="readonly",n.style.position="absolute",n.style.left="-9999px",n.value=e.$value,document.body.appendChild(n),n.select(),n.setSelectionRange(0,n.value.length),document.execCommand("Copy")&&Object(a.a)("Copied"),document.body.removeChild(n)):a.a.fail("Some error occurred")},e.addEventListener("click",e.handler)},componentUpdated:function(e,n){n=n.value,e.$value=n},unbind:function(e){e.removeEventListener("click",e.handler)}}}}]);