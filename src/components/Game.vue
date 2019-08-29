<template>
  <div>
    <answer v-bind:answer="answer" />
    <board v-bind:board="board" @onFlip="onFlip" />
    <button v-on:click="onAnswer">Answer</button>
  </div>
</template>

<script>
import Board from './Board';
import Answer from './Answer';

function flip(x) {
  if (x.state === 'Head') {
    return 'Tail';
  }
  return 'Head';
}
function color(tile) {
  if (tile.state === 'Head') {
    return tile.head;
  }
  return tile.tail;
}

export default {
  components: {
    board: Board,
    answer: Answer,
  },
  data() {
    return {
      board: [
        [
          { head: 'Orange', tail: 'Brown', state: 'Head' },
          { head: 'Orange', tail: 'Pink', state: 'Head' },
          { head: 'Orange', tail: 'Yellow', state: 'Head' },
        ],
        [
          { head: 'Pink', tail: 'Yellow', state: 'Head' },
          { head: 'Pink', tail: 'Blue', state: 'Head' },
          { head: 'Pink', tail: 'Green', state: 'Head' },
        ],
        [
          { head: 'Brown', tail: 'Green', state: 'Head' },
          { head: 'Brown', tail: 'Blue', state: 'Head' },
          { head: 'Green', tail: 'Blue', state: 'Head' },
        ],
      ],
      answer: Answer.generateMap(),
    };
  },
  methods: {
    onAnswer() {
      if (this.check()) {
        alert('正解！');
      } else {
        alert('できてないよ');
      }
    },
    onFlip(i, j) {
      // きれいに書きたいんだがJavaScriptがわからん
      this.board[i][j].state = flip(this.board[i][j]);
    },
    check() {
      let flag = true;
      this.board.forEach((row, i) => {
        // check all rows have 3 elems.
        if (row.length !== 3) {
          flag = false;
        }
        // check ans and each item
        row.forEach((e, j) => {
          if (this.answer[i][j] !== color(e)) {
            flag = false;
          }
        });
      });
      return flag;
    },
  },
};
</script>
