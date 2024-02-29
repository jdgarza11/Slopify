import Image from "next/image";
import Test from "./Test"
import Login from "./components/paginas/Login";
export default function Home() {
  return (
    <main className="xd">
      <Test/>
      <br/>
      <Login/>
    </main>
  )
}
