export function resolveMessage() {
  let count = 0
  let results = []
  let endpts = new Set()
  // Create WebSocket connection.
  const socket = new WebSocket('wss://localhost:9888/ws/2ebd6d02');

  // Connection opened
  socket.addEventListener('open', function (event) {
    socket.send('Hello Server!');
  });

  // Listen for messages
  socket.addEventListener('message', function (event) {
    // console.log('Message from server ', event.data);
    console.group('-- listener message --')
    if (event.data.startsWith('{')) {
      const data = JSON.parse(event.data)
      console.log(data)
      results.push(data)
      count++
      endpts.add(data.endpt)
      console.log('--- endpt start ---', count)
      console.log(endpts)
      console.log(endpts.size, count === endpts.size)
      console.log('--- endpt end ---')
    } else {
      console.log(event.data)
    }

    console.log(results)
    console.groupEnd()
  });
}