import styled from "styled-components";

export const MainPageStyle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  color: red;
  padding: 16px;
  ${({ theme }) => theme.colors.backgroundPrimaryMain}
`;
