import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter";
import GeneralLayout from "../components/Layout/GeneralLayout";

const App = () => {
  return (
    <BrowserRouter>
      <GeneralLayout>
        <AppRouter />
      </GeneralLayout>
    </BrowserRouter>
  );
};

export default App;
