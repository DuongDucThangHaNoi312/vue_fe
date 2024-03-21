<template>
  Vai trò
</template>
<script>
import { useMenu } from '../../../store/use-menu.js';
export default {
  setup() {
    const store = useMenu();
    store.onOpenKeys(["admin-roles"]);
  },
};
</script>