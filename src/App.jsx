import React, { useState, useEffect } from 'react';
import './App.css';
import TableGestion from './Composants/TableGestion';
import Form from './Composants/Form';

const App = () => {

  const [utilisateurs, setUtilisateurs] = useState(
    JSON.parse(localStorage.getItem('utilisateurs')) || []
  );
  const [prenomInput, setPrenomInput] = useState('');
  const [nomInput, setNomInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [telephoneInput, setTelephoneInput] = useState('');
  const [modifier, setModifier] = useState(false);
  const [indexModif, setIndexModif] = useState(null);

  useEffect(() => {
    localStorage.setItem('utilisateurs', JSON.stringify(utilisateurs));
  }, [utilisateurs]);

  // Supprimer un utilisateur
  const supprimeLigne = (index) => {
    const updatedUsers = [...utilisateurs];
    updatedUsers.splice(index, 1);
    setUtilisateurs(updatedUsers);
  };

  // Gérer les changements dans les inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'prenomInput') setPrenomInput(value);
    if (name === 'nomInput') setNomInput(value);
    if (name === 'emailInput') setEmailInput(value);
    if (name === 'telephoneInput') setTelephoneInput(value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const newTable = { prenom: prenomInput, nom: nomInput, email: emailInput, telephone: telephoneInput };

    if (modifier) {
      const updatedUsers = [...utilisateurs];
      updatedUsers[indexModif] = newTable;
      setUtilisateurs(updatedUsers);
      setModifier(false);
      setIndexModif(null);
    } else {
      setUtilisateurs([newTable, ...utilisateurs]);
    }

    setPrenomInput('');
    setNomInput('');
    setEmailInput('');
    setTelephoneInput('');
  };

  // Modifier un utilisateur
  const modification = (index) => {
    const utilisateur = utilisateurs[index];
    setPrenomInput(utilisateur.prenom);
    setNomInput(utilisateur.nom);
    setEmailInput(utilisateur.email);
    setTelephoneInput(utilisateur.telephone);
    setModifier(true);
    setIndexModif(index);
  };

  return (
    <div>
      <Form
        prenomInput={prenomInput}
        nomInput={nomInput}
        emailInput={emailInput}
        telephoneInput={telephoneInput}
        handleChange={handleChange}
        handleClick={handleClick}
        modifier={modifier}
      />
      <TableGestion utilisateurs={utilisateurs} modification={modification} supprimeLigne={supprimeLigne} />
    </div>
  );
};

export default App;
