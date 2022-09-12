import Head from 'next/head'
import styles from "../styles/Home.module.css"
import Nav from '../components/Nav.jsx'
import { useState, useEffect } from 'react';
import * as fcl from "@onflow/fcl"

export default function Home() {
  const [newGreeting, setNewGreeting] = useState('');

  const [greeting, setGreeting] = useState('');

  function runTransaction() {
    console.log("Running transaction!");
    console.log("Hi there! The current Greeting is ".concat(newGreeting))
  }

  async function executeScript() {
    const response = await fcl.query({
      cadence: `
      import HelloWorld from 0xb7fb1e0ae6485cf6

      pub fun main(): String {
        return HelloWorld.greeting
      }
      `,
      args: (arg, t) => []
    })

    // console.log("Response from out script: " + response)
    setGreeting(response);
  }

  useEffect(() => {
    executeScript()
  }, [])

  function printGoodbye() {
    console.log("Goodbye cruel, horrible world!")
  }

  return (
    <div>
      <Head>
        <title>Emerald DApp</title>
        <meta name="description" content="Created by Ricardo, the Emerald Academy instructor!"/>
        <link rel="icon" href="https://i.imgur.com/hvNtbgD.png" />
      </Head>

      <Nav />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my <a href="https://academy.ecdao.org" target="_blank">Emerald DApp!</a>
        </h1>
        <p>This is a DApp created by Ricardo, the Unlucky</p>

        <div className={styles.flex}>
          <button onClick={runTransaction}>Run Transaction</button>
          <input onChange={(e) => setNewGreeting(e.target.value)} placeholder="Hello, Idiots!" />
        </div>
        <p> {greeting} </p>
      </main>
    </div>
  )
}