<template>User</template>

<script>
import { useMenu } from "../../../store/use-menu.js";
export default {
  setup() {
    useMenu().onSelectedKeys(["admin-users"]);
  },
};
</script>