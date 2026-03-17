import { useState } from "react";
import { RegisterFirstStep } from "../components/register/FirstStep";
import { RegisterSecondStep } from "../components/register/SecondStep";

export function Register() {

    const [step, setStep] = useState(1);

  return (
    <div className="flex flex-col items-center justify-center">
      <img src="Logo-PetTime.svg" alt="Logo Pet Time" />
      <h1 className="text-[#F29455] text-[24px] font-bold">
        Datos de la sesión
      </h1>
      <div className="flex items-center justify-center gap-7.5 mt-11 mb-7.5">
        <div className={(step === 1 ? "bg-[#32ACDC] text-white" : "text-[#A8AFB9] bg-white") + " rounded-full w-12.5 h-12.5 flex items-center justify-center"}>1</div>
        <div className={(step === 2 ? "bg-[#32ACDC] text-white" : "text-[#A8AFB9] bg-white") + " rounded-full w-12.5 h-12.5 flex items-center justify-center"}>2</div>
        <div className={(step === 3 ? "bg-[#32ACDC] text-white" : "text-[#A8AFB9] bg-white") + " rounded-full w-12.5 h-12.5 flex items-center justify-center"}>3</div>
      </div>
      <form className="m-3.5">
        {
            step === 1 ? <RegisterFirstStep /> : step === 2 ? <RegisterSecondStep /> : null
        }
      </form>
      <div>
        <span className="text-[#A8AFB9] font-semibold">
          ¿No tienes una cuenta?{" "}
          <a href="/register" className="text-[#F29455]">
            Regístrate
          </a>
        </span>
      </div>
    </div>
  );
}
