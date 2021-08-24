<!--  -->
<template>
  <div class="home">
    <div class="title">
      <div class="left">
        <img src="@/assets/logo.png" alt="">
        <p>装修预算</p>
      </div>
      <div class="right">
        <i class="iconfont icon-nav"></i>
        <p>导航</p>
      </div>
    </div>
    <div class="aa">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item, index) in aa" :key="index">
          <img :src="item" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="bb">
      <p>房先森 / 装修攻略 / 装修预算 / 正文</p>
    </div>
    <div class="cc">
      <p>装修预算注意事项</p>
      <p>
        <i class="iconfont icon-time">2016-07-09</i>
        <i class="iconfont icon-view">115</i>
      </p>
    </div>
    <div class="xmy"></div>
    <div class="dd">
      <div class="d1">
        <span>客厅装修隔离</span>
        <span>客厅装修隔离</span>
        <span>客厅装修隔离</span>
        <span>客厅装修隔离</span>
        <span>客厅装修隔离</span>
        <span>客厅装修隔离</span>
      </div>
      <p>
        &emsp;&nbsp;导语：在装修的时候如果没有提前最好的装修预算，
        很容易造成最后开支过大，添置很多没有必要的增项。
        那么在做预算的时候又有什么需要注意的地方呢？
      </p>
      <img src="@/assets/02.png" alt="">
    </div>
    <div class="ee">
      <button>点击展开全文</button>
    </div>
    <div class="ff">
      <ul>
        <li>
          <span>
            <i class="iconfont icon-pencle"></i>
          </span>
          <p>评价(10)</p>
        </li>
        <li>
          <span>
            <i class="iconfont icon-share"></i>
          </span>
          <p>分享</p>
        </li>
      </ul>
    </div>
    <div class="ee">
      <button>点击展开全文</button>
    </div>
    <div class="gg"></div>
    <div class="hh">
      <div class="h1">
        <p>猜你喜欢</p>
      </div>
      <div class="h2">
        <div class="h3">
          <img src="@/assets/03.png" alt="">
        </div>
        <div class="h4">
          <p>遇到有这样房子的男人就嫁了吧</p>
          <p>
            <i class="iconfont icon-time">2016-07-09</i>
            <i class="iconfont icon-view">115</i>
          </p>
        </div>
      </div>
      <div class="h2">
        <div class="h3">
          <img src="@/assets/04.png" alt="">
        </div>
        <div class="h4">
          <p>遇到有这样房子的男人就嫁了吧</p>
          <p>
            <i class="iconfont icon-time">2016-07-09</i>
            <i class="iconfont icon-view">115</i>
          </p>
        </div>
      </div>
      <div class="h2">
        <div class="h3">
          <img src="@/assets/03.png" alt="">
        </div>
        <div class="h4">
          <p>遇到有这样房子的男人就嫁了吧</p>
          <p>
            <i class="iconfont icon-time">2016-07-09</i>
            <i class="iconfont icon-view">115</i>
          </p>
        </div>
      </div>
      <div class="h2">
        <div class="h3">
          <img src="@/assets/04.png" alt="">
        </div>
        <div class="h4">
          <p>遇到有这样房子的男人就嫁了吧</p>
          <p>
            <i class="iconfont icon-time">2016-07-09</i>
            <i class="iconfont icon-view">115</i>
          </p>
        </div>
      </div>
      <div class="h2">
        <div class="h3">
          <img src="@/assets/03.png" alt="">
        </div>
        <div class="h4">
          <p>遇到有这样房子的男人就嫁了吧</p>
          <p>
            <i class="iconfont icon-time">2016-07-09</i>
            <i class="iconfont icon-view">115</i>
          </p>
        </div>
      </div>
    </div>
    <div class="gg"></div>
    <div class="ii">
      <p>
        &emsp;&nbsp;导语：在装修的时候如果没有提前最好的装修预算，
        很容易造成最后开支过大，添置很多没有必要的增项。
        那么在做预算的时候又有什么需要注意的地方呢？
      </p>
    </div>
    <div class="gg"></div>
    <div class="jj">
      <p>
        <i class="iconfont icon-hot-line"></i>
        <span>服务热线:400-9977-658</span>
      </p>
    </div>
    <div class="kk">
      <ul>
        <li>触屏版</li>
        <li>电脑版</li>
        <li>关于我们</li>
        <li>联系我们</li>
      </ul>
    </div>
    <div class="ll">
      <img src="@/assets/05.png" alt="">
    </div>
    <div class="abc"></div>
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
      aa: ["./01.png", "./01.png"]
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
    height: 70px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      height: 60px;
      width: 150px;
      margin-left: 10px;
    }
    .left {
      display: flex;
      align-items: center;
      width: 250px;
      justify-content: space-between;
    }
    .right {
      text-align: center;
      margin-right: 10px;
      color: gray;
    }
  }
  .aa {
    height: 160px;
    width: 100%;
    img {
      height: 150px;
      width: 100%;
    }
  }
  .bb {
    height: 40px;
    width: 90%;
    line-height: 40px;
    padding-left: 8px;
    margin: auto;
    background: #f4f4f4;
  }
  .cc {
    height: 90px;
    width: 70%;
    margin: auto;
    margin-top: 25px;
    text-align: center;
    p:first-child {
      font-size: 28px;
    }
    p:last-child {
      font-size: 24px;
      margin-top: 10px;
      color: #999;
      i:first-child {
        padding-right: 70px;
      }
    }
  }
  .xmy {
    width: 100%;
    border: 1px solid #eaeaea;
  }
  .dd {
    height: 370px;
    width: 100%;
    text-align: center;
    .d1 {
      span {
        height: 25px;
        width: 110px;
        text-align: center;
        line-height: 25px;
        display: inline-block;
        border: 1px solid #eaeaea;
        margin: 10px;
        color: #eaeaea;
        border-radius: 30px;
        margin-top: 10px;
        text-align: center;
      }
    }
    p {
      margin-top: 10px;
      align-items: center;
      padding-left: 10px;
      color: #666;
    }
    img {
      height: 160px;
      width: 60%;
      text-align: center;
      margin-top: 20px;
    }
  }
  .ee {
    height: 70px;
    text-align: center;
    button {
      height: 45px;
      width: 80%;
      border: #39c893 solid 1px;
      color: #39c893;
      border-radius: 5px;
      background: #fff;
    }
  }
  .ff {
    height: 100px;
    text-align: center;
    ul {
      display: flex;
      align-items: center;
      justify-content: space-around;
      li:first-child {
        span {
          height: 60px;
          width: 60px;
          border-radius: 50%;
          display: inline-block;
          border: 2px solid #1b9af7;
          text-align: center;
          line-height: 60px;
          i {
            font-size: 30px;
            color: #1b9af7;
          }
        }
        p {
          color: #1b9af7;
          padding-top: 10px;
        }
      }
      li:last-child {
        span {
          height: 60px;
          width: 60px;
          border-radius: 50%;
          display: inline-block;
          border: 2px solid #feb505;
          text-align: center;
          line-height: 60px;
          i {
            font-size: 30px;
            color: #feb505;
          }
        }
        p {
          color: #feb505;
          padding-top: 10px;
        }
      }
    }
  }
  .gg {
    height: 10px;
    width: 100%;
    background: #eaeaea;
  }
  .hh {
    height: 640px;
    width: 90%;
    margin: 0 auto;
    .h1 {
      height: 50px;
      font-size: 20px;
      padding-top: 10px;
      padding-left: 10px;
    }
    .h2 {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #eaeaea;
      padding-top: 20px;
      .h3 {
        img {
          height: 90px;
          width: 130px;
        }
      }
      .h4 {
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
  }
  .ii {
    height: 100px;
    width: 90%;
    margin: 0 auto;
    margin-top: 10px;
  }
  .jj {
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
  .kk{
    height: 50px;
    width: 100%;
    ul{
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }
  .ll{
    height: 80px;
    width: 100%;
    img{
      height: 100%;
      width: 100%;
    }
  }
}
</style>