import styles from './detailInfo.module.css'


const DetailInfo = ({info, updateDetailInfo}) => {
  const handliClick = () => {
    updateDetailInfo(null)
  }

  return (
    <div className={styles.detailInfo}>
      <p className={styles.btn} onClick={handliClick}>Back</p>
      <p className={styles.img}><img src={info.img} alt={info.name} /></p>
      <div className={styles.lnfoBox}>
        <h2 className={styles.name}>{info.name}</h2>
        <p className={styles.info}>Brand :{info.brand}</p>
        {info.spiciness > 0 && 
          <p className={styles.info}>Spiciness :{info.spiciness}</p>
        }
        <p className={styles.info}>From :{info.country}</p>
        
      </div>
    </div>
  )
}

export default DetailInfo