import './App.css'
import Home from './components/Home/Home'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import Reviews from './components/Reviews/Reviews'
import Blogs from './components/Blogs/Blogs'
import { Routes, Route } from 'react-router-dom'

function App() {
    return (
        <>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="reviews" element={<Reviews />} />
                <Route path="blogs" element={<Blogs />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
