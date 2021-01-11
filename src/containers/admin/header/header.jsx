import  React,{Component} from "react"; //注意这里不是解构赋值
import "./header.less"

export  default  class Header extends Component{
    render() {
        return (
            <header className="header">头部区域</header>
        );
    }
}