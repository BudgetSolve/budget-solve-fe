import {Route, Switch} from "react-router-dom";
import themeMaterialUI from "./settings/themeMaterialUI";
import ThemeMaterialUI from "./settings/themeMaterialUI";
import AppWrapper from "./pages/AppWrapper";
import {Routes} from "react-router";
import {routes} from "./settings/routes";

function App() {
  return (
      <ThemeMaterialUI theme={themeMaterialUI}>
        <Routes>
          {
            routes.map((route, index) => {
              return <Route
                      exact
                      key={index}
                      path={route.path}
                      render={props => <AppWrapper Component={() => <route.component {...props}/>}/>}
                  />
            })
          }
        </Routes>
      </ThemeMaterialUI>
  );
}

export default App;
