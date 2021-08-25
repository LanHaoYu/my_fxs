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
    <div id="jianxi">
    </div>
    
    <!-- tab栏  装修对比  -->
     <div id="Decorationcom">
       <van-tabs v-model="active" color="#39c894" line-width="10rem" >
         <van-tab title="装修前">
           <div class="top" style="display: flex;justify-content: space-between;">
            <div style="flex: 1;height: 12.5rem;">
              <div id="aa">
                
                <i class="iconfont icon-house" style="width:6.25rem;height: 6.25rem;display: inline-block;"></i>
              </div>
            </div>
            <div style="flex: 1;height: 12.5rem;">
              
            </div>
            <div style="flex: 1;height: 12.5rem;">
              
            </div>
            <div style="flex: 1;height: 12.5rem;">
              
            </div>
           </div>
         </van-tab>
         <van-tab title="装修中">内容 2</van-tab>
         <van-tab title="装修后">内容 3</van-tab>
       </van-tabs>
     </div>
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
  #jianxi{
    width: 100%;
    height: 1.25rem;
    background-color: #ccc;
  }

// 装修对比 tab栏切换
#Decorationcom{
  width: 100%;
  height: 25.875rem;
  .van-tabs{
    width: 100%;
    height: 18.75rem;
   
  }
}
}
</style>
