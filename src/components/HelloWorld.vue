<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>{{ name }}</div>
    <div>{{ num }}</div>
    <div>{{ cNumber }}</div>
    <div>{{ number }}</div>
    <button @click="add">+1</button>
    <button @click="reduce">+2</button>
  </div>
</template>

<script>
// import store from '@/store/index'
import { mapGetters } from 'vuex'
import { mapState } from 'vuex';
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      name: 'wq'
    }
  },
  computed: {
    num() {
      return this.$store.state.number;
    },
    ...mapState(['number']),
   ...mapGetters(['cNumber']),
  },
  methods: {
    add() {
      //  this.$store.commit({ type: 'setNumber', num: 1 })
       this.$store.commit('setNumber', {num: 1})
    },
     reduce() {
      this.$store.dispatch({
          type: 'reduceAsync',
          num: 2
      })
    }
  }
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
