import HomePage from "./pages/home/home.page"
import { motion} from "framer-motion"
import { variantsApp } from "../motion"
import React from "react"



function App() {

  return (
    <motion.main variants={variantsApp}  initial="initial" animate="animate" className="container mx-auto h-screen relative">
      <HomePage />
    </motion.main>
  )
}

export default App
