'use client'
import React, { useState } from 'react'
import styled from 'styled-components';
import Row from '@/components/common/Row';
import GetStarted from "./GetStarted";
import { Colors } from '@/statics/colors';
import useChat from "@/hooks/useChat";

const ChatPageEl = styled(Row)`
    background-color: black;
    position: relative;
    width: 100svw;
    min-height: 100svh;
    height: fit-content;
    color: ${Colors.White}
`;
function ChatPage() 
{
    const [prompt, setPrompt] = useState();
    const {setInput, stage} = useChat();
    return (

        <>
            <ChatPageEl>
                <GetStarted active={stage==="GET_STARTED"} setPrompt={setInput}/>
            </ChatPageEl>

        </>
    )
}

export default ChatPage