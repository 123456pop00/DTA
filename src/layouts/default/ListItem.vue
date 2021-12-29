<template>
  <v-list-item
    :href="item.href"
    :rel="item.href ? 'nofollow' : undefined"
    :target="item.href ? '_blank' : undefined"
    :to="item.to"
    active-class="primary white--text"
    link
    class="py-1"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <v-list-item-icon
      v-if="!item.icon"
      class="
        text-caption text-uppercase
        justify-center
        ml-1
        my-2
        align-self-center
      "
    >
      {{ title }}
    </v-list-item-icon>

    <v-list-item-avatar v-if="item.avatar">
      <v-img :src="item.avatar" />
    </v-list-item-avatar>

    <v-list-item-icon v-if="item.icon" class="my-2 align-self-center">
      <!-- <v-icon v-if="item.icon == '1'" v-text="item.icon" /> -->
      <v-img
        class="list-itemicon"
        v-if="item.icon == '1'"
        style="height: 31px; padding-top: 7px; width: 40px"
        :src="require('@/assets/icon5.svg')"
      />
      <v-img
        class="list-itemicon1"
        v-if="item.icon == '2'"
        style="height: 24px; padding-top: 7px; width: 35px"
        :src="require('@/assets/icon3.svg')"
      /><v-img
        class="list-itemicon1"
        v-if="item.icon == '3'"
        style="height: 24px; padding-top: 7px; width: 35px"
        :src="require('@/assets/icon4.svg')"
      />
      <!-- <v-icon v-text="item.icon" />
      <v-icon v-text="item.icon" /> -->
    </v-list-item-icon>

    <v-list-item-content v-if="item.title">
      <v-list-item-title v-text="item.title" />
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: "DefaultListItem",

  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },

  computed: {
    title() {
      const matches = this.item.title.match(/\b(\w)/g);

      return matches.join("");
    },
  },
};
</script>
<style lang="scss">
.v-application--is-ltr .v-list-item__action:first-child,
.v-application--is-ltr .v-list-item__icon:first-child {
  margin-right: 13px;
}
.list-itemicon {
  .v-image__image.v-image__image--cover {
    background-size: cover;
  }
}
.list-itemicon1 {
  .v-image__image.v-image__image--cover {
    background-size: contain;
  }
}
.v-application .primary {
  background-color: #ffffff !important;
  color: #9e0c10 !important;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 16%);
  font-weight: 500;
  // filter: invert(9%) sepia(90%) saturate(7292%) hue-rotate(355deg) brightness(69%) contrast(94%) !important;
}
.default-color {
  filter: invert(34%) sepia(0%) saturate(0%) hue-rotate(68deg) brightness(93%)
    contrast(87%);
}
.v-list-item--active {
  .v-image.v-responsive.list-itemicon1.theme--light {
    filter: invert(14%) sepia(91%) saturate(4321%) hue-rotate(351deg)
      brightness(66%) contrast(101%);
  }
  .v-image__image.v-image__image--cover{
    filter: invert(14%) sepia(91%) saturate(4321%) hue-rotate(
351deg) brightness(66%) contrast(101%);
  }
}
</style>