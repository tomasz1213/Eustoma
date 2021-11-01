import React,{useState} from 'react';
import {useDispatch,useSelector } from 'react-redux';
import { uploadImage } from '../../../store/actions';
import SelectBox from '../../../UI/SelectBox/SelectBox';
import classes from './Form.module.css';

const Form = () =>{
    const isDataDownloaded = useSelector(state => state.slider.loading);
    const dispatch = useDispatch();
    const [displayError,setDisplayError] = useState(false);
    const [checkBoxData,setCheckboxData] = useState({kompletSlubny:[],oprawaKwiatowa:[],oprawaPozaKwiatowa:[],jakTrafiliscie:[]});
    const [inputData,setInputData] = useState({name:null,surname:null,email:null,tel:null,date:null});
    const handleCheckBoxes = (target,targetHeader) => {
        let filterArr = [...checkBoxData.[targetHeader]];
        target.value && target.checked ? filterArr.push(target.value) : filterArr = checkBoxData.[targetHeader].filter(el => el !== target.value);
        setCheckboxData({...checkBoxData,[targetHeader]:filterArr});
    };
    const submitData = () => {
        if(inputData.name && inputData.surname && inputData.email && inputData.tel){
            dispatch(uploadImage("input_form--photo",`/forms.json`,
            {...inputData,...checkBoxData}));
            setDisplayError(false);
        }else{
            setDisplayError(true);
            for(const [key, value] of Object.entries(inputData))if(!value)document.getElementById(`input__form--${key}`).style.background = "#f08b8b";
        }
    };
    const handleInputs = (event) => {
        const header = event.id.split('--');
        setInputData({...inputData,[header[1]]:event.value});
        if(displayError)event.style.background = "white";
    };
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
                    <input onChange={event => handleInputs(event.target)} id='input__form--tel' type="tel" placeholder="Telefon" className={classes.Input}></input>
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
                    <input onChange={event => handleInputs(event.target)} id='input__form--weddinPlace' type="text" placeholder="Miejsce wesela" className={classes.Input}></input>
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
                    <textarea onChange={event => handleInputs(event.target)} id='input__form--desc' type="text" placeholder="Opisz dokładnie co Cię interesuję"className={classes.InputArea} ></textarea>
                </div>    
            </div>
            <div className={classes.Inputs}>
                <div className={classes.InputCont}>
                    <label className={classes.Label}>Komplet ślubny</label>
                    {["Bukiet ślubny","Wianek / kwiaty do włosów","Bukiet / korsarz dla świadkowej / druhen","Butonierki dla Pana Młodego / świadka",
                    "Inne","Nie jesteśmy zainteresowani"].map(el =><SelectBox key={el} clicked={(event) => handleCheckBoxes(event.target,'kompletSlubny')} value={el}/>)}
                </div>                 
                <div className={classes.InputCont}>
                    <label className={classes.Label}>Planowna oprawa kwiatowa</label>
                    {["Miejsce błogosławieństwa","Dekoracja kościoła","Dekoracja Urzędu Stanu Cywilnego","Dekoracja sali","Dekoracja w plenerze","Dekoracja samochodu",
                    "Podziękowania dla rodziców","Inne","Nie jesteśmy zainteresowani"]
                    .map(el =><SelectBox key={el} clicked={(event) => handleCheckBoxes(event.target,'oprawaKwiatowa')} value={el}/>)}
                </div> 
                <div className={classes.InputCont}>
                    <label className={classes.Label}>Planowana oprawa pozawkiatowa</label>
                    {["Girlandy żarówkowe","Napis Kochaj","Napis Love","Świece","Numerki Stołów","Plan Stołów","Ścianka za Młodą Parą",
                    "Kufry na koperty / pudełka na obrączki","Nie jesteśmy zainteresowani"]
                    .map(el =><SelectBox key={el} clicked={(event) => handleCheckBoxes(event.target,'oprawaPozaKwiatowa')} value={el}/>)}
                </div> 
                <div className={classes.InputCont}>
                    <label className={classes.Label}>Jak się o nas dowiedzieliście?</label>
                    {["Jesteśmy klijentami kwiaciarni","Facebook","Instagram","Strona WWWW / wyszukiwarka","Widzieliśmy waszą dekorację na ślubie"
                    ,"Polecenie"]
                    .map(el =><SelectBox key={el} clicked={(event) => handleCheckBoxes(event.target,'jakTrafiliscie')} value={el}/>)}
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
            {!isDataDownloaded ? <div onClick={submitData} className={classes.Button}>Wyślij!</div> : <div className={classes.ldsdualring}></div>}
            {displayError && <p style={{color:'red',fontSize:'23px'}}>Proszę uzupełnić brakujące dane!</p>}
        </div>
    );
};
export default Form;