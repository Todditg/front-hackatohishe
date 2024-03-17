import styled from "styled-components";

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 16px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.backgroundSecondaryJotunheim};
  gap: 16px;
`;

export const SidebarItem = styled.div`
  padding: 10px;
  cursor: pointer;
`;
export const SideBarStyled = styled.div`
  display: flex;
  padding: 16px;
  color: blue;
`;

export const UserEntry = styled.div`
  b
`;
