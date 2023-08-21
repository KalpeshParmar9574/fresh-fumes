import faker from 'faker';
import PropTypes from 'prop-types';
// material
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineDot from '@mui/lab/TimelineDot';
// utils
import { fDateTime } from '../../../utils/formatTime';

// ----------------------------------------------------------------------

const TIMELINES = [
	{
		title: '1983, orders, $4220',
		time: faker.date.past(),
		type: 'order1',
	},
	{
		title: '12 Invoices have been paid',
		time: faker.date.past(),
		type: 'order2',
	},
	{
		title: 'Order #37745 from September',
		time: faker.date.past(),
		type: 'order3',
	},
	{
		title: 'New order placed #XF-2356',
		time: faker.date.past(),
		type: 'order4',
	},
	{
		title: 'New order placed #XF-2346',
		time: faker.date.past(),
		type: 'order5',
	},
];

// ----------------------------------------------------------------------

OrderItem.propTypes = {
	item: PropTypes.object,
	isLast: PropTypes.bool,
};

function OrderItem({ item, isLast }) {
	const { type, title, time } = item;
	return (
		<TimelineItem>
			<TimelineSeparator>
				<TimelineDot
					sx={{
						bgcolor:
							(type === 'order1' && 'primary.main') ||
							(type === 'order2' && 'success.main') ||
							(type === 'order3' && 'info.main') ||
							(type === 'order4' && 'warning.main') ||
							'error.main',
					}}
				/>
				{isLast ? null : <TimelineConnector />}
			</TimelineSeparator>
			<TimelineContent>
				<Typography variant="subtitle2">{title}</Typography>
				<Typography variant="caption" sx={{ color: 'text.secondary' }}>
					{fDateTime(time)}
				</Typography>
			</TimelineContent>
		</TimelineItem>
	);
}

export default function AppOrderTimeline() {
	return (
		<Card
			sx={{
				'& .MuiTimelineItem-missingOppositeContent:before': {
					display: 'none',
				},
			}}
		>
			<CardHeader title="Order Timeline" />
			<CardContent>
				<Timeline>
					{TIMELINES.map((item, index) => (
						<OrderItem
							key={item.title}
							item={item}
							isLast={index === TIMELINES.length - 1}
						/>
					))}
				</Timeline>
			</CardContent>
		</Card>
	);
}
