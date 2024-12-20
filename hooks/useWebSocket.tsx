import { useEffect, useState, useRef } from "react";

interface WebSocketMessage {
  message: string;
}

export default function useWebSocket(serverUrl: string) {
  const [messages, setMessages] = useState<WebSocketMessage[]>([]);
  const webSocketRef = useRef<WebSocket | null>(null);

  const createWebSocket = () => {
    if (webSocketRef.current) {
      webSocketRef.current.close();
    }

    const socket = new WebSocket(serverUrl);

    socket.onopen = () => {
      console.log("Connected to WebSocket");
    };

    socket.onmessage = (event: MessageEvent) => {
      const data: WebSocketMessage = JSON.parse(event.data);
 
      setMessages((prev) => [...prev, data]);
    };

    webSocketRef.current = socket;
  };

  useEffect(() => {
    createWebSocket();
    return () => {
      webSocketRef.current?.close();
    };
  }, [serverUrl]);

  const sendMessage = (message: WebSocketMessage) => {
    if (webSocketRef.current?.readyState === WebSocket.OPEN) {
      webSocketRef.current.send(JSON.stringify(message));
    } else {
      console.error("WebSocket is not open");
    }
  };

  return { messages, sendMessage };
}
