import type { MenuProps } from 'antd';
import { Button, Dropdown } from 'antd';
import { Link } from 'react-router-dom';
import './Dropdown.scss';
import Icons from '../../../../assets/images';

const DropdownBtn = ({
	id,
	status,
}: {
	id: string | undefined;
	status: string;
}) => {
	const items: MenuProps['items'] = [
		{
			key: '1',
			label: (
				<Link
					rel='noopener noreferrer'
					to={`/users/${id}`}
					className='dropdown-item'
				>
					<img src={Icons['View']} alt='' /> View Details
				</Link>
			),
		},
		{
			key: '2',
			label: (
				<span
					role='button'
					className={`dropdown-item ${status === 'blacklisted' && 'disable'}`}
				>
					<img src={Icons['Delete']} alt='' /> Blacklist User
				</span>
			),
		},
		{
			key: '3',
			label: (
				<span role='button' className='dropdown-item'>
					<img src={Icons['Blacklist']} alt='' />{' '}
					{status === 'active' ? 'Deactivate User' : 'Activate User'}
				</span>
			),
		},
	];
	return (
		<Dropdown menu={{ items }} placement='bottom' className='dropdown-btn'>
			<Button className='li'>
				<img src={Icons['More']} alt='' />{' '}
			</Button>
		</Dropdown>
	);
};

export default DropdownBtn;
