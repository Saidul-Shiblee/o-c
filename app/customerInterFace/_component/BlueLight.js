'use client'

import React from 'react'
import { useFormContext } from '@/app/context/FormContext'
import { lang } from '@/utils/lang'
import { Fade } from 'react-awesome-reveal'

const BlueLight = () => {
    const { state, handleChange } = useFormContext();
    return (
        <>
            <Fade >
                <div className=' rounded-[20px] w-[350px] sm:w-[490px]'>
                    <h3 className={` font-semibold px-2 py-6 text-2xl ${state.lang.value === "ar" ? "font-arabic" : "font-english"} `}>{lang?.[state.lang.value]?.blueLight?.title}</h3>
                    <div className="flex flex-col gap-4">
                        <div className="lens-item uppercase border rounded" onClick={() => 
                           { handleChange('blueLight', false)
                            handleChange('lensName', "Clear")}
                            
                            }>
                            <input name="radio" id="radio1" type="radio" checked={state?.blueLight === false} />
                            <label htmlFor="radio1" className='flex gap-4'>
                                <div>
                                    <span className={state.lang.value === "ar" ? "font-arabic" : "font-english"}>{lang?.[state.lang.value]?.blueLight?.['No']}</span>
                                <p className='text-sm normal-case' dir='ltr'>100% UV Protection</p>
                                </div>
                            </label>
                        </div>
                        <div className="lens-item uppercase border rounded" onClick={() =>{ 
                            handleChange('blueLight', true)
                            handleChange('lensName', "Blue Cut")
                            }}>
                            <input name="radio" id="radio2" type="radio" checked={state?.blueLight === true} />
                            <label htmlFor="radio2" className='flex gap-4'>
                                <div>
                                    <span className={state.lang.value === "ar" ? "font-arabic" : "font-english"}>{lang?.[state.lang.value]?.blueLight?.['Yes']}</span>
                                    <p className='text-sm normal-case' dir='ltr'>100% UV + Blue Light Protection</p>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </Fade>
        </>
    )
}

export default BlueLight