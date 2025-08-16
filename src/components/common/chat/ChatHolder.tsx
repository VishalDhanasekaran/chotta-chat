import { ChatHolderEl } from "@/components/ui/Chats";
import { ModelMessage } from "ai";
import ResponseBubble from "./ResponseBubble";
import UserBubble from "./UserBubble";


export default function ChatHolder({ messages }: { messages: ModelMessage[] }) {
  return (
    <ChatHolderEl id="chatHolder">
      {messages.map((x) => {
        if (x.role === "assistant")
          return <ResponseBubble role={x.role} message={x.content} />;
        else if (x.role === "user")
          return <UserBubble key={x.id} message={x} />;
      })}
    </ChatHolderEl>
  );
}