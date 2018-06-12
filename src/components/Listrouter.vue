<template>
  <div id="Listrouter">
     <ul class="listul" @click="change" v-show="isShow">
       <li v-for="item in items" >{{title}}</li>
     </ul>
  </div>
</template>

<script>
    export default {
        name: "Listrouter",
     // props:['isShow'],
      data(){

          return{
            title:'图文',
            isShow:true,
            items:[
                1,2,3,4,5
            ]

          }
      },
      methods:{
        change(){
          this.isShow=!this.isShow
          this.$emit('backd',this.isShow)

        }
      }

    }
</script>

<style scoped>
  .listul{
    height: 666px;
    text-align: center;
    line-height: 50px;
    font-size: 20px;
    width: 50%;
    box-shadow:5px 5px 5px 5px #999;
  }
</style>
