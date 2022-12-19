import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

export const Collections = ({collections, username, title}) => {

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

        return (
            <>
                <div>
                    {name}
                </div>
                <div>
                    {updated_at}
                </div>
                <div>
                    <Link to=''>Change Name</Link>
                    <Link to=''>Delete</Link>
                </div>
            </>
        )
    }