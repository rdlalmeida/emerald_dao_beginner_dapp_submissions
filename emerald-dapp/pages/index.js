import Head from 'next/head'
import styles from "../styles/Home.module.css"
import Nav from '../components/Nav.jsx'
import { useState } from 'react';

export default function Home() {
  const [newGreeting, setNewGreeting] = useState('');

  function runTransaction() {
    console.log("Hi there! The current Greeting is ".concat(newGreeting))
  }

  function printGoodbye() {
    console.log("Goodbye cruel, horrible world!")
  }

  return(
    <div className={styles.container}>
      <Head>
        <title>Emerald DApp</title>
        <meta name="description" content="Created by Emerald Academy"/>
        <link rel="icon" href="https://i.imgur.com/hvNtbgD.png"/>
      </Head>

      <Nav/>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" >Emerald DApp!</a>
        </h1>
        <p>What the hell is this &lt;p&gt; tag going to do?</p>
        <div>
          <button onClick={runTransaction} className={styles.flex}>Run Transaction</button>
          <input onChange={(e) => setNewGreeting(e.target.value)} placeholder="Hello, idiots!" />
        </div>
      </main>
    </div>
  )
}