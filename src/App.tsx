import { Route, Routes } from 'react-router';
import Header from './components/Header';
import Blog from './pages/Blog';
import Home from './pages/Home';

function App() {
  return (
    <div className='min-h-screen'>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
