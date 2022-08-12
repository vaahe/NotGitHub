import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'flowbite';

function DrowDown() {
    const [showResults, setShowResults] = useState(false);
    const onClick = () => setShowResults(!showResults);

    return (
        <div>
            <button id="dropdownDividerButton"
                data-dropdown-toggle="dropdownDivider"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 text-sm focus:outline-none focus:ring-blue-300 rounded-lg flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-32 h-32"
                type="button"
                onClick={onClick}
            >
                <svg className={`${!showResults ? "rotate-0" : "-rotate-180"} ml-2 w-4 h-4`} aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
                My Account
            </button>
            {showResults ? (
                <div id="dropdownDivider" className="z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 translate-y-[5rem] translate-x-[72rem] block"
                    data-popper-reference-hidden=""
                    data-popper-escaped=""
                    data-popper-placement="bottom"
                    style={
                        {
                            position: 'absolute',
                            inset: '0px auto auto 0px',
                            margin: '1px',
                        }}>
                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDividerButton">
                        <li>
                            <Link to="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</Link>
                        </li>
                        <li>
                            <Link to="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</Link>
                        </li>
                    </ul>
                    <div class="py-1">
                        <Link to="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign Out</Link>
                    </div>
                </div>) : null}
        </div>
    )
}

export default DrowDown