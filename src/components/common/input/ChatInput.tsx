import { Colors } from "@/statics/colors";
import { ChatRequestOptions } from "ai";
import styled from "styled-components";
import Row from "../Row";
import Spinner from "../Spinner";
import SendBtn from "./SendBtn";

const ChatInputEl = styled(Row)<{ $hasmessage: string }>`
  position: fixed;
  bottom: 0;
  z-index: 2;
  width: 100%;
  gap: 10px;
  flex-direction: column;
  margin-top: auto;
  min-height: fit-content;
  height: fit-content;
  transition: all 0.15s;
  padding-bottom: ${(p) => (p.$hasmessage === "true" ? "20px" : "200px")};
`;

const HolderEl = styled.div<{ $chatting?: boolean }>`
  display: flex;
  align-items: center;
  background-color: ${Colors.Background};
  width: ${(p) => (p.$chatting ? "calc(100svw - 40px)" : "70%")};
  margin: 0 auto;
  border-radius: 10px;
  padding: 10px 0;
  padding-right: 20px;
  outline: 2px solid ${Colors.Primary};
  gap: 10px;
  color: ${Colors.White};
  overflow: visible auto;

  & > #CHAT_INPUT {
    all: unset;
    color: ${Colors.White};
    width: 100%;
    margin-left: 20px;
    font-size: 1.2rem;
    max-height: 30px;
    position: relative;

    & > span {
      white-space: pre-wrap !important;
    }
  }
`;

const CharacterCounterEl = styled(Row)`
  margin: 0 auto;
  font-weight: 400;
  font-size: 0.8rem;
  color: ${Colors.White};
  width: fit-content;
  background-color: ${Colors.Primary};
  padding: 2px 8px;
  gap: 3px;
  border-radius: 10px;
`;

export default function ChatInput({
  handleSubmit,
  prompt,
  canSend,
  handleInputChange,
  maxContextSize,
  isLoading,
  messageCount,
  inputRef,
}: {
  prompt: string;
  inputRef: any;
  messageCount: number;
  handleSubmit: (
    event?: {
      preventDefault?: () => void;
    },
    chatRequestOptions?: ChatRequestOptions
  ) => void;
  canSend: boolean;
  maxContextSize: number;

  isLoading: boolean;
  handleInputChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}) {
  return (
    <ChatInputEl
      $hasmessage={messageCount > 0 ? "true" : "false"}
      onKeyDown={(e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          handleSubmit();
        }
      }}
    >
      {prompt.length > 0 ? (
        <CharacterCounterEl>
          {/* <span> {prompt.length}</span>/<span>{maxContextSize}</span> */}
          <span> {prompt.length}</span>
        </CharacterCounterEl>
      ) : (
        ""
      )}
      <HolderEl $chatting={messageCount > 0}>
        <input
          ref={inputRef}
          disabled={isLoading}
          id="CHAT_INPUT"
          value={prompt}
          onChange={handleInputChange}
          style={{ height: "auto" }}
          placeholder="Ask me about stuff"
        />
        {isLoading ? (
          <Spinner size="2rem" />
        ) : (
          <SendBtn handleSubmit={handleSubmit} canSend={canSend} />
        )}
      </HolderEl>
    </ChatInputEl>
  );
}