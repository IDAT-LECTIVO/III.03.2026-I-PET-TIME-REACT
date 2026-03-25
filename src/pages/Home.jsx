import { Heart, CirclePile, Users } from "lucide-react";
import { Header } from "../components/Header";
import { HomeWellcome } from "../components/home/Wellcome";
import { HomeRegisterPet } from "../components/home/RegisterPet";
import { HomeService } from "../components/home/Service";

export function Home() {
  const services = [
    {
      icon: <Heart color="#F16969" />,
      color: "#F3B1B1",
      title: "Cuidad",
      description: "Deja tu mascota en las mejores manos",
    },
    {
      icon: <CirclePile color="#5EF069" />,
      color: "#B1F3B6",
      title: "Limpieza",
      description: "Baños, cepillados y más",
    },
    {
      icon: <Users color="#43A3F1" />,
      color: "#B1D5F3",
      title: "Paseos",
      description: "Actividades y diversión al aire libre",
    },
  ];

  return (
    <div>
      <Header />
      <HomeWellcome />
      <h2 className="font-semibold mx-5">Mis Mascotas</h2>
      <HomeRegisterPet />
      <h2 className="font-semibold mx-5">Nuestros Servicios</h2>

      <div className="p-5 flex flex-col gap-5">
        {services.map((service, index) => (
          <HomeService
            key={index}
            icon={service.icon}
            color={service.color}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
}
