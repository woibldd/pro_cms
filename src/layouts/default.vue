<template>
  <div>
    <Nuxt />
  </div>
</template>

<style lang="scss">
/* 需要加成全局≥÷ 暂时放在这里 */
.body {
  font-family: PingFang SC;
  font-style: normal;
  font-weight: normal;
}
.color_red {
  color: #ff255a;
  font-weight: 600;
}
.color_text {
  color: #4b5373;
}
.color_theme {
  color: #0c0998;
}
.btn:active {
  opacity: 0.8;
}
.active{
   opacity: 0.8;
}
.radial-gradient{
   background: radial-gradient(
          at left top,
          #fffbe5 0%,
          #ffefea 19.79%,
          #ffeff7 53.47%,
          #ffecfd 59.9%,
          #ddd1ff 97.4%
        );
}
// .btn {
//   background: linear-gradient(122.71deg, #74eeff 3.38%, #6f2cff 92.57%), #c4c4c4;
//   border-radius: 100px;
//   height: 24px;
//   width: 68px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-radius: 100px;
//   font-weight: 500;
//   font-size: 12px;
//   line-height: 12px;
//   color: #ffffff;
//   &:active {
//     opacity: 0.8;
//   }
// }
@keyframes heartbeat {
  0% {
    transform: scale(0.9, 0.9);
    opacity: 1;
  }
  25% {
    transform: scale(1, 1);
    opacity: 0.9;
  }
  // 80% {
  //   transform: scale(0.9, 0.9);
  // }
  100% {
    opacity: 1;
    transform: scale(0.9, 0.9);
  }
}
</style>
