<!--
 * @Author: your name
 * @Date: 2021-08-25 08:31:37
 * @LastEditTime: 2021-08-25 21:19:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my_fxs\src\views\zpssss.vue
-->
<!--
 * @Author: your name
 * @Date: 2021-08-24 20:54:38
 * @LastEditTime: 2021-08-24 21:52:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zps装修流程\my_fxs\src\views\zps.vue
-->
<template>
    <div class="zps">
        <!-- 导航栏 -->
        <div class="zps_header">
            <div>
                <span>
                    <img src="../../public/logo.png" alt="">
                </span>
            </div>
            <div class="zps_zx">
                <span>装修流程</span>
            </div>
            <div class="header-right">
                <div class="header-icon" style="margin-right: 20px;">
                    <span>
                        <i class="iconfont icon-user" style="font-size:45px;"></i>
                    </span>
                    <span>我的</span>
                </div>
                <div class="header-icon" style="padding-top:13px;">
                    <i class="iconfont icon-nav" style="font-size:33px;"></i>
                    <span>导航</span>
                </div>
            </div>
        </div>
        <!-- 轮播图 -->
        <div>
            <img src="../../public/process1.jpg" alt="" style="width:100%;height:250px;">
        </div>
        <!-- 环形图 -->
        <div class="zps_hx1">
            <div class="zxq">【装修前】</div>
            <div class="sfyf">NO.1收房验房</div>
            <div class="sfyf1">NO.2装修预算</div>
            <div class="sfyf2">NO.3装修风水</div>
            <div class="sfyf3">NO.4装修设计</div>
        </div>
        <!-- 环形图 -->
        <div class="zps_hx2">
            <div class="zxq1">【装修中】</div>
            <div class="sfyf4">NO.5 材料选择</div>
            <div class="sfyf5">NO.6 水电工程</div>
            <div class="sfyf6">NO.7 泥土工程</div>
            <div class="sfyf7">NO.8 油漆工程</div>
        </div>
        <!-- 环形图 -->
        <div class="zps_hx3">
            <div class="zxq2">【装修后】</div>
            <div class="sfyf8">NO.9 装修验房</div>
            <div class="sfyf9">NO.10 去污保洁</div>
            <div class="sfyf10">NO.11 软装搭配</div>
            <div class="sfyf11">NO.12 家居生活</div>
        </div>
        <div style="width:100%;height:20px;background:#eaeaea;"></div>
        <!-- 房子介绍 -->
        <div class="info">
           房先森互联网家装有别于传统装修公司与其他装修中
            介平台,以自营模式整合设计师与项目经理,杜绝项目转
            包外包,利用互联网将工地进行在线全景直播,通过去中
            间环节,提供装修套餐 + 各性化定制服务。
        </div>
           <div style="width:100%;height:20px;background:#eaeaea;"></div>
           <!-- 服务热线 -->
           <div class="fu">
               <p><i class="iconfont icon-hot-line green" style="color:#39c894; font-size: 25px;"></i><span>服务热线:400-9977-658</span></p>

           </div>
           <!-- 触摸板 -->
           <div class="chumo">
               <ul>
                   <li style="color:#39c894">触摸版</li>
                   <li>电脑版</li>
                   <li>关于我们</li>
                   <li>联系我们</li>

               </ul>
           </div>
           <img src="../../public/quoten_bottom.png" alt="" style="background:#666666;width:100%;height:91px;">
    </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style  scoped>
.chumo ul{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-around;
    font-size: 25px;
    margin-top: 30px;
}

.fu{
    width: 100%;
    height: 100px;
    text-align: center;
    line-height: 100px;
    font-size: 25px;
}
.info {
 
  width: 100%;
  height: 250px;
  padding: 30px;
  box-sizing: border-box;
  color: #999999;
  font-size: 25px;
  text-indent: 2em;
  line-height: 45px;
 
}

.zps {
  width: 100%;
  height: 100%;
}
.zps_header {
  width: 100%;
  height: 100px;

  display: flex;
  justify-content: space-around;
  padding: 16px 18px;
}
.header-right {
  color: #999999;
  height: 70px;
  display: flex;
  justify-content: space-between;
}
.header-icon {
  display: inline-block;
  width: 45px;
  height: 70px;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;

  align-items: center;
  justify-content: center;
}
.zps_zx {
  font-size: 25px;
  padding-top: 30px;
  box-sizing: border-box;
}
.zps_hx1 {
  width: 100%;
  height: 854px;
  margin-top: -5px;
  position: relative;
  background-image: url("../../public/process2.jpg");
}
.zps_hx2 {
  width: 100%;
  height: 854px;
  /* margin-top: -5px; */
  position: relative;
  background-image: url("../../public/process3.png");
}
.zps_hx3 {
  width: 100%;
  height: 950px;
  /* margin-top: -5px; */
  position: relative;
  background-image: url("../../public/process4.jpg");
}
.zxq {
  font-size: 36px;
  color: #ff4351;
  position: absolute;
  top: 60px;
  left: 120px;
}
.sfyf {
  font-size: 28px;
  color: #000;
  position: absolute;
  top: 200px;
  left: 185px;
}
.sfyf1 {
  font-size: 28px;
  color: #000;
  position: absolute;
  top: 355px;
  right: 195px;
}
.sfyf2 {
  font-size: 28px;
  color: #000;
  position: absolute;
  bottom: 320px;
  left: 190px;
}
.sfyf3 {
  font-size: 28px;
  color: #000;
  position: absolute;
  bottom: 160px;
  right: 195px;
}
.zxq1 {
  font-size: 36px;
  color: #1b9af7;
  position: absolute;
  top: 60px;
  right: 125px;
}
.sfyf4 {
  font-size: 28px;
  color: #000;
  position: absolute;
  top: 205px;
  right: 190px;
}
.sfyf5 {
  font-size: 28px;
  color: #000;
  position: absolute;
  top: 380px;
  left: 190px;
}
.sfyf6 {
  font-size: 28px;
  color: #000;
  position: absolute;
  bottom: 290px;
  right: 190px;
}
.sfyf7 {
  font-size: 28px;
  color: #000;
  position: absolute;
  bottom: 135px;
  left: 190px;
}
.zxq2 {
  font-size: 36px;
  color: #7b72e9;
  position: absolute;
  top: 50px;
  left: 125px;
}
.sfyf8 {
  font-size: 28px;
  color: #000;
  position: absolute;
  top: 200px;
  left: 185px;
}
.sfyf9 {
  font-size: 28px;
  color: #000;
  position: absolute;
  top: 355px;
  right: 195px;
}
.sfyf10 {
  font-size: 28px;
  color: #000;
  position: absolute;
  bottom: 410px;
  left: 190px;
}
.sfyf11 {
  font-size: 28px;
  color: #000;
  position: absolute;
  bottom: 250px;
  right: 195px;
}
</style>