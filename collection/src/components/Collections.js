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
        <header className='collection-header'>
            <div className='collection-username'>{username}'s</div>
            <div className='collection-app-title'>{title}</div>
        </header>
        <div className='collection-page'>
            <h1 className='collection-title'>Load Collection</h1>
            <div className='collection-container'>
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
                <div className='collection-name'>
                    name: {name}
                </div>
                <div className='collection-time'>
                    Last updated: {formatedUpdatedTime}
                </div>
                <div className='collection-edit-links'>
                    <Link to=''>Change Name</Link>
                    <Link to=''>Delete</Link>
                </div>
            </>
        )
    }