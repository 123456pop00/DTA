<template>
  <div id="event-view">
    <div class="title-event">
      <div
        class="mr-4 cursor-pointer position-relative"
        style="padding: 6px 0px"
        :class="{ 'color-text': tabActive == 1 }"
        @click="tabActive = 1"
      >
        Chi tiết ngày
        <hr class="hr-active-left" v-if="tabActive == 1" />
      </div>
      <div
        class="cursor-pointer position-relative ml-4"
        style="padding: 6px 0px"
        :class="{ 'color-text': tabActive == 2 }"
        @click="tabActive = 2"
      >
        Danh sách các sự kiện
        <hr class="hr-active-right" v-if="tabActive == 2" />
      </div>
    </div>
    <div class="container-event d-flex">
      <div class="col-4">
        <!-- <v-select :items="items" v-model="select"></v-select> -->
        <div style="height: 72px"></div>
        <lunar-calendar
          :first-day-of-week="parseInt(firstDayOfWeek)"
          :disable-days-before-today="disableDaysBeforeToday"
          :default-date="defaultDate"
          :showLunarButton="false"
          :show-lunar="true"
          :lang="dateLangValue"
          :date-lang="dateLangValue"
          :custom-cells="customCells"
          @change="onChange"
        />
      </div>
      <div class="col-8">
        <div
          class="d-flex flex-column title-menuright"
          style="height: 100%"
          v-if="tabActive == 1"
        >
          <div class="d-flex" style="justify-content: space-between">
            <div>
              <div class="text-day-solar">
                <span>{{ dayName }}</span
                >, <span>{{ solarDateConvert }}</span>
              </div>
              <div style="font-size: 13px">ÂL: {{ lunarDateConvert }}</div>
            </div>
            <div>
              <!-- <button>Lưu</button> -->
              <button type="button" class="btn btn-danger btn-save">Lưu</button>
            </div>
          </div>
          <div class="mt-4 flex-1-1-auto">
            <div class="custom-1 d-flex flex-column" style="height: 55%">
              <div class="font-weight font-18 mb-2">Chi tiết ngày</div>
              <div class="d-flex flex-1-1-auto">
                <div
                  class="col-6 d-flex flex-column pr-3"
                  style="height: calc(100% - 35px)"
                >
                  <div
                    class="d-flex font-13 mb-2"
                    style="justify-content: space-between"
                  >
                    <div>
                      <span class="font-weight font-13">Ảnh bìa</span>
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
                      @input="setImage"
                    >
                      <label
                        for="fileInput"
                        slot="upload-label"
                        style="color: #9e0c10"
                        class="font-weight cursor-pointer"
                      >
                        Thay ảnh
                      </label>
                    </image-uploader>
                  </div>
                  <!-- {{event.CoverImage == ''}} -->
                  <img
                    class="flex-1-1-auto"
                    v-bind:src="
                      event.CoverImage == ''
                        ? 'https://dongnaiart.edu.vn/wp-content/uploads/meo_chup_anh_dep_1-1.jpg'
                        : event.CoverImage
                    "
                    style="
                      width: 100%;
                      border-radius: 10px;
                      height: calc(100% - 20px);
                    "
                    alt=""
                  />
                </div>
                <div
                  class="col-6 pl-3 flex-col"
                  style="height: calc(100% - 35px)"
                >
                  <div class="font-13 font-weight mb-2 flex-column">
                    Bài thơ - Danh ngôn - Phật giáo
                  </div>
                  <div
                    style="width: 100%; height: calc(100% - 20px)"
                    class="flex-1-0-auto"
                  >
                    <textarea
                      placeholder="Nhập nội dung"
                      class="form-control text-area-right"
                      rows="3"
                      v-model="event.Quote"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div class="custom-2 d-flex flex-column mt-4">
              <div class="font-20 font-weight-black mb-3">
                Sự kiện trong ngày
              </div>
              <div class="align-center d-flex flex-column justify-center">
                <div class="fit-content mb-4">Chưa có ảnh</div>
                <div class="fit-content mb-4">Không có sự kiện trong ngày</div>
                <button
                  class="btn-save"
                  style="width: 150px"
                  @click="showDialogEvent = true"
                >
                  Tạo sự kiện
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="d-flex flex-column title-menuright"
          style="height: 100%"
          v-if="tabActive == 2"
        >
          <div class="d-flex" style="justify-content: space-between">
            <div class="text-day-solar">Danh sách sự kiện</div>
            <div>
              <!-- <button>Lưu</button> -->
              <button
                type="button"
                class="btn btn-danger btn-save"
                @click="showDialogEvent = true"
              >
                Tạo sự kiện
              </button>
            </div>
          </div>
          <div class="custom-1 flex-1-1-auto mt-4"></div>
        </div>
      </div>
    </div>
    <v-dialog v-model="showDialogEvent" max-width="800px" persistent>
      <v-card>
        <!-- <v-card-title>
          <span class="text-h6">{{ formTitle }}</span>
        </v-card-title> -->
        <v-card-title class="text-h5"> {{ formTitle }} </v-card-title>
        <v-card-text>
          <div class="flex-column d-flex">
            <div class="d-flex flex-1-1-auto">
              <div class="col-6 d-flex flex-column pr-3">
                <div
                  class="d-flex font-13 mb-2"
                  style="justify-content: space-between"
                >
                  <div>
                    <span class="font-weight font-13">Ảnh bìa</span>
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
                    @input="setImage"
                  >
                    <label
                      for="fileInput"
                      slot="upload-label"
                      style="color: #9e0c10"
                      class="font-weight cursor-pointer"
                    >
                      Tải ảnh lên
                    </label>
                  </image-uploader>
                </div>
                <!-- {{event.CoverImage == ''}} -->
                <img
                  class="flex-1-1-auto"
                  v-bind:src="
                    event.CoverImage == ''
                      ? 'https://dongnaiart.edu.vn/wp-content/uploads/meo_chup_anh_dep_1-1.jpg'
                      : event.CoverImage
                  "
                  style="
                    width: 100%;
                    border-radius: 10px;
                    height: calc(100% - 20px);
                  "
                  alt=""
                />
              </div>
              <div class="col-6 pl-3 flex-col">
                <div class="font-13 font-weight mb-2 flex-column">
                  <div class="font-14 font-weight-black mb-2">
                    <label for="nameEvent">Tên sự kiện </label>
                  </div>
                  <input
                    class="text-insert text-input"
                    type="text"
                    placeholder="Nhập tên sự kiện"
                    id="nameEvent"
                    v-model="event.Title"
                  />
                </div>
                <div>
                  <div>Lặp lại</div>
                  <v-radio-group v-model="event.EventType">
                    <v-radio label="Không lặp lại" :value="1"></v-radio
                    ><v-radio label="Hàng tháng" :value="2"></v-radio
                    ><v-radio label="Hàng năm" :value="3"></v-radio
                    ><v-radio label="Hàng tuần" :value="4"></v-radio
                    ><v-radio label="Hàng ngày" :value="5"></v-radio>
                  </v-radio-group>
                </div>
              </div>
            </div>
            <hr class="mb-3" />
            <div class="font-weight mb-3">Nội dung sự kiện</div>
            <div>
              <tiptap-vuetify
                v-model="event.Content"
                :extensions="extensions"
              />
            </div>
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
            <!-- @click="close" -->
            Hủy
          </button>
          <!-- @click="save" -->
          <button class="button-noti backgroud-button">Lưu</button>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
import lunarCalendar from "vue-lunar-calendar";
import moment from "moment";
import ImageUploader from "vue-image-upload-resize";
import $ from "jquery";

//  defaultDate: today,
export default {
  name: "EventView",
  components: { "lunar-calendar": lunarCalendar, ImageUploader, TiptapVuetify },
  data() {
    const today = moment();
    return {
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
        Link,
        Code,
        HorizontalRule,
        Paragraph,
        HardBreak,
      ],
      firstDayOfWeek: 1,
      tabActive: 1,
      disableDaysBeforeToday: false,
      defaultDate: today.format("YYYY-MM-DD"),
      dateLangValue: "vi",
      customCells: [
        {
          days: [
            this.formatDate(today.add(1, "days")),
            this.formatDate(today.add(1, "days")),
          ],
          customCellClass: "111",
          groupName: "111",
        },
        {
          days: [this.formatDate(today.add(-3, "days"))],
          customCellClass: "2222",
          groupName: "22222",
        },
      ],
      items: ["2021", "2022"],
      select: "2021",
      event: {
        Content: "",
        CoverImage: "",
        Quote: "",
        DateEvent: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10),
        EventType: 1,
        Title: "",
      },
      solarDateConvert: today.format("DD/MM/YYYY"),
      solarDate: today,
      lunarDate: today,
      lunarDateConvert: "",
      dayName: "",
      editedIndex: -1,
      showDialogEvent: false,
    };
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Tạo mới sự kiện" : "Sửa sự kiện";
    },
  },
  methods: {
    close() {
      this.showDialogEvent = false;
      this.$nextTick(() => {
        // this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    formatDate(date) {
      return date.format("YYYY-MM-DD");
    },
    onChange(solarDate, lunarDate, isLunarChecked) {
      this.solarDate = solarDate._d;
      this.event.DateEvent = this.solarDate.toISOString();
      this.lunarDate = lunarDate;
      this.solarDateConvert = solarDate.format("DD/MM/YYYY");
      this.lunarDateConvert = lunarDate.format("DD/MM/YYYY");
      this.isLunarChecked = isLunarChecked;
      this.inputDate = this.solarDate;
    },
    customLumna() {
      // $(".calendar-month").html("Hello <b>world</b>!");
      console.log(moment.localeData().firstDayOfWeek());
    },
    setImage: function (file) {
      this.event.CoverImage = file;
      // this.hasImage = true;
      console.log(file);
      // this.image = file;
    },
    convertDayDisplay(current_day) {
      var day_name = "";

      // Lấy tên thứ của ngày hiện tại
      switch (current_day) {
        case 0:
          day_name = "Chủ nhật";
          break;
        case 1:
          day_name = "Thứ hai";
          break;
        case 2:
          day_name = "Thứ ba";
          break;
        case 3:
          day_name = "Thứ tư";
          break;
        case 4:
          day_name = "Thứ năm";
          break;
        case 5:
          day_name = "Thứ sau";
          break;
        case 6:
          day_name = "Thứ bảy";
      }
      this.dayName = day_name;
    },
  },
  mounted() {
    this.customLumna();
  },
  created() {
    console.log(this.defaultDate);
    this.convertDayDisplay(new Date().getDay());
  },
};
</script>

<style lang="scss" scoped>
.title-menuright {
  padding: 0px 16px;
}
.title-event {
  display: flex;
  justify-content: center;
  padding: 6px 0px;
  font-size: 14px;
  border-bottom: thin solid #e0e0e0;
  box-shadow: rgb(0 0 0 / 4%) 0px 3px 6px, rgb(161 161 161 / 9%) 0px 0px 0px;
}
// ::v-deep .calendar-month{
//     color: red !important;
// }
.custom-cell {
  background: mediumturquoise;
}
.custom-cell-2 {
  background: purple;
}
/*
custom user color
*/
.custom-seleted-cell {
  background: #222944;
}
.custom-cell .solar,
.custom-cell-2 .solar {
  color: #ffffff;
}

.text-day-solar {
  font-size: 21px;
  font-weight: 600;
}
.font-weight {
  font-weight: 600;
}

.custom-1 {
  border: thin solid #c5cbd0;
  padding: 14px;
  border-radius: 10px;
}

.container-event {
  overflow-y: hidden;
  height: 100%;
  height: calc(100vh - 110px);
}
.custom-2 {
  height: 42%;
  border: thin solid #c5cbd0;
  padding: 14px;
  border-radius: 10px;
}
.fit-content {
  width: fit-content;
}
.cursor-pointer {
  cursor: pointer;
}
</style>
<style lang="scss">
#fileInput {
  display: none;
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

.img-preview {
  display: none;
}

.hr-active-left {
  left: -17px;
  bottom: -7px;
  position: absolute;
  width: 111px;
  height: 4px;
  background: #9e0c10;
  border-radius: 12px;
}
.hr-active-right {
  width: 178px;
  left: -16px;
  bottom: -7px;
  position: absolute;
  background: #9e0c10;
  border-radius: 12px;
  height: 4px;
}
.text-insert {
  width: 352px;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  height: 40px;
}
// .v-card__title  {
//   padding: 0 !important;
// }
// .text-h6 {
//   padding-top: 16px;
//   padding-left: 20px;
// }
.v-input.v-input--is-label-active.v-input--is-dirty.theme--light.v-input--selection-controls.v-input--radio-group.v-input--radio-group--column {
  margin-top: 5px;
}
label.v-label.theme--light {
  font-size: 14px;
  color: #595959;
}
.v-btn--fab.v-size--default .v-icon,
.v-btn--fab.v-size--small .v-icon,
.v-btn--icon.v-size--default .v-icon,
.v-btn--icon.v-size--small .v-icon {
  height: 15px;
  font-size: 17px;
  width: 8px;
}
.v-dialog > .v-card > .v-card__actions {
  padding: 8px 23px;
}
.tiptap-vuetify-editor__content {
  height: 170px;
}
</style>