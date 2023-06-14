import './Sidenav.scss';
import { navlinks } from '../../../../lib/data';
import SidenavLink from './SidenavLink';
import Home from '../../../../assets/images/home.svg';
import Briefcase from '../../../../assets/images/briefcase.svg';
import Arrow from '../../../../assets/images/arrow-down-alt.svg';
import Logout from '../../../../assets/images/logout.svg';

export default function SideNav() {
	return (
		<nav className='sidenav'>
			<p>
				<img src={Briefcase} alt='' />
				Switch Organization
				<img src={Arrow} alt='' />
			</p>
			<p>
				<img src={Home} alt='' />
				Dashboard
			</p>
			{Object.keys(navlinks).map((section) => (
				<div key={section}>
					<p>{section}</p>
					<ul>
						{navlinks[section].map((link) => (
							<li key={link.label}>
								<SidenavLink link={link} />
							</li>
						))}
					</ul>
				</div>
			))}
			<hr />
			<p>
				{' '}
				<img src={Logout} alt='' /> Logout
			</p>
			<p>v1.2.0</p>
		</nav>
	);
}
