import { useState, useEffect } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import format from 'date-fns/format'

export const Collections = ({username, title, token}) => {
    const [collections, setCollections] = useState([])

    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/mycollections/',
            {
                headers: {
                    Authorization: `Token ${token}`,
                    },
            })
            .then((res) => {
                setCollections(res.data)
            })
    },[])

    return (
        <>
        {/* <header>
            <div>{username}'s</div>
            <div>{title}</div>
        </header> */}
        <div>
            <div>Load Collection</div>
            <div>
                {collections.map((collection) => (
                    <div key={collection.id}>
                        <Collection
                            collection={collection}
                            name={collection.name}
                            updated_at={collection.updated_at}
                            />
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

    const Collection = ({ collection, name, updated_at }) => {
        const navigate = useNavigate()
        
        const handleEdit = (collection) => {
            navigate(`/edit/${collection.id}`)
        }
        const handleDelete = (collection) => {
            navigate(`/delete/${collection.id}`)
        }

        const formatedUpdatedTime = format(new Date(updated_at), 'PPp')

        return (
            <>
                <div>
                    name: {name}
                </div>
                <div>
                    Last updated: {formatedUpdatedTime}
                </div>
                <div>
                    <Link to=''>Change Name</Link>
                    <Link to=''>Delete</Link>
                </div>
            </>
        )
    }