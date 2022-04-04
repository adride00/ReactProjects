import React from 'react'
import { 
    BrowserRouter as Router,
    Switch,
    Route 
 } from 'react-router-dom'
import {AboutScreen} from './AboutScreen'
import {MainApp} from './MainApp'
import {LoginScreen} from './LoginScreen'
import {HomeScreen} from './HomeScreen'
import {NavBarMenu} from '../../components/Elements/NavBarMenu'
export const AppRouter = () => {
  return (
    <Router>
      <>
        <NavBarMenu/>
        <Switch>
          <Route exact path="/admin/routerBasic/about" component={AboutScreen}/>
          <Route exact path="/admin/routerBasic/main" component={MainApp}/>
          <Route exact path="/admin/routerBasic/login" component={LoginScreen}/>
          <Route exact path="/admin/routerBasic/home" component={HomeScreen}/>
        </Switch>
      
      </>
    </Router>
  )
}
