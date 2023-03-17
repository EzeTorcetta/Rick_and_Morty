
const validation = (userData, errorsitos) => {

  const errors = {...errorsitos}

    //username
    if(!userData.username){
      errors.username = "Completar campo"
    }
    else if (userData.username.length > 35){
        errors.username = "No puede superar los 35 caracteres."
    }
    else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.username)){
        errors.username ="email inválido"
    }
    else{
        errors.username =""
    }

    //password
    if (userData.password.length < 6 || userData.password.length > 10) {
        errors.password = "Longitud de password inválida" 
      } else if (!/\d/.test(userData.password)) {
        errors.password = "Debe contener al menos un número" 
      } else {
        errors.password = "" 
      }

      return errors;
}

export default validation;