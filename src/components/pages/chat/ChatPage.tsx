'use client'
import React from 'react'
import styled from 'styled-components';
import Row from '@/components/common/Row';
import GetStarted from "./GetStarted";

const ChatPageEl = styled(Row)``;
function ChatPage() {
    return (
        <>
            <ChatPageEl>
                <GetStarted />
            </ChatPageEl>

        </>
    )
}

export default ChatPage