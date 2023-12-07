import { Routes , Route } from 'react-router-dom'
import LoginPage from '../components/LoginPage'
import Blog from '../Pages/Blog'
 

const AllRoutes = () => {
  return (
    <div> 
        <Routes>
            <Route path="/" element={<LoginPage/>}></Route>
            <Route path="/blog" element={<Blog/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes