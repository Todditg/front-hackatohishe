import styled from "styled-components";

export const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.backgroundPrimaryMain};
  overflow: hidden;
`;

export const AppStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundPrimaryMain};
`;

export const Layout = styled.div<{ isShowSideBar?: boolean }>`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundPrimaryMain};
  border-radius: ${({ isShowSideBar }) => (isShowSideBar ? "40px 0 0 0" : "0")};
`;
