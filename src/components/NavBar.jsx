import { NavLink } from 'react-router';
import { ShoppingCartIcon } from 'lucide-react';

function NavBar() {
  const activeLStyle = 'bg-neutral text-white rounded m-auto py-1 px-2';

  return (
    <nav className="page-padding flex justify-between py-2 font-bold shadow sm:px-14">
      <div className="flex gap-5">
        <NavLink
          to={'/'}
          className={({ isActive }) =>
            isActive ? activeLStyle : 'm-auto px-2 py-1'
          }
          end
        >
          Home
        </NavLink>
        <NavLink
          to={'/shop'}
          className={({ isActive }) =>
            isActive ? activeLStyle : 'm-auto px-2 py-1'
          }
        >
          Shop
        </NavLink>
      </div>
      <h2 className="my-auto hidden sm:block">Danny's Store</h2>
      <NavLink to={'/cart'} aria-label="cart">
        <div className="hover:bg-base-300 active:bg-base-300 relative flex h-10 w-10 items-center justify-center rounded-full border-none p-2 duration-200 ease-in-out sm:transition-colors">
          <div className="d-badge d-badge-neutral absolute -top-1.25 -right-1.25 h-4.5 min-w-4.5 rounded-full p-1 text-[10px] font-normal">
            1
          </div>
          <ShoppingCartIcon />
        </div>
      </NavLink>
    </nav>
  );
}

export default NavBar;
