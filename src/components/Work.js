import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function Work(){
    return(
        <div>
            <h2>TestWork</h2>
            <div>
                {/* Add MK logo to return home */}
                <Link to="/" href="#">HOME</Link>
            </div>
        </div>
    )
}
export default Work;