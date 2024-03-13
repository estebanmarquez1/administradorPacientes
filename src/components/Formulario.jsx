import { useEffect, useState } from "react"
import Errores from './Errores'

const Formulario = ({ setPacientes, Pacientes, Paciente, setPaciente }) => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [admissionDate, setAdmissionDate] = useState('');
    const [symptoms, setSymptoms] = useState('');

    const [errores, setErrores] = useState(false);

    useEffect(() => {
        if(Object.keys(Pacientes).length > 0) {
            setNombre(Paciente.nombre);
            setEmail(Paciente.email);
            setAdmissionDate(Paciente.admissionDate);
            setSymptoms(Paciente.symptoms);
        }
    }, [Paciente])
    
    const generarId = () => {
        const random = Math.random().toString(36).substring(2); 
        const fecha = Date.now().toString(36)

        return random + fecha;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if ([nombre, email, admissionDate, symptoms].includes('')) {
            console.log('Hay un campo vacío');
            setErrores(true);
            return;
        }

        setErrores(false);

        const objetoPaciente = {
            nombre,
            email,
            admissionDate,
            symptoms,
            
        }

        if(Paciente.id) {
            objetoPaciente.id = Paciente.id;
            const pacientesActualizados = Pacientes.map(pacienteState => pacienteState.id === Paciente.id ? objetoPaciente : pacienteState);
            setPacientes(pacientesActualizados);
            setPaciente({});
        } else {
            objetoPaciente.id = generarId();
            setPacientes([...Pacientes, objetoPaciente]);
        }


        
        // console.log(Pacientes);
        
        
        setNombre('');
        setEmail('');
        setAdmissionDate('');
        setSymptoms('');
    }

    // console.log(nombre); 
    return (

        <div className="mx-5 md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
            <p className="text-center mt-5 mb-10">Añade tus {''} <span className="text-indigo-600 font-bold">pacientes</span></p>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10" action="">
                {errores && <Errores><p className="text-white uppercase text-center font-bold">Todos los campos deben estar llenos.</p></Errores>}
                <div>
                    <label htmlFor="name" className="block text-gray-700 uppercase font-bold">Nombre del paciente</label>
                    <input type="text" id="name" autoComplete="off" className="border-2 w-full p-2 placeholder-gray-400 rounded-md" placeholder="Nombre del paciente..." value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Correo electrónico</label>
                    <input type="email" id="email" autoComplete="off" className="border-2 w-full p-2 placeholder-gray-400 rounded-md" placeholder="Correo electrónico..." value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="date" className="block text-gray-700 uppercase font-bold">Alta</label>
                    <input type="date" id="date" autoComplete="off" className="border-2 w-full p-2 placeholder-gray-400 rounded-md" value={admissionDate} onChange={(e) => setAdmissionDate(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="symptoms" className="block text-gray-700 uppercase font-bold">Situación del paciente</label>
                    <textarea id="symptoms" autoComplete="off" className="resize-none border-2 w-full p-2 placeholder-gray-400 rounded-md" placeholder="Describe la situación del paciente..." value={symptoms} onChange={(e) => setSymptoms(e.target.value)} />
                </div>
                <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer" value={Paciente.id ? "Editar Paciente" : "Agregar Paciente"} />
            </form>
        </div>

    )

}
export default Formulario;