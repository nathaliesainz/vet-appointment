import Patient from "./Patient"

const PatientsList = ({patients}) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      <h2 className="font-black text-3xl text-center">Patients List</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Administer your {''}
        <span className="text-indigo-600 font-bold">patients and appointments</span>
      </p>

    { patients.map( patient => ( 
        <Patient
          key={patient.id}
          patient={patient}
        />
    ))}

      

    </div>
  )
}

export default PatientsList
