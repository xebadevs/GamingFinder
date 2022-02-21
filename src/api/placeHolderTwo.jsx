import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Posts from '../components/Posts'

function PlaceHolderTwo() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(10)

    useEffect(() => {

        const fetchPosts = async () => {
            setLoading(true)
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
            setPosts(res.data)
            setLoading(false)
        }

        fetchPosts()
        }, [])

         // console.log(posts)

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)


    return (
        <div className="className container mt-5">
            <h1 className="className text-primary mb-3">My Blog</h1>
            <Posts posts={currentPosts} loading={loading} />
        </div>
    )
}

export default PlaceHolderTwo