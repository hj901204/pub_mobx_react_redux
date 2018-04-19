import React, { Component } from 'react'
import { Spin, Button } from '../../base/components/AntdComp';
import EditImageCont from '../dialogconts/EditImageCont';
import { prefixCh, prefix_route } from '../../base/consts/UrlsConfig';
import { Tooltip } from "../../base/components/AntdComp";
// import defaultJPG from '../images/default_avatar.jpg';
// const {Content } = Layout;


class PersonalCenterComp extends Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        this.props.getPersonalInfo();
    }

    render() {
        let { bindPhoneNextstepVisiable, state, changePswSubmitVisiable, ...props } = this.props;
        let info = state.personalInfo;
        let src = `${info.profilePhoto || ''}` || (prefixCh + 'img/default_avatar.jpg');
        return (
            <div className='personal-content'>
                {/*<Spin spinning={state.side_Loading}>
                    <h3 className="personal-info"><span className="title-line"></span>个人信息</h3>
                    <div className="personal-base">
                        <h3 className="base-info">基础信息</h3>
                        <div>
                            <div className="bace-cont base-name">姓名:<Tooltip title={info.empName || ''} getPopupContainer={()=>document.body} placement='bottomLeft' ><span>{info.empName || ''}</span></Tooltip></div>
                            <div className="bace-cont base-section">部门:<Tooltip title={info.deptNames || ''} getPopupContainer={()=>document.body} placement='bottomLeft'><span>{info.deptNames || ''}</span></Tooltip></div>
                            <div className="bace-cont base-position">职位:<Tooltip title={info.positionName || ''} getPopupContainer={()=>document.body} placement='bottomLeft'><span>{info.positionName || ''}</span></Tooltip></div>
                        </div>
                        <div className='photo' >
                            <img src={src} alt="" />
                            <a href='#' onClick={this.props.onClick}>修改</a>
                        </div>
                    </div>
                    <div className="personal-account">
                        <h3 className="account-info"><span className="title-line"></span>账户信息</h3>
                        <div>
                            <p className="account-phone">手机:<span>{info.phone || ''}</span>
                                <a href="#" onClick={bindPhoneNextstepVisiable}>修改</a>
                            </p>
                            <p className="account-phone password">
                                密码:<span>************  </span>
                                <a href="#" onClick={changePswSubmitVisiable}>修改</a>
                            </p>
                        </div>
                    </div>
                </Spin>*/}
                <Spin spinning={state.side_Loading}>
                    <div className='photo' >
                        <div className='photo-box'>
                            <img src={src} alt="" />
                            <span onClick={this.props.onClick}><i className='c2mfont c2m-bianji_nor'></i></span>
                        </div>
                    </div>
                    <div className='personal-base'>
                        <div className='personal-base-box'>
                            <div className="bace-cont"><span>姓名：</span><Tooltip title={info.empName || ''} getPopupContainer={() => document.body} placement='bottomLeft' ><span>{info.empName || ''}</span></Tooltip></div>
                            <div className="bace-cont"><span>部门：</span><Tooltip title={info.deptNames || ''} getPopupContainer={() => document.body} placement='bottomLeft'><span>{info.deptNames || ''}</span></Tooltip></div>
                            <div className="bace-cont"><span>职位：</span><Tooltip title={info.positionName || ''} getPopupContainer={() => document.body} placement='bottomLeft'><span>{info.positionName || ''}</span></Tooltip></div>
                            <div className="bace-info">
                                <p>
                                    <span>手机：</span>
                                    <span>{info.phone || ''}</span>
                                    <a href="#" onClick={bindPhoneNextstepVisiable}>修改</a>
                                </p>
                                <p>
                                    <span>密码：</span>
                                    <span>************  </span>
                                    <a href="#" onClick={changePswSubmitVisiable}>修改</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </Spin>
                <EditImageCont src={src} />
            </div>
        )

    }
}

export default PersonalCenterComp



