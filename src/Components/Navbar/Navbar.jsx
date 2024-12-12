import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {



  const links = <>
    <li className="md:text-white font-bold text-[16px]"><NavLink to="/"  className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}>Home</NavLink></li>
    <li className="md:text-white font-bold text-[16px]"><NavLink to="/statics"  className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}>Statistics</NavLink></li>
    <li className="md:text-white font-bold text-[16px]"><NavLink to="/dashboard"  className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}>DashBoard</NavLink></li>
  </>

  return (
   
   
   <div className="navbar bg-[#9538E2] py-8 px-5 rounded-t-3xl mt-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl text-white">Gadget Heaven</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>

      <div className="navbar-end pr-12">

        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle bg-white">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="badge badge-sm indicator-item">0</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
              <div className="card-body">
                <span className="text-lg font-bold">0 Items</span>
                <span className="text-info">Subtotal: $</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">View cart</button>
                </div>
              </div>
            </div>
          </div>

          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle bg-white ml-2">
              <div className="indicator">
              <img width="20" height="20" src="https://img.icons8.com/material-outlined/24/filled-like.png" alt="filled-like"/>
                <span className="badge badge-sm indicator-item">0</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
              <div className="card-body">
                <span className="text-lg font-bold">0 Items</span>
                <span className="text-info">Subtotal: $</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">View cart</button>
                </div>
              </div>
            </div>
          </div>





        </div>

      </div>


    

    </div>

  
  );
};

export default Navbar;