import Image from 'next/image'
import React from 'react'
import Logo from '../../../public/logo.png'

const SelectedOption = () => {
    return (
        <div className="flex flex-col gap-10 ">
            <Fade duration={1000}>
                <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 relative overflow-hidden ">
                        <Image
                            src={Logo}
                            alt="logo"
                            fill
                            className="absolute rounded-full "
                        />
                    </div>
                    <p className="text-center text-xl font-semibold">
                        Your Selected option
                    </p>
                </div>
            </Fade>
            <div className="flex justify-center items-center">
                <Fade duration={1000} >
                    <div
                        className="flex flex-col p-4 shadow-lg rounded-md  border-2  border-[#080a36] bg-white"
                    >
                        <div className="text-2xl font-semibold mb-3">
                            {state.selectedOption.package.packageName}
                        </div>
                        <div>
                            {state.frameType.value && el.rimlessAvailable ? (
                                <p className="font-semibold text-xl">
                                    SAR-{state.selectedOption.lensePrice + state.selectedOption.rimlessPrice}
                                </p>
                            ) : state.frameType.value && !state.selectedOption.rimlessAvailable ? (
                                <p className="font-semibold text-xl">{el.remarks}</p>
                            ) : !state.frameType.value ? (
                                <p className="font-semibold text-xl">
                                    SAR-{state.selectedOption.lensePrice}
                                </p>
                            ) : null}
                        </div>
                        <div>
                            {state.frameType.value && state.selectedOption.rimlessAvailable ? (
                                <p>{state.selectedOption.rimlessAttributes}</p>
                            ) : state.frameType.value &&
                                !state.selectedOption.rimlessAvailable ? null : !state.frameType.value ? (
                                    <p>{state.selectedOption.attributes}</p>
                                ) : null}
                        </div>
                        <div>
                            {state.frameType.value && state.selectedOption.rimlessAvailable ? (
                                <p>{state.selectedOption.lenseType.lensName}</p>
                            ) : state.frameType.value &&
                                !state.selectedOption.rimlessAvailable ? null : !state.frameType.value ? (
                                    <p>{state.selectedOption.lenseType.lensName}</p>
                                ) : null}
                        </div>
                    </div>
                </Fade>

            </div>
        </div>
    )
}

export default SelectedOption