<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Machi Cat UI Button</h1>
    <h2>Component Type</h2>
    <div class="space-x-4">
      <MaBtn v-for="type in btnTypes" :key="type.value" :status="type.value">
        {{ type.label }}
      </MaBtn>
    </div>
    <h2>Class Type</h2>
    <div class="space-x-4">
      <button class="ma-btn ma-btn-default">Default</button>
      <button class="ma-btn ma-btn-primary">Primary</button>
      <button class="ma-btn ma-btn-secondary">Secondary</button>
      <button class="ma-btn ma-btn-accent">Accent</button>
      <button class="ma-btn ma-btn-info">Info</button>
      <button class="ma-btn ma-btn-success">Success</button>
      <button class="ma-btn ma-btn-warning">Warning</button>
      <button class="ma-btn ma-btn-error">Error</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import MaBtn, { type MaBtnProps } from '../components/ma-btn.vue';
type ButtonStatus = MaBtnProps['status'];
const btnTypes: { value: ButtonStatus; label: string }[] = [
  { value: 'default', label: 'Default' },
  { value: 'primary', label: 'Primary' },
  { value: 'secondary', label: 'Secondary' },
  { value: 'accent', label: 'Accent' },
  { value: 'info', label: 'Info' },
  { value: 'success', label: 'Success' },
  { value: 'warning', label: 'Warning' },
  { value: 'error', label: 'Error' }
];
</script>
