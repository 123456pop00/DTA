/* eslint-disable vue/attribute-hyphenation */
<template>
  <v-container
    id="event-view"
    fluid
    tag="section"
  >
    oke
    <view-intro
      heading="Event"
      link="components/event"
    />
    <lunar-calendar
      :first-day-of-week="parseInt(firstDayOfWeek)"
      :disable-days-before-today="disableDaysBeforeToday"
      :default-date="defaultDate"
      :show-lunar="true"
      :lang="dateLangValue"
      :date-lang="dateLangValue"
      :custom-cells="customCells"
      @change="onChange"
    />
  </v-container>
</template>

<script>
  import lunarCalendar from 'vue-lunar-calendar'
  import moment from 'moment'

  export default {
    name: 'EventView',
    components: { 'lunar-calendar': lunarCalendar },
    data () {
      const today = moment()
      return {
        firstDayOfWeek: 0,
        disableDaysBeforeToday: false,
        defaultDate: today,
        dateLangValue: 'vi',
        customCells: [{
          days: [this.formatDate(today.add(1, 'days')), this.formatDate(today.add(1, 'days'))],
          customCellClass: 'custom-cell',
          groupName: 'custom cell',
        }, {
          days: [this.formatDate(today.add(-3, 'days'))],
          customCellClass: 'custom-cell-2',
          groupName: 'custom cell 2',
        }],
      }
    },
    methods: {
      formatDate (date) {
        return date.format('YYYY-MM-DD')
      },
      onChange (solarDate, lunarDate, isLunarChecked) {
        this.solarDate = solarDate.format('YYYY-MM-DD')
        this.lunarDate = lunarDate.format('YYYY-MM-DD')
        this.isLunarChecked = isLunarChecked
        this.inputDate = this.solarDate
      },
    },
  }
</script>

<style>
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
.custom-cell .solar, .custom-cell-2 .solar {
  color: #ffffff;
}
</style>
