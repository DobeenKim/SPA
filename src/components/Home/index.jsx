import { useState } from "react";
import styles from "./home.module.css";
import Header from "../Header";
import { ramenList } from "../../Data/data.js";
import PickBestItem from "../PickBestItem";
import DetailInfo from "../DetailInfo";
import mainImg from '../../assets/images/main.png'


const Home = () => {
  const [favoriteItem, setFavoriteItem] = useState(null)

  const bestPickName = ["Shin Ramyun Black", "Yukgaejang", "Mama Pho", "Donbei Kitsune Udon"];
  const bestPickItem = ramenList.filter(item=> bestPickName.includes(item.name));




  return (
    <div className={styles.homeContainer}>
      <div className={styles.wrap}>
        <Header />
        <div className={styles.backgroundImg}>
          <h2 className={styles.text}>My favorite <br />Items!</h2>
          <p className={styles.img}>
            <img src={mainImg} alt="main img" />
          </p>
        </div>
        <h2 className={styles.title}>BEST PICK <br /></h2>
        {favoriteItem && <DetailInfo info={favoriteItem} updateDetailInfo={setFavoriteItem} />}
        {!favoriteItem &&
          <div className={styles.bestPick}>
            {bestPickItem.map((item, index) => 
            <PickBestItem key={index} item={item} updateItem={setFavoriteItem} />
          )}
        </div>
        }
      </div>
    </div>
  )
}

export default Home

