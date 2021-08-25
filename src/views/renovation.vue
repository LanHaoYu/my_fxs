<template>
  <div class="renovation">
    <!-- 头部 -->
    <header>
      <img class="header-img" src="../../public/切图/renovation/装修1.png" />
      <div class="header-div">
        <img src="../../public/切图/renovation/装修2.png" >
        <input class="header-input" type="text" placeholder="关注房先森官方微信公众号sirfang_com"/>
      </div>
      <img class="header-postipon" src="../../public/切图/renovation/装修3.png" >
    </header>
    
    <!-- 搜索框 -->
    <div id="serch">
      <div id="serch-box">
        <input class="serch" type="text" placeholder="请输入关键字" /><button type="button">搜索</button>
      </div>
    </div>
    
    <!-- div -->
    <div class="jianxi">
    </div>
    
    <!-- tab栏  装修对比  -->
     <div id="Decorationcom">
       <van-tabs v-model="active" color="#39c894" line-width="10rem" >
         <van-tab title="装修前">
           <div class="Dectop" style="width: 100%; height: 14.375rem; display: flex;justify-content: space-evenly;">
            <div style="flex: 1;height: 12.5rem;">
              <div style="width: 6.25rem;height: 6.25rem;position: relative; border: 0.125rem solid #39C894;border-radius: 50%;margin: auto;margin-top: 0.625rem;">
                <i class="iconfont icon-house" style="font-size: 3.75rem;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);color: #39C894;"></i>
                <p style="position: absolute;bottom: -40%;left: 1.25rem;">收房验房</p>
              </div>
            </div>
            <div style="flex: 1;height: 12.5rem;">
              <div style="width: 6.25rem;height: 6.25rem;position: relative; border: 0.125rem solid #39C894;border-radius: 50%;margin: auto;margin-top: 0.625rem;">
                <i class="iconfont icon-budget" style="font-size: 3.75rem;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);color: #39C894;"></i>
                <p style="position: absolute;bottom: -40%;left: 1.25rem;">装修预算</p>
              </div>
            </div>
            <div style="flex: 1;height: 12.5rem;">
              <div style="width: 6.25rem;height: 6.25rem;position: relative; border: 0.125rem solid #39C894;border-radius: 50%;margin: auto;margin-top: 0.625rem;">
                <i class="iconfont icon-taiji" style="font-size: 3.75rem;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);color: #39C894;"></i>
                <p style="position: absolute;bottom: -40%;left: 1.25rem;">装修风水</p>
              </div>
            </div>
            <div style="flex: 1;height: 12.5rem;">
              <div style="width: 6.25rem;height: 6.25rem;position: relative; border: 0.125rem solid #39C894;border-radius: 50%;margin: auto;margin-top: 0.625rem;">
                <i class="iconfont icon-designer" style="font-size: 3.75rem;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);color: #39C894;"></i>
                <p style="position: absolute;bottom: -40%;left: 1.25rem;">装修设计</p>
              </div>
            </div>
           </div>
         </van-tab>
         <van-tab title="装修中">内容 2</van-tab>
         <van-tab title="装修后">内容 3</van-tab>
       </van-tabs>
       <div class="button">
         了解装修流程 
       </div>
     </div>
    
    <div class="jianxi">
    </div>
    
    <!-- 为您推荐 -->
    <div id="recommend">
      <div class="rec-header">
        <span class="rec-span">
          为您推荐
        </span>
      </div>
      
      <div class="dome">
        <div class="dome-box">
           <img src="../assets/03.png" style="width: 11.875rem; height: 9.0625rem;">
           <div class="box-right">
             <p class="right-p">开放商延期交房，业主如何维权呢？</p>
             <div class="right-time-look">
               <div class="right-time">
                 <i class="iconfont  icon-time" style="font-size: 1.25rem;"></i>2016-07-07
               </div>
               <div class="right-look">
                 <i class="iconfont  icon-view" style="font-size: 1.25rem;"></i>115
               </div>
             </div>
           </div>
        </div>
      </div>
      
      <div class="dome">
        <div class="dome-box">
           <img src="../assets/04.png" style="width: 11.875rem; height: 9.0625rem;">
           <div class="box-right">
             <p class="right-p">能让您涨工资的居家风水！</p>
             <div class="right-time-look">
               <div class="right-time">
                 <i class="iconfont  icon-time" style="font-size: 1.25rem;"></i>2016-07-07
               </div>
               <div class="right-look">
                 <i class="iconfont  icon-view" style="font-size: 1.25rem;"></i>115
               </div>
             </div>
           </div>
        </div>
      </div>
      
      <div class="dome">
        <div class="dome-box">
           <img src="../assets/03.png" style="width: 11.875rem; height: 9.0625rem;">
           <div class="box-right">
             <p class="right-p">遇到这样房子的男人就嫁了吧</p>
             <div class="right-time-look">
               <div class="right-time">
                 <i class="iconfont  icon-time" style="font-size: 1.25rem;"></i>2016-07-07
               </div>
               <div class="right-look">
                 <i class="iconfont  icon-view" style="font-size: 1.25rem;"></i>115
               </div>
             </div>
           </div>
        </div>
      </div>
      
     <div class="dome">
       <div class="dome-box">
          <img src="../assets/03.png" style="width: 11.875rem; height: 9.0625rem;">
          <div class="box-right">
            <p class="right-p">开放商延期交房，业主如何维权呢？</p>
            <div class="right-time-look">
              <div class="right-time">
                <i class="iconfont  icon-time" style="font-size: 1.25rem;"></i>2016-07-07
              </div>
              <div class="right-look">
                <i class="iconfont  icon-view" style="font-size: 1.25rem;"></i>115
              </div>
            </div>
          </div>
       </div>
     </div>
     
     <div class="dome">
       <div class="dome-box">
          <img src="../assets/04.png" style="width: 11.875rem; height: 9.0625rem;">
          <div class="box-right">
            <p class="right-p">能让您涨工资的居家风水！</p>
            <div class="right-time-look">
              <div class="right-time">
                <i class="iconfont  icon-time" style="font-size: 1.25rem;"></i>2016-07-07
              </div>
              <div class="right-look">
                <i class="iconfont  icon-view" style="font-size: 1.25rem;"></i>115
              </div>
            </div>
          </div>
       </div>
     </div>
     
     <div class="dome">
       <div class="dome-box">
          <img src="../assets/03.png" style="width: 11.875rem; height: 9.0625rem;">
          <div class="box-right">
            <p class="right-p">遇到这样房子的男人就嫁了吧</p>
            <div class="right-time-look">
              <div class="right-time">
                <i class="iconfont  icon-time" style="font-size: 1.25rem;"></i>2016-07-07
              </div>
              <div class="right-look">
                <i class="iconfont  icon-view" style="font-size: 1.25rem;"></i>115
              </div>
            </div>
          </div>
       </div>
     </div>
     <!-- 换一换 -->
     <div class="Change">
       换一换 <i class="iconfont  icon-change" style="font-size: 1.5625rem;"></i>
     </div>
    </div>
    
    <div class="jianxi">
    </div>
    
    <!-- 结尾下文 -->
    <div class="ending">
       房先森互联网家装有别于传统装修公司与其他装修中介平台，以自营模式整合设计师与项目经理，杜绝项目转包外包，利用互联网将工地进行在线全景直播，通过去中间环节，提供装修套餐&nbsp;+&nbsp;个性化定制服务。
    </div>
    
    <div class="jianxi">
    </div>
    
    <!-- 页脚 -->
    <footer>
      <div class="service">
        <i class="iconfont icon-tel" style="font-size: 1.5625rem; color: #39C894;"></i>
        <span id="footer-span">
          服务热线：400-9977-658
        </span>
      </div>
      <div class="option">
        <div class="item">
          触屏版
        </div>
        <div class="item">
          电脑版
        </div>
        <div class="item">
          关于我们
        </div>
        <div class="item">
          联系我们
        </div>
      </div>
      <div id="footer-bottom">
        @sirfang_com&nbsp;如需装修找房先森
      </div>
      <!-- 小广告 -->
      <div id="advertisement">
        <img src="../assets/05.png" >
      </div>
    </footer>
    
    
  </div>
</template>

<script>
	export default {
		data() {
			return {
        active:0
      }
		},
		methods: {},
		created() {}
	}
</script>


<style lang="scss" scoped>
.renovation{
  width: 100%;
  height: 100%;
  // 头部布局
  header{
    width: 100%;
    height: 7.625rem;
    background: #30c894;
    display: flex;
    position: relative;
    .header-img{ 
      margin-left: 2.5rem;
      margin-top: 0.3125rem;
      display: inline-block;
      width: 7.125rem;
      height: 7.125rem;
    }
    .header-div{
      width: 30.625rem;
      height: 5.625rem;
      margin-left: 1.75rem;
      margin-top: 1.25rem;
      .header-div>img{
        width: 18.75rem;
        height: 2.5rem;
      }
      .header-input{
        margin-top: 0.25rem;
        width: 20rem;
        height: 2.5rem;
        display: inline-block;
        border-radius: 1.25rem;
        padding-left: 0.625rem;
        background-color: #2bb281;
        border: 0rem;
        font-size: 1.125rem;
        color: red;
      }
      input::-webkit-input-placeholder{
        color: white;
      }
    }
    .header-postipon{
      position: absolute;
      top: 0.625rem;
      right: 0.625rem;
    }
  }
  
  // 搜索框
  #serch{
    width: 100%;
    height: 5.25rem;
    padding-top: 0.125rem;
    #serch-box{
      width: 95%;
      height: 4.6875rem;
      margin: auto;
      display: flex;
      .serch{
        flex: 3;
        height: 4.6875rem;
        border: 0.125rem solid #39c894;
        font-size: 1.75rem;
        color: #aaa;
        padding-left: 0.9375rem;
        box-sizing: border-box;
      }
      button{
        flex: 1;
        color: white;
        border: 0rem;
        background-color: #39c894;
        height: 4.6875rem;
      }
    }
  }
  
  // jianxi
  .jianxi{
    width: 100%;
    height: 1.25rem;
    background-color: #eaeaea;
  }

// 装修对比 tab栏切换
  #Decorationcom{
    width: 100%;
    height: 18rem;
    .van-tabs{
       width: 100%;
       height: 12.75rem;
      .van-tab{
        width: 100%;
        }
      }
      .button{
        width: 95%;
        height: 4.375rem;
        margin: auto;
        text-align: center;
        line-height: 4.375rem;
        font-size: 1.25rem;
        color: #39C894;
        border: 0.0625rem solid #39C894;
      }
  }
  
  // 为您推荐
  #recommend{
    width: 100%;
    padding-top: 1.25rem;
    .rec-header{
      width: 95%;
      height: 2.8125rem;
      margin: auto;
      border-left: 0.3125rem solid #39C894; 
      font-size: 2.25rem;
      .rec-span{
        margin-left: 1.25rem;
        display: inline-block;
      }
    }
    .dome{
      width: 95%;
      height: 10.9375rem;
      // background-color: red;
      margin:  1.875rem auto;
      border-bottom: 1px solid #f4f4f4;
      .dome-box{
        width: 100%;
        height: 9.0625rem;
        display: flex;
        .box-right{
          flex: 1;
          margin-left: 1.5625rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .right-p{
            font-size: 1.5625rem;
          }
          .right-time-look{
            width: 15rem;
            height: 1.875rem;
            display: flex;
            justify-content: space-between;
            .right-time{
              font-size: 1.0625rem;
              color: #ccc;
            }
            .right-look{
              font-size: 1.0625rem;
              color: #ccc;
            }
          }
        }
      }
    }
    .Change{
      width: 95%;
      margin: auto;
      height: 4.375rem;
      border: 1px solid #ccc;
      text-align: center;
      line-height: 4.375rem;
      color: #39C894;
      font-size: 1.25rem;
      margin-bottom: 1.25rem;
    }
  }

//  结尾下文
  .ending{
    width: 100%;
    height: 13.625rem;
    padding: 1.875rem 1.25rem;
    box-sizing: border-box;
    text-indent: 2em;
    font-size: 1.5625rem;
  }
  
  // 页脚
  footer{
    width: 100%;
    height: 13.125rem;
    padding-top: 2.8125rem;
    position: relative;
    .service{
      width: 50%;
      margin: auto;
      height: 2.5rem;
      .footer-span{
        font-size: 1.25rem;
      }
    }
    .option{
      width: 100%;
      display: flex;
      height: 1.875rem;
      margin-bottom: 1.625rem;
      justify-content: space-between;
      .item{
        flex: 1;
        text-align: center;
        line-height: 1.875rem;
        border-right: 1px solid #eaeaea;
      }
    }
    #footer-bottom{
      width: 50%;
      margin: auto;
    }
    #advertisement{
      width: 100%;
      height: 9.0625rem;
      position: absolute;
      left: 0rem;
      bottom: 0rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
