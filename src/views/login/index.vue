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
        <div>
          <n-input
            v-model="loginInfo.name"
            autofocus
            placeholder="admin"
            :maxlength="20"
            class="input-box"
          >
          </n-input>
        </div>
        <div>
          <n-input
            v-model="loginInfo.password"
            placeholder="123456"
            :maxlength="20"
            show-password-on="mousedown"
            type="password"
            class="input-box"
          >
          </n-input>
        </div>
        <div>
          <n-checkbox label="记住我"> </n-checkbox>
        </div>
        <div>
          <n-button type="primary" color="#316C72FF" class="button"
            >登录</n-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { NInput, NCheckbox, NButton } from "naive-ui";
import { ref } from "vue";

const loginInfo = ref({
  name: "",
  password: "",
});
</script>

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
  height: 410px;
  background: rgba($color: #ffffff, $alpha: 0.6);
  border-radius: 10px;
  box-shadow: 0 0 50px rgba(50, 48, 48, 0.2);
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
    padding: 35px 20px;

    h5 {
      font-size: 23px;
      color: #6a6a6a;
      font-weight: 500;
      padding: 5px;

      img {
        width: 43px;
        vertical-align: middle;
        margin-right: 20px;
      }
    }

    .input-box {
      margin: 15px 0;
      padding: 8px;
      font-size: 16;
    }

    .button {
      width: 100%;
      margin-top: 20px;
      padding: 25px;
      border-radius: 5px;
      font-size: 16px;
    }
  }
}
</style>
