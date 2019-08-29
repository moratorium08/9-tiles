<template>
  <button v-bind:class="tileType" type="button" v-on:click="onClick">{{color}}</button>
</template>

<script>
export default {
  props: ['color', 'posX', 'posY'],
  computed: {
    tileType() {
      return `${this.color}Tile`;
    },
  },
  methods: {
    onClick() {
      console.log('tile');
      this.$emit('onFlip', this.posX, this.posY);
    },
  },
};
</script>
