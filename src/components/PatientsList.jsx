const PatientsList = () => {
  return (
    <div className="w-1/2 lg:w-3/5">

      <h2 className="font-black text-3xl text-center">Patients List</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Administrate your {''}
        <span className="text-indigo-600 font-bold">patients and appointments</span>
      </p>

      <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
          <p className="font-bold mb-3 text-gray-700 uppercase">Name: {''}
            <span className="font-normal normal-case">Hook</span>          
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">Owner: {''}
            <span className="font-normal normal-case">Nathalie</span>          
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
            <span className="font-normal normal-case">email@email.com</span>          
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">Date: {''}
            <span className="font-normal normal-case">10 December 2022</span>          
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">Name: {''}
            <span className="font-normal normal-case">Hook</span>          
          </p>
      </div>

    </div>
  )
}

export default PatientsList
