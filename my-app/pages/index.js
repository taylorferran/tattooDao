import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from "react";
import { motion } from "framer-motion";


export default function Home() {

  const [movePic, setMovePic] = useState(false);

  return (
    <div>
      <Head>
        <title>tattooDao</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@300&display=swap" rel="stylesheet" />
        </Head>

      <main className={styles.main}>

      <motion.div className={styles.main}
        initial={{ opacity: 0, scale: 0.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 4 }}
      
      >
 
    

      </motion.div >

      </main>

    </div>
  )
}