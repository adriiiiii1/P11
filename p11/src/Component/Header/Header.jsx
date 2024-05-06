import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import logo from '../../assets/img/argentBankLogo.webp';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../app/actions/user.action';
import './Header.css';

function Header() {
    const dispatch = useDispatch();
    const { isLoggedIn, username } = useSelector((state) => state.user);

    const handleSignOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        dispatch(logoutUser());
    };

    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to="/">
                <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                {isLoggedIn ? (
                    <>
                        <FontAwesomeIcon icon={faUserCircle} className="sign-in-icon-header" size="lg" />
                        <Link to="/user" className="main-nav-item username-header">{username}</Link>
                        <FontAwesomeIcon icon={faSignOutAlt} className="sign-in-icon-header" size="lg" />
                        <Link to="/" className="main-nav-item" onClick={handleSignOut}>Sign Out</Link>
                    </>
                ) : (
                    <Link className="main-nav-item" to="/sign-in">
                        <FontAwesomeIcon icon={faUserCircle} className="sign-in-icon-header" size="lg" />
                        Sign In
                    </Link>
                )}
                
            </div>
        </nav>
    );
}

export default Header;