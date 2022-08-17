import Patient from "./Patient"

const PatientsList = ({patients, setPatient}) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      {patients && patients.length ? (
        <>
            <h2 className="font-black text-3xl text-center">Patients List</h2>
            <p className="text-xl mt-5 mb-10 text-center">
            Administer your {''}
            <span className="text-indigo-600 font-bold">patients and appointments</span>
            </p>
    
          { patients.map( patient => ( 
            <Patient
              key={patient.id}
              patient={patient}
              setPatient={setPatient}
            />
          ))}
        </>
      ) : (
        <>
            <h2 className="font-black text-3xl text-center">There are no patients</h2>
            <p className="text-xl mt-5 mb-10 text-center">
            Start adding patients {''}
            <span className="text-indigo-600 font-bold">and they will show up here</span>
            </p>
        </>
      )}

  

      

    </div>
  )
}

export default PatientsList
