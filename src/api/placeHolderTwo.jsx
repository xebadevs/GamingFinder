import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Posts from '../components/Posts'
import Pagination from '../components/Pagination'
import { useSelector } from 'react-redux'


function PlaceHolderTwo() {
    const condition = useSelector((state) => state.showWrapper.value)
    console.log(condition)
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(10)

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
         console.log('condition' + condition)

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        (condition === true &&
        <div className="className container mt-5">
            <h1 className="className text-primary mb-3">My Blog</h1>
            <Posts posts={currentPosts} loading={loading} />
            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
        </div>
    )
    )
}

export default PlaceHolderTwo