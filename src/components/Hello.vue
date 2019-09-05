<template>
  <div class="hello">
    111
  </div>
</template>

<script>
import { fromPromise } from 'rxjs/observable/fromPromise';
import { forkJoin, merge } from 'rxjs';

let demo1$ = fromPromise(fetch("/static/demo.json").then(response => response.json()));
let demo2$ = fromPromise(fetch("/static/demo.json").then(response => response.json()));

let demoAll$ = forkJoin(demo1$, demo2$)
demoAll$.subscribe(val => console.log(val, 3))

demoAll$.subscribe(val => console.log(val, 2))

export default {
  name: "hello",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
