import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

import Collapse from '@material-ui/core/Collapse';
import clsx from 'clsx';

// import Context API 
import { useContext } from 'react';
import { LoginContext } from '../../../contexts/LoginContext.js';

import "./HistoricalDataCard.css";

const useStyles = makeStyles(theme => ({
	card: {
	  minWidth: 275,
	  padding: '10px',
	  marginBottom: '15px',
	  marginRight: '15px',
	},
	review: {
	  fontSize: 13,
	  color: 'black',
	},
	title: {
	  fontSize: 20,
	},
	pos: {
	  fontSize: 13,
	  marginBottom: 12,
	},
	button: {
	  fontSize: 13,
	  paddingTop: 2
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
		  duration: theme.transitions.duration.shortest,
		}),
	  },
	  expandOpen: {
		transform: 'rotate(360deg)',
	  },
})); 

const HistoryCard = (props) => {

	const classes = useStyles();
	// const [expanded, setExpanded] = React.useState(false);
	const { userD, setUserD } = useContext(LoginContext);
	const { strainSaved, setStrainSaved } = useContext(LoginContext);

	// function handleExpandClick() {
	// 	setExpanded(!expanded);
	//   }

	return (
		<Card className={classes.card}>
			<CardContent>
				<Typography className={classes.title} variant="h5" component="h2">
					<img src="https://darkheartnursery.com/wp-content/uploads/2014/07/lf_blue_dream-708x900.jpg"
						 alt="strain image" 
					/>
				</Typography>
				<Typography className={classes.title} variant="h5" component="h2">
					{/* {props.history.name} */}
					{props.savedData.name}
				</Typography>
				<Typography className={classes.pos} color="textSecondary">
					<em>{props.savedData.type}</em>
				</Typography>
				<Typography className={classes.review} variant="body2" component="p">
					**insert Review component here**
				</Typography>
			</CardContent>
			{/* <CardActions>
				<Button className={clsx(classes.expand, classes.button, {[classes.expandOpen]: expanded})}
				  onClick={handleExpandClick}
				  aria-expanded={expanded}				
				size="small">View Strain</Button>
			</CardActions> */}

			{/* <Collapse in={expanded} timeout="auto" unmountOnExit>
			//	<p>hello</p>
			</Collapse> */}

		</Card>
	);
}

export default HistoryCard;

// const HistoryCard = (props) => {
// 	return (
// 		<div className='history-card'>
// 			<h5>{props.history.name}</h5>
// 			{/* <img src={props.history.imgUrl} /> */}
// 			<p><em>{props.history.race}</em></p>

// 			{/* insert Review component info here */}

// 			<button>View Strain</button>
// 		</div>
// 	)
// }

// export default HistoryCard;

// {
// 	id: id,
// 	imgUrl: string,
// 	name: string,
// 	description: string,
// 	type: string
//  }

// {props.history.imgUrl}
// {props.history.name}
// {props.history.description}
// {props.history.type}
