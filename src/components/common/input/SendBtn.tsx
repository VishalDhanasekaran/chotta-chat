import { Colors } from "@/statics/colors";
import { ChatRequestOptions } from "ai";
import { FaCircleArrowUp } from "react-icons/fa6";
import styled from "styled-components";

const SendBtnEl = styled.button<{ $isactive?: string }>`
  all: unset;
  position: sticky;
  top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  transition: all 0.3s;
  color: ${(p) =>
    p.$isactive === "true" ? Colors.Primary : Colors.White};
  cursor: ${(p) => (p.$isactive === "true" ? "pointer" : "default")};
  opacity: ${(p) => (p.$isactive === "true" ? "1" : ".5")};
  box-shadow: ${(p) =>
    p.$isactive === "true"
      ? `${Colors.Primary} 0px 0px 8px
    0px`
      : ""};
  border-radius: 50%;

  &:hover {
    transform: scale(${(p) => (p.$isactive === "true" ? "1.1" : "1")});
  }
`;

export default function SendBtn({
  handleSubmit,
  canSend,
}: {
  handleSubmit: (
    event?: {
      preventDefault?: () => void;
    },
    chatRequestOptions?: ChatRequestOptions
  ) => void;
  canSend: boolean;
}) {
  return (
    <SendBtnEl onClick={handleSubmit} $isactive={canSend ? "true" : "false"}>
      <FaCircleArrowUp />
    </SendBtnEl>
  );
}