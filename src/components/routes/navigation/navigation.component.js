import { Fragment, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './navigation.style.scss';
import { ReactComponent as Logo } from '../../../assets/crown.svg';
import { UserContext } from '../../context/user.context';
import { signOutUser } from '../../../utils/firebase/firebase.utils';

const Navigation = () => {
    const { loggedUser, _ } = useContext(UserContext);
    return <Fragment>
        <nav className='navigation'>
            <Link className='logo-container' to={'/'}>
                <Logo className='logo'/>
            </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to={'/shop'}>
                    shop
                </Link>
                {
                    loggedUser ? (
                        <Link className='nav-link' onClick={async () => {
                            await signOutUser();
                        }}>
                            sign out
                        </Link>
                    ) : (
                        <Link className='nav-link' to={'/login'}>
                            sign in
                        </Link>
                    )
                }
                
            </div>
        </nav>
        <Outlet />
    </Fragment>
};

export default Navigation;
