import React,{useState} from 'react';
import {useDispatch } from 'react-redux';
import { uploadImage } from '../../../store/actions';
import SelectBox from '../../../UI/SelectBox/SelectBox';
import classes from './Form.module.css';

const Form = () =>{
    const dispatch = useDispatch();
    const [checkBoxData,setCheckboxData] = useState({kompletSlubny:[],oprawaKwiatowa:[],oprawaPozaKwiatowa:[],jakTrafiliscie:[]});
    const [inputData,setInputData] = useState({name:null,surname:null,email:null,tel:null,date:null,
        weddinPlace:null,church:null,guests:null,table:null,budget:null,desc:null,pintrest:null,photo:null})
    const handleCheckBoxes = (target,targetHeader) => {
        let filterArr = [...checkBoxData.[targetHeader]];
        target.value && target.checked ? filterArr.push(target.value) : filterArr = checkBoxData.[targetHeader].filter(el => el !== target.value);
        setCheckboxData({...checkBoxData,[targetHeader]:filterArr});
    };
    const submitData = () => {
        dispatch(uploadImage("input_form--photo",`https://study-49f96-default-rtdb.europe-west1.firebasedatabase.app/forms.json`,
        {...inputData,...checkBoxData}));
    }
    const handleInputs = (event) => {
        switch(event.id){
            case 'input__form--name':
                setInputData({...inputData,name:event.value})
                break;
            case 'input__form--surname':
                setInputData({...inputData,surname:event.value})
                    break;
            case 'input__form--email':
                setInputData({...inputData,email:event.value})
                    break;
            case 'input__form--phone':
                setInputData({...inputData,tel:event.value})
                    break;
            case 'input__form--date':
                setInputData({...inputData,date:event.value})
                    break;
            case 'input__form--church':
                setInputData({...inputData,church:event.value})
                    break;
            case 'input__form--wedding':
                setInputData({...inputData,weddinPlace:event.value})
                    break;
            case 'input__form--guests':
                setInputData({...inputData,guests:event.value})
                    break;
            case 'input__form--table':
                setInputData({...inputData,table:event.value})
                    break;
            case 'input__form--budget':
                setInputData({...inputData,budget:event.value})
                    break;
            case 'input__form--area':
                setInputData({...inputData,desc:event.value})
                    break;
            case 'input__form--pintrest':
                setInputData({...inputData,pintrest:event.value})
                    break;
            case 'input__form--photo':
                setInputData({...inputData,photo:event.value})
                    break;
            default:
        }     
    };
    console.log(checkBoxData);

    return(
        <div className={classes.Form}>
            <h2>FORMULARZ</h2>
            <div className={classes.Inputs}>
                <div className={classes.InputCont}>
                    <label className={classes.Label}>Imię</label>
                    <input onChange={event => handleInputs(event.target)} id='input__form--name' placeholder="Imię" className={classes.Input}></input>
                </div> 
                    <div className={classes.InputCont}>
                    <label className={classes.Label}>Nazwisko</label>
                    <input onChange={event => handleInputs(event.target)} id='input__form--surname' placeholder="Nazwisko" className={classes.Input}></input>
                </div>  
                <div className={classes.InputCont}>
                    <label className={classes.Label}>Adres e-mail</label>
                    <input onChange={event => handleInputs(event.target)} id='input__form--email' type="email" placeholder="Adres e-mail" className={classes.Input}></input>
                </div> 
                    <div className={classes.InputCont}>
                    <label className={classes.Label}>Telefon</label>
                    <input onChange={event => handleInputs(event.target)} id='input__form--phone' type="tel" placeholder="Telefon" className={classes.Input}></input>
                </div>
                <div className={classes.InputCont}>
                    <label className={classes.Label}>Data ślubu</label>
                    <input onChange={event => handleInputs(event.target)} id='input__form--date' type="date" placeholder="Data slubu" className={classes.Input}></input>
                </div> 
                    <div className={classes.InputCont}>
                    <label className={classes.Label}>Miejsce ślubu</label>
                    <input onChange={event => handleInputs(event.target)} id='input__form--church' type="text" placeholder="Miejsce ślubu" className={classes.Input}></input>
                </div>                 
                <div className={classes.InputCont}>
                    <label className={classes.Label}>Miejsce wesela</label>
                    <input onChange={event => handleInputs(event.target)} id='input__form--wedding' type="text" placeholder="Miejsce wesela" className={classes.Input}></input>
                </div> 
                    <div className={classes.InputCont}>
                    <label className={classes.Label}>Planowana liczba gości</label>
                    <input onChange={event => handleInputs(event.target)} id='input__form--guests' type="number" placeholder="Planowana liczba gości" className={classes.Input}></input>
                </div>                  
                <div className={classes.InputCont}>
                    <label className={classes.Label}>Kształt stołów</label>
                    <input onChange={event => handleInputs(event.target)} id='input__form--table' type="text" placeholder="Kształt stołów" className={classes.Input}></input>
                </div> 
                    <div className={classes.InputCont}>
                    <label className={classes.Label}>Planowany budżet na dekoracje (minimalny budżet przy dekoracji sali i florystyce indywidualnej- 4000zł)</label>
                    <input onChange={event => handleInputs(event.target)} id='input__form--budget' type="number" placeholder="" className={classes.Input}></input>
                </div> 
                <div className={classes.InputCont}>
                    <label className={classes.Label}>Wizja / Pomysł Waszego ślubu</label>
                    <textarea onChange={event => handleInputs(event.target)} id='input__form--area' type="text" placeholder="Opisz dokładnie co Cię interesuję"className={classes.InputArea} ></textarea>
                </div>    
            </div>
            <div className={classes.Inputs}>
                <div className={classes.InputCont}>
                    <label className={classes.Label}>Komplet ślubny</label>
                    <SelectBox clicked={(event) => handleCheckBoxes(event.target,'kompletSlubny')} value="Bukiet ślubny"/>
                    <SelectBox clicked={(event) => handleCheckBoxes(event.target,'kompletSlubny')} value="Wianek / kwiaty do włosów"/>
                    <SelectBox clicked={(event) => handleCheckBoxes(event.target,'kompletSlubny')} value="Bukiet / korsarz dla świadkowej / druhen"/>
                    <SelectBox clicked={(event) => handleCheckBoxes(event.target,'kompletSlubny')} value="Butonierki dla Pana Młodego / świadka"/>
                    <SelectBox clicked={(event) => handleCheckBoxes(event.target,'kompletSlubny')} value="Inne"/>
                    <SelectBox clicked={(event) => handleCheckBoxes(event.target,'kompletSlubny')} value="Nie jesteśmy zainteresowani"/>
                </div>                 
                <div className={classes.InputCont}>
                    <label className={classes.Label}>Planowna oprawa kwiatowa</label>
                    <SelectBox clicked={(event) => handleCheckBoxes(event.target,'oprawaKwiatowa')} value="Miejsce błogosławieństwa"/>
                    <SelectBox clicked={(event) => handleCheckBoxes(event.target,'oprawaKwiatowa')} value="Dekoracja kościoła"/>
                    <SelectBox clicked={(event) => handleCheckBoxes(event.target,'oprawaKwiatowa')} value="Dekoracja Urzędu Stanu Cywilnego"/>
                    <SelectBox clicked={(event) => handleCheckBoxes(event.target,'oprawaKwiatowa')} value="Dekoracja sali"/>
                    <SelectBox clicked={(event) => handleCheckBoxes(event.target,'oprawaKwiatowa')} value="Dekoracja w plenerze"/>
                    <SelectBox clicked={(event) => handleCheckBoxes(event.target,'oprawaKwiatowa')} value="Dekoracja samochodu"/>
                    <SelectBox clicked={(event) => handleCheckBoxes(event.target,'oprawaKwiatowa')} value="Podziękowania dla rodziców"/>
                    <SelectBox clicked={(event) => handleCheckBoxes(event.target,'oprawaKwiatowa')} value="Inne"/>
                    <SelectBox clicked={(event) => handleCheckBoxes(event.target,'oprawaKwiatowa')} value="Nie jesteśmy zainteresowani"/>
                </div> 
                <div className={classes.InputCont}>
                    <label className={classes.Label}>Planowana oprawa pozawkiatowa</label>
                    <SelectBox clicked={(event) => handleCheckBoxes(event.target,'oprawaPozaKwiatowa')} value="Girlandy żarówkowe"/>
                    <SelectBox clicked={(event) => handleCheckBoxes(event.target,'oprawaPozaKwiatowa')} value="Napis Kochaj"/>
                    <SelectBox clicked={(event) => handleCheckBoxes(event.target,'oprawaPozaKwiatowa')} value="Napis Love"/>
                    <SelectBox clicked={(event) => handleCheckBoxes(event.target,'oprawaPozaKwiatowa')} value="Świece"/>
                    <SelectBox clicked={(event) => handleCheckBoxes(event.target,'oprawaPozaKwiatowa')} value="Numerki Stołów"/>
                    <SelectBox clicked={(event) => handleCheckBoxes(event.target,'oprawaPozaKwiatowa')} value="Plan Stołów"/>
                    <SelectBox clicked={(event) => handleCheckBoxes(event.target,'oprawaPozaKwiatowa')} value="Ścianka za Młodą Parą"/>
                    <SelectBox clicked={(event) => handleCheckBoxes(event.target,'oprawaPozaKwiatowa')} value="Kufry na koperty / pudełka na obrączki"/>
                    <SelectBox clicked={(event) => handleCheckBoxes(event.target,'oprawaPozaKwiatowa')} value="Nie jesteśmy zainteresowani"/>
                </div> 
                <div className={classes.InputCont}>
                    <label className={classes.Label}>Planowana oprawa pozawkiatowa</label>
                    <SelectBox clicked={(event) => handleCheckBoxes(event.target,'jakTrafiliscie')} value="Jesteśmy klijentami kwiaciarni"/>
                    <SelectBox clicked={(event) => handleCheckBoxes(event.target,'jakTrafiliscie')} value="Facebook"/>
                    <SelectBox clicked={(event) => handleCheckBoxes(event.target,'jakTrafiliscie')} value="Instagram"/>
                    <SelectBox clicked={(event) => handleCheckBoxes(event.target,'jakTrafiliscie')} value="Strona WWWW / wyszukiwarka"/>
                    <SelectBox clicked={(event) => handleCheckBoxes(event.target,'jakTrafiliscie')} value="Widzieliśmy waszą dekorację na ślubie"/>
                    <SelectBox clicked={(event) => handleCheckBoxes(event.target,'jakTrafiliscie')} value="Polecenie"/>
                </div> 
                <div className={classes.InputCont}>
                    <label className={classes.Label}>PINTREST</label>
                    <input onChange={event => handleInputs(event.target)} id='input__form--pintrest' type="text" placeholder="Link do waszej tablicy" className={classes.Input}></input>
                </div>                 
                <div className={classes.InputCont}>
                    <label className={classes.Label}>Kto jest waszym fotografem?</label>
                    <input onChange={event => handleInputs(event.target)} id='input__form--photo' type="text" className={classes.Input}></input>
                </div>               
                <div className={classes.InputCont}>
                    <label className={classes.Label}>Zdjęcia, pliki</label>
                     <div onClick={() => document.getElementById('input_form--photo').click()} className={classes.InputFoto}>Wyślij pliki
                     <input className={classes.FotoInput} type="file" id="input_form--photo" multiple></input></div>
                </div> 
            </div>
            <h2 style={{fontWeight:'normal'}}>Podsumowanie</h2>
            <p>Każdą wycenę robimy indywidualnie na podstawie podesłanych przez Was zdjęć i budżetu jakim dysponujecie.</p>
            <p>*Wypełnienie formularza nie jest jednoznaczne z rezerwacją terminu. Rezerwacja terminu następuje po podpisaniu umowy przez obie strony.</p>
            <div className={classes.Premission}>
                <SelectBox req={true} value="Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji zapytania ofertowego złożonego w formularzu.
                 (zgodnie z Ustawą z dnia 29.08.1997 roku o Ochronie Danych Osobowych; tekst jednolity: Dz. U. 2016 r. poz. 922)."/>
            </div>
            <div onClick={submitData} className={classes.Button}>Wyślij!</div>
        </div>
    );
};
export default Form;