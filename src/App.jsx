import { useState, useEffect } from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
  const [Pacientes, setPacientes] = useState([]);
  const [Paciente, setPaciente] = useState({});
  const eliminarPaciente = id => {
    const pacientesActualizados = Pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacientesActualizados);
  }
  return (
    <div className="container mx-auto mt-20">
      <Header />
      
      <div className="mt-12 md:flex">
        <Formulario
          Pacientes={Pacientes}
          setPacientes={setPacientes}
          Paciente= {Paciente}
          setPaciente = {setPaciente}
        />
        <ListadoPacientes 
          Pacientes={Pacientes}
          setPaciente = {setPaciente}
          eliminarPaciente = {eliminarPaciente}
        />
      </div>

    </div>
  )
}

export default App
