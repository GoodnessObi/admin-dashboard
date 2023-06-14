import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.scss';
import Icons from '../../../../assets/images';
export default function Navbar() {
	const [navIsOpen, setIsOpen] = useState<boolean>(false);

	const toggleNav = () => {
		setIsOpen(!navIsOpen);
	};

	return (
		<nav className='navbar'>
			<Link to='/' className='navbar__logo'>
				<img src={Icons['Logo']} alt='SVG logo image' />
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
							<img src={Icons['Search']} alt='SVG logo image' />
						</span>
					</div>
				</div>

				<div className='navbar__actions'>
					<Link to='#' className='docs-link'>
						Docs
					</Link>
					<span role='button' className='notification'>
						<img src={Icons['Notification']} alt='SVG logo image' />
					</span>
					<span className='current-user'>
						<img src='avatar.png' alt='user avatar' />
						<span className='username'>Adedeji</span>
						<img src={Icons['ArrowDown']} alt='SVG logo image' />
					</span>
				</div>

				<div
					className='navbar__actions--mobile'
					role='button'
					onClick={toggleNav}
				>
					{navIsOpen ? (
						<img src={Icons['Close']} alt='' />
					) : (
						<img src={Icons['Hamburger']} alt='' />
					)}
				</div>
			</div>
		</nav>
	);
}
