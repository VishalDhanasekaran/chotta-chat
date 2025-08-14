'use client'
import React, { useState } from 'react'
import styled from 'styled-components';
import Row from '@/components/common/Row';
import GetStarted from "./GetStarted";
import { Colors } from '@/statics/colors';
const ChatPageEl = styled(Row)`
    position: relative;
    width: 100svw;
    min-height: 100svh;
    height: fit-content;
    color: ${Colors.White}
`;
function ChatPage() {
    const [prompt, setPrompt] = useState();
    return (
        <>
            <ChatPageEl>
                <GetStarted active={true} setPrompt={setPrompt}/>
            </ChatPageEl>

        </>
    )
}

export default ChatPage