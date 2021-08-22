// https://www.cnblogs.com/mafly/p/websocket.html

export const ws = new WebSocket(
  process.env.NODE_ENV === 'production' ? 'wss://v2.ncuxz.fun/websocket' : 'ws://localhost:4000/websocket'
)
