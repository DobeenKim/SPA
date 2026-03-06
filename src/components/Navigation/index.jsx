import styles from './navigation.module.css'

const Navigation = ({updateNavigation}) => {
  return (
    <nav className={styles.nav}>
      <p className={styles.navItem} onClick={() => updateNavigation("Home")}>Home</p>
      <p className={styles.navItem} onClick={() => updateNavigation("Ramen")}>Ramen</p>
      <p className={styles.navItem} onClick={() => updateNavigation("Snack")}>Snack</p>
    </nav>
  )
}
export default Navigation