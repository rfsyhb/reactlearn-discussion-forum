import { Routes, Route, Link } from 'react-router-dom';
import NotFoundPage from './pages/404Page';

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Test</h1>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<p>Home page coy</p>} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
