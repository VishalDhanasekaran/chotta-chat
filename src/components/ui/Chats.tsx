import styled from 'styled-components';
import { Colors } from '@/statics/colors';
import Row from '@/components/common/Row';

export const ChatHolderEl = styled(Row)`
  width: 100%;
  height: fit-content;
  flex-direction: column;
  gap: 20px;
  padding: 20px 20px 130px 20px;
`;

export const UserBubbleEl = styled(Row)`
  padding: 10px;
  background-color: ${Colors.Primary};
  border-radius: 10px;
  width: fit-content;
  margin-left: auto;
  white-space: pre-wrap;
  max-width: calc(100svw - 40px);
`;

export const ResponseBubbleEl = styled(Row)`
  padding: 10px;
  background-color: ${Colors.Secondary};
  border-radius: 10px;
  width: fit-content;
  white-space: pre-wrap;
  margin-right: auto;
  max-width: calc(100svw - 40px);
`;
