<template>
  <div>
    <div class="title-event">
      <div
        class="
          align-center
          cursor-pointer
          d-flex
          justify-space-between
          ml-4
          mr-4
          position-relative
        "
        style="width: 100%; padding: 6px 0px"
      >
        <div @click="emitBack()">
          <i class="fas fa-arrow-left mr-3"></i>
          Chi tiết sự kiện
        </div>
        <button type="button" class="btn btn-danger btn-save" @click="save()">
          Lưu
        </button>
      </div>
    </div>
    <div style="width: 100%; height: calc(100vh - 135px)" class="mt-3 d-flex">
      <div style="width: 35%; padding: 16px">
        <div>
          <div>
            <div class="font-14 font-size: font-weight-black mb-2 mt-3">
              <label for="name">Tên sự kiện *</label>
            </div>
            <input
              class="text-insert text-input"
              type="text"
              id="name"
              placeholder="Nhập tên sự kiện"
              v-model="eventUse.Title"
              style="width: 100%"
            />
            <!-- v-model="user.Name" -->
          </div>
          <!-- <div class="color-text font-italic mt-1" >
            Tên sự kiện sai định dạng
          </div> -->
          <div>
            <div class="font-14 font-size: font-weight-black mb-2 mt-5">
              <label v-if="mode == 2">Ngày diễn ra (Dương lịch)</label>
              <label v-if="mode == 1">Ngày diễn ra </label>
            </div>

            <div class="d-flex justify-space-between text-day-lunar">
              <div v-if="mode == 2">{{ eventUse.textDayLunar }}</div>
              <i v-if="mode == 2" class="fas fa-calendar-week mt-1 mr-2"></i>
              <!-- <div v-if="mode == 2">{{ eventUse.textDayLunar }}</div> -->

              <v-menu
                v-if="mode == 1"
                v-model="showPickker"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="textDayLunar"
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
                <!-- <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="event.textDayLunar"
                    persistent-hint
                    
                    append-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  >
                     </v-text-field
                  > 
                </template>-->
                <!-- v-model="event.DateEvent" -->
                <v-date-picker
                  v-model="dateEvent"
                  :header-date-format="getHeaderDateFormat"
                  no-title
                  @input="changeDateInsert()"
                ></v-date-picker>
              </v-menu>
            </div>
            <v-checkbox
              v-if="mode == 1"
              v-model="checkEventLuna"
              label="Sự kiện âm lịch"
              style="margin-top: 24px; margin-bottom: 8px"
            ></v-checkbox>
            <!-- v-model="user.Name" -->
          </div>
          <div
            class="d-flex font-13 mb-3 mt-5"
            style="justify-content: space-between"
          >
            <div>
              <span class="font-weight font-14">Ảnh bìa</span>
              <span>(375x300)</span>
            </div>
            <!-- <div style="color: #9e0c10" class="font-weight">
                      Thay ảnh
                    </div> -->
            <image-uploader
              :preview="true"
              :debug="1"
              :autoRotate="true"
              :maxWidth="750"
              :maxHeight="600"
              outputFormat="string"
              @input="setImage1"
            >
              <label
                for="fileInput"
                slot="upload-label"
                style="color: #9e0c10"
                class="font-weight cursor-pointer font-14"
              >
                Thay ảnh
              </label>
            </image-uploader>
          </div>
          <!-- {{event.CoverImage == ''}} -->
          <img
            id="img-detail-event"
            class="flex-1-1-auto"
            v-bind:src="
              eventUse.CoverImage == ''
                ? eventUse.CoverImageFake
                : eventUse.CoverImage
            "
            style="width: 100%; border-radius: 10px; height: 375px"
            alt=""
          />
        </div>
        <div class="align-center d-flex justify-space-between mt-4">
          <div class="font-14 font-weight-500 font-weight-bold">
            Các thông báo/lời chúc gửi KH
          </div>
          <button class="button-detail1 color-button-add" @click="opentNoti">
            Quản lý thông báo
          </button>
        </div>
        <div class="d-flex flex-column mt-3">
            <div v-if="mode == 1 || event.ContentPush == null || event.ContentPush.length == 0">
            <v-textarea
              outlined
              name="input-7-4"
              label="Nội dung thông báo"
              v-model="event.ContentPush"
            ></v-textarea>
          </div>
          <div v-if="mode != 1 && event.ContentPush.length > 0" class="oke-number1" :title="eventUse.ContentPush">
            {{ eventUse.ContentPush }}
          </div>
          <!-- <div v-for="item of listTitleEvent" :key="item">
            {{ item }}
          </div> -->
        </div>
      </div>
      <!-- bên phải -->
      <div style="width: 65%; padding: 16px">
        <div>
          <div class="font-14 font-size: font-weight-black mb-2 mt-3">
            <label for="name">Bài thơ - Danh ngôn - Phật giáo</label>
          </div>
          <tiptap-vuetify
            placeholder="Nhập nội dung"
            class="form-control text-area-right"
            rows="8"
            v-model="eventUse.Quote"
            :extensions="extensions2"
          ></tiptap-vuetify>
        </div>
        <div class="font-14 font-size: font-weight-black mb-2 mt-3">
          <label for="name">Nội dung sự kiện</label>
        </div>
        <tiptap-vuetify
          class="tip-tap-ok"
          v-model="eventUse.Content"
          :extensions="extensions"
        />
      </div>
    </div>
    <!-- <div style="height: 400px">
      <img :src="ele1" alt="" />
      <img :src="ele2" alt="" />
    </div> -->
  </div>
</template>

<script>
import {
  TiptapVuetify,
  Bold,
  Italic,
  Strike,
  Underline,
  Code,
  Paragraph,
  BulletList,
  OrderedList,
  ListItem,
  Link,
  Blockquote,
  HardBreak,
  HorizontalRule,
  History,
  Image,
} from "tiptap-vuetify";
import formatDate from "../common/commonFn";
import Quotes from "../models/const/quotes";
import $ from "jquery";
import ImageUploader from "vue-image-upload-resize";
import apiClient from "../services/APIClient";
export default {
  name: "DetailEvent",
  // specify TiptapVuetify component in "components"
  components: { TiptapVuetify, ImageUploader },
  props: {
    mode: Number,
    event: {
      Content: "",
      CoverImage: "",
      Quote: "",
      DateEvent: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      EventType: 1,
      Title: "",
      TypeRepeat: 0,
      TimePush: new Date(new Date().setHours(9, 0, 0)),
      ContentPush: "",
      dateEvent : "" 
    },
  },
  data: () => ({
    showPickker: false,
    extensions: [
      History,
      Image,
      Blockquote,
      Link,
      Underline,
      Strike,
      Italic,
      ListItem,
      BulletList,
      OrderedList,
      Bold,
      Code,
      HorizontalRule,
      Paragraph,
      HardBreak,
    ],
    textDayLunar: "",
    checkEventLuna: false,
    extensions2: [History, Blockquote, Underline, Italic, Bold, HardBreak],
    dayOfYear: 1,
    quotes: Quotes.Data,
    eventTypeData: [
      {
        text: "Không là sự kiện",
        value: 0,
      },
      {
        text: "Sự kiện lịch Âm",
        value: 1,
      },
      {
        text: "Sự kiện lịch Dương",
        value: 2,
      },
    ],
    listTitleEvent: [],
    repeatEventType: [
      {
        text: "Không lặp",
        value: 1,
      },
      {
        text: "Sự kiện hàng tháng",
        value: 2,
      },
      {
        text: "Sự kiện Hàng năm",
        value: 3,
      },
    ],
    eventUse: {
      Content: "",
      CoverImage: "",
      Quote: "",
      DateEvent: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      EventType: 1,
      Title: "",
      TypeRepeat: 0,
      TimePush: new Date(new Date().setHours(9, 0, 0)),
      ContentPush: "",
    },
    // ele1: "",
    // ele2: "",
  }),
  created: function () {
    this.initialize();
    // console.log(this.event);
    console.log(this.mode);
    // if (!this.mode == 2) {
    //   this.event.ContentPush = this.event.ContentPush.replaceAll('"', "");
    // }
    // if (this.mode == 1) {
    //   this.event = {
    //     Content: "",
    //     CoverImage: "",
    //     CoverImageFake: this.getRandomBase64Image(new Date()),
    //     Quote: this.getRandomQuote(new Date()),
    //     DateEvent: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
    //       .toISOString()
    //       .substr(0, 10),
    //     EventType: 2,
    //     Title: "",
    //     HasLayer: true,
    //   };
    // }

    //
    if (this.mode == 2) {
      this.eventUse = JSON.parse(JSON.stringify(this.event));
      this.eventUse.ContentPush = this.eventUse.ContentPush.replaceAll('"', "");
    }
    if (this.mode == 1) {
      this.eventUse.textDayLunar = "";
      this.eventUse = {
        Content: "",
        CoverImage: "",
        CoverImageFake: this.getRandomBase64Image(new Date()),
        Quote: this.getRandomQuote(new Date()),
        DateEvent: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10),
        EventType: 2,
        Title: "",
        HasLayer: true,
      };
    }
  },
  watch: {
    showPickker: function () {},
    event: function () {
      // console.log(this.eventUse);
    },
  },
  methods: {
    changeDateInsert() {
      this.showPickker = false;
      // console.log(this.eventUse.DateEvent);
      var a = new Date(this.dateEvent);
      this.textDayLunar = formatDate(a);
      this.eventUse.DateEvent = a.toISOString();
      this;
    },
    getHeaderDateFormat(isoDate) {
      var arrDate = isoDate.split("-");
      // console.log("getHeaderDateFormat: " + isoDate);
      var a = arrDate[1] ? `Tháng ${arrDate[1]} - ` : "";
      return `${a} ${arrDate[0]}`;
    },
    getImgUrl(pet) {
      var images = require.context("../assets/Cover/", false, /\.png$/);
      return images("./" + pet + ".png");
    },
    getRandomQuote: function (date) {
      var date = new Date(date);
      var start = new Date(date.getFullYear(), 0, 1);
      var diff = date - start;
      var oneDay = 1000 * 60 * 60 * 24;
      let dayOfYear = Math.floor(diff / oneDay);
      if (dayOfYear == 142) {
        return this.quotes[142 - 1].Content;
      }
      return this.quotes[dayOfYear % 142].Content;
    },
    getRandomBase64Image: function (date) {
      var date = new Date(date);
      var start = new Date(date.getFullYear(), 0, 1);
      var diff = date - start;
      var oneDay = 1000 * 60 * 60 * 24;
      let dayOfYear = Math.floor(diff / oneDay) % 146;
      return this.getImgUrl(`cover_${dayOfYear}`);
    },
    save() {
      if (
        !this.eventUse.Title ||
        !this.eventUse.Title.trim() ||
        !this.eventUse.textDayLunar ||
        !this.eventUse.textDayLunar.trim()
      ) {
        alert("Có trường dữ liệu chưa hợp lệ vui lòng kiểm tra");
        return;
      }
      const me = this;
      // const newDiv = document.createElement("div");
      const newDiv = $("<div></div>").html(this.event.Content);
      // newDiv.innerHTML = this.event.Content;
      let arrImg = newDiv.find("img");

      if (arrImg && arrImg.length > 0) {
        // arrImg.forEach((element) => console.log(element));
        arrImg.each(function (index, element) {
          // console.log(index + ": " + element);
          // console.log(element);
          // console.log(me.getBase64Image(element));
          // element.attr('src',111111);
          // me.ele1 = element.src;
          // me.ele2 = me.getBase64Image(element);
          element.src = me.getBase64Image(element);
        });
        this.eventUse.Content = newDiv.html();
      }

      this.eventUse.State = +this.mode;
      if (this.mode == 1) {
        var base64 = this.getBase64Image(
          document.getElementById("img-detail-event")
        );
        this.eventUse.CoverImage = base64;
        if (this.checkEventLuna) {
          this.eventUse.EventType = 1;
        } else {
          this.eventUse.EventType = 2;
        }
      }

      if (this.mode == 1 || !this.eventUse?.TimePush || this.eventUse.TimePush.length == 0){
        var tmp = new Date(this.eventUse.DateEvent)
        tmp.setHours(7);
        tmp.setMinutes(0);
        tmp.setSeconds(0);
        tmp.setMilliseconds(0);
        this.eventUse.TimePush = tmp;
      }

      this.event = JSON.parse(JSON.stringify(this.eventUse));
      apiClient.post(`event`, this.event).then((response) => {
        if (response.Data && response.Success) {
          if (this.mode == 1) {
            alert("Thêm dữ liệu thành công ");
            this.mode = 2;
            this.eventUse = response.Data[0];
          } else {
            alert("Cập nhật dữ liệu thành công ");
          }
        } else {
          alert("Cập nhật dữ liệu thất bại ");
        }
      });
    },
    getBase64Image(img) {
      // var canvas = document.createElement("canvas");
      // var ctx = canvas.getContext("2d");
      // canvas.width = img.width;
      // canvas.height = img.height;
      // var oc = document.createElement("canvas"),
      //   octx = oc.getContext("2d");

      // oc.width = 750;
      // oc.height = 600;
      // octx.drawImage(img, 0, 0, oc.width, oc.height);
      // octx.drawImage(oc, 0, 0, oc.width * 0.5, oc.height * 0.5);
      // ctx.drawImage(
      //   oc,
      //   0,
      //   0,
      //   oc.width * 0.5,
      //   oc.height * 0.5,
      //   0,
      //   0,
      //   canvas.width,
      //   canvas.height
      // );
      // Resize the image
      var canvas = document.createElement("canvas"),
        max_size = 1000,
        width = img.width,
        height = img.height;
      if (width > height) {
        if (width > max_size) {
          height *= max_size / width;
          width = max_size;
        }
      } else {
        if (height > max_size) {
          width *= max_size / height;
          height = max_size;
        }
      }
      canvas.width = 750;
      canvas.height = 600;
      canvas.getContext("2d").drawImage(img, 0, 0, width, height);
      var dataURL = canvas.toDataURL("image/png");
      return dataURL;
    },
    getBase64ImageV2(img) {
      var canvas = document.createElement("canvas");
      var ctx = canvas.getContext("2d");
      canvas.width = img.width;
      canvas.height = img.height;
      var oc = document.createElement("canvas"),
        octx = oc.getContext("2d");

      oc.width = 750;
      oc.height = 600;
      octx.drawImage(img, 0, 0, oc.width, oc.height);
      octx.drawImage(oc, 0, 0, oc.width * 0.5, oc.height * 0.5);
      ctx.drawImage(
        oc,
        0,
        0,
        oc.width * 0.5,
        oc.height * 0.5,
        0,
        0,
        canvas.width,
        canvas.height
      );
      // Resize the image

      var dataURL = canvas.toDataURL("image/png");
      return dataURL;
    },
    emitBack() {
      this.$emit("back-event", true);
    },
    opentNoti() {
      // this.window.location.href = window.location.origin + "/maps/google/"
      this.$router.push("/components/notifications/");
    },
    getday: function () {
      var date = new Date(this.event.DateEvent);
      var start = new Date(date.getFullYear(), 0, 0);
      var diff = date - start;
      var oneDay = 1000 * 60 * 60 * 24;
      this.dayOfYear = Math.floor(diff / oneDay);

      this.dayOfYear = this.dayOfYear === 157 ? 157 : this.dayOfYear % 157;
    },
    setImage1: function (file) {
      this.event.CoverImage = file;
      // this.hasImage = true;
      console.log(file);
      // this.image = file;
    },

    initialize() {},
  },
};
</script>
<style lang="scss" scoped>
.title-event {
  display: flex;
  padding: 6px 0px;
  font-size: 14px;
  border-bottom: thin solid #e0e0e0;
  box-shadow: rgb(0 0 0 / 4%) 0px 3px 6px, rgb(161 161 161 / 9%) 0px 0px 0px;
}
#fileInput {
  display: none;
}
.save-button {
  position: fixed;
  right: 0px;
  top: 50%;
  z-index: 1000;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.my-8 {
  margin-top: 4rem;
  margin-bottom: 4rem;
}
.text-insert {
  //   width: 352px;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  height: 40px;
}

// .v-input__prepend-outer {
//   position: absolute;
//   right: 0;
// }
// .v-input__slot::before {
//   display: none;
// }
.color-button-add {
  height: 32px;
  padding: 0px 10px;
  border: 1px solid #9e0c10;
  border-radius: 6px;
  color: #9e0c10;
}
</style>
<style lang="scss" >
.tip-tap-ok {
  .tiptap-vuetify-editor__content {
    height: 400px;
  }
  img {
    width: 100%;
  }
}
.oke-number1 {
  height: 40px;
  background: #f0f0f0;
  border-radius: 6px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  align-items: center;
  padding: 9px;
  font-size: 14px;
}
.v-input.v-input--is-readonly.theme--light.v-text-field.v-text-field--is-booted {
  height: 0px;
  margin: 0;
  padding-top: 0px;
}
</style>
<style lang="scss">
.text-day-lunar {
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  height: 40px;
  padding: 9px 10px;
  font-size: 15px;
  position: relative;
  i.v-icon.notranslate.v-icon--right.mdi.mdi-calendar.theme--light {
    position: absolute;
    right: -6px;
    top: -4px;
  }
  .v-input.v-input--is-label-active.v-input--is-dirty.v-input--is-readonly.theme--light.v-text-field.v-text-field--is-booted {
    position: relative;
  }
  .v-input__prepend-outer {
    position: absolute;
    right: 0;
  }
  .v-input__slot::before {
    display: none;
  }
  .v-input__slot::after {
    display: none;
  }
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
