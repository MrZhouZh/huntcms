<script setup>
import { ref, onUnmounted } from 'vue'
// import useWebsocket from './useWebsocket'
import { useTableData } from '@/composables/state'
import TableData from '@/components/TableData.vue'
// const { socket } = useWebsocket('wss://localhost:9888/ws/5c3056d3')
const { serviceName, dataSource, columns } = useTableData()
const activeKey = ref('1')
const services = ref([])
const currentService = ref()

// console.log(socket)

// function resolveMessage() {
//   let count = 0
//   // let results = []
//   let endpts = new Map()
//   // Create WebSocket connection.
//   socket = new WebSocket('wss://localhost:9888/ws/5c3056d3');
//   socket.onopen =  function() {
//     console.log('ws opened.');
//   }

//   socket.onmessage = function(event) {
//     console.group('-- listener message --')
//     if (event.data.startsWith('{')) {
//       const data = JSON.parse(event.data)
//       console.log(data)
//       // results.push(data)
//       count++
//       const ret = endpts.get(data.endpt) || data.params
//       if (endpts.has(data.endpt)) {
//         ret.concat(data.params)
//       }
//       endpts.set(data.endpt, ret)
//       // if (!currentService.value) {
//       //   currentService.value = results
//       // }
//       console.log('--- endpt start ---', count)
//       console.log(endpts)
//       console.log(endpts.size, count === endpts.size)
//       endpts.forEach((endpt, key) => {
//         const conditions = endpt.map(k => ({
//           key: k.name,
//           name: k.alias,
//         }))
//         services.value.push({
//           key: key,
//           value: conditions
//         })
//       })
//       console.log('--- endpt end ---')
//     } else {
//       console.log(event.data)
//     }

//     // console.log(results)
//     console.log('services==>', services.value);
//     console.groupEnd()
//   }
// }

// resolveMessage()

onUnmounted(() => {
  // socket?.close()
})
</script>

<template>
  <a-typography>
    <a-typography-title>{{ serviceName }} - 硬件状态信息区</a-typography-title>
    <a-typography-paragraph>
      <TableData :columns="columns" :dataSource="dataSource" />
    </a-typography-paragraph>
    <a-typography-title>{{ serviceName }} - 进程状态信息区</a-typography-title>
    <a-typography-paragraph>
      <TableData :columns="columns" :dataSource="dataSource" />
    </a-typography-paragraph>
    <!-- <a-typography-title>{{ serviceName }}</a-typography-title> -->
    <a-typography-paragraph>
      <div class="">
        <!-- <ul></ul> -->
        <span>服务器列表</span>
        <div>参数区</div>
      </div>
    </a-typography-paragraph>
  </a-typography>
  

</template>