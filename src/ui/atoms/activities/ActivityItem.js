import React from "react";
import styled from "@emotion/styled";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const ActivityItem = (props) => {
    return(
        <StyledCard>
            <CardActionArea>
                <CardMedia
                    image={props.activity.imgSource}
                    title={props.activity.title}
                />
                <CardContent>
                    <p  >
                        {props.activity.title}
                    </p>
                    <p>
                        {props.activity.text.substring(0,300)}
                    </p>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </StyledCard>
    )
};

const StyledCard = styled(Card)`
    width: 50%;
    margin: 5% auto;
    
    .MuiCardMedia-root {
        height: 300px;
        background-size: cover;
        background-repeat: no-repeat;
    }
`;

export default ActivityItem;