import { navItem } from '../types';

type navlinksType = { [key: string]: navItem[] };

const navlinks: navlinksType = {
	customers: [
		{
			label: 'Users',
			icon: 'Users',
			link: '/users',
		},
		{
			label: 'Guarantors',
			icon: 'Guarantors',
			link: '/#',
		},
		{
			label: 'Loans',
			icon: 'Loans',
			link: '/#',
		},
		{
			label: 'Decision Models',
			icon: 'Decision',
			link: '/#',
		},
		{
			label: 'Savings',
			icon: 'Savings',
			link: '/#',
		},
		{
			label: 'Loan Requests',
			icon: 'Loan',
			link: '/#',
		},
		{
			label: 'White List',
			icon: 'Whitelist',
			link: '/#',
		},
		{
			label: 'Karma',
			icon: 'Karma',
			link: '/#',
		},
	],

	businesses: [
		{
			label: 'Organization',
			icon: 'Briefcase',
			link: '/#',
		},
		{
			label: 'Loan Products',
			icon: 'Loan',
			link: '/#',
		},
		{
			label: 'Savings Products',
			icon: 'Bank',
			link: '/#',
		},
		{
			label: 'Fees and Charges',
			icon: 'Coins',
			link: '/#',
		},
		{
			label: 'Transactions',
			icon: 'Transactions',
			link: '/#',
		},
		{
			label: 'Services',
			icon: 'Services',
			link: '/#',
		},
		{
			label: 'Service Account',
			icon: 'UserCog',
			link: '/#',
		},
		{
			label: 'Settlements',
			icon: 'Scroll',
			link: '/#',
		},
		{
			label: 'Reports',
			icon: 'Reports',
			link: '/#',
		},
	],

	settings: [
		{
			label: 'Preferences',
			icon: 'Sliders',
			link: '/#',
		},
		{
			label: 'Fees and Pricing',
			icon: 'Pricing',
			link: '/#',
		},
		{
			label: 'Audit Logs',
			icon: 'Logs',
			link: '/#',
		},
		{
			label: 'Systems Messages',
			icon: 'System',
			link: '/#',
		},
	],
};

export { navlinks };
