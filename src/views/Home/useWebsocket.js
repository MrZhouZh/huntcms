import { ref, unref, onMounted, onUnmounted } from 'vue'

export default function useWebsocket(url) {
  const socket = ref(null)
  const isConnected = ref(false)

  function connect() {
    if (socket.value && socket.value.readyState !== WebSocket.CLOSED)
      return
    socket.value = new WebSocket(url)
    socket.value.onopen = () => {
      console.log('ws opened.')
      isConnected.value = true
    }
  }

  function disconnect() {
    if (socket.value) {
      socket.value.close()
      isConnected.value = false
    }
  }

  function sendMessage(message) {
    if (socket.value && socket.value.readyState === WebSocket.OPEN) {
      socket.value.send(message)
    }
  }

  onMounted(() => {
    connect()
  })

  onUnmounted(() => {
    disconnect()
  })

  return {
    socket: unref(socket),
    isConnected,
    connect,
    disconnect,
    sendMessage,
  }
}