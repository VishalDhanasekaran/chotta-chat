import { ChatRequestOptions } from "ai";
import Spinner from "../Spinner";
import SendBtn from "./SendBtn";
import { ChatInputEl, CharacterCounterEl, HolderEl } from "@/components/ui/ChatPage";

export default function ChatInput({
  handleSubmit,
  handleInputChange,
  prompt,
  canSend,
  status,
  messageCount,
  inputRef,
}: {
  prompt: string;
  inputRef: React.RefObject<HTMLInputElement | null>; // Updated type
  messageCount: number;
  handleSubmit: (
    event?: {
      preventDefault?: () => void;
    },
    chatRequestOptions?: ChatRequestOptions
  ) => void;
  canSend: boolean;
  handleInputChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  status: string;
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
          <span> {prompt.length}</span>
        </CharacterCounterEl>
      ) : (
        ""
      )}
      <HolderEl $chatting={messageCount > 0}>
        <input
          ref={inputRef}
          disabled={status === 'streaming' || status === 'submitted'} 
          id="CHAT_INPUT"
          value={prompt}
          onChange={handleInputChange}
          style={{ height: "auto" }}
          placeholder="Ask me about stuff"
        />
        {status === 'submitted' ? (
          <Spinner size="2rem" />
        ) : (
          <SendBtn handleSubmit={handleSubmit} canSend={canSend} />
        )}
      </HolderEl>
    </ChatInputEl>
  );
}