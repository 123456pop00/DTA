<template>
  <v-main>
    <div class="loading" v-if="checkLoading">Loading&#8230;</div>
    <div class="d-flex justify-space-between title">
      <div>Ứng dụng lịch</div>
      <div class="font-14 font-weight-medium d-flex" style="color: black">
        <div class="mr-3">Chào mừng {{ user }}</div>
        <div class="cursor-pointer" @click="logout()">Đăng xuất</div>
      </div>
    </div>
    <router-view :key="$route.path" />
  </v-main>
</template>

<script>
import {eventBus} from '../../main.js';
import workLocalStorage from "../../common/workLocalStorage";
export default {
  name: "DefaultView",
  data: () => ({
    user: "Bạn",
    checkLoading : false
  }),
  created: function () {
    const me = this;
    var DataUser = workLocalStorage("DataUser");
    if (DataUser.data()) {
      this.user = DataUser.get("FullName") ? DataUser.get("FullName") : "Bạn";
    }
    eventBus.$on('Loading', (event) => {
      me.checkLoading = event;
    });
  },
  methods: {
    logout() {
      var DataUser = workLocalStorage("DataUser");
      DataUser.removeKey("DataUser");
      window.location.href = "/";
      setTimeout(() => {
        window.location.reload(true);
      }, 200);
    },
  },
};
</script>
<style scoped lang="scss">
.title {
  color: #9e0c10;
  padding: 15px;
  font-size: 18px;
  font-weight: 600;
  box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px, rgb(161 161 161 / 23%) 0px 2px 2px;
}
</style>