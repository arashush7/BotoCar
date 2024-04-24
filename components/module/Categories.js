import Hatchback from "../icons/Hatchback";
import Sedan from "../icons/Sedan";
import Sport from "../icons/Sport";
import Suv from "../icons/Suv";
import styles from "./Categories.module.css";
import Link from "next/link";

function Categories() {
  return (
    <div className={styles.container}>
        <Link href="/categories/Sedan"> 
      <div>
        <p>Sedan</p>
        <Sedan />
      </div>
      </Link>
      <Link href="/categories/Suv"> 
      <div>
        <p>Suv</p>
        <Suv />
      </div>
      </Link>
      <Link href="/categories/HatchBack"> 
      <div>
        <p>Hatchback</p>
        <Hatchback />
      </div>
      </Link>
      <Link href="/categories/Sport"> 
      <div>
        <p>Sport</p>
        <Sport />
      </div>
      </Link>
    </div>
  );
}

export default Categories;
