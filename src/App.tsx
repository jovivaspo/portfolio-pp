import { BrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { AppRouter } from "./router/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <AppRouter />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
