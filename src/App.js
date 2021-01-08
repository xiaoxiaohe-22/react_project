import React,{Component} from 'react'
import {Route,Switch} from 'react-router-dom'
import Login from './pages/login/login' //引入的不是我们定义的那个Login，而是根据Login生成的一个新组件
import Admin from './pages/admin/admin'


export default class App extends Component{
  render(){
    return (
      <div className="app">
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/admin" component={Admin}/>
        </Switch>
      </div>
    )
  }
}