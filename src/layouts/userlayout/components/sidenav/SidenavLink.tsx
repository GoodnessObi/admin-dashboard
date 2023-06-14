import { NavLink } from 'react-router-dom';
import { navItem } from '../../../../types';
import Icons from '../../../../assets/images';

type SidenavLinkProps = {
	link: navItem;
};

export default function SidenavLink({ link }: SidenavLinkProps) {
	return (
		<NavLink to={link.link}>
			<img src={Icons[link.icon]} alt='icon' />
			{link.label}
		</NavLink>
	);
}
