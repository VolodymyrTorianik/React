import { useState } from 'react'
import './ControlForm.css'


export function ControlForm() {

    const [userObj, setUserObj] = useState({})

    const setUserFname = ({target: {value}}) => {
        console.log(value, userObj);
        setUserObj({...userObj, fname: value})

    }

    const setUserLname = ({target: {value}}) => {
        console.log(value, userObj);
        setUserObj({...userObj, lname: value})

    }

    const setPass = ({target: {value}}) => {
        console.log(value, userObj);
        setUserObj({...userObj, password: value})

    }

    const setSex = ({ target: { value } }) => {
        console.log(value, userObj);
        setUserObj({ ...userObj, sex: value });
    };
    
    const sumbitData =(e)=> {
        e.preventDefault();
        console.log(userObj);

    }

    return (
        <form className="MyFirstForm">
            <div className="head">
                <h2>Приклад Форми</h2>
                <h4>Один з прикладів довільної форми</h4>
            </div>

            <label htmlFor="fname">Ім'я:</label>
            <input type="text" name="fname" id="fname" placeholder="Уведіть ваше ім'я" onChange={setUserFname}/>

            <label htmlFor="lname">Прізвище:</label>
            <input type="text" name="lname" id="lname" placeholder="Уведіть ваше ім'я" onChange={setUserLname}/>

            <label htmlFor="password">Пароль:</label>
            <input type="password" name="password" id="password" onChange={setPass}/>

            <label htmlFor="sex">Стать:</label>
            <select id="sex" name="sex" onChange={setSex}>
                <option value="sex1">Чоловіча</option>
                <option value="sex2">Жіноча</option>
            </select>

            <button type="submit" onClick={sumbitData}>Відправити</button>

            <div>
                { JSON.stringify (userObj) }
            </div>
        </form>


    )
}