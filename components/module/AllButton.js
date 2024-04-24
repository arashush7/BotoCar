import Link from "next/link";
import styles from "./AllButton.module.css";

import React from 'react'

function AllButton() {
  return (
    <div className={styles.container}>
        <Link href="/cars">See All Cars</Link>
    </div>
  )
}

export default AllButton;