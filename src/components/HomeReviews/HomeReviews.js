import React from 'react'
import { Link } from 'react-router-dom'
import useReviews from '../../hooks/useReviews'
import HomeReview from '../HomeReview/HomeReview'

const HomeReviews = () => {
    const [reviews] = useReviews()
    const firstThreeReviews = reviews.slice(0, 3)
    return (
        <section className="text-gray-600 body-font">
            <h1 className=" text-center mt-44 text-4xl">
                Customer Reviews: (0{firstThreeReviews.length})
            </h1>
            <div className="flex justify-center">
                <span className="inline-block h-1 w-44 rounded bg-green-500 mt-6 mb-4"></span>
            </div>
            <div className="container px-5 py-24 mx-auto">
                <div className="md:flex justify-center gap-10">
                    {firstThreeReviews?.map((review) => (
                        <HomeReview
                            key={review._id}
                            review={review}
                        ></HomeReview>
                    ))}
                </div>
            </div>
            <Link className="flex justify-center" to="reviews">
                <button className="py-2 px-8 rounded-full mt-4 bg-blue-500 text-white font-semibold  shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                    See All Reviews
                </button>
            </Link>
        </section>
    )
}

export default HomeReviews
