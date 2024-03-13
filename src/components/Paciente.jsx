
const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const { nombre, email, admissionDate, symptoms, id} = paciente;

  const handleEliminar = () => {
    const response = confirm('¿Deseas eliminar este paciente?');

    if(response) {
        eliminarPaciente(id);
    }
  }

  return (
    <div className="mx-5 mb-3 bg-white shadow-md px-5 py-10 rounded-lg">
      <p className="font-bold text-gray-700 uppercase">Nombre: {''} <span className="font-normal normal-case">{`${nombre}`}</span></p>
      <p className="font-bold text-gray-700 uppercase">Email: {''} <span className="font-normal normal-case">{`${email}`}</span></p>
      <p className="font-bold text-gray-700 uppercase">Fecha de alta: {''} <span className="font-normal normal-case">{`${admissionDate}`}</span></p>
      <p className="font-bold text-gray-700 uppercase">Situación del paciente: {''} <span className="font-normal normal-case">{`${symptoms}`}</span></p>
      
      <div className="flex justify-between mt-5">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg"
          onClick={() => setPaciente(paciente)}
        >Editar</button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg" onClick = {handleEliminar}>
          Eliminar
        </button>
      </div>

    </div>
  )
}

export default Paciente