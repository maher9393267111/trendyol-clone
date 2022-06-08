import React from 'react';
import {useEffect, useState} from 'react';
import Accordion from '../../components/accordion';
import Filterelements from '../../components/filterelements';
import Products from '../../components/products';
const Home = () => {


const [fixed, setfixed] = useState(false);


useEffect(() => {

    window.addEventListener('scroll', () => {
        if (window.scrollY > 3008) {
            setfixed(true);
             console.log('true');
        } else {
            setfixed(false);
console.log('false');
        }
    
    }
    )
}

, []);




    return (
        <div className='    '>
            

<div>



{/* --grid- */}


<div className=' grid grid-cols-12  -z-10'>


{/* ---sidebar-- */}

<div className={`      
  mr-12 col-span-4   `}>






<div className='    border-r-lime-200 '>



<div className={`   border-2    shadow-xl   font-[source_sans_prosemibold]     notfixed     min-h-[350px]    `}>


{/* //------------------ */}

<Filterelements/>




{/* //--------------- */}


</div>






</div>



</div>

{/* -products- */}


<div className='  col-span-8'>


<div   className='  '>


<Products/>





</div>

<div>

    
</div>


</div>


</div>





</div>


        </div>
    );
}

export default Home;
