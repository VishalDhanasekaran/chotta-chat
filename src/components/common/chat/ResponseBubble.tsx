
import { ResponseBubbleEl } from "@/components/ui/Chats";

export default function ResponseBubble({ key, message }: { key: number, message: string }) {
    return <ResponseBubbleEl>
        {message}
    </ResponseBubbleEl>;
}