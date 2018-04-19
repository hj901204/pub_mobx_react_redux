import React,{Component} from "react";
import {Icon,Menu,Button} from '../../base/components/AntdComp';
import {Link} from "react-router";
import {prefix,prefix_route,prefixCh} from '../../base/consts/UrlsConfig'
var {PropTypes} = React;

class LayoutTop extends Component{
    constructor(prop){
        super(prop);
    }
    componentWillMount(){
    }
    render(){
        return (
            <div className='header-toolbar'>
                <div className='header-toolbar-logo'>
                    <div className="header-toolbar-logo-text">
                        <Menu mode="horizontal" className="header-logo-box">
                            <Menu.Item key="logo">
                                <h1 className="header-logo"><img src={prefix_route+"/img/logo.png"}/><span>曼威后台</span></h1>
                            </Menu.Item>
                        </Menu>
                    </div>
                </div>
                <div className='header-toolbar-right'>
                    <a href={`${prefix}${prefixCh}login.html`} >退出</a>
                </div>
            </div>
        )
    }
}
export default LayoutTop