const CustomCard = ({item}) => {
    const classes = useStyles();
    return (
        <Card>
            <CardActionArea>
                <CardContent>
                    <Typography variant = "h5">{item.title}</Typography>
                    <Typography variant = "body2">{item.details}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size = "small" color = "primary">Share</Button>
                <Button size = "small" color = "primary">Delete</Button>
            </CardActions>
        </Card>
    );
};

export default CustomCard;