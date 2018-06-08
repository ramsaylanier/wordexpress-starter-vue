<template>
  <div v-if="post.id">
    <div class="post-header" :style="renderHeaderImage()">
      <div class="wrapper">
        <h2 class="post-title">{{post.post_title}}</h2>

        <div class="post-meta">
          <p> Written {{$formatDate(post.post_date)}} 
            <span v-if="post.author">
              by <router-link class="post-link" :to="{name: 'Author', params: {name: post.author.user_nicename}}">{{post.author.display_name}}</router-link>  
            </span>
          </p>
        </div>
      </div>
    </div>

    <post-content :content="post.post_content"/>
  </div>
</template>

<script>
import PostContent from "./PostContent";

export default {
  name: "post-single",
  props: ["post"],
  methods: {
    renderHeaderImage() {
      const imageSrc = this.post.thumbnail
        ? this.$getThumbnail(this.post.thumbnail, "large")
        : require("assets/post_header_bg.png");
      return `backgroundImage: url('${imageSrc}');`;
    }
  },
  components: {
    PostContent
  }
};
</script>

<style scoped lang="scss">
@import "../../styles/colors.scss";
.post-header {
  height: 300px;
  width: 100%;
  background-size: cover;
  background-color: var(--primary-color);
}

.wrapper {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.post-title {
  margin: 0;
  font-size: 4rem;
}

.post-meta {
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: white;
  padding: 0.5rem 1rem;

  p {
    margin: 0;
    // color: white;
  }

  a {
    color: $primary-color;
  }
}

.post-content {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  background-color: white;
  border-top: 3px solid $dark-color;
}
</style>
