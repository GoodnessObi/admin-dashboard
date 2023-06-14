import './Sidenav.scss';
import { navlinks } from '../../../../lib/data';
import SidenavLink from './SidenavLink';

export default function SideNav() {
	return (
		<nav className='dashboard__sidenav'>
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
		</nav>
	);
}
