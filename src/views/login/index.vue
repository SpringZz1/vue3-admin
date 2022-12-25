<template>
  <div class="container">
    <div class="login-container">
      <div class="svg-container">
        <img class="image" src="@/assets/images/login_banner.webp" alt="" />
      </div>
      <div class="input-container">
        <h5>
          <img src="@/assets/svg/logo.svg" alt="logo" />
          <span>Vue Naive Admin</span>
        </h5>
        这里输入信息表格
      </div>
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
  width: 700px;
  height: 400px;
  background: rgba($color: #ffffff, $alpha: 0.6);
  border-radius: 10px;
  box-shadow: 0 0 50px rgba(50, 48, 48, 0.4);
  padding: 15px;

  .svg-container {
    width: 380px;
    padding: 35px 20px;

    .image {
      width: 100%;
    }
  }
  .input-container {
    width: 320px;
    /* background-color: rgb(77, 77, 145); */
    padding: 35px 20px;

    h5 {
      font-size: 23px;
      color: #6a6a6a;
      font-weight: 500;
      padding: 5px;

      img {
        width: 43px;
        vertical-align: middle;
        margin-right: 10px;
      }
    }
  }
}
</style>
