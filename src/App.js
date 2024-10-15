import Home from './routes/Home';
import Detail from './routes/Detail';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// 기본 import로 컴포넌트를 로드해본다.
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
