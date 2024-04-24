import Link from "next/link";
import styles from "./layout.module.css";

  

export default function layout({children}) {
  return (
    <>
    <header className={styles.header}>
        <Link href="/">
        <h2>BOTOCAR</h2>
        <p>Choose And Buy Your Car</p>
        </Link>
        
        
        </header>
        {/* page haye digar */}
        <div className={styles.container}>{children}</div>
    <footer className={styles.footer}>
      <a href="https://botostart.ir" target="_blank">Botostart</a>  Next.js Project course | Botocar Project &copy;
        </footer>
    </>
    
  )
}
