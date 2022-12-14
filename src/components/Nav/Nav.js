import React from 'react'
import { Link } from 'react-router-dom'
import CustomLink from '../CustomLink/CustomLink'

const Nav = () => {
    return (
        <header className="text-gray-600 bg-white  body-font md:sticky top-0 z-50 ">
            <div className="container mx-auto  flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link
                    to="/"
                    className="flex  title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
                >
                    <svg
                        fill="white"
                        className="w-10 h-10 text-white p-2 bg-green-500 rounded-full"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                    >
                        <path d="M21.206 9.53c-1.142-.331-1.654-.475-3.031-.794-.55-.545-2.052-2.036-2.389-2.376l-.089-.091c-.666-.679-1.421-1.269-3.172-1.269h-7.64c-.547 0-.791.456-.254.944-1.515 1.311-2.641 2.308-3.462 3.351 1.167-.091 4.219.07 6.012.628-.081.782.212 1.604.993 2.128 1.345.898 2.819.259 4.277 1.127.543.322.885.764 1.066 1.3 1.048-5.051-3.671-8.146-5.828-5.807 1.235.486 2.689 1.579 3.118 2.469-1.463-1.265-3.961-2.206-6.132-2.589.38-.337.787-.679 1.302-1.12.34-.292.774-.433 1.222-.431h5.173c1.22 0 1.577.385 2.116.892.419.393 2.682 2.665 2.682 2.665s2.303.554 3.48.895c.84.243 1.35.479 1.35 1.71 0 1.197-.396 1.827-1.168 1.889-.399-1.189-1.509-2.051-2.832-2.051-1.327 0-2.44.868-2.836 2.062h-6.328c-.396-1.194-1.509-2.062-2.836-2.062-1.319 0-2.426.857-2.829 2.04-.586-.114-1.171-1.037-1.171-2.385 0-.991.261-1.579.903-2.332-.926-.076-1.783-.071-2.402.02-.316.647-.501 1.375-.501 2.312 0 2.461 1.361 4.258 3.179 4.332.41 1.169 1.512 2.013 2.821 2.013 1.304 0 2.403-.838 2.816-2h6.367c.413 1.162 1.512 2 2.816 2 1.308 0 2.409-.843 2.82-2.01 1.934-.056 3.18-1.504 3.18-3.828.001-2.824-2.029-3.411-2.793-3.632zm-15.206 7.67c-.662 0-1.2-.538-1.2-1.2s.538-1.2 1.2-1.2 1.2.538 1.2 1.2-.538 1.2-1.2 1.2zm12 0c-.662 0-1.2-.538-1.2-1.2s.538-1.2 1.2-1.2 1.2.538 1.2 1.2-.538 1.2-1.2 1.2z" />
                    </svg>
                    <span className="ml-3 text-xl">Tailblogs</span>
                </Link>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex font-semibold flex-wrap items-center text-base justify-center">
                    <CustomLink to="/" className="mr-5 hover:text-green-500 ">
                        HOME
                    </CustomLink>
                    <CustomLink
                        to="reviews"
                        className="mr-5 hover:text-green-500 "
                    >
                        REVIEWS
                    </CustomLink>
                    <CustomLink
                        to="dashboard"
                        className="mr-5 hover:text-green-500 "
                    >
                        DASHBOARD
                    </CustomLink>
                    <CustomLink
                        to="blogs"
                        className="mr-5 hover:text-green-500 "
                    >
                        BLOGS
                    </CustomLink>
                </nav>
                <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                    Login
                    <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 ml-1"
                        viewBox="0 0 24 24"
                    >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </header>
    )
}

export default Nav
