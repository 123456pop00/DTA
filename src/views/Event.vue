<template>
  <div id="event-view">
    <div class="title-event">
      <div class="mr-4">Chi tiết ngày</div>
      <div>Danh sách các sự kiện</div>
    </div>
    <div class="container-event d-flex">
      <div class="col-4">
        <v-select :items="items" v-model="select"></v-select>
        
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
        <div class="d-flex flex-column title-menuright" style="height: 100%">
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
                    style="width: 100%; border-radius: 10px"
                    alt=""
                  />
                </div>
                <div class="col-6 pl-3 flex-col">
                  <div class="font-13 font-weight mb-2 flex-column">
                    Bài thơ - Danh ngôn - Phật giáo
                  </div>
                  <div style="width: 100%" class="flex-1-0-auto">
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
                <button class="btn-save" style="width: 150px">
                  Tạo sự kiện
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import lunarCalendar from "vue-lunar-calendar";
import moment from "moment";
import ImageUploader from "vue-image-upload-resize";
import $ from "jquery";
//  defaultDate: today,
export default {
  name: "EventView",
  components: { "lunar-calendar": lunarCalendar, ImageUploader },
  data() {
    const today = moment();
    return {
      firstDayOfWeek: 1,
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
    };
  },
  methods: {
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
  padding: 13px 0px;
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
.d-flex {
  display: flex;
}
.text-day-solar {
  font-size: 21px;
  font-weight: 600;
}
.font-weight {
  font-weight: 600;
}
.font-16 {
  font-size: 16px;
}
.font-13 {
  font-size: 13px;
}
.custom-1 {
  border: thin solid #c5cbd0;
  padding: 14px;
  border-radius: 10px;
}
.col,
.col-1,
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7,
.col-8,
.col-9,
.col-10,
.col-11,
.col-12,
.col-auto,
.col-lg,
.col-lg-1,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-lg-auto,
.col-md,
.col-md-1,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-md-10,
.col-md-11,
.col-md-12,
.col-md-auto,
.col-sm,
.col-sm-1,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-sm-auto,
.col-xl,
.col-xl-1,
.col-xl-2,
.col-xl-3,
.col-xl-4,
.col-xl-5,
.col-xl-6,
.col-xl-7,
.col-xl-8,
.col-xl-9,
.col-xl-10,
.col-xl-11,
.col-xl-12,
.col-xl-auto {
  padding: 0;
}
.font-18 {
  font-size: 18px;
}
.font-20 {
  font-size: 20px;
}
.flex-col {
  display: flex;
  flex-flow: column;
}
.text-area-right {
  width: 100%;
  border: thin solid #ced3d8;
  height: 100%;
  border-radius: 13px;
  padding: 10px;
}
.btn-save {
  padding: 7px 29px;
  background-color: #9e0c10;
  color: #fff;
  font-size: 13px;
  border-radius: 5px;
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
.my-8 {
  margin-top: 4rem;
  margin-bottom: 4rem;
}
.img-preview {
  display: none;
}
</style>