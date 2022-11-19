import "./App.css";
import React, {useCallback, useEffect, useState} from "react";
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import { Navigate } from "react-router";
import MainPage from "./pages/MainPage/MainPage";
import ItemPage from "./pages/ItemPage/ItemPage";
import TeamPage from "./pages/TeamPage/TeamPage";
import {getCheckForAuthorized} from "./api/data/auth";
import {AccessKey, isLogin} from "./utils/auth";
import AuthPage from "./pages/AuthPages/AuthPage";
import SignUp from "./pages/AuthPages/SignUpPage";
import RemindPassword from "./pages/AuthPages/RemindPassword";

function App() {

  const checkIfUnauthorized = useCallback(async () => {
    if(AccessKey.get()){
      getCheckForAuthorized().catch(() => {
            AccessKey.remove();
            window.location.reload();
          })
    }
  }, []);

  useEffect(() => {
    checkIfUnauthorized()
  }, [])

  return (
    <BrowserRouter>
      <div>
        <Routes>
          {!isLogin() && <Route path={"/sign-up"} element={<SignUp />}/>}
          {!isLogin() && <Route path={"/remind-password"} element={<RemindPassword />}/>}

          <Route path={'/auth'} element={<AuthPage />} />

          {!isLogin() ? <Route path={"/*"} element={<Navigate to="/auth" />}/> : (
              <>
                <Route path="/home" element={<MainPage />} />
                <Route path="/team" element={<TeamPage />} />
                <Route path="/item" element={<ItemPage />} />
                <Route path="*" element={<Navigate to="/home" />} />
              </>
          )}

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
