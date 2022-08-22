import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const Home: NextPage = () => {
	return (
		<div className=''>
			<Head>
				<title>Stonks</title>
			</Head>
			{/* Header */}
			<Header />
			{/* Sidebar */}
			<Sidebar />
			{/* Feed */}
			{/* Widgets */}
		</div>
	);
};

export default Home;
