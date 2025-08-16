
import { ResponseBubbleEl } from "@/components/ui/Chats";
import { AssistantContent } from "ai";

export default function ResponseBubble({ key, message }: {key:string, message: AssistantContent  }) 
{
    return <ResponseBubbleEl>
        {message.toString()}
    </ResponseBubbleEl>;
}