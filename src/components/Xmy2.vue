<!--  -->
<template>
  <div class="home">
    <div class="title">
      <div class="left">
        <img src="@/assets/logo.png" alt="">
      </div>
      <div class="right">
        <!-- <img src="@/assets/01.png" alt=""> -->
        <i class="iconfont icon-user"></i>
        <p>导航</p>
      </div>
    </div>
    <div class="swipe">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item, index) in img" :key="index">
          <img :src="item.img" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
    <!--  -->
    <div class="cate">
      <p class="a1">
        <i class="iconfont icon-case" style="font-size:45px;"></i>
      </p>
      <p class="a2">
        <i class="iconfont icon-pics" style="font-size:45px;"></i>
      </p>
      <p class="a3">
        <i class="iconfont icon-designer" style="font-size:45px;"></i>
      </p>
      <p class="a4">
        <i class="iconfont icon-construction-site" style="font-size:45px;"></i>
      </p>
      <p class="a5">
        <i class="iconfont icon-decorate" style="font-size:45px;"></i>
      </p>
      <p class="a6">
        <i class="iconfont icon-loans" style="font-size:45px;"></i>
      </p>
      <p class="a7">
        <i class="iconfont icon-pencle" style="font-size:45px;"></i>
      </p>
      <p class="a8">
        <i class="iconfont icon-ten" style="font-size:45px;"></i>
      </p>
    </div>
    <!--  -->
    <div class="xmy"></div>
    <div class="zhuang">
      <div class="d1">
        <h2>
          全屋装修
          <span class="d2">全屋装修提供不同档次全包\半包套餐</span>
        </h2>
      </div>
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item, index) in lbt" :key="index">
          <img :src="item.img" alt="">
        </van-swipe-item>
      </van-swipe>
      <div class="d3">
        <ul>
          <li>
            <i class="iconfont icon-zero">
              <span>0增项标准施工</span>
            </i>
          </li>
          <li>
            <i class="iconfont icon-protection-fill">
              <span>0增项标准施工</span>
            </i>
          </li>
          <li>
            <i class="iconfont icon-price">
              <span>0增项标准施工</span>
            </i>
          </li>
        </ul>
      </div>
    </div>
    <!--  -->
    <div class="xmy"></div>
    <!--  -->
    <div class="zhuang">
      <div class="d1">
        <h2>
          局部装修
          <span class="d2">全屋装修提供不同档次全包\半包套餐</span>
        </h2>
      </div>
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item, index) in lbt" :key="index">
          <img :src="item.img" alt="">
        </van-swipe-item>
      </van-swipe>
      <div class="d3">
        <ul>
          <li>
            <i class="iconfont icon-zero">
              <span>0增项标准施工</span>
            </i>
          </li>
          <li>
            <i class="iconfont icon-protection-fill">
              <span>0增项标准施工</span>
            </i>
          </li>
          <li>
            <i class="iconfont icon-price">
              <span>0增项标准施工</span>
            </i>
          </li>
        </ul>
      </div>
    </div>
    <div class="xmy"></div>
    <div class="xui">
      <div class="e1">
        <h2>
          局部装修
          <span class="e2">全屋装修提供不同档次全包\半包套餐</span>
        </h2>
      </div>
      <p class="e3">
        <input type="text" placeholder="小区名">
      </p>
      <p class="e3">
        <input type="text" placeholder="手机号">
      </p>
      <p class="e4">
        <input type="text" placeholder="验证码">
        <button>获取验证码</button>
      </p>
      <p class="e3">
        <input type="text" placeholder="建筑面积">
      </p>
      <p class="e5">
        <button>立即预约</button>
      </p>
    </div>
    <div class="xmy"></div>
    <!--  -->
    <div class="she">
      <div class="f1">
        <h2>设计师</h2>
        <span>
          更多
          <i class="iconfont icon-more"></i>
        </span>
      </div>
      <div class="f2">
        <ul>
          <li class="f3">
            <img src="@/assets/07.png" alt="">
            <p>赵浚涵</p>
            <p>主任设计师</p>
          </li>
          <li class="f3">
            <img src="@/assets/07.png" alt="">
            <p>赵浚涵</p>
            <p>主任设计师</p>
          </li>
          <li class="f3">
            <img src="@/assets/07.png" alt="">
            <p>赵浚涵</p>
            <p>主任设计师</p>
          </li>
          <li class="f3">
            <img src="@/assets/07.png" alt="">
            <p>赵浚涵</p>
            <p>主任设计师</p>
          </li>
        </ul>
      </div>
      <div class="f4">
        <button>换一换</button>
        <button>更多设计师</button>
      </div>
    </div>
    <div class="xmy"></div>
    <div class="xiao">
      <div class="g1">
        <h2>效果图</h2>
      </div>
      <div class="g2">
        <img src="@/assets/08.png" alt="">
      </div>
      <div class="g3">
        <ul>
          <li v-for="(item,index) in xiao" :key="index">
            <img :src="item" alt="">
          </li>
        </ul>
      </div>
      <div class="g4">
        <button>换一换</button>
        <button>更多效果图</button>
      </div>
    </div>
    <div class="xmy"></div>
    <div class="gong">
      <div class="h1">
        <h2>工地直播</h2>
      </div>
      <div class="h2">
        <img src="@/assets/09.png" alt="">
        <p>
          <span>旭辉东源国滨府</span>
          <span>泥木工程</span>
        </p>
      </div>
      <div class="h3">
        <button>换一换</button>
        <button>更多工地直播</button>
      </div>
    </div>
    <div class="xmy"></div>
    <div class="lue">
         <div class="i1">
        <p>猜你喜欢</p>
      </div>
      <div class="i2">
        <div class="i3">
          <img src="@/assets/03.png" alt="">
        </div>
        <div class="i4">
          <p>遇到有这样房子的男人就嫁了吧</p>
          <p>
            <i class="iconfont icon-time">2016-07-09</i>
            <i class="iconfont icon-view">115</i>
          </p>
        </div>
      </div>
       <div class="i2">
        <div class="i3">
          <img src="@/assets/03.png" alt="">
        </div>
        <div class="i4">
          <p>遇到有这样房子的男人就嫁了吧</p>
          <p>
            <i class="iconfont icon-time">2016-07-09</i>
            <i class="iconfont icon-view">115</i>
          </p>
        </div>
      </div>
       <div class="i2">
        <div class="i3">
          <img src="@/assets/03.png" alt="">
        </div>
        <div class="i4">
          <p>遇到有这样房子的男人就嫁了吧</p>
          <p>
            <i class="iconfont icon-time">2016-07-09</i>
            <i class="iconfont icon-view">115</i>
          </p>
        </div>
      </div>
       <div class="i5">
        <button>换一换</button>
        <button>更多装修攻略</button>
      </div>
    </div>
    <div class="xmy"></div>
     <div class="jj">
      <p>
        &emsp;&nbsp;导语：在装修的时候如果没有提前最好的装修预的风格服饰v算，
        很容易造成最后开支过大，添置很多没有必要的增项。拉拉喜喜哈哈嘟嘟嘟
        那么在做预算的时候又有什么需要降低发动机房贷还款的符号看看注意的地方呢？
      </p>
    </div>
    <div class="xmy"></div>
     <div class="kk">
      <p>
        <i class="iconfont icon-hot-line"></i>
        <span>服务热线:400-9977-658</span>
      </p>
    </div>
    <div class="ll">
      <ul>
        <li>触屏版</li>
        <li>电脑版</li>
        <li>关于我们</li>
        <li>联系我们</li>
      </ul>
    </div>
    <div class="nn">
      <img src="@/assets/05.png" alt="">
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      img: [
          {img:require("../../public/切图/banner.jpg")},
          {img:require("../../public/切图/banner1.jpg")} ,
          {img:require("../../public/切图/banner2.jpg")},
          {img:require("../../public/切图/banner3.jpg")}
       ],
      lbt: [
          {img:require("../../public/切图/img1.jpg")}, 
          {img:require("../../public/切图/img1.jpg")}
          ],
      xiao: ["./10.png", "./11.png", "./11.png", "./10.png"]
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.home {
  height: 100%;
  width: 100%;
  .title {
    height: 100px;
    width: 100%;
    // border-bottom: 1px solid gray;
    display: flex;
    justify-content: space-between;
    .left {
      padding-top: 16px;
      padding-bottom: 16px;
      margin-left: 18px;
      img {
        height: 60px;
        width: 180px;
      }
    }
    .right {
      margin-top: 20px;
      margin-right: 10px;
      text-align: center;
      img {
        height: 45px;
        width: 45px;
      }
    }
  }
}
.swipe {
  img {
    height: 170px;
    width: 100%;
  }
}
.cate {
  height: 245px;
  width: 90%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 10px;
  // border:1px solid gray;
  .a1 {
    height: 80px;
    width: 80px;
    border-radius: 50px;
    background: #39c894;
    text-align: center;
    line-height: 80px;
    color: #fff;
  }
  .a2 {
    height: 80px;
    width: 80px;
    border-radius: 50px;
    background: #eed215;
    text-align: center;
    line-height: 80px;
    color: #fff;
  }
  .a3 {
    height: 80px;
    width: 80px;
    border-radius: 50px;
    background: #feb505;
    text-align: center;
    line-height: 80px;
    color: #fff;
  }
  .a4 {
    height: 80px;
    width: 80px;
    border-radius: 50px;
    background: #00b2b2;
    text-align: center;
    line-height: 80px;
    color: #fff;
  }
  .a5 {
    height: 80px;
    width: 80px;
    border-radius: 50px;
    background: #1b9af7;
    text-align: center;
    line-height: 80px;
    color: #fff;
  }
  .a6 {
    height: 80px;
    width: 80px;
    border-radius: 50px;
    background: #7b72e9;
    text-align: center;
    line-height: 80px;
    color: #fff;
  }
  .a7 {
    height: 80px;
    width: 80px;
    border-radius: 50px;
    background: #ff4351;
    text-align: center;
    line-height: 80px;
    color: #fff;
  }
  .a8 {
    height: 80px;
    width: 80px;
    border-radius: 50px;
    background: #fe8864;
    text-align: center;
    line-height: 80px;
    color: #fff;
  }
}
.zhuang {
  width: 100%;
  height: 350px;
  // border: 1px solid gray;
  .d1 {
    height: 50px;
    // background: #39c894;
    line-height: 50px;
    padding-left: 10px;
    .d2 {
      font-size: 13px;
    }
  }
  img {
    height: 250px;
    width: 100%;
  }
}
.xmy {
  height: 10px;
  width: 100%;
  background: #eaeaea;
}
.d3 {
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    i {
      height: 10px;
      width: 200px;
      font-size: 13px;
      color: #39c894;
      span {
        color: gray;
      }
    }
  }
}
.xui {
  height: 380px;
  width: 100%;
  .e1 {
    height: 50px;
    // background: #39c894;
    line-height: 50px;
    padding-left: 10px;
    .e2 {
      font-size: 13px;
    }
  }
  .e3 {
    input {
      height: 45px;
      width: 350px;
      margin: 20px;
      margin-left: 30px;
      padding-left: 20px;
      margin-top: 5px;
    }
  }
  .e4 {
    input {
      height: 45px;
      width: 180px;
      margin-left: 30px;
      padding-left: 20px;
      margin-bottom: 10px;
    }
    button {
      height: 45px;
      width: 140px;
      background: #fd8d00;
      border: none;
      color: #fff;
      margin-left: 30px;
    }
  }
  .e5 {
    button {
      height: 45px;
      width: 350px;
      color: #fff;
      background: #feb505;
      margin-left: 30px;
      border: none;
      border-radius: 5px;
    }
  }
}
.she {
  height: 280px;
  width: 100%;
  text-align: center;
  .f1 {
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    h2 {
      margin-left: 20px;
    }
    span {
      margin-right: 20px;
    }
  }
  .f2 {
    ul {
      display: flex;
      align-items: center;
      justify-content: space-around;
      .f3 {
        text-align: center;
        padding-top: 10px;
        img {
          height: 70px;
          width: 70px;
          border-radius: 50px;
        }
        p {
          padding-top: 10px;
          height: 40px;
        }
        p:last-child {
          background: #39c894;
          color: #fff;
          font-size: 10px;
          height: 25px;
          line-height: 10px;
          border-radius: 3px;
        }
      }
    }
  }
  .f4 {
    height: 50px;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-left: 20px;
    margin-top: 15px;
    button {
      height: 50px;
      width: 50%;
      margin-top: 20px;
      color: #39c894;
      background: #fff;
      border: 1px solid #eaeaea;
    }
  }
}
.xiao {
  height: 640px;
  width: 100%;
//   border: 1px solid gray;
  .g1 {
    height: 50px;
    line-height: 50px;
    padding-left: 20px;
  }
  .g2 {
    height: 280px;
    width: 100%;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .g3 {
    margin-top: 8px;
    ul {
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-wrap: wrap;
      li {
        height: 100px;
        width: 200px;

        img {
          height: 100%;
          width: 100%;
        }
      }
    }
  }
  .g4 {
    height: 50px;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-left: 20px;
    margin-top: 15px;
    button {
      height: 50px;
      width: 50%;
      margin-top: 20px;
      color: #39c894;
      background: #fff;
      border: 1px solid #eaeaea;
    }
  }
}
.gong {
  height: 470px;
  width: 100%;
//   border: 1px solid gray;
  .h1 {
    height: 50px;
    line-height: 50px;
    padding-left: 20px;
  }
  .h2 {
    img {
      height: 280px;
      width: 100%;
    }
    p {
      height: 40px;
      width: 100%;
      margin-left: 10px;
      line-height: 40px;
      span:last-child {
        margin-left: 20px;
        font-size: 5px;
        background: #39c894;
        color: #fff;
        border-radius: 3px;
      }
    }
  }
  .h3 {
    height: 50px;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-left: 20px;
    margin-top: 15px;
    button {
      height: 50px;
      width: 50%;
      margin-top: 20px;
      color: #39c894;
      background: #fff;
      border: 1px solid #eaeaea;
    }
  }
}
.lue{
  height: 500px;
  width: 100%;
//   border:1px solid gray;
   .i1 {
      height: 50px;
      font-size: 20px;
      padding-top: 10px;
      padding-left: 10px;
    }
    .i2 {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #eaeaea;
      padding-top: 20px;
      .i3 {
        img {
          height: 90px;
          width: 130px;
        }
      }
      .i4 {
        p:first-child {
          font-size: 16px;
        }
        p:last-child {
          font-size: 24px;
          margin-top: 30px;
          color: #999;
          i:first-child {
            padding-right: 70px;
          }
        }
      }
    }
    .i5{
    height: 50px;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-left: 20px;
    margin-top: 15px;
    button {
      height: 50px;
      width: 50%;
      margin-top: 20px;
      color: #39c894;
      background: #fff;
      border: 1px solid #eaeaea;
    }
    }
}
 .jj {
    height: 120px;
    width: 90%;
    margin: 0 auto;
    margin-top: 10px;
    // border: 1px solid red;
  }
  .kk {
    height: 50px;
    width: 100%;
    text-align: center;
    p {
      padding-top: 15px;
      i {
        color: #39c893;
      }
    }
  }
  .ll{
    height: 50px;
    width: 100%;
    ul{
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }
  .nn{
    height: 80px;
    width: 100%;
    img{
      height: 100%;
      width: 100%;
    }
  }

</style>