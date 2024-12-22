<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Web Machi UI 元件展示</h1>
    <div class="space-y-4">
      <MaBtn>預設按鈕</MaBtn>
      <MaBtn status="success">成功按鈕</MaBtn>
      <MaBtn status="error">錯誤按鈕</MaBtn>
      <MaBtn status="warning">警告按鈕</MaBtn>
      <MaBtn disabled>禁用按鈕</MaBtn>
    </div>
  </div>
</template>

<script setup lang="ts">
import MaBtn from '../components/ma-btn.vue'
</script>