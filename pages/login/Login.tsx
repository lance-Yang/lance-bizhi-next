import React, { useState } from "react";
import type { NextPage } from 'next'
import Image from 'next/image'

import instance from "./../api/instance";
import { GET_CAPTCHA, LOGIN } from './../api/api'
import logoImg from './../assets/-s-image.png';
import styles from './index.module.css'

const LoginPage: NextPage = () => {

    return <div>
        login...
    </div>

    // const [loginLoading, setLoginLoading] = useState<boolean>(false);
    // const [captcha, setCaptcha] = useState<{ text: string, data: string }>({ text: "", data: "" })

    // React.useEffect(() => {
    //     instance.get(GET_CAPTCHA).then((res: any) => {
    //         setCaptcha(res?.data)
    //     })
    // }, [])

    // const handleVerfiCaptcha = (rule: any, value: string, callback: any) => {
    //     if (value && value.toLocaleUpperCase() !== captcha?.text.toLocaleUpperCase()) {
    //         callback(new Error('Verification code error'))
    //     } else {
    //         callback()
    //     }
    // }

    // const onFinish = (values: any) => {
    //     setLoginLoading(true)
    //     instance.get(LOGIN, values).then((res: any) => {
    //         if (res?.code === 200) {
    //             message.success(res?.message);
    //             // history.push('/home')
    //         } else {
    //             message.error(res?.message)
    //         }
    //         console.log(res, '登录信息。。。。')
    //         setLoginLoading(false)
    //     }).catch(err => {
    //         setLoginLoading(false)
    //     })
    // };

    // const onRefreshCatch = () => {
    //     instance.get(GET_CAPTCHA).then((res: any) => {
    //         setCaptcha(res?.data)
    //     })
    // }


    // return <Row className={styles.container} align='middle' >
    //     <Col span={5} />
    //     <Col span={14} >
    //         <div className={styles.loginContent}>
    //             <div className={styles.imgContent}>
    //                 <Image src={logoImg} alt="" />
    //             </div>
    //             <div className={styles.loginRight}>
    //                 <div className={styles.loginForm}>
    //                     <div className={styles.logTit}>
    //                         login
    //                     </div>
    //                     <Row>
    //                         <Col span={4} />
    //                         <Col span={16} className={styles.title} style={{ textAlign: 'center' }}>Chenxing wallpaper</Col>
    //                         <Col span={4} />
    //                     </Row>
    //                     <Row>
    //                         <Col span={2} />
    //                         <Col span={20} className={styles.title}>
    //                             <div>
    //                                 <Form
    //                                     name="normal_login"
    //                                     className="login-form"
    //                                     size="large"
    //                                     initialValues={{ remember: true }}
    //                                     onFinish={onFinish}
    //                                 >
    //                                     <Form.Item
    //                                         name="userName"
    //                                         initialValue={'lance'}
    //                                         rules={[{ required: true, message: 'Please input your Username!' }]}
    //                                     >
    //                                         <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="userCount:lance" />
    //                                     </Form.Item>
    //                                     <Form.Item
    //                                         name="password"
    //                                         initialValue={'123456'}
    //                                         rules={[{ required: true, message: 'Please input your Password!' }]}
    //                                     >
    //                                         <Input
    //                                             prefix={<LockOutlined className="site-form-item-icon" />}
    //                                             type="password"
    //                                             placeholder="passWord:123456"
    //                                         />
    //                                     </Form.Item>
    //                                     <Form.Item>
    //                                         <Row>
    //                                             <Col span={12}>
    //                                                 <Form.Item name="captcha" rules={[{ required: true, message: 'Please input your captcha!' }, { validator: handleVerfiCaptcha }]}>
    //                                                     <Input
    //                                                         placeholder="captcha"
    //                                                     />
    //                                                 </Form.Item>
    //                                             </Col>
    //                                             <Col span={12} style={{ textAlign: 'right' }}>
    //                                                 <Form.Item >
    //                                                     <div dangerouslySetInnerHTML={{ __html: captcha?.data }} onClick={onRefreshCatch}></div>
    //                                                 </Form.Item>
    //                                             </Col>
    //                                         </Row>
    //                                     </Form.Item>

    //                                     <Form.Item>
    //                                         <Button type="primary" htmlType="submit" loading={loginLoading} style={{ width: '100%' }} >
    //                                             Login
    //                                         </Button>
    //                                     </Form.Item>
    //                                 </Form>
    //                             </div>
    //                         </Col>
    //                         <Col span={2} />
    //                     </Row>
    //                 </div>
    //             </div>
    //         </div>
    //         <div className="square">
    //             <ul>
    //                 <li></li>
    //                 <li></li>
    //                 <li></li>
    //                 <li></li>
    //                 <li></li>
    //             </ul>
    //         </div>
    //         <div className="circle">
    //             <ul>
    //                 <li></li>
    //                 <li></li>
    //                 <li></li>
    //                 <li></li>
    //                 <li></li>
    //             </ul>
    //         </div>
    //     </Col>
    //     <Col span={5} />
    // </Row>
}

export default LoginPage;