<template>
  <div>
    <p v-if="chip.fmyChipType === 'COLOR'">
      Kleurs: {{ chip.fmyChipLocalName }}
    </p>
    <p v-if="chip.fmyChipType === 'MOBILE MEMORY'">
      Totale opslagcapaciteit: {{ chip.fmyChipLocalName }}
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