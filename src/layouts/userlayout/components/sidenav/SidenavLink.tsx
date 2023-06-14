import { NavLink } from 'react-router-dom';
import { navItem } from '../../../../types';
import { ReactSVG } from 'react-svg';

type SidenavLinkProps = {
	link: navItem;
};

export default function SidenavLink({ link }: SidenavLinkProps) {
	return (
		<NavLink to={link.link}>
			<ReactSVG
				src='../../../../assets/images/bell.svg'
				fallback={() => <span>Error!</span>}
			/>
			{link.label}
		</NavLink>
	);
}
