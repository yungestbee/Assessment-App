import { useState } from "react";
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';

// Creating  a independent 'Functional Component' called => FirstName
const FirstName = ( ) => {
  const [inpfirstname, setInpFirstName] = useState('');
  const navigateToLastName = useNavigate();
  

  const handleChangeFirstName = (evt) => {
    setInpFirstName(evt.target.value);
  }

  const handleSubmitFirstName = (evt) => {
    evt.preventDefault();
    if(!inpfirstname) {
      alert('Your Firstname Is Required');
      return;
    }
    localStorage.setItem('std_firstname', JSON.stringify({firstname: inpfirstname}));
    navigateToLastName('lastname');

  }

  return (
    <div className = "first-container">
      <form className = "form" onSubmit = { handleSubmitFirstName }>
        <div className = "form__group mb-sm">
          <span className = "form__text">Your FirstName:</span>
          <input className = "form__input" type="text" name = "first" value = { inpfirstname } onChange = { handleChangeFirstName } required />
        </div>
          <input className = "form__btn" type="submit" value = "Submit" />
      </form>
    </div>
  );
};

// Creating  a independent 'Functional Component' called => LastName
const LastName = ( ) => {
  const [inplastname, setInpLastName] = useState('');
  const navigateToGrade = useNavigate();

  const handleChangeLastName = (evt) => {
    setInpLastName(evt.target.value);
  }

  const handleSubmitLastName = (evt) => {
   evt.preventDefault();

   if(!inplastname) {
    alert('Your Lastname Is Required');
    return;
   }

   localStorage.setItem('std_lastname', JSON.stringify( {lastname: inplastname} ));
   navigateToGrade('grade')
  }

  return (
    <div>
      <form className = "form" onSubmit={ handleSubmitLastName }>
          <div className = "form__group mb-sm">
            <span className = "form__text">Your LastName:</span>
            <input className = "form__input" type="text" name = "last" value = { inplastname } onChange = { handleChangeLastName } required />
          </div>
            <input className = "form__btn" type="submit" value = "Submit" />
      </form>
    </div>
  );
};

// Creating  a independent 'Functional Component' called => Grade
const Grade = ( ) => {
  const [selectedGrade, setSelectedGrade] = useState('');
  const [status, setStatus] = useState(null);

  const handleChangeGrade = (evt) => {
    setSelectedGrade(evt.target.value);
  }

  const handleSubmitGrade = async (evt) => {
    evt.preventDefault();

    let processedFirstName; let processedLastName;
    if(localStorage.getItem('std_firstname')) {
      processedFirstName = JSON.parse(localStorage.getItem('std_firstname'));
    } 
    if(localStorage.getItem('std_lastname')) {
      processedLastName = JSON.parse(localStorage.getItem('std_lastname'));
    }

    try {
      if (!selectedGrade) {
        alert('Your Grade Is Required');
        return;
      }

      const URL = "http://localhost:6000/api/v1/students";

      const response = await axios.post(
      URL,
      {
        firstName: processedFirstName.firstname,
        lastName: processedLastName.lastname,
        grade: selectedGrade
      },
      {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      });

      if (response.status === 200) {
       
      }

    } 
    catch (err) {
      console.log(err);
      setStatus(err);
    }
  } 

  return (
    <div>
    <form className = "form" onSubmit = { handleSubmitGrade }>
      <div className = "form__group mb-sm">
        <span className = "form__text">Your Grade:</span>
        <select className = "form__input" name = "grade" value = {selectedGrade} onChange = {handleChangeGrade}>
          <option value="Grade 1">Grade 1</option>
          <option value="Grade 2">Grade 2</option>
          <option value="Grade 3">Grade 3</option>
          <option value="Grade 4">Grade 4</option>
          <option value="Grade 5">Grade 5</option>
          <option value="Grade 6">Grade 6</option>
          <option value="Grade 7">Grade 7</option>
          <option value="Grade 8">Grade 8</option>
          <option value="Grade 9">Grade 9</option>
          <option value="Grade 10">Grade 10</option>
          <option value="Grade 11">Grade 11</option>
          <option value="Grade 12">Grade 12</option>
        </select>
      </div>
      <input className = "form__btn" type="submit" value = "Submit" />
    </form>
    </div>
  );
};
//localStorage.removeItem('std_lastname')
export const StudentBioData = () => {
  return (
    <div className = "student-bio-data">
      
        <Routes>
          <Route path = "/" element = {<FirstName />} />
          <Route path = "/lastname" element = {<LastName />} />
          <Route path = "/lastname/grade" element = {<Grade />} />
        </Routes>
      
    </div>
  )
}

