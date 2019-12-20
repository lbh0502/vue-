<template>
  <div id="informationimg">
    <div class="information-content public">
      <div class="information-content-right">
        <div class="information-content-right-left">
          <div class="information-content-right-content-one">
            <span class="content-img-one">
              <img src="../assets/js8.jpg" alt />
            </span>
            <span class="content-img-two">
              <img src="../assets/js9.jpg" alt />
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
              <img src="../assets/js10.jpg" alt />
            </p>
            <p class="information-content-bottom-two public">
              <span>资质认证(反面)</span>
              <span class="content-img-no">【未认证】</span>
            </p>
            <p class="content-information-content-one a-content-public">请上传能证明您专业技能的图片</p>
            <p class="content-information-content-one">如：职业资格证书、加盖公章的材料证明，获奖证书等</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less">
.public {
  margin: 0 auto;
}
/* 认证信息 右边样式*/
.information-content {
  height: 600px;
  .information-content-right {
    width: 439px;
    height: 600px;
    overflow: hidden;
    position: relative;
    right: -300px;
    margin-left: 20px;
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
          padding-left: 10px;
          padding-top: 10px;
          position: relative;
          top: -35px;
          left: 55%;
        }
        .content-information-content-one {
          text-align: center;
          font-size: 14px;
          color: #b4c0d1;
          letter-spacing: 0.5px;
          
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
  .a-content-public {
    margin-top: 20px;
  }
}
</style>