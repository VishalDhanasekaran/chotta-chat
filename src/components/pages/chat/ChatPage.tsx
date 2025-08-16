'use client'
import React, { useState } from 'react'
import styled from 'styled-components';
import { Colors } from '@/statics/colors';
import Row from '@/components/common/Row';
import GetStarted from "./GetStarted";
import ChatInput from '@/components/common/input/ChatInput';
import useChat from "@/hooks/useChat";

const ChatPageEl = styled(Row)`
    background-color: black;
    position: relative;
    width: 100svw;
    min-height: 100svh;
    height: fit-content;
    color: ${Colors.White}
`;
function ChatPage() {
   
    const { messages,
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
    } = useChat();

    const canSend = (status !== 'submitted' && status !== 'streaming') && typeof input == 'string' && input.length > 0
    const handleInputChange = (
        e:
          | React.ChangeEvent<HTMLInputElement>
          | React.ChangeEvent<HTMLTextAreaElement>
      ) => {
        
      }
    return (

        <>
            <ChatPageEl>
                <GetStarted active={stage === "GET_STARTED"} setPrompt={setInput} />
                <ChatInput
                    handleSubmit={handleSubmit}
                    inputRef={inputRef}
                    status={status}
                    canSend={canSend}
                    messageCount={messages.length}
                    prompt={input}
                    
                />
            </ChatPageEl>

        </>
    )
}

export default ChatPage