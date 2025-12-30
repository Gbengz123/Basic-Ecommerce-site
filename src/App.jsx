import './App.css';
import { Outlet } from 'react-router';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <div className="flex min-h-screen min-w-screen flex-col">
        <NavBar />
        <main className="flex grow flex-col">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
