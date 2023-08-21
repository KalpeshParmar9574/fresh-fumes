import Icon from '@mui/material/Icon';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
// material
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

export default function AuthSocial() {
	return (
		<>
			<Stack direction="row" spacing={2}>
				<Button fullWidth size="large" color="inherit" variant="outlined">
					<Icon icon={GoogleIcon} color="#DF3E30" height={24} />
				</Button>

				<Button fullWidth size="large" color="inherit" variant="outlined">
					<Icon icon={FacebookIcon} color="#1877F2" height={24} />
				</Button>

				<Button fullWidth size="large" color="inherit" variant="outlined">
					<Icon icon={TwitterIcon} color="#1C9CEA" height={24} />
				</Button>
			</Stack>

			<Divider sx={{ my: 3 }}>
				<Typography variant="body2" sx={{ color: 'text.secondary' }}>
					OR
				</Typography>
			</Divider>
		</>
	);
}
