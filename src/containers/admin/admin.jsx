import React,{Component} from 'react'
import {Redirect} from 'react-router-dom'
import {Layout} from "antd"
import {createDeleteUserInfoAction} from '../../redux/action_creators/login_action'
import {connect} from 'react-redux'
import "./css/admin.less"
import Header from "./header/header"

const { Footer, Sider, Content } = Layout;

@connect(
    state => ({userInfo:state.userInfo}),
    {
      deleteUserInfo:createDeleteUserInfoAction
    }
)
class Admin extends Component{

  //退出登录的回调
  logout = ()=>{
    //触发redux删除所保存的用户信息
    this.props.deleteUserInfo()
  }



  //在render里，若想实现跳转，最好用<Redirect>
  render(){
    //从redux中获取user和isLogin
    const {user,isLogin} = this.props.userInfo
    if(!isLogin){
      return <Redirect to="/login"/>
    }else{
      return (
          <Layout className="admin">
              <Sider className="sider">Sider</Sider>
              <Layout>
                  <Header/>
                  <Content className="content">Content</Content>
                  <Footer className="footer">若想获得更好的浏览体验,请用谷歌浏览器</Footer>
              </Layout>
          </Layout>
      )
    }
  }
}

export default Admin;