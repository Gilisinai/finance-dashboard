import Card from '@material-ui/core/Card';

import React from 'react'

function CardWrapper(props) {

    return (
        <Card>
           {props.children}
        </Card>
    )
}

export default CardWrapper
