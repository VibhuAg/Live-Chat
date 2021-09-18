import React from 'react';
import { Card, CardImg, CardImgOverlay,
    CardTitle } from 'reactstrap';

    function RenderMenuItem ({dish, onClick}) {
        return (
            <Card style={{width:"200px", height:"200px"}}
                onClick={() => onClick(dish.id)}>
                <CardImg width="200px" src={dish.image} alt={dish.text} />
                <CardImgOverlay>
                    <CardTitle>{dish.text}</CardTitle>
                </CardImgOverlay>
            </Card>
        );
    }

    const QA = (props) => {

        const menu = props.dishes.map((dish) => {
            return (
                <div className="col-12 "  key={dish.id}>
                    <RenderMenuItem dish={dish} onClick={props.onClick} />
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }

export default QA;