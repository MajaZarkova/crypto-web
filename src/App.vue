<script lang="ts" setup>
import { OnyxAppLayout, OnyxPageLayout, OnyxNavBar } from 'sit-onyx'
import HomeView from './views/HomeView.vue'
</script>

<template>
  <OnyxAppLayout class="dark">
    <template #navBar>
      <OnyxNavBar app-name="Crypto Web" />
    </template>

    <OnyxPageLayout>
      <div class="onyx-grid-container">
        <HomeView />
      </div>
    </OnyxPageLayout>
  </OnyxAppLayout>
</template>

<style scoped></style>
