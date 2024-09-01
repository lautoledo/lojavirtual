import React from 'react';
import '../styles/footer.css'; // Importa os estilos do footer

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2024 Loja Virtual. Todos os direitos reservados.</p>
      <ul>
        <li><a href="https://facebook.com">Facebook</a></li>
        <li><a href="https://instagram.com">Instagram</a></li>
        <li><a href="https://twitter.com">Twitter</a></li>
      </ul>
    </footer>
  );
}

export default Footer;
