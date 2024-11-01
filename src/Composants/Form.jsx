import React from "react";

class Form extends React.Component {
  
    render() {
        return (
                <div className="py-10">
                    <p className='text-center font-bold'>JeemaCoder gestion utilisateurs</p>
                    <div>
                        <form className="bg-white shadow-xl p-3 max-w-[600px] mx-auto" onSubmit={this.props.handleClick}>
                            <div className="grid gap-6 mb-6 md:grid-cols-2">
                                <div>
                                    <label htmlFor="prenomInput" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Prenom</label>
                                    <input
                                        type="text"
                                        id="prenomInput"
                                        name="prenomInput"
                                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required
                                        value={this.props.prenomInput}
                                        onChange={this.props.handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="nomInput" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom</label>
                                    <input
                                        type="text"
                                        id="nomInput"
                                        name="nomInput"
                                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required
                                        value={this.props.nomInput}
                                        onChange={this.props.handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="emailInput" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                    <input
                                        type="email"
                                        id="emailInput"
                                        name="emailInput"
                                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required
                                        value={this.props.emailInput}
                                        onChange={this.props.handleChange}
                                    /> 
                                </div>
                                <div>
                                    <label htmlFor="telephoneInput" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telephone</label>
                                    <input
                                        type="tel"
                                        id="telephoneInput"
                                        name="telephoneInput"
                                        
                                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required
                                        value={this.props.telephoneInput}
                                        onChange={this.props.handleChange}
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="text-center rounded-lg p-2 w-full mt-3 text-white bg-green-700 focus:ring-4 focus:outline-none focus:ring-b"
                            >
                                 {this.props.modifier ? "Modifier" : "Ajouter"}
                            </button>
                        </form>
                    </div>
                </div>
            );
        
    }
}
export default Form;
