<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <!-- <div class="header"></div> -->
    <el-container>
      <el-header>测试管理系统</el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo dark-mode"
            background-color="transparent"
            text-color="white"
            active-text-color="white"
          >
            <RouterLink to="/">
              <el-menu-item index="1">
                <span>主应用</span>
              </el-menu-item>
            </RouterLink>
            <RouterLink to="/sub-vue">
              <el-menu-item index="2">
                <span>Vue微应用</span>
              </el-menu-item>
            </RouterLink>
            <RouterLink to="/sub-react">
              <el-menu-item index="3">
                <span>React微应用</span>
              </el-menu-item>
            </RouterLink>
          </el-menu>
        </el-aside>
        <el-main>
          <RouterView />
          <div id="container"></div>
        </el-main>
      </el-container>
    </el-container>
  </div>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView /> -->
</template>

<style scoped lang="scss">
.el-header {
  width: 100%;
  height: 60px;
  line-height: 60px;
  font-size: 20px;
  color: white;
  padding: 0 20px;
  background: rgb(2, 1, 64);
}
.el-aside {
  height: calc(100vh - 60px);
  background: rgb(2, 1, 64);
  color: white;
  .is-active {
    background: #296dff;
  }
  a {
    // color: white;
    text-decoration: none;
  }
}
</style>
