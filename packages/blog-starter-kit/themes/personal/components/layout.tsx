import { Analytics } from '@vercel/analytics/react';
import { Analytics as HashNodeAnalytics } from './analytics';
import { Integrations } from './integrations';
import { Meta } from './meta';
import { Scripts } from './scripts';

type Props = {
	children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
	return (
		<>
			<Meta />
			<Scripts />
			<div className="min-h-screen bg-white dark:bg-neutral-950">
				<main>{children}</main>
			</div>
			<HashNodeAnalytics />
			<Analytics />
			<Integrations />
		</>
	);
};
