<template>
  <div class="container-fluid">
    <div
      class="row"
      style="background-color: #4baafe; padding: 2em; color: white"
    >
      <div
        class="col-1 d-flex d-sm align-items-center justify-content-center"
      >
        <span @click="showDrawerCategory()"> x </span>
      </div>

      <div
        class="col-10 col-sm-9 d-flex align-items-center justify-content-center justify-content-sm-start"
      >
        <img
          class="ms-3 me-3"
          src="../assets/logo.png"
          style="width: 30px; height: 30px"
        />
        <span class="d-none d-sm-flex">Quản trị </span>
      </div>

      <div
        class="col-10 col-sm-9 d-none d-sm-flex align-items-center justify-content-sm-end"
      >
        <span> Admin </span>
      </div>

      <div
        class="col-1 d-flex d-sm-none align-items-center justify-content-center"
      >
        <span @click="showDrawerUser()"> X </span>
      </div>
    </div>
  </div>

  <a-drawer v-model:open="open_category" title="Danh mục" placement="left">
    <TheMenu></TheMenu>
  </a-drawer>

  <a-drawer v-model:open="open_user" title="User" placement="right">
    <p>User 1</p>
    <p>User 2</p>
    <p>User 3</p>
  </a-drawer>
</template>

<script>
import TheMenu from "../components/TheMenu.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: {
    TheMenu,
  },

  setup() {
    const open_category = ref(false);
    const open_user = ref(false);

    const showDrawerCategory = () => {
      open_category.value = true;
    };

    const showDrawerUser = () => {
      open_user.value = true;
    };

    return {
      open_user,
      open_category,
      showDrawerUser,
      showDrawerCategory,
    };
  },
});
</script>
