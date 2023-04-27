import {
    Routes,
    Route
} from 'react-router-dom';

import Home from '../pages/App/Home';


const Routings = () => {

    return (
        <Routes>
            <Route exact path='/' element={<Home />} />
        </Routes>
    )
}

export default Routings;
