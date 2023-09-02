import faker from 'faker';
import PropTypes from 'prop-types';

import Icon from '@mui/material/Icon';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// material
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';

// ----------------------------------------------------------------------

const SOCIALS = [
	{
		name: 'FaceBook',
		value: faker.datatype.number(),
		icon: <Icon icon={FacebookIcon} color="#1877F2" width={32} height={32} />,
	},
	{
		name: 'Google',
		value: faker.datatype.number(),
		icon: <Icon icon={GoogleIcon} color="#DF3E30" width={32} height={32} />,
	},
	{
		name: 'Linkedin',
		value: faker.datatype.number(),
		icon: <Icon icon={LinkedInIcon} color="#006097" width={32} height={32} />,
	},
	{
		name: 'Twitter',
		value: faker.datatype.number(),
		icon: <Icon icon={TwitterIcon} color="#1C9CEA" width={32} height={32} />,
	},
];

// ----------------------------------------------------------------------

SiteItem.propTypes = {
	site: PropTypes.object,
};

function SiteItem({ site }) {
	const { icon, value, name } = site;

	return (
		<Grid item xs={6}>
			<Paper variant="outlined" sx={{ py: 2.5, textAlign: 'center' }}>
				<Box sx={{ mb: 0.5 }}>{icon}</Box>
				<Typography variant="h6">{fShortenNumber(value)}</Typography>
				<Typography variant="body2" sx={{ color: 'text.secondary' }}>
					{name}
				</Typography>
			</Paper>
		</Grid>
	);
}

export default function AppTrafficBySite() {
	return (
		<Card>
			<CardHeader title="Traffic by Site" />
			<CardContent>
				<Grid container spacing={2}>
					{SOCIALS.map((site) => (
						<SiteItem key={site.name} site={site} />
					))}
				</Grid>
			</CardContent>
		</Card>
	);
}
