import { MainPage } from "./components/MainPage";
import { AppStyled, AppWrapper, Layout } from "./AppStyle.ts";

export const App = () => (
  <AppWrapper>
    <AppStyled>
      <Layout>
        <MainPage />
      </Layout>
    </AppStyled>
  </AppWrapper>
);

export default App;
