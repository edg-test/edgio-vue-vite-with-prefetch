<script setup>
import { Prefetch } from '@edgio/vue'
import { install } from '@edgio/prefetch/window';

// Register service-worker
document.addEventListener('DOMContentLoaded', () => {
  install({
    // config options...
  });
});
</script>

<template>
  <header>
    <nav>
      <Prefetch immediately>
        <a href="/">Home</a>
      </Prefetch>
      <Prefetch immediately>
        <a href="/about">About</a>
      </Prefetch>
    </nav>
  </header>
  <main>
    <h1>Hello world from Vue app</h1>
  </main>
</template>
<style>
  header{
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    text-align: center;
    border-bottom: 1px solid rgba(1,1,1,0.2);
  }
  header a{
    position: relative;
    display: inline-block;
    padding: 0.5em 1em;
    box-sizing: border-box;
    font-size: 1.2em;
  }
</style>