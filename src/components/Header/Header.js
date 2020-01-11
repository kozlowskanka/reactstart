import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import {settings} from '../../data/dataStore';

class Header extends React.Component {
  render(){
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link to='/' className={styles.logo}>
              <Icon name={settings.logo} />
            </Link>
            <nav>
              <NavLink exact to={settings.navigationPaths.home} activeClassName='active'>{settings.navigationLinks.home}</NavLink>
              <NavLink exact to={settings.navigationPaths.info} activeClassName='active'>{settings.navigationLinks.info}</NavLink>
              <NavLink exact to={settings.navigationPaths.faq} activeClassName='active'>{settings.navigationLinks.faq}</NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}
  
export default Header;
