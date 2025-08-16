
import { UserBubbleEl } from "@/components/ui/Chats";
import { AssistantModelMessage, ModelMessage } from "ai";

export default function UserBubble({ key, message }: {key:string, message: AssistantModelMessage  }) 
{
  return (
  <UserBubbleEl>
    {message.toString()}
  </UserBubbleEl>);
}