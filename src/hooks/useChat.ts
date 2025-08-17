import { useChat as useAIChat } from '@ai-sdk/react';
import { useEffect, useRef, useState } from "react";
import { ChatRequestOptions } from "ai";

export type CHAT_STATE = "GET_STARTED" | "CHAT";

export default function useChat() {
  const [stage, setStage] = useState<CHAT_STATE>("GET_STARTED");
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null); // Changed to HTMLInputElement

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setInput(e.target.value)
  }


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

  // Custom submit handler - updated to match the expected signature
  const handleSubmit = async (
    event?: { preventDefault?: () => void },
    chatRequestOptions?: ChatRequestOptions
  ) => {
    // Prevent default if event is provided
    if (event?.preventDefault) {
      event.preventDefault();
    }

    // Only send if there's input
    if (input.trim()) {
      sendMessage({ text: input.trim() });
      setInput('');
      try {
        const response = await fetch('/api/chat', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: input }),
        });

        if (!response.ok) {
          throw new Error('Failed to get response');
        }
        const data = await response.json();
        const aiMessage = {
          role: "assistant",
          content: data.message,
        };
        
        return aiMessage;
      }
      catch (error: any) {
        console.error("Error:", error);
        const errorMessage = {
          role: "assistant",
          content: "Sorry, I encountered an error while processing your request.",
        };

      }

    }
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
    }
    else {
      setStage("GET_STARTED");
    }
  }, [messages]);

  // Focus on prompt input when not loading
  useEffect(() => {
    if (status === "ready")
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
    handleInputChange,
    inputRef,
    regenerate,
    reset,
  };
}