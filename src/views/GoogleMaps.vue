<template>
  <div style="padding: 24px 18px; height: calc(100vh - 62px)">
    <div class="font-20 font-weight-black table-noti2">Quản lý user</div>
    <div>
      <div></div>
      <div class="custom-1 flex-1-1-auto mt-4 table-noti">
        <v-data-table
          :headers="headers"
          :items="desserts"
          sort-by="calories"
          class="elevation-1"
          hide-default-footer
        >
          <template v-slot:top>
            <v-toolbar flat>
              <!-- <v-toolbar-title><input type="text" placeholder="Tìm kiếm"></v-toolbar-title> -->
              <input
                style="
                  border: thin solid #ced3d8;
                  border-radius: 5px;
                  padding: 7px 10px;
                  font-size: 14px;
                "
                type="text"
                placeholder="Tìm kiếm"
              />
              <!-- <v-divider class="mx-4" inset vertical></v-divider> -->
              <v-spacer></v-spacer>
              <v-dialog v-model="dialog" max-width="400px" persistent>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    class="mb-2 oke-2"
                    v-bind="attrs"
                    v-on="on"
                    @click="showAdd()"
                  >
                    Tạo tài khoản
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title class="text-h5">
                    {{ formTitle }}
                  </v-card-title>

                  <v-card-text>
                    <div>
                      <div class="font-14 font-size: font-weight-black mb-2">
                        <label for="name">Tên</label>
                      </div>
                      <input
                        class="text-insert text-input"
                        type="text"
                        id="name"
                        v-model="user.FullName"
                        placeholder="Nhập tên tài khoản"
                      />
                    </div>

                    <div>
                      <div
                        class="font-14 mt-4 font-size: font-weight-black mb-2"
                      >
                        <label for="Email">Email <span>*</span></label>
                      </div>
                      <!-- <input
                        class="text-insert text-input"
                        type="text"
                        id="Email"
                        placeholder="Nhập email"
                        v-model="user.Email"
                      /> -->
                      <input
                        class="text-insert text-input"
                        for="text-insert text-input"
                        type="email"
                        id="Email"
                        placeholder="Nhập email"
                        v-model="user.Email"
                        required
                        v-on:blur="validateEmail"
                      />
                    </div>
                    <div
                      class="color-text font-italic mt-1"
                      v-if="!checkValidateEmail"
                    >
                      Email sai định dạng
                    </div>
                    <div>
                      <div class="font-14 mt-4 font-weight-black mb-2">
                        <label for="Password">Mật Khẩu <span>*</span></label>
                      </div>
                      <input
                        class="text-insert text-input"
                        type="text"
                        placeholder="Nhập mật khẩu"
                        id="Password"
                        v-model="user.Password"
                        v-on:blur="validatePassword"
                      />
                    </div>
                    <div
                      class="color-text font-italic mt-1"
                      v-if="!checkValidatePassword"
                    >
                      Mật khẩu không được để trống
                    </div>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <!-- <v-btn color="blue darken-1" text @click="close">
                      Hủy
                    </v-btn>
                    <v-btn color="blue darken-1" text @click="save">
                      lưu
                    </v-btn> -->
                    <button
                      class="button-noti mr-3"
                      style="color: #9e0c10; border: 1px solid #d9d9d9"
                      @click="close"
                    >
                      Hủy
                    </button>
                    <button class="button-noti backgroud-button" @click="save">
                      Lưu
                    </button>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-dialog v-model="dialogDelete" max-width="530px">
                <v-card>
                  <v-card-title class="text-h5"
                    >Bạn có chắc chắn muốn xóa tài khoản này ?</v-card-title
                  >
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <!-- <v-btn color="blue darken-1" text @click="closeDelete"
                      >Hủy</v-btn
                    >
                    <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                      >Đồng ý </v-btn
                    > -->
                    <button
                      class="button-noti mr-3"
                      style="color: #9e0c10; border: 1px solid #d9d9d9"
                      @click="closeDelete"
                    >
                      Hủy
                    </button>
                    <button
                      class="button-noti backgroud-button"
                      @click="deleteItemConfirm"
                    >
                      Đồng ý
                    </button>
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">
              mdi-pencil
            </v-icon>
            <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
          </template>
          <template v-slot:no-data>
            <v-btn color="primary" @click="initialize"> Reset </v-btn>
          </template>
        </v-data-table>
      </div>
    </div>
  </div>
</template>

<script>
import apiClient from '../services/APIClient';
export default {
  name: "GoogleMapsView",

  data: () => ({
    headers: [
      {
        text: "STT",
        align: "center",
        sortable: false,
        value: "STT",
      },
      {
        text: "Tên",
        align: "center",
        sortable: false,
        value: "FullName",
      },
      {
        text: "Email",
        align: "center",
        sortable: false,
        value: "Email",
      },
      {
        text: "Phân quyền",
        align: "center",
        sortable: false,
        value: "Permission",
      },

      {
        text: "",
        align: "center",
        sortable: false,
        value: "actions",
      },
    ],
    desserts: [],
    dialog: false,
    dialogDelete: false,
    // headers: [
    //   {
    //     text: "Dessert (100g serving)",
    //     align: "start",
    //     sortable: false,
    //     value: "name",
    //   },
    //   { text: "Calories", value: "calories" },
    //   { text: "Fat (g)", value: "fat" },
    //   { text: "Carbs (g)", value: "carbs" },
    //   { text: "Protein (g)", value: "protein" },
    //   { text: "Actions", value: "actions", sortable: false },
    // ],
    // desserts: [],
    editedIndex: -1,
    editedItem: {
      STT: "",
      Name: 0,
      Email: 0,
      permission: 0,
    },
    defaultItem: {
      Name: "",
      Email: "",
      Password: "",
    },
    user: {
      Name: "",
      Email: "",
      Password: "",
    },
    checkValidateEmail: false,
    checkValidatePassword: false,
  }),
  methods: {
    showAdd() {
      this.user = Object.assign({}, this.defaultItem);
    },
    edit(e) {
      console.log(e);
    },
    initialize() {
      // call serive
      const me = this;
      apiClient.get("user").then(res => {
        if (res.Data && res.Success){
          me.desserts = res.Data;
          me.desserts.forEach((x, index) => {
            x.STT = index + 1;
            return x;
          })
        }
      })

    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.user = this.editedItem;
      this.checkValidateEmail = true;
      this.checkValidatePassword = true;
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      const me = this;
      // call service
      apiClient.post("user/Delete", me.editedItem).then(res => {
        if (res.Success){
          me.initialize();
          this.closeDelete();
        }
      })
      
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    validateEmail() {
      this.checkValidateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.user?.Email);
    },
    validatePassword() {
      if (this.user?.Password != "") {
        this.checkValidatePassword = true;
      } else {
        this.checkValidatePassword = false;
      }
    },
    save() {
      
      if (
        !this.checkValidateEmail ||
        !this.checkValidatePassword ||
        !this.user.Password ||
        !this.user.Email
      )
        return;

      const me = this;
      // call service
      if (this.editedIndex > -1) {
         apiClient.post("user/UpdateUser", this.user).then(res => {
          if (res.Data && res.Success){
            me.initialize();
          }
          else {
            alert(res.Message);
          }
        });
      } else {
        apiClient.post("user/CreateUser", this.user).then(res => {
          if (res.Data && res.Success){
            me.initialize();
          }
          else {
            alert(res.Message);
          }
        });
      }
      this.close();
    },
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Tạo tài khoản" : "Sửa tài khoản";
    },
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },
  created() {
    this.initialize();
  },
};
</script>
<style lang="scss">
.v-card > .v-card__actions {
  padding: 8px 20px;
}
.v-input.v-input--is-label-active.v-input--is-dirty.v-input--is-readonly.theme--light.v-text-field.v-text-field--is-booted {
  position: relative;
  .v-input__prepend-outer {
    position: absolute;
    right: 0;
  }
}
.date-send-noti {
  background: #f5f5f5;
  border-radius: 6px;
  width: 143px;
  height: 40px;
  padding: 9px 12px;
  color: #000000;
}
button.mb-2.oke-2.v-btn.v-btn--is-elevated.v-btn--has-bg.theme--light.v-size--default {
  background-color: #9e0c10;
  color: #fff;
  padding: 8px 16px;
}
.theme--light.v-data-table > .v-data-table__wrapper > table > thead > tr > th {
  color: #000000;
  font-weight: bold !important;
  font-size: 14px;
}
.v-data-table-header {
  border: 2px solid #f5f5f5;
  background: #d9d9d9;
  color: #000000 !important;
  border-radius: 103px;
}
.table-noti2 {
  table {
    border-collapse: collapse;
    tbody {
      border: thin solid #d9d9d9;
    }
  }
}
.required label::after {
  content: "*";
}
.text-insert {
  width: 352px;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  height: 40px;
}
</style>
