import GridComponent from '@/components/GridComponent';
import React from 'react'

function page({ params }) {
    console.log(params.detail);

    return (
        //batic nak yay ya dl
        // < div >
        //     {`this is ${params.id}`}

        //     this is param {params.id} {params.detail}.


        // </div >

        <GridComponent></GridComponent>
    );
}

export default page
