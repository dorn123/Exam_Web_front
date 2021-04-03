<template>
  <div>
    <div>
      <b-navbar type="dark" variant="dark">
        <b-navbar-nav>
          <b-nav-item href="#">Home</b-nav-item>

          <!-- Navbar dropdowns -->

          <b-nav-item-dropdown text="User" right>
            <b-dropdown-item href="#">Test faceid</b-dropdown-item>
            <b-dropdown-item href="#">upload photo</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-navbar>
    </div>
    <div>upload your photo for faceid</div>
    <div class="text-center">
      <input
        class="file-input"
        type="file"
        ref="files"
        accept="image/*"
        @change="uploadImageFile()"
        multiple
        required
      />

      <!-- <b-button @click="clearFiles" class="mr-2">Reset via method</b-button>
    <b-button @click="file = null">Reset via v-model</b-button> -->

      <b-button v-show="image_count >= 12">Button</b-button>
      <p class="mt-2">Selected file:</p>
      <ul>
        <li v-for="(name, index) in image_name" :key="index">
          {{ name }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      file: null,
      image_file: null,
      image_name: [],
      image_count: 0
    };
  },
  methods: {
    clearFiles() {
      this.$refs["file-input"].reset();
    },
    uploadImageFile() {
      const file = this.$refs.files.files;
      this.image_file = file;
      for (var i = 0; i < file.length; i++) {
        this.image_name.push(file[i].name);
      }
      this.image_count = this.image_file.length;
    },
    showLog() {
      console.log(this.image_file.length);
    },
  },
};
</script>
<style scoped>
</style>