<script setup>
const props = defineProps(['columns', 'dataSource'])
</script>

<template>
  <a-table
    :columns="props.columns"
    :data-source="props.dataSource"
    :pagination="false"
    bordered
  >
  </a-table>
</template>
