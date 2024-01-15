'use client'


import React, { useEffect, useState } from 'react'
import Script from 'next/script'

const Map = () => {

    const [browser, setBrowser] = useState(false)

    useEffect(() => {
        setBrowser(true)
    }, [])

    if (!browser ) {
        return null
    }

  return (
    <>
      <iframe className='w-full h-full rounded-lg shadow-lg' frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=400&amp;height=300&amp;hl=en&amp;q=4588,%20Al%20Wusta%20District,%20%20%20Unayzah+(Optical%20Care)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>  
          <Script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=f4ae732005e578dba0b6f6d54b398f157df1d107'  ></Script>
      </>
  )
}

export default Map

