<template>
  <a v-if="type === 'custom'" class="link" :href="url">{{link.post_title}}</a>
  <router-link v-else class="link" :to="`/${link.post_name}`">{{link.post_title}}</router-link>
</template>

<script>
export default {
  name: "menu-link",
  props: ["link"],
  data() {
    return {
      type: "",
      url: "",
      to: ""
    };
  },
  mounted() {
    this.parseLink();
  },
  methods: {
    parseLink() {
      this.link.post_meta.forEach(meta => {
        switch (meta.meta_key) {
          case "_menu_item_type":
            this.type = meta.meta_value;
            break;
          case "_menu_item_url":
            this.url = meta.meta_value;
            break;
        }
      });
    }
  }
};
</script>
