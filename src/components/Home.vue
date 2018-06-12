<template>
  <div class="home">
    <router-link  to="h1"  @backd="show" @click="change">跳转到 home 的 h1</router-link>
    <router-view></router-view>
    <div class="home-img-box">
      <img src="../images/login_bg.png"/>
      <div class="home-text-box">
        <p class="day">12</p>
        <p class="month">vol.2075&nbsp;|&nbsp;Jun 2018</p>
        <p class="content-short">忍心怎么变硬呢？离家后跟父母渐行渐远，不是事事都说；毕业时哭成泪人，之后或再也没见；或见面是路人，爱错了人</p>
        <span class="span-angle-down"><i class="fa fa-angle-down" aria-hidden="true"></i></span>
      </div>
    </div>
     <div class="home-text" v-for="item in items">
        <div class="aticle">
        <p><a href="#" class="home-link">阅读 |</a></p>
          <div class="aticle-link">
            <p class="aticle-title">死点</p>
            <p class="aticle-auther">作者/王元 </p>
            <p class="aticle-content">
              <i >时间足够你爱</i>
              <i>——海因莱因</i>
            </p>
            <p class="aticle-more"><a href="">阅读全文</a></p>
          </div>
        </div>
        <div class="question"></div>
     </div>
    <a href="" class="home-more">更多内容
      <i class="fa fa-angle-right" aria-hidden="true"></i>
    </a>
    <div class="bottom">
      <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010502000462" class="bottom-link">
        <img src="http://image.wufazhuce.com/beian.png" alt="">
        <span class="bottom-hu">沪公安网备31010502000462</span>
      </a>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      isShow:true,
      items:[
        {

        },
        {

        }
      ]
    }
  },
  methods:{
    show(data){
      console.log(data)
    },
    change(){
      this.data=!this.data
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home-img-box{
    position: relative;
    height:616px;
    /*width: 750px;*/
    /*background:url("http://image.wufazhuce.com/FlrbgZBTmUlzeigMz8DXIsWN2MXf" ) no-repeat -262px 0;*/
    background-size:cover;
  }
 .home-img-box img{
   width: 100%;
   height: 100%;
   display: block;
  }
  .home-text-box{
    position: absolute;
   bottom: 50px;
  }
  .home-text-box p{
    margin: 0 20px;
    color: white;
    text-align: left;
  }
  .day{

    font-size: 48px;
    line-height: 48px;

    font-family: Serif;

  }
  .month{

    font-size: 19px;
  }
  .content-short{

    line-height: 26px;
    max-height: 78px;
    margin-top: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 16px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .span-angle-down{
    display: block;
  }
  .span-angle-down i{
    width: 23px;
    height: 12px;
  font-size: 20px;
    color: #fff;
position: absolute;
    left: 40%;
  }
  .home-text{
    width: 100%;
    margin-top: 20px;
  }
  .home-text div{
    margin-bottom: 70px;
  }
  .home-text p{
    margin: 0 20px;

  }
  .home-link{
    text-decoration: none;
    font-weight: normal;
    color: #38c;
  }
  .aticle-link{

  }
  .aticle-auther{
    padding: 0 20px;

  }
  .aticle-content i{
    display: block;
    line-height: 26px;
    font-size: 16px;
  }
  .aticle-title{
    color: black;
    font-size: 28px;
    margin: 94px 20px 0 20px;
    font-weight: bold;
    line-height: 1.3;
  }
  .aticle-more a{
    color: #38c;
  }
  .home-more{
  font-size: 16px;
  margin: .5em 0;
  padding: .7em 1em;
  display: block;
  position: relative;
  text-align: center;
  border:1px solid #ddd;
  border-radius:20px;
  background-color: #f6f6f6;
  color: #333;
  cursor: pointer;
  width: 100px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  }
  .fa{
    margin: 10px;
  }
  .bottom{
    margin: 0 auto;
    padding: 20px 0;
    text-align: center;
  }
  .bottom-link{
    display: inline-block;
    text-decoration: none;
    height: 20px;
    line-height: 20px;
  }
  .bottom-link img{
    float: left;
  }
  .bottom-hu{
    float: left;
    height: 20px;
    font-size: 18px;
    line-height: 20px;
    margin: 0px 0px 0px 5px;
    color: #939393;
  }
</style>
