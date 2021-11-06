import React from "react";
import {Route, Switch} from "react-router-dom";

import {Main} from "../Main/Main";
import api from "../../utils/api";
import {Converter} from "../Converter/Converter";


function App() {

  const [currency, setCurrency] = React.useState()

React.useEffect(() => {
  api.currency()
    .then((res) => {
      setCurrency(res)
    })
}, [])

  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Main currency={currency}/>
        </Route>
        <Route exact path='/converter'>
          <Converter currency={currency}/>
        </Route>
      </Switch>

    </div>
  );
}

export default App;
