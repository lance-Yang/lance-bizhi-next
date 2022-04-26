
import type { NextPage } from 'next'
import Image from 'next/image'

import styles from './Loading.module.css'
import loadingImg from '../../public/loading.png'

const Loading: NextPage = () => {
    return (
        <div className={styles.frosted}>
            {/* <div className={styles.loader}><Image src={loadingImg} width="100%" height="100%" alt="" /></div> */}
            {/* <div className="spinner-border text-primary" style={{position:'absolute',left:"50%",top:'50%'}} role="status">
                <span className="sr-only"></span>
            </div> */}
            <div className="d-flex justify-content-center align-items-center">
                <div className="spinner-border text-primary" style={{position:'absolute',left:"50%",top:'50%'}} role="status">
                    <span className="sr-only"></span>
                </div>
            </div>
        </div>
    )
}


export default Loading