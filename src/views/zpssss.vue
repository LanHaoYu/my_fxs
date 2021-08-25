<!--
 * @Author: your name
 * @Date: 2021-08-25 08:31:37
 * @LastEditTime: 2021-08-25 08:31:39
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

        </div>
         <!-- 环形图 -->
        <div class="zps_hx2">

        </div>
         <!-- 环形图 -->
        <div class="zps_hx3">

        </div>
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
.zps_zx{
    font-size: 25px;
    padding-top: 30px;
    box-sizing: border-box;
}
.zps_hx1{
    width: 100%;
    height: 854px;
    margin-top: -5px;
    position: relative;
   background-image: url("../../public/process2.jpg");
}
.zps_hx2{
    width: 100%;
    height: 854px;
    /* margin-top: -5px; */
    position: relative;
   background-image: url("../../public/process3.png");
}
.zps_hx3{
    width: 100%;
    height: 854px;
    /* margin-top: -5px; */
    position: relative;
   background-image: url("../../public/process4.jpg");
}
</style>