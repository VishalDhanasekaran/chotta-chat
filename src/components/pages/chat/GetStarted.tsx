import styled from "styled-components";
import Row from "@/components/common/Row";
import Prompts from "@/statics/prompts";
import { Colors } from "@/statics/colors";
const GetStartedEl = styled(Row)<{ $active?: boolean }>`
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
  background-color: black
`;
const TitleEl = styled.h1`
  font-size: 5rem;
  margin: 0;
  padding: 0;
  color: ${Colors.Primary};
`;

const HolderEl = styled(Row)`
  align-items: center;
  width: 100%;
  /* background-color: red; */
  gap: 18px;
  flex-direction: column;
`;
const SugEl = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 20px;
  width: 100%;
  /* max-width: 200px; */
  user-select: none;
  cursor: pointer;
  height: 80px;
  transition: all 0.15s;
  text-align: left;
  border: 1px solid ${Colors.White};
  gap: 10px;

  & > div {
    &:first-child {
      color: ${Colors.White};
      font-size: 0.8rem;
      font-weight: bold;
    }
    &:last-child {
      color: ${Colors.Primary};
      font-size: 0.8rem;
    }
  }

  &:hover {
    transform: translateY(-8px);
    background-color: ${Colors.Black};
    box-shadow: rgb(223, 246, 255) 0px 2px 8px 0px;

    & > div {
      &:first-child {
        color: ${Colors.Primary};
      }
      &:last-child {
        color: ${Colors.White};
      }
    }
  }
`;

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