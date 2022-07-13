import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert;
// import EventIcon from '@material-ui/icons/Event';
// import Avatar from '@material-ui/core/Avatar';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '100 %',
    },
    root1: {
        maxWidth: '50 %',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));

export default function RecipeReviewCard() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            {/* <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <EventIcon />
                    </IconButton>
                }
                title="September 14, 2022"
                subheader="10h - 11h"
            /> */}
            <CardHeader

                title="Teams Participate"
                subheader=""
            >
            </CardHeader>

            <CardContent >
                <Grid container spacing={3}>
                    <Grid xs={3}>
                        <Avatar alt="Remy Sharp" src="https://upload.wikimedia.org/wikipedia/fr/thumb/8/86/Paris_Saint-Germain_Logo.svg/240px-Paris_Saint-Germain_Logo.svg.png" className={classes.large} />
                        <Typography title>TEAM 1 </Typography>
                    </Grid>
                    <Grid xs={3}>
                        <Avatar alt="Remy " src="https://upload.wikimedia.org/wikipedia/fr/thumb/8/86/Paris_Saint-Germain_Logo.svg/240px-Paris_Saint-Germain_Logo.svg.png" className={classes.large} />
                        <Typography title>TEAM  </Typography>
                    </Grid>
                    <Grid xs={3}>
                        <Avatar alt="Remy " src="https://upload.wikimedia.org/wikipedia/fr/thumb/8/86/Paris_Saint-Germain_Logo.svg/240px-Paris_Saint-Germain_Logo.svg.png" className={classes.large} />
                        <Typography title>TEAM  </Typography>
                    </Grid>
                    <Grid xs={3}>
                        <Avatar alt="Remy " src="https://upload.wikimedia.org/wikipedia/fr/thumb/8/86/Paris_Saint-Germain_Logo.svg/240px-Paris_Saint-Germain_Logo.svg.png" className={classes.large} />
                        <Typography title>TEAM  </Typography>
                    </Grid>
                    <Grid xs={3}>
                        <Avatar alt="Remy Sharp" src="https://upload.wikimedia.org/wikipedia/fr/thumb/8/86/Paris_Saint-Germain_Logo.svg/240px-Paris_Saint-Germain_Logo.svg.png" className={classes.large} />
                        <Typography title>TEAM 1 </Typography>
                    </Grid>
                    <Grid xs={3}>
                        <Avatar alt="Remy Sharp" src="https://upload.wikimedia.org/wikipedia/fr/thumb/8/86/Paris_Saint-Germain_Logo.svg/240px-Paris_Saint-Germain_Logo.svg.png" className={classes.large} />
                        <Typography title>TEAM 1 </Typography>
                    </Grid>
                    <Grid xs={3}>
                        <Avatar alt="Remy Sharp" src="https://upload.wikimedia.org/wikipedia/fr/thumb/8/86/Paris_Saint-Germain_Logo.svg/240px-Paris_Saint-Germain_Logo.svg.png" className={classes.large} />
                        <Typography title>TEAM 1 </Typography>
                    </Grid>
                    <Grid xs={3}>
                        <Avatar alt="Remy Sharp" src="https://upload.wikimedia.org/wikipedia/fr/thumb/8/86/Paris_Saint-Germain_Logo.svg/240px-Paris_Saint-Germain_Logo.svg.png" className={classes.large} />
                        <Typography title>TEAM 1 </Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions disableSpacing>

                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardHeader

                    title="Matchs"
                    subheader=""
                >
                </CardHeader>
                <Card item xs={6} className={classes.root1}>
                    <CardHeader xs={6}

                        title="19 Septembre"
                        subheader="10h-11h"
                    >
                    </CardHeader>
                    <CardContent >
                        <Grid item xs={6}>

                            <Grid xs={3}>
                                <Avatar alt="Remy Sharp" src="https://upload.wikimedia.org/wikipedia/fr/thumb/8/86/Paris_Saint-Germain_Logo.svg/240px-Paris_Saint-Germain_Logo.svg.png" className={classes.large} />
                                <Typography title>TEAM 1 </Typography>
                            </Grid>
                            <Grid xs={3}>
                                <Avatar alt="Remy " src="https://upload.wikimedia.org/wikipedia/fr/thumb/8/86/Paris_Saint-Germain_Logo.svg/240px-Paris_Saint-Germain_Logo.svg.png" className={classes.large} />
                                <Typography title>TEAM 2  </Typography>
                            </Grid>


                        </Grid>
                    </CardContent>
                </Card>

            </Collapse>
        </Card>
    );
}