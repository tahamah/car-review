import React from 'react'
import useReviews from '../../hooks/useReviews'
import Review from '../Review/Review'

const Reviews = () => {
    const [reviews] = useReviews()
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className=" grid grid-cols-1 md:grid-cols-3 gap-10">
                    {reviews?.map((review) => (
                        <Review key={review._id} review={review}></Review>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Reviews
