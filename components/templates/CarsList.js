import { useRouter } from "next/router";
import styles from "./CarsList.module.css";
import Back from "../icons/Back";
import Card from "../module/Card";

function CarsList({data}) {
  const router = useRouter();

  const backHandler = () => {
       router.back(); 
  }
  return (
    <div className={styles.container} onClick={backHandler}>
      <div className={styles.back}>
        <Back />
        <p>Back</p>
      </div>
      <div className={styles.cards}>
        {data.map(item => <Card key={item.id} {...item} />)}
      </div>
    </div>
  )
}

export default CarsList;