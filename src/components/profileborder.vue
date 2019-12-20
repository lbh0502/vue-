<template>
  <div id="profileborder">
    <div class="profile-right">
      <div class="profile-right-block">
        <div class="profile-right-one">
          <p class="profile-left">个人简介</p>
        </div>
        <div class="profile-right-two">
          <p>
            涂磊，1977年6月10日 出生于江西省南昌市，中国内地男主持人，
            毕业于南方冶金学院(现江西理工大学)计算机系1996级。
          </p>
          <p>
            2006年，转战电视节目，随后主持了长沙晚间法律节目《方圆调查》。
            2010年，担任青海卫视新闻脱口秀节目《嘎嘣爆米花》的嘎嘣观察员[1]。
            2011年，主持浙江钱江频道电视新闻时评类节目《九点半》[2]。2012年，
            主持了江西卫视新闻评论类节目《深度观察》[3]。2013年，
            担任河北卫视情感谈话节目《情感大裁判》的主持人[4]。
            2014年， 担任天津卫视职场招聘节目《非你莫属》的主持人[5] ;
            同年，在天津卫视情感综艺类节目《爱情保卫战》中担任情感导师[6]。
          </p>
        </div>
        <p class="lecture-content-span-one">确认修改</p>
        <p class="lecture-content-span-two">取消修改</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "profile",
  data() {
    return {};
  }
};
</script>
<style lang="less">
* {
  padding: 0px;
  margin: 0px;
}
.profile-right {
  width: 439px;
  height: 600px;
  background: #fff;
  .profile-right-block {
    width: 389px;
    height: 550px;
    margin: 25px 25px;
    .profile-right-one {
      width: 389px;
      height: 80px;
      overflow: hidden;
      .profile-left {
        font-size: 25px;
        margin-top: 15px;
      }
    }
  }
  .profile-right-two {
    font-size: 15px;
    height: 400px;
    color: #999;
    letter-spacing: 2px;
    border: 1px solid #999;
    p:first-child {
      margin-bottom: 15px;
      margin: 15px 15px;
    }
    p:last-child {
      margin: 15px 15px;
    }
  }
}
.lecture-content-span-one {
  width: 150px;
  height: 45px;
  background: #00aaff;
  text-align: center;
  line-height: 45px;
  display: inline-block;
  margin-left: 15px;
  margin-top: 15px;
  margin-right: 15px;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
}
.lecture-content-span-two {
  width: 149px;
  height: 44px;
  text-align: center;
  line-height: 44px;
  display: inline-block;
  border: 1px solid #999;
  border-radius: 5px;
  cursor: pointer;
}
</style>