<template>
  <font-awesome-icon
    v-show="listOpen == false"
    icon="bars"
    class="burger-menu"
    @click="openList"
  />
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Toggler",
  computed: {
    ...mapGetters(["listOpen"]),
  },
  methods: {
    ...mapActions({
      openList: "openList",
    }),
  },
};
</script>

<style scoped>
.burger-menu {
  margin: 1rem 0 0 1rem;
}
</style>