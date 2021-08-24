<template>
    <div class="detail"> 
        <div class="header">
            <div class="left">
                <i class="iconfont icon-back"></i>
            </div>
            <div class="center">
                <h3>欧美文化的抽象美感</h3>
            </div>
            <div class="right">
                <i class="iconfont icon-nav"></i>
                <p>导航</p>
            </div>
        </div>

        <div class="banner">
            <div class="im">
                <img src="/img/case1.jpg" alt="">
            </div>
        </div>

        <div class="cont">
            <p style="margin-left:20px">房先森互联网家装有别于其他的传统公司，于其他装修平台，以自营模式整合设计师与项目经理，杜绝项目转包外包，利用互联网将工地模式进行在线全景直播，通过中间环节，提供装修套餐+个性化定制服务</p>
        </div>

        <div class="card">
            <p><i class="iconfont icon-hot-line" style="color:green"></i>服务热线：400——9977——658</p>
            <ul>
                <li style="color:green">触屏版</li>
                <li>电脑版</li>
                <li>关于我们</li>
                <li>联系我们</li>
            </ul>
        </div>

        <div class="footer">
            预约免费设计
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style>
.detail {
  width: 100%;
  height: 100%;
  background: #eee;
  box-sizing: border-box;
}
.detail>.header {
    width: 100%;
    height: 60px;
    background: #fff;
    border-bottom: 1px solid #ddd;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    box-sizing: border-box;
  }
  .header>.right{
      text-align: center;
  }
  .header>.left>i{
      font-size: 40px;
  }
  .header>.right>p{
      text-align: center;
  }
  .header>.right>i{
      text-align: center;
      font-size: 20px;
  }

.banner{
    width: 100%;
}
.banner>.im{
    width: 100%;
    height: 400px;
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
}
.banner>.im>img{
    width: 100%;
}

.cont{
    width: 100%;
    height: 150px;
    background: #fff;
    padding: 20px;
    box-sizing: border-box;
    font-size: 20px;
}
.cont>P{
    word-spacing: 2px;
}

.card{
    width: 100%;
    height: 130px;
    margin-top: 20px;
    background: #fff;
    margin-bottom: 10px;
}
.card>p{
    text-align: center;
    line-height: 40px;
}
.card>ul{
    width: 100%;
    font-size: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
}
.footer{
    width: 100%;
    height: 60px;
    background: pink;
    font-size: 20px;
    text-align: center;
    line-height: 60px;
    color: #fff;
}
</style>
