<template>
  <div class="" style="padding: 24px 18px; height: calc(100vh - 62px)">
    <div class="d-flex flex-column" style="height: 100%">
      <div class="d-flex" style="justify-content: space-between">
        <div class="text-day-solar font-title">Danh sách thông báo</div>
        <div>
          <!-- <button>Lưu</button> -->
          <!-- <button type="button" class="btn btn-danger btn-save">
            Tạo thông báo
          </button> -->
          <v-select
            :items="notiType"
            filled
            v-on:change="initialize"
            label="Chọn loại thông báo sẽ hiển thị"
            v-model="NotiTypeToGetData"
            item-text="text"
            item-value="value"
            style="width: 400px"
          ></v-select>
          <v-dialog v-model="showPopupAddNoti" persistent width="600">
            <template v-slot:activator="{ on, attrs }">
              <!-- <v-btn color="primary" dark v-bind="attrs" v-on="on">
                Open Dialog
              </v-btn> -->
              <button
                v-show="NotiTypeToGetData == 1"
                type="button"
                class="btn btn-danger btn-save"
                v-bind="attrs"
                v-on="on"
                @click="showAddNoti()"
              >
                Tạo thông báo
              </button>
            </template>
            <v-card>
              <v-card-title class="text-h5"> {{ formTitle }} </v-card-title>
              <v-card-text>
                <div
                  class="font-13 font-weight mb-2 flex-column text-title-name"
                >
                  Tiêu đề thông báo/Lời chúc
                </div>
                <div style="width: 100%" class="mb-3 flex-1-0-auto">
                  <input
                    style="
                      border: thin solid #ced3d8;
                      border-radius: 5px;
                      padding: 7px 10px;
                      font-size: 14px;
                      width: 100%;
                    "
                    :disabled="NotiTypeToGetData == 0"
                    v-model="edittedNoti.Title"
                    type="text"
                    placeholder="Nhập nội dung"
                  />
                </div>

                <div
                  class="font-13 font-weight mb-2 flex-column text-title-name"
                >
                  Nội dung thông báo/Lời chúc
                </div>
                <div
                  style="width: 100%; height: 120px"
                  class="mb-3 flex-1-0-auto"
                >
                  <textarea
                    placeholder="Nhập nội dung"
                    class="form-control text-area-right"
                    rows="3"
                    v-model="edittedNoti.Content"
                  ></textarea>
                </div>
                <div>
                  <div
                    class="text-title-name"
                    style="margin-top: 26px; margin-bottom: 8px"
                  >
                    Ngày gửi
                  </div>

                  <div style="width: 250px">
                    <v-menu
                      v-model="menu2"
                      :close-on-content-click="false"
                      transition="scale-transition"
                      offset-y
                      max-width="290px"
                      min-width="auto"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="computedDateFormatted"
                          persistent-hint
                          prepend-icon="prepend"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                        >
                          <template #prepend>
                            <v-icon right> mdi-calendar </v-icon>
                          </template></v-text-field
                        >
                      </template>
                      <v-date-picker
                        v-model="date"
                        :disabled="typeDateSend != '2'"
                        :header-date-format="getHeaderDateFormat"
                        no-title
                        @input="menu2 = false"
                      ></v-date-picker>
                    </v-menu>
                  </div>
                </div>
                <div>
                  <div
                    class="text-title-name"
                    style="margin-top: 24px; margin-bottom: 8px"
                  >
                    Giờ gửi thông báo/lời chúc
                  </div>

                  <div>
                    <v-dialog v-model="showPopupPicker" persistent width="300">
                      <v-card>
                        <div>
                          <v-time-picker
                            v-model="picker"
                            scrollable
                          ></v-time-picker>
                        </div>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <button
                            class="button-noti mr-3"
                            style="color: #9e0c10; border: 1px solid #d9d9d9"
                            @click="showPopupPicker = false"
                          >
                            Đóng
                          </button>
                          <button
                            class="button-noti backgroud-button"
                            @click="chooseTimeFn()"
                          >
                            Áp dụng
                          </button>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>

                    <v-radio-group v-model="typeDateSend" row>
                      <v-radio label="Mặc định" value="1"></v-radio>
                      <v-radio label="Tùy chỉnh" value="2"> </v-radio>
                      <v-radio label="Gửi ngay" value="3"></v-radio>
                    </v-radio-group>
                  </div>
                  <div
                    class="date-send-noti"
                    style="margin-top: 8px"
                    @click="showTimePicker()"
                  >
                    {{ dateSendNotiString }}
                  </div>
                </div>

                <v-checkbox
                  v-model="IsPushToWeb"
                  :label="`Điều hướng thông báo tới website`"
                  style="margin-top: 24px; margin-bottom: 8px"
                ></v-checkbox>

                <input
                  style="
                    border: thin solid #ced3d8;
                    border-radius: 5px;
                    padding: 7px 10px;
                    font-size: 14px;
                    width: 50%;
                  "
                  type="text"
                  placeholder="Nhập đường dẫn/URL đến website"
                  v-bind:disabled="!IsPushToWeb"
                  v-model="edittedNoti.ImageLink"
                  v-bind:class="{ 'disabled-input': !IsPushToWeb }"
                />
              </v-card-text>
              <v-card-actions class="footer">
                <v-spacer></v-spacer>
                <!-- <v-btn
                  color="green darken-1"
                  text
                  @click="showPopupAddNoti = false"
                >
                  Disagree
                </v-btn> -->
                <button
                  class="button-noti mr-3"
                  style="color: #9e0c10; border: 1px solid #d9d9d9"
                  @click="showPopupAddNoti = false"
                >
                  Đóng
                </button>
                <button
                  class="button-noti backgroud-button"
                  @click="pushNotification()"
                >
                  Áp dụng
                </button>
              </v-card-actions>
              <div></div>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="530px">
            <v-card>
              <v-card-title class="text-h5"
                >Bạn có chắc chắn muốn xóa thông báo này ?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
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
        </div>
      </div>
      <div class="custom-1 flex-1-1-auto mt-4 table-noti">
        <v-data-table :headers="headers" :items="desserts">
          <template v-slot:item.actions="{ item }">
            <!-- @click="editItem(item)" -->
            <v-icon small class="mr-2" @click="editItem(item)">
              mdi-pencil
            </v-icon>
            <!-- @click="deleteItem(item)" -->
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
import apiClient from "../services/APIClient";
export default {
  name: "NotificationsView",

  data: () => ({
    showPopupAddNoti: false,
    IsPushToWeb: false,
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "STT",
        align: "center",
        sortable: false,
        value: "STT",
        width: "2%",
      },
      {
        text: "Ngày diễn ra sự kiện",
        align: "center",
        sortable: false,
        value: "Date",
        width: "15%",
      },
      {
        text: "Giờ",
        align: "center",
        sortable: false,
        value: "Hour",
        width: "5%",
      },
      {
        text: "Sự kiện/Tiêu đề",
        align: "center",
        sortable: false,
        value: "Title",
        width: "28%",
      },
      {
        text: "Nội dung thông báo",
        align: "center",
        sortable: false,
        value: "Content",
        width: "40%",
      },
      // {
      //   text: "Sự kiện",
      //   align: "center",
      //   sortable: false,
      //   value: "EventTitle",
      // },
      {
        text: "",
        align: "center",
        sortable: false,
        value: "actions",
        width: "10%",
      },
    ],
    desserts: [
      {
        STT: "1",
        StartDate: 159,
        StartSendNoti: 6.0,
        dataNoti: 24,
      },
    ],
    edittedNoti: {
      ID: 0,
      Title: "",
      Content: "",
      Topic: "",
      ScheduleAt: null,
      ImageLink: "",
    },
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    mydate: Date.now(),
    menu: false,
    modal: false,
    menu2: false,
    showChooseTime: false,
    NotiTypeToGetData: 1,
    notiType: [
      {
        text: "Thông báo theo sự kiện",
        value: 0,
      },
      {
        text: "Thông báo thường",
        value: 1,
      },
    ],
    typeDateSend: "1",
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" },
    ],
    showPopupPicker: false,
    picker: "09:00",
    dateSendNoti: new Date(),
    dateSendNotiString: "",
    editedIndex: -1,
    editedItem: {
      STT: "",
      StartDate: "",
      StartSendNoti: "",
      dataNoti: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Tạo thông báo" : "Sửa thông báo";
    },
    computedDateFormatted() {
      
      if (+this.typeDateSend == 1) {
        var tmp = new Date(this.date);
        tmp.setHours(7);
        tmp.setMinutes(0);
        tmp.setSeconds(0);
        tmp.setMilliseconds(0);
        this.mydate = tmp;
        // date = this.date.toISOString().substr(0, 10);
      } else if (+this.typeDateSend == 2) {
        this.mydate = new Date(this.date);
      } else {
        this.mydate = new Date();
      }
      

      this.dateSendNotiString = this.computedDateSendNoti();
      return this.formatDate(this.mydate);
    },

    parsedDirection() {
      return this.direction.split(" ");
    },
  },
  created: function () {
    this.initialize();
  },
  methods: {
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    editItem(item) {
      if (
        new Date(item.ScheduleAt) < new Date() &&
        this.NotiTypeToGetData == 1
      ) {
        alert("Bạn không thể chỉnh sửa thông báo đã thực hiện bắn");
        return;
      }

      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.edittedNoti = this.editedItem;
      // call service
      this.showPopupAddNoti = true;
      this.date = this.edittedNoti.ScheduleAt;
      this.typeDateSend = "2";
      this.IsPushToWeb =
        this.edittedNoti.ImageLink != null && this.edittedNoti.ImageLink != "";
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },
    initialize() {
      // call serive
      const me = this;
      const param = {
        PageSize: 100,
        PageIndex: 1,
        CustomParam: {
          NotificationType: me.NotiTypeToGetData,
        },
      };

      apiClient.post("Notification/GetNotification", param).then((res) => {
        if (res.Data && res.Success) {
          me.desserts = res.Data;
          me.desserts.forEach((x, index) => {
            var  a  = new Date();
            const time = new Date(x.ScheduleAt);
            let timePart = time.setTime(
              time.getTime() - 7 * 60 * 60 * 1000
            );
            let e;
            if(me.NotiTypeToGetData == 0){
              a  = new Date(timePart);
            } else {
              a = time;
            }
            x.STT = index + 1;
            x.Hour = a.getHours() + ":" + a.getMinutes();
            x.Date = a.toLocaleDateString();
            return x;
          });
        }
      });
    },
    pushNotification() {
      const me = this;

      const param = {
        ID: me.edittedNoti.ID,
        Title: me.edittedNoti.Title,
        Content: me.edittedNoti.Content,
        Topic: "news",
        ScheduleAt: me.mydate,
        ImageLink: me.edittedNoti.ImageLink,
        SendNow: me.typeDateSend == 3,
        State: me.editedIndex === -1 ? 1 : 2, // 1 = insert, 2 = update
        NotiType: me.NotiTypeToGetData,
      };

      apiClient.post("Notification/SendNotify", param).then((res) => {
        if (res.Data && res.Success) {
          me.showPopupAddNoti = false;
          me.initialize();
        } else {
          alert("Lỗi xảy ra từ Server vui lòng thử lại sau");
        }
      });
      this.close();
    },
    getHeaderDateFormat(isoDate) {
      var arrDate = isoDate.split("-");
      // console.log("getHeaderDateFormat: " + isoDate);
      return `Tháng ${arrDate[1]} - ${arrDate[0]}`;
    },

    computedDateSendNoti() {
      if (this.mydate) {
        return `${this.mydate.getHours()}:${
          this.mydate.getMinutes() <= 9 ? "0" : ""
        }${this.mydate.getMinutes()}`;
      }
      return null;
    },
    showAddNoti() {
      this.typeDateSend = "1";
      this.editedIndex = -1;
      this.edittedNoti.Title = "";
      this.edittedNoti.Content = "";
      this.edittedNoti.ImageLink = null;
    },
    randomColor() {
      this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
    },
    formatDate(date) {
      if (!date) return null;

      var month = date.getUTCMonth() + 1; //months from 1-12.
      var day = date.getDate();
      var year = date.getUTCFullYear();
      return `${day}/${month}/${year}`;
      // return `1`;
    },
    showTimePicker() {
      if (this.typeDateSend == "2"){
        this.showPopupPicker = true;
      }
      else {
        this.showPopupPicker = false;
      }
      
    },
    chooseTimeFn() {
      this.showPopupPicker = false;
      if (this.picker) {
        let arrayStrig = this.picker.split(":");
        this.mydate.setHours(arrayStrig[0]);
        this.mydate.setMinutes(arrayStrig[1]);
        this.mydate.setSeconds(0);
        this.dateSendNotiString = this.computedDateSendNoti();
      }
      // this.dateSendNoti =

      console.log("sendnoti");
    },
    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    deleteItemConfirm() {
      const me = this;

      const param = {
        ID: me.editedItem.ID,
      };

      apiClient.post("Notification/Delete", me.editedItem).then((res) => {
        if (res.Success) {
          me.initialize();
          me.closeDelete();
        }
      });
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
};
</script>
<style lang="scss" scoped>
.font-title {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
}
</style>
<style lang="scss">
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
.table-noti {
  table {
    border-collapse: collapse;
    tbody {
      border: thin solid #d9d9d9;
    }
  }
}

.text-title-name {
  font-weight: 500;
  color: #000000;
  font-size: 14px;
}

.footer {
  border-top: thin solid #d9d9d9;
}
</style>
<style lang="scss">
.v-dialog > .v-card > .v-card__actions {
  padding: 8px 20px;
}
.v-input.v-input--is-label-active.v-input--is-dirty.v-input--is-readonly.theme--light.v-text-field.v-text-field--is-booted {
  position: relative;
  .v-input__prepend-outer {
    position: absolute;
    right: 0;
  }
}
.disabled-input {
  background: #f5f5f5;
}
.date-send-noti {
  background: #f5f5f5;
  border-radius: 6px;
  width: 143px;
  height: 40px;
  padding: 9px 12px;
  color: #000000;
}
.date-send-noti:hover {
  cursor: pointer;
}
.v-btn__content {
  font-size: 12px;
}
.v-time-picker-title {
  color: black;
}
</style>
