import {
	BellIcon,
	BookmarkIcon,
	CollectionIcon,
	DotsCircleHorizontalIcon,
	HashtagIcon,
	HomeIcon,
	MailIcon,
	UserIcon,
} from '@heroicons/react/outline';
import Image from 'next/image';
import SidebarRow from './SidebarRow';

const Sidebar = () => {
	return (
		<div className='flex flex-col'>
			<Image
				className=''
				src='/twitter.png'
				layout='fixed'
				width={64}
				height={64}
				alt='Twitter icon'
			/>
			<SidebarRow Icon={HomeIcon} title='Home' />
			<SidebarRow Icon={HashtagIcon} title='Explore' />
			<SidebarRow Icon={BellIcon} title='Notifications' />
			<SidebarRow Icon={MailIcon} title='Messages' />
			<SidebarRow Icon={BookmarkIcon} title='Bookmarks' />
			<SidebarRow Icon={CollectionIcon} title='Lists' />
			<br />
			<SidebarRow Icon={UserIcon} title='Sign In' />
			<SidebarRow Icon={DotsCircleHorizontalIcon} title='More' />
		</div>
	);
};

export default Sidebar;
