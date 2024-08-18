<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="main">
    <h2>Vue 微应用</h2>
    <el-menu default-active="1" mode="horizontal">
      <RouterLink class="tab" to="/table">
        <el-menu-item index="1">
          <span>表格页</span>
        </el-menu-item>
      </RouterLink>
      <RouterLink class="tab" to="/list">
        <el-menu-item index="2">
          <span>列表页</span>
        </el-menu-item>
      </RouterLink>
    </el-menu>

    <RouterView />
  </div>
</template>

<style scoped>
.main {
  width: 800px;
  margin: 0 auto;
}
.tab {
  text-decoration: none;
}
</style>
