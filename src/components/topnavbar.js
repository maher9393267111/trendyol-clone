import React from 'react';
import {useState, useEffect} from 'react';
import {UserOutlined,HeartOutlined,ShoppingCartOutlined, HeatMapOutlined} from '@ant-design/icons';
import { category } from './data';
const Topnavbar = () => {

const [showdrop, setShowdrop] = useState(false);


    return (
        <div>
            
{/* ----sec1---- */}

<div>

<div className=' flex justify-between  mr-12'>

{/* -left- */}

<div>

</div>


{/* ---right- */}

<div>

<ul  className='  text-[#999] s1  text-[13px] mt-2 flex gap-6'>
<li className=' l1'>İndirim Kuponlarım  </li>
<li className='l1'>Trendyol'da Satış Yap Yardım </li>
<li className='l1'> Yardım &&Destek</li>


</ul>



</div>





</div>


</div>

{/* -----sec 1 end--- */}



{/* ---sec2----- */}


<div className=' ml-6  h-[70px]   sec2'>

<div className='  grid grid-cols-12   items-center   gap-4'>


{/* ---logo- */}

<div className=' col-span-3'>

<div>
    <img
    className='  sm:w-[100px] lg:w-[200px] '
    
    src="https://cdn.dsmcdn.com/web/logo/ty-web.svg" alt="" />
</div>

</div>



{/* -middle search input- */}

<div className=' col-span-6'>



<div>
<div class="flex items-center justify-center">
    <div class="flex   focus:border-2  relative   w-[84%] rounded">
        <input
        onFocus={()=>setShowdrop(true)}
        onBlur={()=>setShowdrop(false)}
        
        type="text" class="px-4 py-2    w-[100%]   bg-[#deffed]  transition-all duration-200  focus:outline-orange-400   border-none outline-none" placeholder="Search..."/>
        <button class="flex items-center   absolute justify-center  right-[2px]  top-[8px] px-4 border-l">
            <svg class="w-6 h-6  text-orange-400" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                    d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
            </svg>
        </button>
    </div>


{/* ---focus show- */}
{ showdrop  && 
<div className=' search-drop    transition-all duration-200  sm:top-[85px] lg:top-[102px] shadow-2xl     min-w-[200px]  min-h-[200px]'  >

</div>

}

</div>
</div>


</div>



<div className=' col-span-3'>


<div className=' h-[57px]'>

<ul className=' flex gap-6  items-end  h-full'>

<li className=' relative  group'>
    <p className=' flex gap-2'> <span> <UserOutlined/></span>   <h3 className=' mt-[3px] hover:text-orange-400'>Giris yap</h3>  </p>
    

{/* -dropdown- */}

<div className=' border-2  hidden group-hover:block  left-[-27px] top-[37px]  absolute  min-w-[144px]   min-h-[133px]'>


<div className=' text-center mt-4'>

<button className=' block mx-auto mt-2  text-white  bg-orange-500  p-2   rounded-lg  w-[86%]'>Giris yap</button>


<button className=' block mx-auto   rounded-lg  border-2 mt-2 p-2 w-[86%]'>Uye ol</button>




</div>



</div>

    
    </li>


<li>  
<p className='flex gap-2 '>  <span> <HeartOutlined /> </span> <h3 className=' mt-[3px]   hover:text-orange-400'>favorilerim</h3>  </p>
     </li>


<li> 
    
<p className='flex  gap-2'>  <span> <ShoppingCartOutlined  /> </span>  <h3 className=' mt-[3px] hover:text-orange-400'>Sepetim </h3> </p>
   </li>



</ul>





</div>




</div>








</div>




</div>


{/* ----categories nav sec3------ */}

<div className=' mt-4'>
    
<div className=' container'>


<ul className=' font-semibold  gap-4 justify-between flex  ml-4 mr-4'>

{

category.map((item,index)=>{

return (


    <li  className=' group   sm:text-[11px] lg:text-[17px]  '>
        <p
        className='hover:border-b-2  hover:border-b-orange-500  hover:text-orange-500'
        >{item.name}</p>


{/* ---drop down- */}

<div className=' absolute overflow-y-hidden   right-[60px]  group-hover:block hidden  shadow-lg    w-[85%]  h-[422px]'>


{/* ----flex sub cats and cat images- */}

<div className=' flex  h-full gap-8 pb-12 '>

    {/* ---here-------- */}

<ul className={`   ${ item.images.length<3 ? 'w-[85%]' : 'w-[60%]' }    grid    grid-flow-col   auto-cols-[110px]   grid-row-2  justify-between`}>


{item.subcats.map((subitem,index)=>{

return (
<li    className={`  ${subitem.list.length>7 ? ' row-span-2' : ' row-span-1'}  hello  `}>
<p>{subitem.name}    </p>

{/* --lists- */}
<div>

<ul>


{subitem?.list.map((listitem,index)=>{

return (
<li

className='  text-[11px]'
>{listitem}</li>


)})}








</ul>




</div>




</li>


)})}


</ul>

{/* ---images- */}

<div className=' right-side w-[40%] '>

<div className={` flex  ${item.images.length > 2 ? 'flex-row'  : '  flex-col  items-center'}  flex-wrap    p-[10px] h-full`}>

{/* <img src={item.images[0]} alt="" /> */}


{item.images.map((image,index)=>{

return (


<div className='w-1/2  '>
    {/* {item.images.length} */}
<div  className=     { `   ${!item.images.length >2 ? 'h-1/2' : 'h-3/4'}  p-[10px]  `}>
    <img className=' h-[133px] w-[265px]    object-cover ' src={image} alt="" />
</div>


</div>


)})}


</div>



</div>




</div>




</div>



    </li>




)})}



</ul>



</div>





</div>





        </div>
    );
}

export default Topnavbar;
