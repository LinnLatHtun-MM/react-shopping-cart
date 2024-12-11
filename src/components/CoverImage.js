import Image from 'next/image'
import React from 'react'

function CoverImage() {
    return (
        <Image src="https://images.pexels.com/photos/1639556/pexels-photo-1639556.jpeg?auto=compress&cs=tinysrgb&w=800"
            width={500} height={500} alt='cover-img'
            style={{ width: '100%', objectFit: 'cover' }}
        />

    )
}

export default CoverImage
