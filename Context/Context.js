import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = (props) => {
  const [compra, setCompra] = useState({});
  const [cartelera, setCartelera] = useState([
    {
      codigo: 1,
      nombre: "Halloween Kills",
      idioma: "SUB",
      clasificacion: "C",
      horarios: ["13:00", "17:50", "20:30"],
      duracion: "106 min",
      url: "https://static.cinepolis.com/img/peliculas/37049/1/1/37049.jpg",
    },
    {
      codigo: 2,
      nombre: "Los Locos Addams 2",
      idioma: "ESP",
      clasificacion: "A",
      horarios: ["9:00", "11:30", "13:30"],
      duracion: "93 min",
      url: "https://static.cinepolis.com/img/peliculas/37048/1/1/37048.jpg",
    },
    {
      codigo: 3,
      nombre: "Sin Tiempo Para Morir",
      idioma: "ESP",
      clasificacion: "B",
      horarios: ["11:00", "13:50", "19:40"],
      duracion: "164 min",
      url: "https://static.cinepolis.com/img/peliculas/36792/1/1/36792.jpg",
    },
    {
      codigo: 4,
      nombre: "Venom: Carnage Liberado",
      idioma: "ESP",
      clasificacion: "B",
      horarios: ["10:30", "14:20", "18:30"],
      duracion: "98 min",
      url: "https://static.cinepolis.com/img/peliculas/36934/1/1/36934.jpg",
    },
  ]);

  function agregar(pelicula, horario) {
    if (pelicula.clasificacion == "A") {
      pelicula.precio = 35;
    } else if (pelicula.clasificacion == "B") {
      pelicula.precio = 40;
    } else {
      pelicula.precio = 45;
    }
    pelicula.horario = horario;
    pelicula.cantidad = 0;
    pelicula.total = 0;
    setCompra(pelicula);
    console.log(compra);
  }

  function actualizar(item, value) {
    let isNumber = isNaN(value);
    if (isNumber == false) {
      item.cantidad = value;
      item.total=item.precio*item.cantidad;
      setCompra(item);
      console.log(compra);
    } else {
      item.total=-1;
      setCompra(item);
      console.log(compra);
    }
  }

  function eliminarCarrito(){
    setCompra({});
  }

  return (
    <AppContext.Provider
      value={{
        cartelera,
        compra,
        agregar,
        actualizar,
        eliminarCarrito
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
