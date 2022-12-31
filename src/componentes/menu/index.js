import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import "./Menu.scss";
import MenuLink from "../menuLink";

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  return (
    <header className="header">
      <div className="header__content">

        <div className="logo">
          <div className="imagemLogo">
            <img src="../imagens/logoRUA.png" alt=""/>
          </div>
        </div>

        <nav
          className={`${"header__content__nav"} 
          ${menuOpen && size.width < 768 ? `${"isMenu"}` : ""} 
          }`}
        >
          <ul className="nav-items">
            <li className="nav-item">
              <MenuLink to={"inicial"} children={"Pagina Inicial"}/>
            </li>
            <li className="nav-item">
            <MenuLink to={"adocao"} children={"Adoções"}/>
            </li>
            <li className="nav-item">
            <MenuLink to={"doacao"} children={"Doação"}/>
            </li>
            <li className="nav-item">
            <MenuLink to={"contato"} children={"Contate-nos"}/>
            </li>
          </ul>
        </nav>
        <div className="header__content__toggle">
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      
      </div>
    </header>
  );
}

export default Menu;