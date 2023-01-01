import { useState } from "react"
import UseContextComponent from "./UseContextComponent"
import UseEffectCompnent from "./UseEffectCompnent"
import UseStateCompnent from "./UseStateCompnent"


function App() {


  return (
    <div className="App">
      <h1>useState</h1>
      <UseStateCompnent />
      <h1>useEffect</h1>
      <UseEffectCompnent />
      <h1>useContext</h1>
      <UseContextComponent />
      <h1>useState</h1>


    </div>
  )
}

export default App
