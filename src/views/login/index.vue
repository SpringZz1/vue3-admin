<template>
  <div class="container">
    <div class="login-container">
      <div class="svg-container">这里放图片</div>
      <div class="input-container">这里输入信息表格</div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
  background: url("../../assets/images/login_bg.webp") no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-container {
  display: flex;
  width: 400px;
  height: 250px;
  background-color: red;
}

.svg-container {
  width: 200px;
  background-color: blue;
}
</style>
