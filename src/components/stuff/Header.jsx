import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h1>XMEN </h1>
      <NavLink exact to="/">Home</NavLink>
    </header>
  );
}
