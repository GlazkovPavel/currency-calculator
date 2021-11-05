import React from "react";
import {Main} from "../Main/Main";
import api from "../../utils/api";


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
      <Main currency={currency}/>
    </div>
  );
}

export default App;
