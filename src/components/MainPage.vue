<script setup lang="ts">
import { OnyxTable } from 'sit-onyx'
</script>

<template>
  <OnyxTable class="table">
    <tr>
      <td>Strawberry</td>
      <td>4.50</td>
      <td>200</td>
      <td>100</td>
      <td>5</td>
    </tr>
    <tr>
      <td>Apple</td>
      <td>1.99</td>
      <td>3000</td>
      <td>200</td>
      <td>3</td>
    </tr>
    <tr>
      <td>Banana</td>
      <td>3.75</td>
      <td>18000</td>
      <td>300</td>
      <td>4</td>
    </tr>

    <template #head>
      <tr>
        <th>No</th>
        <th>Crypto currency</th>
        <th>Market cap</th>
        <th>Price</th>
        <th>24h %</th>
        <th>Count</th>
      </tr>
    </template>
  </OnyxTable>
</template>

<style>
.table {
}
</style>
