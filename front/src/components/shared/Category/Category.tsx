import {useEffect, useState} from "react";
import axios from 'axios';


const Category = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3001/categories", {
            withCredentials: true
        })
            .then((response) => {
                setCategories(response.data.categories)
            }).catch((error) => {
                throw new Error(error)
        })
    }, [])

console.log(categories)

    return (
        <div>
        <h1>Categories</h1>
        {categories.map((category, index) => {
             return <h2 key={index}>{category.name}</h2>
        })}
    </div>
    )}

export default Category