import React from 'react';
import '../style/MainPage.css';
// import { useParams } from 'react-router-dom';

const MainPage = () => {
    // const { id } = useParams();
    // const [show, setShow] = useState(true)
    // return show ? <div>User id is : {id}</div> : null
    return (
        <div className="main h-screen text-white px-32">
            <span className='text-4xl py-16 text-left block'>Repositories</span>
        </div>
    )
}

export default MainPage