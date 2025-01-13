import "./style.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <ul className="social-media">
          <li>
            <a href="http://www.facebook.com" className="facebook" target="_blank" title="Facebook" rel="noreferrer">Facebook</a>
          </li>
          <li>
            <a href="http://www.twitter.com" className="twitter" target="_blank" title="Twitter" rel="noreferrer">Twitter</a>
          </li>
          <li>
            <a href="http://www.instagram.com" className="instagram" target="_blank" title="Instagram" rel="noreferrer">Instagram</a>
          </li>
        </ul>
        <img src="/imagens/logo.png" alt="Logo Organo" />
        <p className="copyright">Desenvolvido por Alura.</p>
      </div>
    </footer>
  )
}

export default Footer;