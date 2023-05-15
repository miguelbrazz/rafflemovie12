// import React, { useState } from 'react';
// import Button from '../../components/Button/Button';
// import Input from '../Input/Input';
// import './Form.css'

// const Form = () => {

//     const [suggest, setSuggest] = useState({
//         name: '',
//         email: '',
//         message: '',
//         subjext: '',
//         accessKey: '7e564d6d-e70c-4a13-b576-1dba21877d0d'
//     })

//     const [response, setResponse] = useState({
//         type: '',
//         message: ''
//     })

//     const handleOnChange = (e) => {
//         setSuggest({ ...suggest, [e.target.name]: e.target.value })
//     }

//     const handleOnSubmit = async (e) => {
//         e.preventDefault()

//         try {
//             const response = await fetch('https://api.staticforms.xyz/submit', {
//                 method: 'POST',
//                 body: JSON.stringify(suggest),
//                 headers: { 'Content-Type' : 'application/json' }
//             })

//             const json = await response.json()

//             if (json.success) {
//                 setResponse({
//                     type: 'success',
//                     message: 'Thank you for sending this suggestion, we will read it with care.'
//                 })
//             } else {
//                 setResponse({
//                     type: 'error',
//                     message: json.message
//                 })
//             }

//         } catch (err) {
//             console.log(err)
//             setResponse({
//                 type: 'error',
//                 message: 'An error occurred while submitting your suggestion, please try again.'
//             })
//         }

//     }

//     return ( 
//         <form action='https://api.staticforms.xyz/submit' method='POST' className='form' onSubmit={handleOnSubmit}>
//             <Input type="text" name="name" placeholder='Name' className='input' required onChange={handleOnChange}/>
//             <Input type="text" name="subject" placeholder='Subject' className='input' required onChange={handleOnChange}/>
//             <Input type="email" name="email" placeholder='Email' className='input' required onChange={handleOnChange}/>
//             <textarea placeholder='Message' name='message' onChange={handleOnChange} required></textarea>
//             <div className={response.type === 'success' ? 'notification success' : 'hidden'}>
//                 <p>{response.message}</p>
//             </div>
//             <div className={response.type === 'error' ? 'notification error' : 'hidden'}>
//                 <p>{response.message}</p>
//             </div>
//             <Button component='button' className='form-button' type='submit'>Send</Button>
//         </form>
//      );
// }
 
// export default Form;