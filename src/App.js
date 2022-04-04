import './App.css'
import Home from './components/Home/Home'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import Reviews from './components/Reviews/Reviews'
import Blogs from './components/Blogs/Blogs'
import DashBoard from './components/DashBoard/DashBoard'
import NotFound from './components/NotFound/NotFound'
import { Routes, Route } from 'react-router-dom'

function App() {
    return (
        <>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="reviews" element={<Reviews />} />
                <Route path="blogs" element={<Blogs />} />
                <Route path="dashboard" element={<DashBoard />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
