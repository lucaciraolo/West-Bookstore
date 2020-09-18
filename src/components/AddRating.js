import React, {useEffect, useState} from 'react'

export default function AddRating() {

    const [rating] = useState([]);

    const setRating = (rating) => {
        //
    }

    return(
        <div>
            <Button className="btn danger" onClick={() => this.setRating(1)}>1 Star</Button>
            <Button className="btn danger" onClick={() => this.setRating(2)}>2 Star</Button>
            <Button className="btn danger" onClick={() => this.setRating(3)}>3 Star</Button>
            <Button className="btn danger" onClick={() => this.setRating(4)}>4 Star</Button>
            <Button className="btn danger" onClick={() => this.setRating(5)}>5 Star</Button>
        </div>  
    )
}