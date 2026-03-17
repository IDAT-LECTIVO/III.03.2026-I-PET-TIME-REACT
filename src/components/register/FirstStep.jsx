import { MoveRight } from "lucide-react";

export function RegisterFirstStep() {
  return (
    <>
      <input
        type="text"
        placeholder="✉️ Correo"
        className="border border-gray-300 rounded-[10px] py-5 px-6 w-full"
      />
      <input
        type="password"
        placeholder="🔒 Contraseña"
        className="border border-gray-300 rounded-[10px] py-5 px-6 w-full mt-6"
      />
      <button
        type="submit"
        className="bg-[#32ACDC] rounded-[10px] py-5 px-6 w-full mt-16.5 font-semibold text-white flex items-center justify-center gap-1.25"
      >
        Siguiente
        <MoveRight size={30} strokeWidth={1.5} />
      </button>
    </>
  );
}
