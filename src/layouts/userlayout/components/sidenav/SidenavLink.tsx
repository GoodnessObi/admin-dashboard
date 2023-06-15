import { NavLink } from 'react-router-dom';
import { navItem } from '../../../../types';
import Icons from '../../../../assets/images';
import './SidenavLink.scss';

type SidenavLinkProps = {
	link: navItem;
};

export default function SidenavLink({ link }: SidenavLinkProps) {
	return (
		<NavLink to={link.link} className='navlink' end>
			<img src={Icons[link.icon]} alt='' />
			{link.label}
		</NavLink>
	);
}
