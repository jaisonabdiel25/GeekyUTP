import React from "react";
import { NavLink } from "react-router-dom";
import './SCSS/Sidebar.scss'

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="navbar-nav justify-content-center">
        <li className="nav-item">
          <NavLink className="nav-link text-dark" to="/profile/account">
            Mi perfil
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-dark" to="/profile/sell">
            Mis Drops
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-dark" to="/task/newTask">
            Mis direcciones
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-dark" to="/profile">
            Favoritos
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-dark" to="/profile">
            Historial de compras
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-dark" to="/profile">
            Historial de Pagos
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-dark" to="/profile">
            Ayuda
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
