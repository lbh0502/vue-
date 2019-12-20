<template>
  <div id="information">
    <div class="information-content public">
      <div class="information-content-right">
        <div class="information-content-right-left">
          <div class="information-content-right-content-one">
            <span class="content-img-one">
              <img src="../assets/js4.jpg" alt />
            </span>
            <span class="content-img-two">
              <img src="../assets/js4.jpg" alt />
            </span>
            <p class="content-img-information-one public">
              <span>身份证(正面)</span>
              <span class="content-img-no">【未认证】</span>
            </p>
            <p class="content-img-information-two public">
              <span>身份证(反面)</span>
              <span class="content-img-no">【未认证】</span>
            </p>
            <p class="content-information-content-one a-content-public">请上传真实的身份证信息(正反面)</p>
            <p class="content-information-content-one">照片要四角对齐,如有模糊、反光、太暗、有遮挡,则不予认证</p>
          </div>
        </div>
        <div class="information-content-right-left">
          <div class="information-content-right-content-one">
            <p class="information-content-img-one">
              <img src="../assets/js4.jpg" alt />
            </p>
            <p class="information-content-bottom-two public">
              <span>资质认证(反面)</span>
              <span class="content-img-no">【未认证】</span>
            </p>
            <p class="content-information-content-one">请上传能证明您专业技能的图片</p>
            <p class="content-information-content-one">如：职业资格证书、加盖公章的材料证明，获奖证书等</p>
          </div>
        </div>
      </div>
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
  </div>
</template>
<script>
export default {
  name: "information",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="less">
body {
  background: #f1f1f1;
}
/* 认证信息 右边样式*/
.information-content {
  height: 600px;
  .information-content-right {
    width: 439px;
    height: 580px;
    overflow: hidden;
    position: relative;
    right: -20px;
    top: 20px;
    border-right: 1px solid #f1f1f1;
    .information-content-right-left {
      height: 299px;
      background: #fff;
      border-bottom: 1px solid #f1f1f1;
      overflow: hidden;
      .information-content-right-content-one {
        width: 389px;
        height: 249px;
        margin: 25px 25px;
        img {
          width: 177px;
          height: 140px;
        }
        .public {
          overflow: hidden;
          display: inline-block;
          font-size: 14px;
          color: #b4c0d1;
        }
        .content-img-information-one {
          padding-left: 10px;
          padding-top: 10px;
        }
        .content-img-information-two {
          position: relative;
          left: 230px;
          top: -23px;
        }
        .content-information-content-one {
          text-align: center;
          font-size: 14px;
          color: #b4c0d1;
          margin-top: 5px;
        }
        // 下面认证
        .information-content-img-one {
          width: 177px;
          height: 140px;
          margin: 0 auto;
        }
        .information-content-bottom-two {
          margin-left: 115px;
        }
      }
    }
  }
  // 身份证认证
  .content-img-one {
    width: 177px;
    height: 140px;
    display: inline-block;
    overflow: hidden;
  }
  .content-img-two {
    width: 177px;
    height: 140px;
    display: inline-block;
    margin-left: 35px;
    margin-right: -1px;
    overflow: hidden;
  }
  .content-img-no {
    color: #da4e23;
    font-size: 15px;
  }
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
        cursor: pointer;
      }
    }
  }
  .profile-right-two {
    font-size: 14px;
    color: #999;
    letter-spacing: 1px;
  }
}
}
</style>