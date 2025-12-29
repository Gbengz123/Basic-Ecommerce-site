import './App.css';
import { Outlet } from 'react-router';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <div className="h-screen w-screen min-w-[320px]">
        <NavBar />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
