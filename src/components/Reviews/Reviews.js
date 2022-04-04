import React from 'react'
import useReviews from '../../hooks/useReviews'
import Review from '../Review/Review'

const Reviews = () => {
    const [reviews] = useReviews()
    return (
        <section className="text-gray-600 body-font">
            <h1 className=" text-center mt-44 text-4xl">Customer Reviews</h1>
            <div className="flex justify-center">
                <span className="inline-block h-1 w-44 rounded bg-green-500 mt-6 mb-4"></span>
            </div>
            <div className="container px-10 py-24 mx-auto">
                <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews?.map((review) => (
                        <Review key={review._id} review={review}></Review>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Reviews
