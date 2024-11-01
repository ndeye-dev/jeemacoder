

import React from 'react';
import './App.css';
import TableGestion from './Composants/TableGestion';
import Form from './Composants/Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    // Récupérer les utilisateurs depuis le local storage
    const utilisateurs = JSON.parse(localStorage.getItem('utilisateurs')) || []; 

    this.state = { 
      prenomInput: "",
      nomInput: "",
      emailInput: "",
      telephoneInput: "",
      utilisateurs: utilisateurs,
      modifier: false,
      indexModif: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.modification = this.modification.bind(this);
    this.supprimeLigne = this.supprimeLigne.bind(this);
  }
// supprimer 
  supprimeLigne = (index) => {
    const supp = [...this.state.utilisateurs];
    supp.splice(index, 1);
    this.setState({ utilisateurs: supp });
    localStorage.setItem('utilisateurs', JSON.stringify(supp));
  };

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleClick(e) {
    e.preventDefault();
    const { prenomInput, nomInput, emailInput, telephoneInput, modifier, indexModif } = this.state;
  
    const newTable = {
      prenom: prenomInput,
      nom: nomInput,
      email: emailInput,
      telephone: telephoneInput,
    };
  
    if (modifier) {
      const updateUtilisateur = [...this.state.utilisateurs];
      updateUtilisateur[indexModif] = newTable;
      this.setState({
        utilisateurs: updateUtilisateur,
        modifier: false,
        indexModif: null,
        prenomInput: "",
        nomInput: "",
        emailInput: "",
        telephoneInput: ""
      });
   
      
      localStorage.setItem('utilisateurs', JSON.stringify(updateUtilisateur)); // Mettre à jour le local storage
    } else {
      this.setState(prevState => {
        const utilisateurs = [newTable, ...prevState.utilisateurs]; // Ajouter le nouvel utilisateur en haut
        localStorage.setItem('utilisateurs', JSON.stringify(utilisateurs)); // Mettre à jour le local storage
        return {
          utilisateurs: utilisateurs,
          prenomInput: "",
          nomInput: "",
          emailInput: "",
          telephoneInput: ""
        };
        
      });
      console.log(this.state.utilisateurs);
    }
  }
  // modification 
  modification = (index) => {
    const utilisateur = this.state.utilisateurs[index];
    this.setState({
      prenomInput: utilisateur.prenom,
      nomInput: utilisateur.nom,
      emailInput: utilisateur.email,
      telephoneInput: utilisateur.telephone,
      modifier: true,
      indexModif: index
    });
  };

  render() { 
    return (
      <div>
        <Form 
          prenomInput={this.state.prenomInput}
          nomInput={this.state.nomInput}
          emailInput={this.state.emailInput}
          telephoneInput={this.state.telephoneInput}
          handleChange={this.handleChange}
          handleClick={this.handleClick}
          modifier={this.state.modifier}
        />
        <TableGestion utilisateurs={this.state.utilisateurs} modification={this.modification} supprimeLigne={this.supprimeLigne} />
      </div>
    );
  }
}

export default App;
