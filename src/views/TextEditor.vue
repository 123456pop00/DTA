<template>
  <div>
    <h2 class="mb-3">
      The
      <code>placeholder</code> prop
    </h2>
    <v-btn
      href="#"
      color="orange"
      @click="onUpdate"
    > get result
    </v-btn>
    <tiptap-vuetify v-model="content" :extensions="extensions" placeholder="Write something …"
      output-format="html"
      @update="onUpdate"
    />
    <div class="tiptap-vuetify-editor__content" v-html="content"/>
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
  } from 'tiptap-vuetify'

  export default {
    name: 'TextEditorView',
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
      content: '',
    }),
    methods: {
      onUpdate () {
        console.log(this.content)
      },
    },
  }
</script>
