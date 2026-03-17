import styles from './ramen.module.css'
import { productList } from "../../Data/data.js";
import { useState } from 'react';
import DetailInfo from '../DetailInfo';

const Ramen =() => {
  const [ramenDetail, setRamenDetail] = useState(null)
  const ramenItem = productList.filter(item => item.type === "ramen");

  return (
    <div className={styles.ramen}>
      {ramenDetail && <DetailInfo info={ramenDetail} updateDetailInfo={setRamenDetail} />}
      <div className={styles.wrap}>
          {ramenItem.map((item =>
            <div key={item.id} className={styles.item}
              onClick={()=> setRamenDetail(item)}>
              <p className={styles.img}><img src={item.img} alt={item.name} /></p>
              <p className={styles.name}>{item.name}</p>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Ramen