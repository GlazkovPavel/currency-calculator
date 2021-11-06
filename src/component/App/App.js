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
      console.log(res)
    })
}, [])

  return (
    <div className="App">
      <Switch>
        <Route exact path='/currency-calculator'>
          <Main currency={currency}/>
        </Route>
        <Route exact path='/currency-calculator/converter'>
          <Converter currency={currency}/>
        </Route>
      </Switch>

    </div>
  );
}

export default App;
