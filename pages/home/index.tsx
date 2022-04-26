import React, { useState, useEffect } from "react";
import type { NextPage } from 'next'
import _ from 'lodash'
import { Row, Col, Tabs, Tab } from 'react-bootstrap';

import styles from './index.module.css'
import instance from './../api/instance';
import { IMGS, CATEGORY } from './../api/api';


interface imgObject {
    imgId: string,
    url: string,
    utag: string,
    _id: string,
}
interface category {
    _id: string,
    cName: string
}


const HomePage: NextPage = () => {

    const [imgLoading, setImgLoading] = useState<boolean>(false)
    const [categoryList, setCategoryList] = useState<category[]>([])
    const [resources, setResources] = useState<imgObject[]>([])

    useEffect(() => {
        instance.get(IMGS, { categoryName: "1" }).then((res: any) => {
            setResources(res?.data)
        })
        instance.get(CATEGORY).then((res: any) => {
            setCategoryList(res?.data)
        })
    }, [])

    return <div className={styles.content}>
        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
            <Tab eventKey={1} title="最新">
                <div className={styles.container}>
                    {
                        _.map(resources, item => (
                            <div className={styles.item} key={item._id}>
                                <img src={item?.url} alt="" />
                            </div>
                        ))
                    }
                </div>
            </Tab>
            <Tab eventKey={2} title="Tab 2">
                Tab 2 content
            </Tab>
            <Tab eventKey={3} title="Tab 3" >
                Tab 3 content
            </Tab>
        </Tabs>
    </div>

}

export default HomePage;