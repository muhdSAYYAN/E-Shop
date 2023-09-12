import React, { useContext } from 'react'
import { useState,useEffect } from 'react';
import { Shopcontext } from '../Contextprovider';
import { Link } from 'react-router-dom';
import {} from '../Popup'


export const Logpage = () => {
       const initialValues = { firstname: "",laststname: "", email: "",phonenumber: "", address: "" };
       const [formValues, setFormValues] = useState(initialValues);
       const [formErrors, setFormErrors] = useState({});
       const [isSubmit, setIsSubmit] = useState(false);
       
       const [isFormSubmitted, setIsFormSubmitted] = useState(false);


      

       const{cartItem,getTotalAmount} = useContext(Shopcontext);
       const showAmount = getTotalAmount();
      
  
       const deliVery = 50;
       const allAmount = showAmount + deliVery;

       const itemCount = Object.values(cartItem).reduce((acc , quantity) => acc + quantity,0)

       const handleChange = (e) => {
              const { name, value } = e.target;
              setFormValues({ ...formValues, [name]: value });
            };

            const handleSubmit = (e) => {
              e.preventDefault();
              setFormErrors(validate(formValues));
              setIsSubmit(true);
            
              if (Object.keys(formErrors).length === 0) {
                setIsFormSubmitted(true); 
              }
            };

            useEffect(() => {
              console.log(formErrors);
              if (Object.keys(formErrors).length === 0 && isSubmit) {
                console.log(formValues);
              }
            }, [formErrors]);


            const validate = (values) => {
              const errors = {};
              const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
              const phoneRegex = /^\d{10}$/;
              if (!values.firstname) {
                errors.firstname = "First name is required!";
              }
              if (!values.lastname) {
                errors.lastname = "Last name is required!";
              }
              if (!values.email) {
                errors.email = "Email is required!";
              } else if (!regex.test(values.email)) {
                errors.email = "This is not a valid email format!";
              }
              if (!values.phonenumber) {
                errors.phonenumber = "Phone number is required!";
              } else if (!phoneRegex.test(values.phonenumber)) {
                errors.phonenumber = "Phone number must be 10 digits long!";
              }
              if (!values.address) {
                errors.address = "Address is required!";
              }
              
              return errors;
            };
          

  return (
    <div className='Logpage'>
{/* 
{Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )}
         */}
          <form onSubmit={handleSubmit} className='submit'>
          <div className='inputs'>
          <div class="input-container">
  <input type="text" name='firstname' id="first-name" value={formValues.username}
              onChange={handleChange}/>
  <label for="first-name">First Name</label>
  
         </div>
         <span>{formErrors.firstname}</span>
         <div class="input-container">
  <input type="text" id="first-name" name='lastname'   value={formValues.lastname} onChange={handleChange}/>
  <label for="first-name">Last Name</label>
         </div>
         <span>{formErrors.lastname}</span>
         <div class="input-container">
  <input type="text" id="first-name" name='email'  value={formValues.email}
              onChange={handleChange} />
  <label for="first-name">E-mail</label>
         </div>
         <span>{formErrors.email}</span>
         <div class="input-container">
  <input type="text" id="first-name" name='phonenumber'
    value={formValues.phonenumber}
    onChange={handleChange}/>
  <label for="first-name">Phone Number</label><br/>
                  <span className='move'>{formErrors.phonenumber}</span>
         </div>
         <div class="input-container">
  <input type="text" id="address" name="address" value={formValues.address} onChange={handleChange} />
  <label for="address">Address</label>
</div>
<span>{formErrors.address}</span>

         <button className='creatacc'>Place Order</button>
         
         
       
         
         </div>

          <div className='login'>
           <h4>Order Detail : </h4>
           <h6>Products : {itemCount} </h6>
           <h6>Product Price : {showAmount}</h6>
           <h6>Delivery fee : {deliVery}</h6>
           <h5>Total : {allAmount} </h5>
        </div>


         

          </form>
          <Link to='/'> <button className='creatacc1'>Home</button></Link>
    </div>
  )
}
