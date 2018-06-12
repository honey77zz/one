<template>
  <div id="app">
    <div id="top">
    <span class="left-span"><i class="fa fa-bars" aria-hidden="true"></i></span>
    <span class="left-med">一个</span>
    <span class="right-span"><i class="fa fa-search" aria-hidden="true"></i></span>

    </div>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  #top{
    height: 50px;
    /*background: #0d3349;*/
    display: flex;
  }
  #top span{
    line-height: 50px;
  }
  .left-span{
    font-size: 18px;
    padding: 0 10px;
  }
  .left-med{
    flex: 1;
    text-align: center;
    font-size: 18px;
  }
  .right-span{
    font-size: 18px;
    padding: 0 10px;
  }
</style>
