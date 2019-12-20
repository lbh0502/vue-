<template>
  <div id="lectureinput">
    <div class="lecture-content-right">
      <div class="lecture-content-right-one">
        <p class="lecture-content-pwd">登陆密码</p>
        <div class="lecture-content-right-from">
          <form action class="lecture-content-form">
            <div class="lecture-content-right-div">
              <label class="lecture-content-right-label" for>原密码</label>
              <input placeholder="请输入原密码" />
            </div>
            <div class="lecture-content-right-div">
              <label class="lecture-content-right-label" for>新密码</label>
              <input placeholder="请输入新密码" />
            </div>
            <div class="lecture-content-right-div">
              <label class="lecture-content-right-label" for>确认密码</label>
              <input placeholder="请确认密码" />
            </div>
          </form>
          <p class="lecture-content-span-one">确认修改</p>
          <p class="lecture-content-span-two">取消修改</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "lectureinput"
};
</script>
<style lang="less">
/* 内容样式 */
#lectureinput {
  /* 内容右边样式 */
  .lecture-content-right {
    width: 880px;
    height: 580px;
    display: inline-block;
    margin-left: 20px;
    margin-top: 20px;
    overflow: hidden;
    background: #fff;
    .lecture-content-right-one {
      .lecture-content-pwd {
        width: 880px;
        line-height: 98px;
        padding-left: 50px;
        font-size: 19px;
        border-bottom: 2px solid #f1f1f1;
      }
      .lecture-content-right-from {
        width: 880px;
        height: 435px;
        margin-top: 20px;
        .lecture-content-form {
          .lecture-content-right-div {
            margin-left: 30px;
            margin-top: 10px;
            font-size: 15px;
            color: #999;
            .lecture-content-right-label {
              width: 60px;
              text-align: right;
              display: inline-block;
              margin-right: 10px;
            }
            input {
              width: 400px;
              height: 35px;
              font-size: 13px;
              color: #999;
              padding-left: 5px;
              outline: medium;
            }
          }
        }
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
    margin-left: 100px;
    margin-top: 15px;
    margin-right: 10px;
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
}
</style>