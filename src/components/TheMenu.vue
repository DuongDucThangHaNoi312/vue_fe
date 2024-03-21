<template>
  <a-menu
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    mode="inline"
  >
    <a-menu-item key="admin-users">
      <router-link :to="{ name: 'admin-users' }"> Tài khoản </router-link>
    </a-menu-item>

    <a-menu-item key="admin-roles">
      <router-link :to="{ name: 'admin-roles' }"> Vai trò </router-link>
    </a-menu-item>

    <a-menu-item key="admin-settings">
      <router-link :to="{ name: 'admin-settings' }"> Cài đặt </router-link>
    </a-menu-item>
  </a-menu>
</template>

<script >
import { defineComponent, ref } from "vue";
import { storeToRefs } from "pinia";
import { useMenu } from "../store/use-menu.js";

export default defineComponent({
  setup() {
    const store = useMenu();

    return {
      ...storeToRefs(store),
    };
  },
});
</script>
