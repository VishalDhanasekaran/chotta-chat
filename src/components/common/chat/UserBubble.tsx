
import { UserBubbleEl } from "@/components/ui/Chats";
import { ModelMessage, UserModelMessage, UserContent } from "ai";

export default function UserBubble({ key, message }: {key:string, message: UserContent  }) 
{
  return (
  <UserBubbleEl>
    {message.toString()}
  </UserBubbleEl>);
}