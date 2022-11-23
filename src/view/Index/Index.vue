<!--
 * @Author: 爱吃香菜的猹
 * @Date: 2022-11-14 21:19:28
 * @LastEditors: 爱吃香菜的猹
 * @LastEditTime: 2022-11-16 10:36:10
 * @FilePath: \Aurora\src\view\Index\Index.vue
 * @Description: 
-->

<template>
  <section class="colored-section" id="title">
    <div class="container-fluid">
      <!-- Nav Bar -->
      <nav class="navbar navbar-expand-lg navbar-dark">
        <a class="navbar-brand" href="">Aurora</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#footer">了解</a>
            </li>
            <li class="nav-item">
              <button type="button" class="btn btn-outline-light btn-lg registerBtn" @click="login">登录</button>
            </li>
          </ul>

        </div>
      </nav>
      <!-- Title -->
      <div class="row">
        <div class="col-lg-6">
          <h1 class="big-heading">在这里，每个人都可以找到一个有趣的灵魂</h1>
          <button type="button" class="btn btn-outline-light btn-lg download-button" @click="router.push('/login')">注册账户</button>
        </div>
        <div class="col-lg-6">
          <img class="title-image" src="@/assets/img/man.png" alt="iphone-mockup">
        </div>

      </div>

    </div>

  </section>

  <!-- Features -->
  <section class="white-section" id="features">

    <div class="container-fluid">

      <div class="row">
        <div class="feature-box col-lg-4">
          <i class="icon fas fa-check-circle fa-4x"></i>
          <h3 class="feature-title">使用方便</h3>
          <p>你可以使用手机，电脑等一切电子设备</p>
        </div>

        <div class="feature-box col-lg-4">
          <i class="icon fas fa-bullseye fa-4x"></i>
          <h3 class="feature-title">优质平台</h3>
          <p>来自五湖四海的年轻人</p>
        </div>
        <div class="feature-box col-lg-4">
          <i class="icon fas fa-heart fa-4x"></i>
          <h3 class="feature-title">高效匹配</h3>
          <p>我们可以保证您的好友与您三观相符</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials -->
  <section class="colored-section" id="testimonials">
    <div class="carousel-item active container-fluid">
      <h2 class="testimonial-text">为新一代年轻人建立以Aurora为链接的 社交元宇宙</h2>
      <img class="testimonial-image" src="@/assets/img/avatar.png" alt="dog-profile">
      <em>Aurora社区</em>
    </div>
  </section>
  <!-- Footer -->
  <footer class="white-section" id="footer">
    <div class="container-fluid">
      <i class="social-icon fab fa-facebook-f"></i>
      <i class="social-icon fab fa-twitter"></i>
      <i class="social-icon fab fa-instagram"></i>
      <p>武汉工程科技学院 童武制作</p>
    </div>
  </footer>


</template>

<script setup>
import {useRouter} from 'vue-router'
const router=useRouter()

</script>

<script>
export default {
  name: 'Index'
}
</script>
<style lang='less' scoped>
body {
  font-family: "Montserrat";
  text-align: center;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Montserrat-Bold";
}

p {
  color: #8f8f8f;
}

/* Headings */

.big-heading {
  font-family: "Montserrat-Black";
  font-size: 3.5rem;
  line-height: 1.5;
}

/* Containers */

.container-fluid {
  padding: 7% 15%;
}

/* Sections */

.colored-section {
  background-color: #ff4c68;
  color: #fff;
}

.white-section {
  background-color: #fff;
}

/* Navigation Bar */

.navbar {
  padding: 0 0 4.5rem;
}

.navbar-brand {
  font-family: "Ubuntu";
  font-size: 5rem;
  font-weight: bold;
}

.nav-item {
  padding: 0 18px;
}

.nav-item .nav-link {
  font-size: 1.8rem;
  font-family: "Montserrat-Light";
}

/* Buttons */
.download-button {
  margin: 5% 3% 5% 0;
  border-radius: 20rem;
  width: 13rem;
  height: 4rem;
}

.registerBtn {
  margin: 0 0 10rem 0;
  border-radius: 20rem;
  width: 10rem;
  height: 4rem;
  font-size: 1.7rem;
}

/* Title Section */

#title {
  background-color: #ff4c68;
  color: #fff;
  text-align: left;
}

#title .container-fluid {
  padding: 3% 15% 7%;
}

/* Title Image */

.title-image {
  width: 44%;
  transform: rotate(25deg);
  position: absolute;
  right: 15%;
}

/* Features Section */

#features {
  position: relative;
}

.feature-title {
  font-size: 2rem;
}

.feature-box {
  padding: 4.5%;
}

.icon {
  color: #ef8172;
  margin-bottom: 1rem;
}

.icon:hover {
  color: #ff4c68;
}

/* Testimonial Section */

#testimonials {
  background-color: #ef8172;
}

.testimonial-text {
  font-size: 3rem;
  line-height: 1.5;
}

.testimonial-image {
  width: 4%;
  border-radius: 100%;
  margin: 20px;
}

/* Footer Section */
.social-icon {
  margin: 20px 10px;
}

//login

@media (max-width: 1028px) {
  #title {
    text-align: center;
  }

  .title-image {
    position: static;
    transform: rotate(0);
  }
}
</style>