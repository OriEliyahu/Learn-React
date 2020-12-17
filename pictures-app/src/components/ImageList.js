import React from 'react';

const ImageList = (props) => {
    return (
        props.images.map(({description, id, urls}) => {
            return <img key={id} alt={description} src={urls.regular}/>
        })
    );
}

export default ImageList;