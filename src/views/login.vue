<template>
  <div>
    loading
    <div class="login" v-bind:class="{ loading: doLoading, active: active }">
      <form action="" class="form">
        <h2>Đăng nhập</h2>
        <div class="form-field">
          <label for="login-mail"><i class="fa fa-user"></i></label>
          <input
            id="login-mail"
            type="text"
            name="mail"
            placeholder="tài khoản"
            formControlName="UserName"
            v-model="user"
          />
          <!-- *ngIf="!loginForm.get('UserName')?.errors?.required && loginForm.get('UserName')?.touched" -->
          <svg v-if="user != ''">
            <use href="#svg-check" />
          </svg>
        </div>
        <div class="form-field">
          <label for="login-password"><i class="fa fa-lock"></i></label>
          <input
            id="login-password"
            type="password"
            name="password"
            formControlName="Password"
            v-model="password"
          />
          <!-- *ngIf="!loginForm.get('Password')?.errors?.required && loginForm.get('Password')?.touched" -->
          <svg v-if="password != ''">
            <use href="#svg-check" />
          </svg>
        </div>
        <div class="login-false" v-if="errData">Dữ liệu không hợp lệ</div>
        <div class="login-false" v-if="showErr">Đăng nhập thất bại</div>
        <button type="submit" class="button" @click="login($event)">
          <div class="arrow-wrapper">
            <span class="arrow"></span>
          </div>
          <p class="button-text">Đăng nhập</p>
        </button>
      </form>
      <div></div>
      <!-- *ngIf="loginDone" -->
      <div class="finished">
        <svg>
          <use href="#svg-check" />
        </svg>
      </div>
    </div>

    <!-- //--- ## SVG SYMBOLS ############# -->
    <svg style="display: none">
      <symbol id="svg-check" viewBox="0 0 130.2 130.2">
        <polyline points="100.2,40.2 51.5,88.8 29.8,67.5 " />
      </symbol>
    </svg>
  </div>
</template>

<script>
import apiClient from "../services/APIClient";
export default {
  name: "Login",

  data: () => ({
    user: "",
    password: "",
    showErr: false,
    doLoading: false,
    active: false,
    errData: false,
  }),

  computed: {},
  created: function () {},
  methods: {
    login(e) {
      e.preventDefault();
      e.stopPropagation();
      if (this.user == "" || this.password == "") {
        this.errData = true;
        return;
      }
      this.doLoading = true;
      let obj = {Email : this.user,password : this.password};
      apiClient.post(`/Login/Login`, this.event).then((response) => {
        if (response.Data && response.Success) {
          alert("Cập nhật dữ liệu thành công ");
        } else {
          alert("Cập nhật dữ liệu thất bại ");
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:400,300);
$primary: #00fcd1;
$secondary: #04dfbd;
$lighter: #9596a2;
$light: #3d4256;
$dark: #1e2137;
$bg1: #333342;
$bg2: #4d4e63;
$border-radius: 12px;

body {
  background: linear-gradient(135deg, $bg2, $bg1);
  height: 100vh;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
}

//--- ## FORM #############
.login {
  width: 420px;
  background: #ffffff;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
  border-radius: $border-radius;
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  &:before {
    content: "";
    position: absolute;
    background: transparent;
    bottom: 45px;
    right: 40px;
    width: 55px;
    height: 55px;
    z-index: 5;
    transition: all 0.6s ease-in-out, background 0s ease;
  }
  .form {
    display: block;
    position: relative;
    h2 {
      background: #f5f5fa;
      display: block;
      box-sizing: border-box;
      width: 100%;
      margin: 0 0 30px 0;
      padding: 40px;
      font-weight: 200;
      color: $lighter;
      font-size: 19px;
    }
    .form-field {
      display: flex;
      align-items: center;
      height: 55px;
      margin: 0 40px 30px 40px;
      border-bottom: 1px solid $lighter;
      label {
        width: 10px;
        padding: 0 15px 0 0;
        color: $lighter;
      }
      input {
        width: 100%;
        background: transparent;
        color: $lighter;
        padding: 15px;
        border: 0;
        margin: 0;
        & + svg {
          width: 35px;
          width: 35px;
          fill: none;
          stroke: $primary;
          stroke-width: 7;
          stroke-linecap: round;
          stroke-dasharray: 1000;
          stroke-dashoffset: -100;
          transition: all 0.3s ease-in-out;
        }
        &:valid + svg {
          stroke-dashoffset: 0;
        }
        &:focus {
          outline: none;
        }
      }
      *::placeholder {
        color: $lighter;
      }
    }
    .button {
      width: 100%;
      position: relative;
      cursor: pointer;
      box-sizing: border-box;
      padding: 0 40px 45px 40px;
      margin: 0;
      border: 0;
      background: transparent;
      outline: none;
      .arrow-wrapper {
        transition: all 0.45s ease-in-out;
        position: relative;
        margin: 0;
        width: 100%;
        height: 55px;
        right: 0;
        float: right;
        background: linear-gradient(90deg, $secondary, $primary);
        box-shadow: 0 3px 20px rgba($primary, 0.4);
        border-radius: $border-radius;
        .arrow {
          position: absolute;
          top: 50%;
          margin: auto;
          transition: all 0.45s ease-in-out;
          right: 35px;
          width: 15px;
          height: 2px;
          background: none;
          transform: translateY(-50%);
          &:before {
            position: absolute;
            content: "";
            top: -4px;
            right: 0;
            width: 8px;
            height: 8px;
            border-top: 2px solid #fff;
            border-right: 2px solid #fff;
            transform: rotate(45deg);
          }
        }
      }
      .button-text {
        transition: all 0.45s ease-in-out;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        padding: 0;
        margin: 0;
        color: #fff;
        line-height: 55px;
        text-align: center;
        text-transform: uppercase;
      }
    }
  }
  .finished {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 7;
    svg {
      width: 100px;
      width: 100px;
      fill: none;
      stroke: #fff;
      stroke-width: 7;
      stroke-linecap: round;
      stroke-dasharray: 1000;
      stroke-dashoffset: -100;
      transition: all 0.3s ease-in-out 0.5s;
    }
  }
  &.loading {
    .form {
      .button {
        .arrow-wrapper {
          width: 55px;
          animation: sk-rotateplane 1.2s infinite ease-in-out 0.5s;
          .arrow {
            background: #fff;
            transform: translate(15px, 0);
            opacity: 0;
            transition: opacity 0.3s ease-in-out 0.5s;
          }
        }
        .button-text {
          color: $lighter;
        }
      }
    }
  }
  &.active {
    &:before {
      bottom: 0;
      right: 0;
      background: linear-gradient(90deg, $secondary, $primary);
      border-radius: $border-radius;
      height: 100%;
      width: 100%;
    }
    .form {
      .button {
        .arrow-wrapper {
          animation-iteration-count: 1;
        }
      }
    }
    .finished {
      svg {
        stroke-dashoffset: 0;
      }
    }
  }
}

@keyframes sk-rotateplane {
  0% {
    transform: perspective(120px);
  }
  50% {
    transform: perspective(120px) rotateY(180deg);
  }
  100% {
    transform: perspective(120px) rotateY(180deg) rotateX(180deg);
  }
}
.login-false {
  margin-left: 40px;
  margin-bottom: 15px;
  color: red;
  font-style: italic;
  font-size: 18px;
  font-weight: 600;
}
</style>
<style lang="scss">
</style>
