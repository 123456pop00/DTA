<template>
  <div>
    <h2 class="mb-3">The</h2>
    <v-btn href="#" color="orange"> get result </v-btn>
    <!-- <input type="text" id="abc"> -->
    <tiptap-vuetify v-model="content" :extensions="extensions" />
    <div class="tiptap-vuetify-editor__content" v-html="content" ></div>
    <button  v-on:click="sendData12"> Send Data</button>
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
import axios from "axios";
export default {
  name: "TextEditorView",
  // specify TiptapVuetify component in "components"
  components: { TiptapVuetify },
  data: () => ({
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
    content: "",
  }),
  methods: {
    sendData12: function (event) {
      console.log("senddata");
      // axios
      //   .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      //   .then((response) => console.log(response));
      // thay thanh post va truyen this content vào
    },
    onUpdate() {
      console.log(this.content);
    },
  },
};
</script>
