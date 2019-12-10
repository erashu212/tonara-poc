import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import TeacherListContainer from "./app/dashboard/list/list";
import { NewTeacherContainer } from "./app/dashboard/new/new";
import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={TeacherListContainer} />
          <Route exact path="/new" component={NewTeacherContainer} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
