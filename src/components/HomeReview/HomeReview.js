import React from 'react'

const HomeReview = ({ review }) => {
    const { name, comment, img, job, firstFourStar, lastOneStar, rating } =
        review
    return (
        <div className="lg:w-1/4 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
                <img
                    alt="testimonial"
                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src={img}
                />
                <p className="leading-relaxed">{comment.slice(0, 150)}</p>
                <span className="inline-block h-1 w-10 rounded bg-green-500 mt-2 mb-6"></span>
                <p className="text-gray-500">{rating} stars </p>
                <div className="flex justify-center">
                    <div className="flex">
                        <svg
                            className=" text-yellow-500 "
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                        >
                            <path d={firstFourStar} />
                        </svg>
                        <svg
                            className=" text-yellow-500 "
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                        >
                            <path d={firstFourStar} />
                        </svg>
                        <svg
                            className=" text-yellow-500 "
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                        >
                            <path d={firstFourStar} />
                        </svg>
                        <svg
                            className=" text-yellow-500 "
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                        >
                            <path d={firstFourStar} />
                        </svg>
                        <svg
                            className=" text-yellow-500 "
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                        >
                            <path d={lastOneStar} />
                        </svg>
                    </div>
                </div>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                    {name}
                </h2>
                <p className="text-gray-500">{job}</p>
            </div>
        </div>
    )
}

export default HomeReview
