import { NavLink } from "react-router-dom";

export default function Nav() {

  const currentRoute = window.location.pathname;

  return (
    <nav className="nav">
      <ul className='nav_list'>
              <li className={currentRoute === '/Kasa/' ? 'nav_list_item_active' : 'nav_list_item'}>
                  <NavLink  to='/Kasa/'>
                      Accueil
                  </NavLink>
              </li>
              <li className={currentRoute === '/about' ? 'nav_list_item_active' : 'nav_list_item'}>
                  <NavLink  to='/about'>
                      A propos
                  </NavLink>
              </li>
          </ul>
    </nav>
  );
}

