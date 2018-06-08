<template>
  <div class="wrapper">
    <page-header :page="page"/>
    <div class="body">
      <post-content :content="page.post_content"/> 
    </div>
  </div>
</template>

<script>
import PostContent from "../../post/PostContent";
import PageHeader from "../PageHeader";
export default {
  name: "front-page",
  props: ["page"],
  methods: {
    renderHeader() {
      const header = this.page.post_meta.filter(meta => {
        return meta.meta_key === "page_header";
      });

      if (header.length > 0) {
        return header[0].meta_value;
      }
    },
    renderHeaderImage() {
      const imageSrc = this.page.thumbnail
        ? this.page.thumbnail
        : require("assets/post_header_bg.png");
      return `backgroundImage: url('${imageSrc}');`;
    }
  },
  components: {
    PostContent,
    PageHeader
  }
};
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 5% 90% 5%;
}

.header {
  grid-column: 1 / 4;
  grid-row: 1;
  padding: 2rem;
}

.header-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;
}

.title {
  margin: 0;
  font-weight: 100;
  letter-spacing: 0.015em;
}

.body {
  grid-column: 2;
  position: relative;
  width: 100%;
  max-width: 800px;
  justify-self: center;
  margin: -4rem auto 0rem auto;
  z-index: 2;
}

.post-content {
  padding: 2rem;
  margin-top: 2rem;
  background-color: white;
}
</style>
