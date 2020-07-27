import React from 'react';
import logo from '../../assets/img/logo.png';
import './Menu.css';
import Button from '../Button';

export default function Menu() {
  return (
    <header>
      <nav className="Menu">
        <a href="/">
          <img className="Logo" src={logo} alt="study box logo"/>
        </a>

        <Button className="ButtonLink" href="/">Novo Vídeo</Button>
      </nav>
    </header>
  )
}