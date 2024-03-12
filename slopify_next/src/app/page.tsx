import Image from "next/image";
import React, { useEffect, useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/apis/ejemplo')
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div>
      <h1>Front-End con Next.js y TypeScript</h1>
      <p>{message}</p>
    </div>
  );
}
