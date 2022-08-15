import { useState } from 'react'

const HomeBlog = () => {
    const [img, setImg] = useState(
        'https://api.ferrari.com/cms/network/medias//resize/6245832fad8c7d2af3d9fb64?apikey=9QscUiwr5n0NhOuQb463QEKghPrVlpaF&width=530&height=597'
    )
    const [price, setPrice] = useState('335,000')
    const HandleImg = (color) => {
        if (color === 'red') {
            setImg(
                'https://api.ferrari.com/cms/network/medias//resize/6245832fad8c7d2af3d9fb64?apikey=9QscUiwr5n0NhOuQb463QEKghPrVlpaF&width=530&height=597'
            )
            setPrice('335,000')
        } else if (color === 'white') {
            setImg(
                'https://images.unsplash.com/photo-1531436062681-6e2a24161410?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            )
            setPrice('336,500')
        } else if (color === 'blue') {
            setImg(
                'https://images.unsplash.com/photo-1545061371-98a8355c9c0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
            )
            setPrice('334,000')
        }
    }
    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img
                        alt="ecommerce"
                        className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                        src={img}
                    />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">
                            FERRARI
                        </h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                            FERRARI TRIUMPHS AT THE SEBRING 12 HOURS IN GTD
                        </h1>
                        <div className="flex mb-4">
                            <span className="flex items-center">
                                <svg
                                    className=" text-green-500"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                                </svg>
                                <svg
                                    className=" text-green-500"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                                </svg>
                                <svg
                                    className=" text-green-500"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                                </svg>
                                <svg
                                    className=" text-green-500"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className=" text-green-500"
                                    fill="currentColor"
                                >
                                    <path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524v-12.005zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z" />
                                </svg>
                                <span className="text-gray-600 ml-3">
                                    4.5 Reviews
                                </span>
                            </span>
                            <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                <a className="text-gray-500">
                                    <svg
                                        fill="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        stroke-idth="2"
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a className="text-gray-500">
                                    <svg
                                        fill="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        stroke-idth="2"
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </a>
                                <a className="text-gray-500">
                                    <svg
                                        fill="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        stroke-idth="2"
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>
                                </a>
                            </span>
                        </div>
                        <p className="leading-relaxed">
                            With an extraordinary win for Cetilar Racing's 488
                            GT3 Evo 2020 and third place for AF Corse's Ferrari,
                            the GTD class podium at the 70th Sebring 12 Hours,
                            the second round of the IMSA, once again celebrated
                            the colours of the Prancing Horse. GTD. In the class
                            with the highest number of teams at the start, the
                            team formed by Roberto Lacorte, Giorgio Sernagiotto
                            and Antonio Fuoco, despite a race full of episodes
                            that risked compromising the final outcome, took
                            first place under the chequered flag. The star of
                            the race was Antonio Fuoco who kept an extraordinary
                            pace in each stint, as underlined by the fastest lap
                            of the race in the entire GT class with a 2'01"213.
                        </p>
                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                            <div className="flex">
                                <span className="mr-3">Color</span>
                                <button
                                    onClick={() => HandleImg('white')}
                                    className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"
                                ></button>
                                <button
                                    onClick={() => HandleImg('red')}
                                    className="border-2 border-gray-300 ml-1 bg-red-600 rounded-full w-6 h-6 focus:outline-none"
                                ></button>
                                <button
                                    onClick={() => HandleImg('blue')}
                                    className="border-2 border-gray-300 ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none"
                                ></button>
                            </div>
                        </div>
                        <div className="flex">
                            <span className="title-font font-medium text-2xl text-gray-900">
                                $ {price}
                            </span>
                            <button className="flex ml-auto text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">
                                <span className="mr-3">Buy Now</span>
                                <svg
                                    fill="white"
                                    width="24"
                                    height="24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                >
                                    <path d="M13.5 18c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm-3.5 1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm14-16.5l-.743 2h-1.929l-3.473 12h-13.239l-4.616-11h2.169l3.776 9h10.428l3.432-12h4.195zm-12 4h3v2h-3v3h-2v-3h-3v-2h3v-3h2v3z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeBlog
