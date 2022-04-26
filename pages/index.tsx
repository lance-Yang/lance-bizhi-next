import React, { useState, useEffect, useTransition } from "react";
import type { NextPage } from 'next'
import _ from 'lodash'
import { Tabs, Tab, Button, Pagination, Row, Col } from 'react-bootstrap';
import Head from 'next/head'
import Image from 'next/image'

import LoadingPage from '../components/Loading/Loading'

import styles from '../styles/Home.module.css'
import instance from './api/instance';
import { IMGS, CATEGORY } from './api/api';


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


const Home: NextPage = () => {

  const [searchValue, setSearchValue] = useState<string>("");
  const [categoryList, setCategoryList] = useState<category[]>([])
  const [resources, setResources] = useState<imgObject[]>([])
  const [isPeding, startTransition] = useTransition()

  useEffect(() => {
    instance.get(IMGS, { categoryName: "1" }).then((res: any) => {
      startTransition(() => {
        setResources(res?.data)
      })
    })
    instance.get(CATEGORY).then((res: any) => {
      setCategoryList(res?.data)
    })
  }, [])

  const handleChangeKey = (key: any, event: any) => {
    instance.get(IMGS, { categoryName: key }).then((res: any) => {
      const result = res?.data || [];
      startTransition(() => {
        setResources(result)
      })
    }).catch(err => {
      // message.error(err)
      console.log(err)
    })
  }

  const handleSearch = (event: any) => {
    const value = event.target.value
    setSearchValue(value);
  }

  const handleClickSearch = () => {
    instance.get(IMGS, { tags: searchValue }).then((res: any) => {
      const result = res?.data || [];
      startTransition(() => {
        setResources(result)
      })
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div className={styles.content}>
      {
        isPeding ? <LoadingPage /> : null
      }
      <Tabs defaultActiveKey={1} onSelect={handleChangeKey}>
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
        {
          _.map(categoryList, (item, index) => (
            <Tab eventKey={item.cName} title={item.cName} key={item.cName}>
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
          ))
        }
      </Tabs>
      <div style={{ position: 'absolute', right: '220px', top: '20px', width: '200px' }}>
        <div style={{ width: '400px', display: 'flex' }}>
          <input
            className="form-control mr-sm-2"
            style={{ marginRight: '10px' }}
            type="search"
            placeholder="搜索壁纸"
            aria-label="Search"
            onChange={handleSearch}
            value={searchValue}
          />
          <Button variant="success" onClick={handleClickSearch}>
            Search
          </Button>
        </div>
      </div>
      <Row style={{ marginTop: 20 }}>
        <Col xs={12}>
          {
            resources.length > 0 ? <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                  <a className="page-link">Previous</a>
                </li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item">
                  <a className="page-link" href="#">Next</a>
                </li>
              </ul>
            </nav> : null
          }
        </Col>
      </Row>
    </div>
  )
}

export default Home
