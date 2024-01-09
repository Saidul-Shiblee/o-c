
"use client";

import React from "react";
import { useFormContext } from "../../context/FormContext";
import LensPower from './LensPower'
import LensType from "./LensType";
import Language from "./Language";
import PowerType from "./PowerType";
import FrameType from "./FrameType";
import BlueLight from "./BlueLight";
import SelectedOption from "./SelectedOption";

const MultiStepForm = () => {
  const { state } = useFormContext();
  return (
    <div dir={state.lang.value === "ar" ? 'rtl' : 'ltr'} id="animated" className={` flex justify-end items-center`}>
      {state.step === 1 && <Language />}
      {state.step === 2 && <LensPower />}
      {state.step === 3 && <PowerType />}
      {state.step === 4 && <LensType />}
      {state.step === 5 && <BlueLight />}
      {state.step === 6 && <FrameType />}
      
    </div>
  );
};

export default MultiStepForm;
