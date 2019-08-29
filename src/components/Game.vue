<template>
  <div class="container">
    <h3>お題</h3>
    <answer v-bind:answer="answer" />
    <p>上の絵のようにタイルをひっくり返したり並び替えてね。</p>
    <p>ヒント：クリックするとひっくり返るよ</p>
    <p>ヒント2：ドラッグすると位置が変わるよ</p>
    <p v-bind:class="nextButtonClass">正解だよ〜すごいね。next problem ボタンを押すと次の問題が出題されるよ</p>
    <board v-bind:board="board" @onFlip="onFlip" />
    <div>
      <button v-on:click="onAnswer">Answer</button>
    </div>
    <div>
      <button v-bind:class="nextButtonClass" v-on:click="onNext">next problem</button>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
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

function generateBoard() {
  return [
    [
      { head: 'Pink', tail: 'Yellow', state: 'Head' },
      { head: 'Orange', tail: 'Yellow', state: 'Head' },
      { head: 'Orange', tail: 'Pink', state: 'Head' },
    ],
    [
      { head: 'Pink', tail: 'Green', state: 'Head' },
      { head: 'Yellow', tail: 'Blue', state: 'Head' },
      { head: 'Orange', tail: 'Brown', state: 'Head' },
    ],
    [
      { head: 'Green', tail: 'Blue', state: 'Head' },
      { head: 'Brown', tail: 'Blue', state: 'Head' },
      { head: 'Brown', tail: 'Green', state: 'Head' },
    ],
  ];
}
// [lb, ub)
function randRange(lb, ub) {
  return lb + Math.floor((ub - lb) * Math.random());
}

function checkMap(map) {
  const m = new Map();
  for (const row of map) {
    for (const elem of row) {
      if (m.has(elem)) {
        m.set(elem, m.get(elem) + 1);
      } else {
        m.set(elem, 1);
      }
      if (m.get(elem) >= 3) {
        return false;
      }
    }
  }
  return true;
}
function generateMap() {
  while (true) {
    const l = [];
    for (const i of Array(9).keys()) {
      l.push({ x: i % 3, y: Math.floor(i / 3) });
    }

    _.shuffle(l);

    const base = generateBoard();
    const result = [];
    for (const i of Array(3).keys()) {
      const row = [];
      for (const j of Array(3).keys()) {
        const { x, y } = l[(i * 3) + j];
        const tile = base[x][y];
        const coin = randRange(0, 2);
        if (coin === 0) {
          row.push(tile.tail);
        } else {
          row.push(tile.head);
        }
      }
      result.push(row);
    }
    if (checkMap(result)) {
      return result;
    }
  }
}

export default {
  components: {
    board: Board,
    answer: Answer,
  },
  data() {
    return {
      board: generateBoard(),
      answer: generateMap(),
      state: 'Answering',
    };
  },
  computed: {
    nextButtonClass() {
      if (this.state === 'Answering') {
        return 'next-btn-disapper';
      }
      return 'next-btn-appear';
    },
  },
  methods: {
    onAnswer() {
      if (this.check()) {
        this.state = 'Waiting';
      } else {
        alert('できてないよ');
      }
    },
    onFlip(i, j) {
      // きれいに書きたいんだがJavaScriptがわからん
      this.board[i][j].state = flip(this.board[i][j]);
    },
    onNext() {
      this.answer = generateMap();
      this.state = 'Answering';
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

<style>
.container {
  padding: 2rem 1rem 0 1rem;
}
.next-btn-disapper {
  display: none;
}
</style>
