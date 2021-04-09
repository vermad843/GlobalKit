import React,{useState}  from 'react';
import Home  from './Home';
import './Left.css';

function Left() {

    const [email, setEmail]  = useState('');
    const [todos, setTodos] = useState([]);

    const handleChange = (e) => {
       setEmail(e.target.value);
    }

    const formSubmitted = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {
                content : email,
                done : false
            }
        ]);
        setEmail('');
    }

    return (
        <>
        <form
            onSubmit = {formSubmitted}
            className = "left">
             <h1 className = "left__heading">Where the world builds software</h1>
             <p className = "left__heading__passage">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Pharetra sit amet aliquam id diam maecenas. Dictum sit amet justo donec enim. Volutpat odio facilisis mauris sit amet massa vitae tortor condimentum. Nunc pulvinar sapien et ligula ullamcorper. Vel quam elementum pulvinar etiam non quam. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Amet est placerat in egestas erat imperdiet sed euismod nisi. Consequat nisl vel pretium lectus quam id leo in vitae. Phasellus vestibulum lorem sed risus.
            </p>
            <br/>

            <input
               className = "left__input"
               type = "email"
               name = "email"
               value = {email}
               onChange = {handleChange}
              />
              <button 
                className = "left__button"
                type = "submit">Sign up for Github</button>
        </form>
        </>
    )
}

export default Left;
