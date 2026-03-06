import Header from '../Header'
import styles from './Ramen.module.css'
import { ramenList } from "../../Data/data.js";

const Ramen =() => {
  const allRamen = ramenList;

  return (
    <div className={styles.ramen}>
      <div className={styles.wrap}>
          {allRamen.map((item =>
            <div key={item.id} className={styles.item}>
              <p className={styles.img}><img src={item.img} alt={item.name} /></p>
              <p className={styles.name}>{item.name}</p>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Ramen