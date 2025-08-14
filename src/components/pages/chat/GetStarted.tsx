import styled from "styled-components";
import Row from "@/components/common/Row";
import Prompts from "@/statics/prompts";
const GetStartedEl = styled(Row)<{$active: boolean}>`
  position: absolute;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: fit-content;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -80%);
  flex-direction: column;
  display: ${(p) => (p.$active ? "" : "none")};
  gap: 30px;
`;

const TitleEl = styled.h1 ``;
const HolderEl = styled(Row)``;
const SugEl = styled.div ``;

function GetStarted({active, setPrompt}:{active: boolean, 
    setPrompt: Function
}) {
  return (
    <GetStartedEl $active={true}>
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