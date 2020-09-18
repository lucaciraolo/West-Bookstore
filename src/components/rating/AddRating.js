import React, {useEffect, useState} from 'react'

import './AddRating.css'

export default function AddRating(props) {

    const [rating] = useState([]);

    const setRating = (rating) => {
        //getbookid from props passed in on declaration
    }

    return(
        <div class="rating">
            <button className="btn danger" onClick={() => this.setRating(1)}><span>☆</span></button>
            <button className="btn danger" onClick={() => this.setRating(2)}><span>☆</span></button>
            <button className="btn danger" onClick={() => this.setRating(3)}><span>☆</span></button>
            <button className="btn danger" onClick={() => this.setRating(4)}><span>☆</span></button>
            <button className="btn danger" onClick={() => this.setRating(5)}><span>☆</span></button>
        </div>  
    )
}