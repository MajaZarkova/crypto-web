<script lang="ts" setup>
import { OnyxAppLayout, OnyxPageLayout, OnyxNavBar } from 'sit-onyx'
</script>

<template>
  <OnyxAppLayout class="dark">
    <template #navBar>
      <OnyxNavBar app-name="My app" />
    </template>

    <OnyxPageLayout>
      <div class="onyx-grid-container">Your page content here...</div>
    </OnyxPageLayout>
  </OnyxAppLayout>
</template>

<style scoped></style>
