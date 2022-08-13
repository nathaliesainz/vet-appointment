const Patient = () => {
  return (
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

          <p className="font-bold mb-3 text-gray-700 uppercase">Symptoms: {''}
            <span className="font-normal normal-case">Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Tempora earum sequi tempore ab corrupti eum molestias? Magni quasi
            earum iste vitae, est ducimus in laborum obcaecati quis quaerat corrupti dolores?</span>          
          </p>
      </div>
  )
}
export default Patient