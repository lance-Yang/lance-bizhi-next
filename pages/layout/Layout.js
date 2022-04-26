import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { Row, Col, Tabs, Tab } from 'react-bootstrap';


import styles from './Layout.module.css';

const Layout = ({ children }) => {
	return (
		<div className={styles.layoutContainer}>
			<div className={styles.header}>
				<Row style={{ width: '100%', alignItems: 'center' }}>
					<Col xs={2}>
						<a href="#" className={styles.logo}>
							logo
						</a>
					</Col>
					<Col xs={8}>
						<div className={styles.nav}>
							<a href="#">壁纸库</a>
							<a href="#">动态壁纸</a>
							<a href="#">我的壁纸</a>
						</div>
					</Col>
					<Col xs={2} />
				</Row>
			</div>
			<main>{children}</main>
		</div>
	);
};

export default Layout;
