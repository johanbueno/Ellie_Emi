import React  from 'react';
import Floral from './img/Floral.jpeg';
import Emi from './img/Emi.jpeg';
import Floral2 from './img/Floral2.jpeg';
import Floral3 from './img/Floral3.jpeg';
import gold from './img/gold.jpeg';
import october from './img/october.jpeg';
import sister from './img/Sister.jpeg';
import sunflower from './img/sunflower.jpeg';
import rainbow from './img/Rainbow.jpeg';
import september from './img/september.jpeg';

function Images()  {
    
        return (
            <div>
                <img src={Floral} alt="" class="img-thumbnail  rounded float-left"></img>
                <img src={Emi} alt="" class="img-thumbnail"></img>
                <img src={Floral2} alt="" class="img-thumbnail"></img>
                <img src={Floral3} alt="" class="img-thumbnail"></img>
                <img src={gold} alt="" class="img-thumbnail"></img>
                <img src={october} alt="" class="img-thumbnail"></img>
                <img src={sister} alt="" class="img-thumbnail"></img>
                <img src={sunflower} alt="" class="img-thumbnail"></img>
                <img src={rainbow} alt="" class="img-thumbnail"></img>
                <img src={september} alt="" class="img-thumbnail"></img>
            </div>
        );
}

export default Images;