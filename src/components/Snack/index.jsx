import styles from './snack.module.css'
import { productList } from "../../Data/data.js";
import { useState } from 'react';
import DetailInfo from '../DetailInfo';

const Snack = () => {
  const [snackDetail, setSnackDetail] = useState(null)
  const snackItem = productList.filter(item => item.type === "snack")

  return (
    <div className={styles.snack}>
      {snackDetail && <DetailInfo info={snackDetail} updateDetailInfo={setSnackDetail} />}
      <div className={styles.wrap}>
          {snackItem.map((item =>
            <div key={item.id} className={styles.item}
              onClick={()=> setSnackDetail(item)}>
              <p className={styles.img}><img src={item.img} alt={item.name} /></p>
              <p className={styles.name}>{item.name}</p>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Snack