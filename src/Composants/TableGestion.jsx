import React from "react";

class TableGestion extends React.Component {
   
  render() {
    const { utilisateurs, modification } = this.props;

    return (
      <div>
        <div>
        
      </div>
        <div className="mt-5 container mx-auto">
            <h3 className="text-center ">Utilisateurs</h3>
            <div className="overflow-x-auto">
            <table className="table mt-3 border-slate-500 w-full place-content-center border-b dark:border-gray-300">
              <thead className="border-b dark:border-gray-500">
                <tr>
                  <th scope="border border-slate-700  p-2">Prenom</th>
                  <th scope="border border-slate-700  p-2">Nom</th>
                  <th scope="border border-slate-700  p-2">Email</th>
                  <th scope="border border-slate-700  p-2">Telephone</th>
                  <th scope="border border-slate-700  p-2">Action </th>

                </tr>
              </thead>
              <tbody>
                {
                 utilisateurs.map((coder, index) => {
                  return ( 
                  <tr key={index} className="text-center bg-white border-b dark:bg-gray-800 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className=" border-b dark:border-gray-300 ">{coder.prenom}</td>
                  <td className=" border-b dark:border-gray-300 ">{coder.nom}</td>
                  <td className=" border-b dark:border-gray-300 ">{coder.email}</td>
                  <td className="  border-b dark:border-gray-300">{coder.telephone}</td>
                  <td className="border-b dark:border-gray-300 flex justify-center gap-3">
                  <button className="text-sm font-bold bg-yellow-400 flex py-2 px-2  rounded-lg shadow-md focus:outline-none "
                     onClick={() => { modification(index) }}
                    >
                     modifer
                    </button>
                   
                    <button className="text-sm font-bold bg-red-500 flex py-2 px-2 text-white rounded-lg shadow-md focus:outline-none "
                    onClick={() => {this.props.supprimeLigne(index)}}
                    >
                     supprimer
                    </button>
                  </td>

                </tr>
                  )
                })
                }
                
              </tbody>
            </table>
            </div>
          </div>
      </div>
    )
  }
}
export default TableGestion;
