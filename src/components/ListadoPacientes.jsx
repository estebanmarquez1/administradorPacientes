import Paciente from "./Paciente";


const ListadoPacientes = ({Pacientes, setPaciente, eliminarPaciente}) => {
  return (
    
    <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll">
      {Pacientes && Pacientes.length ? (    
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-center mt-5 mb-10">Administra tus {''}
            <span className="text-indigo-600 font-bold">pacientes y citas</span>
          </p>
          {Pacientes.map((paciente) => (
            <Paciente
              key={paciente.id} //Cada vez que se genera una lista se le tiene que agregar un key.
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente = {eliminarPaciente}
            />
          ))}
       </>  
      ) : (
      <>
        <h2 className="font-black text-3xl text-center">No se encontraron pacientes</h2>
        <p className="text-center mt-5 mb-10">Agrega tus {''}
          <span className="text-indigo-600 font-bold">pacientes y citas</span>
        </p>
      </>
      )}


    </div>

  )
}

export default ListadoPacientes