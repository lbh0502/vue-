<template>
  <div>
    <div class="profile-right">
      <div class="profile-right-block">
        <div class="profile-right-one">
          <p class="profile-left">个人简介</p>
            <p class="profile-right-edit">编辑</p>
        </div>
        <div class="profile-right-two">
          <p>
            涂磊，1977年6月10日 出生于江西省南昌市，中国内地男主持人，
            毕业于南方冶金学院(现江西理工大学)计算机系1996级。人。
            2006年，转战电视节目，随后主持了长沙晚间法律节目《方圆调查》。
            2010年，担任青海卫视新闻脱口秀节目《嘎嘣爆米花》的嘎嘣观察员[1]。
            2011年，主持浙江钱江频道电视新闻时评类节目《九点半》[2]。2012年，
            主持了江西卫视新闻评论类节目《深度观察》[3]。2013年，
            担任河北卫视情感谈话节目《情感大裁判》的主持人[4]。
            2014年， 担任天津卫视职场招聘节目《非你莫属》的主持人[5] ;
            同年，在天津卫视情感综艺类节目《爱情保卫战》中担任情感导师[6]。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less">
.profile-right {
  width: 439px;
  height: 580px;
  background: #fff;
  overflow: hidden;
  position: relative;
  top: -560px;
  left: 460px;
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
        display: inline-block;
      }
      .profile-right-edit {
        display: inline-block;
        font-size: 25px;
        color: #00aaff;
        margin-left: 235px;
        // cursor: pointer;
      }
    }
  }
  .profile-right-two {
    font-size: 14px;
    color: #999;
    letter-spacing: 1px;
  }
}
</style>