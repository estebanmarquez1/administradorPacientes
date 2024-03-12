import { useState, useTransition } from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
  const [Pacientes, setPacientes] = useState([]);
  const [Paciente, setPaciente] = useState({});
  return (
    <div className="container mx-auto mt-20">
      <Header />
      
      <div className="mt-12 md:flex">
        <Formulario
          Pacientes={Pacientes}
          setPacientes={setPacientes}
          Paciente= {Paciente}
        />
        <ListadoPacientes 
          Pacientes={Pacientes}
          setPaciente = {setPaciente}
        />
      </div>

    </div>
  )
}

export default App
