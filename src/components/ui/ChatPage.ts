import styled from 'styled-components';
import { Colors } from '@/statics/colors';
import Row from '@/components/common/Row';

export const ChatPageEl = styled(Row)`
    background-color: black;
    position: relative;
    width: 100svw;
    min-height: 100svh;
    height: fit-content;
    color: ${Colors.White}
`;


export const GetStartedEl = styled(Row)<{ $active?: boolean }>`
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
export const TitleEl = styled.h1`
  font-size: 5rem;
  margin: 0;
  padding: 0;
  color: ${Colors.Primary};
`;

export const SugEl = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 20px;
  width: 100%;
  max-width: 200px; 
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


export const ChatInputEl = styled(Row) <{ $hasmessage: string }>`
  position: fixed;
  bottom: 0;
  z-index: 2;
  width: 100%;
  gap: 10px;
  flex-direction: column;
  margin-top: auto;
  min-height: fit-content;
  height: fit-content;
  transition: all 0.15s;
  padding-bottom: ${(p) => (p.$hasmessage === "true" ? "20px" : "200px")};
`;

export const HolderEl = styled.div<{ $chatting?: boolean }>`
  display: flex;
  align-items: center;
  background-color: ${Colors.Background};
  width: ${(p) => (p.$chatting ? "calc(100svw - 40px)" : "70%")};
  margin: 0 auto;
  border-radius: 10px;
  padding: 10px 0;
  padding-right: 20px;
  outline: 2px solid ${Colors.Primary};
  gap: 10px;
  color: ${Colors.White};
  overflow: visible auto;

  & > #CHAT_INPUT {
    all: unset;
    color: ${Colors.White};
    width: 100%;
    margin-left: 20px;
    font-size: 1.2rem;
    max-height: 30px;
    position: relative;

    & > span {
      white-space: pre-wrap !important;
    }
  }
`;

export const CharacterCounterEl = styled(Row)`
  margin: 0 auto;
  font-weight: 400;
  font-size: 0.8rem;
  color: ${Colors.White};
  width: fit-content;
  background-color: ${Colors.Primary};
  padding: 2px 8px;
  gap: 3px;
  border-radius: 10px;
`;
export const ChatHolderEl = styled(Row)`
  width: 100%;
  height: fit-content;
  flex-direction: column;
  gap: 20px;
  padding: 20px 20px 130px 20px;
`;
