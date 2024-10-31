
import React from 'react';
import './App.css';
import Form from './Composants/form';
import TableGestion from './Composants/TableGestion';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      prenomInput: "",
      nomInput: "",
      emailInput: "",
      telephoneInput: "",
      utilisateurs: [],
      
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.supprimeLigne = this.supprimeLigne.bind(this);

  }

  // button supprimer 
  supprimeLigne = (index) => {
    const newUtilisateurs = [...this.state.utilisateurs];
    newUtilisateurs.splice(index, 1);
    // mise a jour de l'etat
    this.setState({ utilisateurs: newUtilisateurs });
};
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleClick(e) {
    e.preventDefault();
    
    const newTable = {
      prenom: this.state.prenomInput,
      nom: this.state.nomInput,
      email: this.state.emailInput,
      telephone: this.state.telephoneInput,
    };
    // console.log(this.state.utilisateurs);
    
  //localStorage
  const utilisateurs = JSON.parse(localStorage.getItem('utilisateurs')) || [];
  utilisateurs.push(newTable);
  localStorage.setItem('utilisateurs', JSON.stringify(utilisateurs));

    this.setState(prevState => ({
      utilisateurs: [newTable, ...prevState.utilisateurs],
      prenomInput: "",
      nomInput: "",
      emailInput: "",
      telephoneInput: ""
    }));
  }
  // button modification 
  modification = (index) => {
    this.setState({
        textModifie: { ...this.state.utilisateurs[index] },
      
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
        />
        <TableGestion utilisateurs={this.state.utilisateurs}  modification={this.modification} supprimeLigne={this.supprimeLigne}/>
      </div>
    );
  }
}

export default App;
