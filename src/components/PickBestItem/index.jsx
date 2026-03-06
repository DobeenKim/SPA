import styles from './pickBestItem.module.css'


const PickBestItem = ({item, updateItem}) => {
  const handleClick = () => {
    
    updateItem(item)
  }

  return (
    <div onClick={handleClick} className={styles.btn}>
      <div className={styles.card}>
        <p className={styles.img}><img src={item.img} alt={item.name} /></p>
        <h3 className={styles.name}>{item.name}</h3>
      </div>
    </div>
  )
}

export default PickBestItem