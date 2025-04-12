
import { useRef, useState } from 'react';
import './UnControlForm.css'

export function UnControlForm() {

    const [userObject, setUserObject] =useState()
    const UserForm = useRef();

    const sumbitData = (e) => {
        e.preventDefault();
    
        const [fname1, lname1, password1, sex1] = UserForm.current;
    
        const newUser = {
            fname: fname1.value,
            lname: lname1.value,
            password: password1.value,
            sex: sex1.value
        };
    
        setUserObject(newUser);

        console.log(userObject);
        
    };
    

    return (
        <form className="MySecondForm" ref={UserForm}>
            <div className="head2">
                <h2>Приклад Форми</h2>
                <h4>Один з прикладів довільної форми</h4>
            </div>

            <label htmlFor="fname1">Ім'я:</label>
            <input type="text" name="fname1" id="fname1" placeholder="Уведіть ваше ім'я"/>

            <label htmlFor="lname1">Прізвище:</label>
            <input type="text" name="lname1" id="lname1" placeholder="Уведіть ваше ім'я"/>

            <label htmlFor="password1">Пароль:</label>
            <input type="password" name="password1" id="password1"/>

            <label htmlFor="sex1">Стать:</label>
            <select id="sex1" name="sex1">
                <option value="male">Чоловіча</option>
                <option value="female">Жіноча</option>
            </select>

            <button type="submit" onClick={sumbitData}>Відправити</button>
            <div>
                { JSON.stringify (userObject) }
            </div>
        </form>
    )
}