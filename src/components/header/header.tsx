import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AppRoutes } from '../../consts';
import './header.css';
import HeaderBtn from '../header-btn/header-btn';
import HeaderAvatar from '../header-avatar/header-avatar';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    if (location.pathname === AppRoutes.Graph) {
      setActivePage(1);
    } else {
      setActivePage(0);
    }
  }, [location.pathname]);

  const handleBtnGlossaryClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    navigate(AppRoutes.Glossary);
  };

  const handleBtnGraphClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    navigate(AppRoutes.Graph);
  };

  return(
    <header className='header'>
      <div className='header__buttons'>
        <HeaderBtn 
          btnText='Глоссарий'
          onBtnClick={handleBtnGlossaryClick}
          activeClass={activePage === 0 ? 'active-button': ''}
        />
        <HeaderBtn 
          btnText='Семантический граф'
          onBtnClick={handleBtnGraphClick}
          activeClass={activePage === 1 ? 'active-button': ''}
        />
      </div>
      <HeaderAvatar />  
    </header>
  );
}

export default Header;