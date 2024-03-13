import Image from "next/image";
import React, { useEffect, useState } from 'react';

import Login from "./components/paginas/Login";
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
      <Login/>
    </main>
  )
}
