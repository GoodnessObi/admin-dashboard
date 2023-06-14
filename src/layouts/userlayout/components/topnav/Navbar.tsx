import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.scss';
import { ReactComponent as Logo } from '../../../../assets/images/logo.svg';
import { ReactComponent as Notification } from '../../../../assets/images/bell.svg';
import { ReactComponent as Arrow } from '../../../../assets/images/arrow-down.svg';
import { ReactComponent as Hamburger } from '../../../../assets/images/icon-hamburger.svg';
import { ReactComponent as Close } from '../../../../assets/images/icon-close.svg';
import { ReactComponent as Search } from '../../../../assets/images/search.svg';
export default function Navbar() {
	const [navIsOpen, setIsOpen] = useState<boolean>(false);

	const toggleNav = () => {
		setIsOpen(!navIsOpen);
	};

	return (
		<nav className='navbar'>
			<Link to='/' className='navbar__logo'>
				<Logo />
			</Link>
			<div className='navbar__items'>
				<div className='navbar__search'>
					<div className='navbar__search-group'>
						<input
							type='search'
							className='form-input'
							placeholder='Search for anything'
						/>
						<span className='icon'>
							<Search />
						</span>
					</div>
				</div>

				<div className='navbar__actions'>
					<Link to='#' className='docs-link'>
						Docs
					</Link>
					<span role='button' className='notification'>
						<Notification />
					</span>
					<span className='current-user'>
						<img src='avatar.png' alt='user avatar' />
						<span className='username'>Adedeji</span>
						<Arrow />
					</span>
				</div>

				<div
					className='navbar__actions--mobile'
					role='button'
					onClick={toggleNav}
				>
					{navIsOpen ? <Close fill='#213f7d' /> : <Hamburger fill='#213f7d' />}
				</div>
			</div>
		</nav>
	);
}
