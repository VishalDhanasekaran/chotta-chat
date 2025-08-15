import { useChat as useAIChat} from '@ai-sdk/react';
import { useEffect, useRef, useState } from "react";

export type CHAT_STATE = "GET_STARTED" | "CHAT";

export default function useChat() {
  const [stage, setStage] = useState<CHAT_STATE>("GET_STARTED");
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLDivElement | null>(null);
  
  const {
    messages,
    sendMessage,
    status,
    error,
    stop,
    regenerate,
    setMessages,
  } = useAIChat({
    onError: (e: Error) => {
      console.log("useChat error", e.message);
    },
  });

  // Custom submit handler
  const handleSubmit = e => {
    e.preventDefault();
    sendMessage({ text: input });
    setInput('');
  };



  const reset = () => {
    stop();
    
    setInput("");
    setMessages([]);
  };

  const focusPrompt = () => {
    if (inputRef.current) 
      inputRef.current.focus();
  };

  // Scroll to bottom when messages change
  useEffect(() => {
    if (messages.length > 0) {
      setStage("CHAT");
      if (typeof window !== "undefined") {
        document.getElementById("chotta-chat")?.scrollTo({ top: 1000000000 });
      }
    } else {
      setStage("GET_STARTED");
    }
  }, [messages]);

  // Focus on prompt input when not loading
  useEffect(() => {
    if (status==="ready") 
      focusPrompt();
  }, [status]);

  return {
    messages,
    stage,
    input,
    status,
    error,
    stop,
    handleSubmit,
    setInput,
    inputRef,
    regenerate,
    reset,
     
  };
}