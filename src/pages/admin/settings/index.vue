<template>
  Cài đặt
</template>
<script>
import { useMenu } from "../../../store/use-menu.js";
export default {
  setup() {
    useMenu().onOpenKeys(["admin-settings"]);
  },
};
</script>