

import Signin from './Pages/Signin/signin'
import Signup from './Pages/Signup/signup'
import Dashboard from './Pages/Dashboard/dashboard'
import { Switch, Route } from 'react-router-dom'



function App() {
  return (


      <Switch>


<Route exact path= '/' component = {Signin}/>

<Route exact path= '/signup' component = {Signup}/>

<Route exact path= '/dashboard' component = {Dashboard}/>


      </Switch>

    
  )
}

export default App;
