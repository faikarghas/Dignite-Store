import React from 'react'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from 'next/link'


function Bread({data}) {
    return (
        <div>
            <Breadcrumbs aria-label="breadcrumb" style={{marginBottom:'2rem'}}>
                {data.map((data,i)=>{
                    return (
                        <Link key={i} href={data.link}><a style={{color:'black',fontSize:'2rem'}}>{data.name}</a></Link>
                    )
                })}
            </Breadcrumbs>
        </div>
    )
}

export default Bread
