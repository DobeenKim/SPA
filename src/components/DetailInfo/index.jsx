import styles from './detailInfo.module.css'


const DetailInfo = ({info, updateDetailInfo}) => {
  const handliClick = () => {
    updateDetailInfo(null)
  }

  return (
    <div className={styles.detailInfo}>
      <div className={styles.btn} onClick={handliClick}>Back</div>
      <p className={styles.img}><img src={info.img} alt={info.name} /></p>
      <h2 className={styles.name}>{info.name}</h2>
      <p className={styles.info}>Brand :{info.brand}</p>
      <p className={styles.info}>Spiciness :{info.spiciness}</p>
      <p className={styles.info}>From :{info.country}</p>
    </div>
  )
}

export default DetailInfo