import Home from "./pages/home/EmployeeHome";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

import WfoPage from "./pages/wfo/WfoPage";
import MWfoPage from "./pages/wfo/MWfoPage";
import LoginScreen from "./pages/login/LoginScreen";
import MHome from "./pages/home/ManagerHome";
import RequestsPage from "./components/wfo/Request";
import FileProcessing from "./components/fileuplod/fileprocessing";
import MyButton from "./pages/reconciliation/reconciliationButton";
import { ReconciliationPage } from "./components/reconciliationFolder/reconciliationPage";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
    <BrowserRouter>
      <Routes>

        <Route path="/">

          <Route index element={<LoginScreen/>}/>

          <Route path="employeedashboard">
              <Route index element={<Home/>}/>
          </Route>

          <Route path="managerdashboard">
              <Route index element={<MHome/>}/>


             
          </Route>



          <Route path="wfo">
            <Route index element={<MWfoPage/>}/>
            <Route path="requests" element={<RequestsPage/>}/>  

          </Route>
          <Route path="users">
            <Route index element={<List/>}/>
          </Route>

          <Route path="reconciliation">
            <Route index element={<ReconciliationPage/>}/>
          </Route>

         
         </Route>

         

       

      </Routes>
    </BrowserRouter>



      {/* <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<LoginScreen />} />
            <Route path="login" element={<LoginScreen />} />
            <Route path="dashboard" element={<Home />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
            <Route path="timexreconcilation">
              <Route index element={<Timexreconcilation/>}/>
              <Route path="dataform" element={<DataForm/>}/>
              <Route path="previousreconcilations" element={<PreviousReconcilations/>}/>
            </Route>
            <Route path="employee">
              <Route index element={<Employee/>}/>
              <Route path="emptimex" element={<Emptimex/>}/>
              <Route path="emptimex/dataform" element={<DataForm/>}/>
              <Route path="emptimex/previousreconcilations" element={<PreviousReconcilations/>}/>
              <Route path="wfo" element={<WfoPage/>}/>
            </Route>
            <Route path="manager">
              <Route index element={<Manager/>}/>
              <Route path="managertimex" element={<Managertimex/>}/>
              <Route path="managertimex/dataform" element={<DataForm/>}/>
              <Route path="managertimex/previousreconcilations" element={<PreviousReconcilations/>}/>
              <Route path="managertimex/employeerequests" element={<MEmployeerequests/>}/>
              <Route path="mwfo" element={<MWfoPage/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
