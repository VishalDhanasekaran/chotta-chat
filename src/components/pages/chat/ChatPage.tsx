'use client'
import React, { useState } from 'react'
import GetStarted from "./GetStarted";
import ChatInput from '@/components/common/input/ChatInput';
import useChat from "@/hooks/useChat";
import { ChatPageEl } from '@/components/ui/ChatPage';
export default function ChatPage() 
{
   
    const { messages,
        stage,
        input,
        status,
        handleSubmit,
        setInput,
        inputRef,
        handleInputChange
    } = useChat();

    const canSend = (status !== 'submitted' && status !== 'streaming') && typeof input == 'string' && input.length > 0
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
                    handleInputChange={handleInputChange}
                    
                />
            </ChatPageEl>

        </>
    )
}

