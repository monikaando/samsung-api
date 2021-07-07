<template>
  <div>
    <p v-if="chip.fmyChipType === 'COLOR'">
      Colors: {{ chip.fmyChipLocalName }}
    </p>
    <p v-if="chip.fmyChipType === 'MOBILE MEMORY'">
      Memory: {{ chip.fmyChipLocalName }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Chip",
  props: ["chip"],
};
</script>

<style>
</style>