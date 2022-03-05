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
export const AppRouter = () => {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/admin/routerBasic/about" component={AboutScreen}/>
          <Route path="/admin/routerBasic/main" component={MainApp}/>
          <Route path="/admin/routerBasic/login" component={LoginScreen}/>
          <Route path="/admin/routerBasic/home" component={HomeScreen}/>
        </Switch>
      
      </>
    </Router>
  )
}
