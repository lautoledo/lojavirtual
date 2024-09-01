// src/components/Header.js
import React from 'react';
import '../styles/header.css'; // Importa os estilos do header

function Header() {
  return (
    <header>
      <div className="logo">Minha Loja</div>
      <nav>
        <ul>
          <li><a href="#home">Início</a></li>
          <li><a href="#produtos">Produtos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

