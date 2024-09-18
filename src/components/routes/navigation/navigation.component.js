import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './navigation.style.scss';
import { ReactComponent as Logo } from '../../../assets/crown.svg';

const Navigation = () => (
    <Fragment>
        <nav className='navigation'>
            <Link className='logo-container' to={'/'}>
                <Logo className='logo'/>
            </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to={'/shop'}>
                    shop
                </Link>
                <Link className='nav-link' to={'/login'}>
                    sign in
                </Link>
            </div>
        </nav>
        <Outlet />
    </Fragment>
);

export default Navigation;
