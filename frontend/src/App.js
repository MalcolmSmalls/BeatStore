import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import HomeScreen from "./screens/HomeScreen"
import BeatScreen from "./screens/BeatScreen"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />}/>
            <Route path="/product/:id" element={<BeatScreen />}/>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
