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
                    <StyledTitle>
                        {props.activity.title}
                    </StyledTitle>
                    <StyledText>
                        {props.activity.text.substring(0,300)}
                    </StyledText>
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

const StyledTitle = styled.h5`
    font-size: 30px;
    font-family: sans-serif;
    padding: 15px 0;
    margin: 0;
    
    @media (max-width: 720px) {
        font-size: 25px;
    }
`;

const StyledText = styled.p`
    font-size: 20px;
    font-family: sans-serif;
    text-align: justify;
    
    @media (max-width: 720px) {
        font-size: 18px;
    }
`;

const StyledCard = styled(Card)`
    width: 50%;
    margin: 5% auto;
    
    &.MuiPaper-elevation1 {
        box-shadow: 10px 5px 5px black;
    }
    
    .MuiCardMedia-root {
        height: 300px;
        background-size: cover;
        background-repeat: no-repeat;
    }
    
    @media (max-width: 720px) {
        width: 90%;
    }
`;

export default ActivityItem;