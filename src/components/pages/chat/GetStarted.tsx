import Row from "@/components/common/Row";
import Prompts from "@/statics/prompts";
import { GetStartedEl, TitleEl, HolderEl, SugEl } from "@/components/ui/ChatPage";

function GetStarted({active, setPrompt}:{active: boolean, 
    setPrompt: Function
}) {
  return (
    <GetStartedEl $active={active}>
        <Row $fd='column'>
            <TitleEl>
                CHOTTA CHAT
            </TitleEl>
        </Row>
        <HolderEl>
            {
                Prompts.map(p=>{
                    return (<SugEl key={p.id}>
                        <div>
                            {p.title}
                        </div>
                        <div>
                            {p.prompt}
                        </div>
                    </SugEl>);
                })
            }
        </HolderEl>
    </GetStartedEl>
  )
}

export default GetStarted