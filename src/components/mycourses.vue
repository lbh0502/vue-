<template>
  <div id="mycourses">
    <div class="myinfo-center">
      <div class="myinfo-center-content">
        <div class="mycourses-content-one">
          <div class="mycourses-content-one-div">
            <img src="../assets/JS11.jpg" alt />
          </div>
          <div class="mycourses-content">
            <p>1、不得上传来经授权的他入作品,以及色情、反动等违法视频。</p>
            <p>2、视频大小限制:不支持断点续传,视频文件最大200M</p>
            <p>3、支持视频音频格式: mo4、 fv. f4v. webm</p>
            <p>4、不支持时长小于秒或大于10小时的视频文件，上传后 将不能成功转码</p>
            <p>5、高清( 360P ):视频分所率>=640x360，视频码率>=800kbps</p>
            <p>6、超清( 720P ):视频分解率>=960x540.视频码率>=1500kbps</p>
            <p>7、蓝光(1080P) :视频分辨率>-1920x1080. 视频码率>-2500kbps</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "mycourses",
  
};
</script>
<style lang="less">
* {
  padding: 0px;
  margin: 0px;
}
.myinfo-center {
  width: 880px;
  height: 600px;
  overflow: hidden;
  .myinfo-center-content {
    width: 840px;
    height: 580px;
    background: #fff;
    margin: 20px 20px;
    .mycourses-content-one {
      width: 600px;
      margin: 0 auto;
      .mycourses-content-one-div {
        width: 500px;
        height: 150px;
        img {
          width: 100px;
          height: 80px;
          position: relative;
          left: 250px;
          top: 50px;
          cursor: pointer;
        }
      }
      .mycourses-content {
          margin-top: 20px;
        p {
          font-size: 14px;
          color: #999;
          margin-left: 120px;
          margin-top: 20px;
        }
      }
    }
  }
}
</style>