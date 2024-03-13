import Image from "next/image";
<<<<<<< HEAD
import React, { useEffect, useState } from 'react';

import Login from "./components/paginas/Login";
=======
import Login from "./components/backlog_items/Login";
>>>>>>> 3a7831884c9e70a2e5ab405485fbbd414de81490
import "./Page.css"

export default function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/apis/ejemplo')
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <main className="page_main">
      <br/>
    </main>
  )
}
