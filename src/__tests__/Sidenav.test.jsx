// import { expect, test } from 'vitest';
// import { render } from '@testing-library/react';
// import Sidenav from '../layouts/userlayout/components/sidenav/Sidenav';
// import SidenavLink from '../layouts/userlayout/components/sidenav/SidenavLink;';

// test('sidenav link is active when clicked on', async () => {
// 	// const navlinks = {
// 	// 	customers: [
// 	// 		{
// 	// 			label: 'Users',
// 	// 			icon: 'Users',
// 	// 			link: '/users',
// 	// 		},
// 	// 		{
// 	// 			label: 'Loans',
// 	// 			icon: 'Loans',
// 	// 			link: '/#',
// 	// 		},
// 	// 	],
// 	// 	businesses: [
// 	// 		{
// 	// 			label: 'Organization',
// 	// 			icon: 'Briefcase',
// 	// 			link: '/#',
// 	// 		},
// 	// 		{
// 	// 			label: 'Loan Products',
// 	// 			icon: 'Loan',
// 	// 			link: '/#',
// 	// 		},
// 	// 	],
// 	// };

// 	const link = {
// 		label: 'Loan Products',
// 		icon: 'Loan',
// 		link: '/#',
// 	};

// 	const sidenav = render(<Sidenav />);
// 	const sidenavlink = render(<SidenavLink link={link} />);

// 	const nav = await sidenav.findByTestId('sidenav');
// 	const navItem = await sidenavlink.findByTestId('navlink');

// 	expect(navItem.classList).toContain('active');
// 	expect(nav);
// });
