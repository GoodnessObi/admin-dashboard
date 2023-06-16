import './Sidenav.scss';
import { navlinks } from '../../../../lib/data';
import SidenavLink from './SidenavLink';
import Home from '../../../../assets/images/home.svg';
import Briefcase from '../../../../assets/images/briefcase.svg';
import Arrow from '../../../../assets/images/arrow-down-alt.svg';
import Logout from '../../../../assets/images/logout.svg';
import { useNavigate } from 'react-router-dom';

export default function SideNav({ navIsOpen }: { navIsOpen: boolean }) {
	const navigate = useNavigate();

	return (
		<nav className={`sidenav ${navIsOpen ? 'open' : ''}`}>
			<div className='sidenav__container'>
				<div className='sidenav__top'>
					<span role='button' className='sidenav__item'>
						<img src={Briefcase} alt='' />
						Switch Organization
						<img src={Arrow} alt='' className='icon-right' />
					</span>

					<span className='sidenav__item sidenav__item--dashboard'>
						<img src={Home} alt='' />
						Dashboard
					</span>
				</div>

				{Object.keys(navlinks).map((section) => (
					<div key={section} className='sidenav__navSection'>
						<p className='sidenav__heading'>{section}</p>
						<ul className='sidenav__linklist'>
							{navlinks[section].map((link) => (
								<li key={link.label} className='sidenav__linkitem'>
									<SidenavLink link={link} />
								</li>
							))}
						</ul>
					</div>
				))}

				<hr />

				<span
					role='button'
					className='sidenav__item'
					onClick={(e) => {
						e.preventDefault();
						navigate('/signin');
					}}
				>
					<img src={Logout} alt='' /> Logout
				</span>
				<span className='sidenav__item sidenav__item--version'>v1.2.0</span>
			</div>
		</nav>
	);
}
