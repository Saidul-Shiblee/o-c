"use client";
import React, { useState } from "react";
import MultiStepForm from "./MultiStepForm";
import { useFormContext } from "../../context/FormContext";
import { lang } from "@/utils/lang";
import Logo from '../../../public/logo.png'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Fade } from "react-awesome-reveal";
import { toast } from "@/components/ui/use-toast";
import { sortArray } from "@/utils/sortArray";
const Form = () => {
  const { state, handleChange, dispatch } = useFormContext();
  const [pack, setPack] = useState([]);
  const [loading, setLoading] = useState(false);
  const [warning, setWarning] = useState(false);
  const [error, setError] = useState(false);



  console.log(state)


  const nextStep = () => {
    dispatch({
      key: "buttonClicked",
      payload: { newValue: "next" },
    });

    if (!state.radd.value && !state.ladd.value && state.step === 2) {
      handleChange("step", state.step + 2);
      return
    }
    if (state.lensType.value === '6585c5eed71dd57bf1c363af' && state.step === 4 && (state.radd.value || state.ladd.value)) {
      handleChange("step", state.step + 2);
      return
    }
    if (state.lensType.value !== '6585c5eed71dd57bf1c363af' && state.step === 4) {
      handleChange("step", state.step + 2);
      return
    }

    handleChange("step", state.step + 1);

  };
  const prevStep = () => {
    if (state.step <= 2){
      return
    }
    dispatch({
      key: "buttonClicked",
      payload: { newValue: "prev" },
    });

    if (!state.radd.value && !state.ladd.value && state.step === 4) {
      handleChange("step", state.step - 2);
      return
    }
    if (state.lensType.value === '6585c5eed71dd57bf1c363af' && state.step === 6 && (state.radd.value || state.ladd.value)) {
      handleChange("step", state.step - 2);
      return
    }
    if (state.lensType.value !== '6585c5eed71dd57bf1c363af' && state.step === 6) {
      handleChange("step", state.step - 2);
      return
    }

    handleChange("step", state.step - 1);

  };


  const handleQuote = async () => {
    handleChange("result", true);
    try {
      setLoading(true);

      const res = await fetch("/api/quote", {
        method: "POST",
        body: JSON.stringify({
          ...(state.ls.value
            ? { leftEyeSpherical: state.ls.value }
            : { leftEyeSpherical: 0 }),
          ...(state.lc.value
            ? { leftEyeCylindrical: state.lc.value }
            : { leftEyeCylindrical: 0 }),
          leftEyeAdditional: state.ladd.value,
          rightEyeSpherical: state.rs.value,
          ...(state.rs.value
            ? { rightEyeSpherical: state.rs.value }
            : { rightEyeSpherical: 0 }),
          ...(state.rc.value
            ? { rightEyeCylindrical: state.rc.value }
            : { rightEyeCylindrical: 0 }),
          rightEyeAdditional: state.radd.value,
          lensType: state.lensType.value === "6585c5eed71dd57bf1c363af" && state.blueLight ? "658c647383a3b9afb9905df5" : state.lensType.value,
          frameType: state.frameType.value,
          ...(state.ladd.value || state.radd.value
            ? { powerType: state.powerType.value }
            : {}),
        }),
        cache: "no-store",
      });
      const result = await res.json();

      if (res.ok && result.Message === "Package found") {
        setTimeout(() => {
          const sortedArray = sortArray(result.packages)
          setPack(sortedArray);
          setLoading(false);
        }, 1000);
      }
      if (
        res.ok &&
        result.Message === "Package found" &&
        result.packages.length === 0
      ) {
        setTimeout(() => {
          setWarning(true);
          setLoading(false);
        }, 1000);
      }
      if (res.ok && result.Message === "No Package found") {
        setTimeout(() => {
          setWarning(true);
          setLoading(false);
        }, 1000);
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error!",
        description: "Something went wrong",
      });
    }
  };

  return (
    <div className=" flex justify-center items-center w-full   text-[#080a36] py-10 px-4">
      {pack?.length <= 0 && !loading && !warning && (
        <div className="flex flex-col   gap-10  w-[350px] sm:w-[490px]">
          <MultiStepForm />
          {state.step > 1 && (
            <div className="flex justify-between items-center">
            <button
                id="prev"
                onClick={prevStep}
                className={`font-medium bg-white border-[#080a36] border-[1px] text-[#080a36] text-lg select-none  py-3 px-5 rounded-lg cursor-pointer transition duration-100 hover:opacity-90  self-end w-[150px] active:scale-95 ${state.lang.value === "ar" ? "font-arabic" : "font-english"}  ${state.step > 2 ? " visible" : " invisible"} `}
              >
                {lang?.[state.lang.value]?.["Back"]}
                
              </button>


              {state.step === 6 ? (
                <button
                  onClick={handleQuote}
                  className={`font-medium bg-[#080a36] text-lg select-none text-white py-3 px-5 rounded-lg cursor-pointer hover:opacity-90  self-end w-[170px] transition duration-100  active:scale-95 ${state.lang.value === "ar" ? "font-arabic" : "font-english"}`}
                >
                  {lang?.[state.lang.value]?.["Get Quote"]}
                </button>
              ) : (
                <button
                  id="next"
                  onClick={nextStep}
                    className={` place-items-end font-medium bg-[#080a36] text-lg select-none text-white py-3 px-5 rounded-lg cursor-pointer transition duration-100 hover:opacity-90  self-end w-[150px] active:scale-95 ${state.lang.value === "ar" ? "font-arabic" : "font-english"}`}
                >
                  {lang?.[state.lang.value]?.["Next Step"]}
                </button>
              )}
            </div>
          )}
        </div>
      )}
      {state.step === 6 && pack.length > 1 && !loading && !warning && (
        <div className=" rounded-lg ">
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
                <div className={`text-center text-xl md:text-2xl font-semibold ${state.lang.value === "ar" ? "font-arabic" : "font-english"}`} >
                  <p className="">
        
                    {(state?.radd?.value || state?.radd?.value) ? lang?.[state.lang.value]?.congratulation?.[`${state?.lensType?.name}_${state?.powerType?.value}`] : lang?.[state.lang.value]?.congratulation?.[state?.lensType?.name] }
                  </p>
                  <p >{lang?.[state.lang.value]?.congratulation?.text}</p>
                </div>
              </div>
            </Fade>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {pack.map((el) => (
                <Fade duration={1000} key={el._id}>
                  <div
                    onClick={() => {
                      handleChange("selectedOption", el)
                      handleChange("step", state.step + 1)
                    }

                    }
                    className="flex flex-col p-4 shadow-lg rounded-md  border-2  border-[#080a36] bg-white cursor-pointer"
                    key={el._id}
                  >
                    <div className={`text-2xl font-semibold mb-3 ${state.lang.value === "ar" ? "font-arabic" : "font-english"}`}>
                      {lang?.[state.lang.value]?.options?.[el.package.packageName]}
                      
                    </div>
                    <div>
                      {state.frameType.value && el.rimlessAvailable ? (
                        <p className="font-semibold text-xl">
                          SAR-{el.lensePrice + el.rimlessPrice}
                        </p>
                      ) : state.frameType.value && !el.rimlessAvailable ? (
                        <p className="font-semibold text-xl">{el.remarks}</p>
                      ) : !state.frameType.value ? (
                        <p className="font-semibold text-xl">
                          SAR-{el.lensePrice}
                        </p>
                      ) : null}
                    </div>
                    <div>
                      {state.frameType.value && el.rimlessAvailable ? (
                        <p>{el.rimlessAttributes}</p>
                      ) : state.frameType.value &&
                        !el.rimlessAvailable ? null : !state.frameType.value ? (
                          <p>{el.attributes}</p>
                        ) : null}
                    </div>
                    <div>
                      {state.frameType.value && el.rimlessAvailable ? (
                        <p>{el.lenseType.lensName}</p>
                      ) : state.frameType.value &&
                        !el.rimlessAvailable ? null : !state.frameType.value ? (
                          <p>{el.lenseType.lensName}</p>
                        ) : null}
                    </div>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </div>
      )}
      {state.step === 6 && pack.length <= 0 && !loading && warning && (
        <div className="flex flex-col items-center justify-center mt-[-50px] gap-4">
          <div className="w-20 h-20 relative overflow-hidden  ">
            <Image
              src={Logo}
              alt="logo"
              fill
              className="absolute rounded-full "
            />
          </div>
          <div className="shadow-lg rounded-md border-2  border-[#080a36] bg-white p-4">
            <p>
              Your Power requires more specifications.
              <br />
              Please consult with one of our doctors
            </p>
          </div>
        </div>
      )}

      {state.step === 7 && state.selectedOption &&
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
              <p className={`text-center text-xl md:text-2xl font-semibold ${state.lang.value === "ar" ? "font-arabic" : "font-english"}`}>
                {lang?.[state.lang.value]?.options?.text}
              </p>
            </div>
          </Fade>
          <div className="flex justify-center items-center cursor-pointer">
            <Fade duration={1000} >
              <div
                className="flex flex-col p-4 shadow-lg rounded-md  border-2  border-[#080a36] bg-white"
              >
                <div className={`text-2xl font-semibold mb-3 ${state.lang.value === "ar" ? "font-arabic" : "font-english"}`}>
                  {lang?.[state.lang.value]?.options?.[state.selectedOption.package.packageName]}
            
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
      }

      {state.step >= 6 && pack.length > 1 && (
        <Button
          onClick={() => location.reload()}
          className="absolute right-20  top-10"
        >
          Refresh{" "}
        </Button>
      )}
      {state.step >= 6 && warning && (
        <Button
          onClick={() => location.reload()}
          className="absolute right-20  top-10"
        >
          Refresh{" "}
        </Button>
      )}
      {pack.length <= 0 && loading && (
        <div className="flex justify-center items-center  h-[400px] w-[600px] gap-10">
          <div className="lds-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
