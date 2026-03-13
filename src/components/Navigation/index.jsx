import { useState, useEffect } from 'react';
import styles from './navigation.module.css'

const Navigation = ({updateNavigation}) => {

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if(isOpen && window.innerWidth < 768) { //메뉴가 열릴 때 스크롤 방지
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset'
    }
    return() => {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className={styles.navigation}>
      <p className={styles.logo} onClick={() => updateNavigation("Home") }>CU</p>

      <div className={styles.menuIcon} onClick={toggleMenu}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>

      <div className={`${styles.nav} ${isOpen ? styles.show : ''}`}>
        <p className={styles.navItem} 
          onClick={() => 
          {updateNavigation("Home"); // setIsOpen(false)를 하므로 메뉴 클릭시, 메뉴는 닫힌다
          setIsOpen(false);}}> 
          Home
        </p>
        <p className={styles.navItem} 
          onClick={() => 
          {updateNavigation("Ramen");
          setIsOpen(false);}}>
          Ramen
        </p>
        <p className={styles.navItem}
          onClick={() => 
          {updateNavigation("Snack");
          setIsOpen(false);}}>
          Snack
        </p>
      </div>
    </div>
  )
}
export default Navigation