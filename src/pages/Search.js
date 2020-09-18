import React, {useEffect, useState} from 'react'
import Book from '../components/BookSearch/Book';

export default function Search() {

    const [books, setBooks] = useState([]);

    const getBooks = () => {

    }

    return(
        <div>
            <form>
                <input type="search"/>
                
            </form>
        </div>  
    )
}