<template>
  <div class="board">
    <div v-for="(row, index) in board" :key="index" class="board-row" style="float: left;">
      <draggable :list="row" group="board">
        <div class="list-group-item" v-for="(tile, index2) in row" :key="index2">
          <tile
            v-bind:color="color(tile)"
            v-bind:posX="index"
            v-bind:posY="index2"
            @onFlip="onFlip"
          />
        </div>
      </draggable>
    </div>
    <div style="clear: both"></div>
  </div>
</template>

<script>

import draggable from 'vuedraggable';
import Tile from './Tile';

export default {
  components: {
    tile: Tile,
    draggable,
  },
  props: ['board'],
  methods: {
    color(tile) {
      if (tile.state === 'Head') {
        return tile.head;
      }
      return tile.tail;
    },
    onFlip(i, j) {
      this.$emit('onFlip', i, j);
    },
  },
};
</script>

<style>
.board {
  display: inline-block;
}
</style>
