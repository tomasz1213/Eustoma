import React,{useState, useRef} from 'react';
import { useInViewport } from 'react-in-viewport';
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
    const formRef = useRef();
    const nameRef = useRef();
    const {
      inViewport,
    } = useInViewport(
      formRef,
      {},
      { disconnectOnLeave: false }
    );
    const handleCheckBoxes = (target,targetHeader) => {
        const filterArr = [...checkBoxData.[targetHeader]];
        target.value && target.checked ? filterArr.push(target.value) : 
        filterArr = checkBoxData.[targetHeader].filter(el => el !== target.value);
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

    if(inViewport && nameRef.current.value.length == 0) {
        nameRef.current.focus();
    }
    return(
        <div ref={formRef} className={classes.Form}>
            <h2>FORMULARZ</h2>
            <div className={classes.Inputs}>
                <div className={classes.InputCont}>
                    <label className={classes.Label}>Imi?? i Nazwisko Panny M??odej</label>
                    <input ref={nameRef} onChange={event => handleInputs(event.target)} id='input__form--name' placeholder="Imi?? i Nazwisko Panny M??odej" className={classes.Input}></input>
                </div> 
                    <div className={classes.InputCont}>
                    <label className={classes.Label}>Imi?? i Nazwisko Pana M??odego</label>
                    <input onChange={event => handleInputs(event.target)} id='input__form--surname' placeholder="Imi?? i Nazwisko Pana M??odego" className={classes.Input}></input>
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
                    <label className={classes.Label}>Data ??lubu</label>
                    <input onChange={event => handleInputs(event.target)} id='input__form--date' type="date" placeholder="Data slubu" className={classes.Input}></input>
                </div> 
                    <div className={classes.InputCont}>
                    <label className={classes.Label}>Miejsce ??lubu</label>
                    <input onChange={event => handleInputs(event.target)} id='input__form--church' type="text" placeholder="Miejsce ??lubu" className={classes.Input}></input>
                </div>                 
                <div className={classes.InputCont}>
                    <label className={classes.Label}>Miejsce wesela</label>
                    <input onChange={event => handleInputs(event.target)} id='input__form--weddinPlace' type="text" placeholder="Miejsce wesela" className={classes.Input}></input>
                </div> 
                    <div className={classes.InputCont}>
                    <label className={classes.Label}>Planowana liczba go??ci</label>
                    <input onChange={event => handleInputs(event.target)} id='input__form--guests' type="number" placeholder="Planowana liczba go??ci" className={classes.Input}></input>
                </div>                  
                <div className={classes.InputCont}>
                    <label className={classes.Label}>Kszta??t sto????w</label>
                    <input onChange={event => handleInputs(event.target)} id='input__form--table' type="text" placeholder="Kszta??t sto????w" className={classes.Input}></input>
                </div> 
                    <div className={classes.InputCont}>
                    <label className={classes.Label}>Planowany bud??et na dekoracje (minimalny bud??et przy dekoracji sali i florystyce indywidualnej- 4000z??)</label>
                    <input onChange={event => handleInputs(event.target)} id='input__form--budget' type="number" placeholder="" className={classes.Input}></input>
                </div> 
                <div className={classes.InputCont}>
                    <label className={classes.Label}>Wizja / Pomys?? Waszego ??lubu</label>
                    <textarea onChange={event => handleInputs(event.target)} id='input__form--desc' type="text" placeholder="Opisz dok??adnie co Ci?? interesuj??"className={classes.InputArea} ></textarea>
                </div>    
            </div>
            <div className={classes.Inputs}>
                <div className={classes.InputCont}>
                    <label className={classes.Label}>Komplet ??lubny</label>
                    {["Bukiet ??lubny","Wianek / kwiaty do w??os??w","Bukiet / korsarz dla ??wiadkowej / druhen","Butonierki dla Pana M??odego / ??wiadka",
                    "Inne","Nie jeste??my zainteresowani"].map(el =><SelectBox key={el} clicked={(event) => handleCheckBoxes(event.target,'kompletSlubny')} value={el}/>)}
                </div>                 
                <div className={classes.InputCont}>
                    <label className={classes.Label}>Planowna oprawa kwiatowa</label>
                    {["Miejsce b??ogos??awie??stwa","Dekoracja ko??cio??a","Dekoracja Urz??du Stanu Cywilnego","Dekoracja sali","Dekoracja w plenerze","Dekoracja samochodu",
                    "Podzi??kowania dla rodzic??w","Inne","Nie jeste??my zainteresowani"]
                    .map(el =><SelectBox key={el} clicked={(event) => handleCheckBoxes(event.target,'oprawaKwiatowa')} value={el}/>)}
                </div> 
                <div className={classes.InputCont}>
                    <label className={classes.Label}>Planowana oprawa pozawkiatowa</label>
                    {["Girlandy ??ar??wkowe","Napis Kochaj","Napis Love","??wiece","Numerki Sto????w","Plan Sto????w","??cianka za M??od?? Par??",
                    "Kufry na koperty / pude??ka na obr??czki","Nie jeste??my zainteresowani"]
                    .map(el =><SelectBox key={el} clicked={(event) => handleCheckBoxes(event.target,'oprawaPozaKwiatowa')} value={el}/>)}
                </div> 
                <div className={classes.InputCont}>
                    <label className={classes.Label}>Jak si?? o nas dowiedzieli??cie?</label>
                    {["Jeste??my klientami kwiaciarni","Facebook","Instagram","Strona WWW / wyszukiwarka","Widzieli??my wasz?? dekoracj?? na ??lubie"
                    ,"Polecenie"]
                    .map(el =><SelectBox key={el} clicked={(event) => handleCheckBoxes(event.target,'jakTrafiliscie')} value={el}/>)}
                </div> 
                <div className={classes.InputCont}>
                    <label className={classes.Label}>Kto jest waszym fotografem?</label>
                    <input onChange={event => handleInputs(event.target)} id='input__form--photo' type="text" className={classes.Input}></input>
                </div>  
                <div className={classes.InputCont}>
                    <label className={classes.Label}>PINTREST</label>
                    <input onChange={event => handleInputs(event.target)} id='input__form--pintrest' type="text" placeholder="Link do waszej tablicy" className={classes.Input}></input>
                </div>                              
                <div className={classes.InputCont}>
                    <label className={classes.Label}>Zdj??cia, pliki</label>
                     <div onClick={() => document.getElementById('input_form--photo').click()} className={classes.InputFoto}>Wy??lij pliki
                     <input className={classes.FotoInput} type="file" id="input_form--photo" multiple></input></div>
                </div> 
            </div>
            <h2 style={{fontWeight:'normal'}}>Podsumowanie</h2>
            <p>Ka??d?? wycen?? robimy indywidualnie na podstawie podes??anych przez Was zdj???? i bud??etu jakim dysponujecie.</p>
            <p>*Wype??nienie formularza nie jest jednoznaczne z rezerwacj?? terminu. Rezerwacja terminu nast??puje po podpisaniu umowy przez obie strony.</p>
            <div className={classes.Premission}>
                <SelectBox req={true} value="Wyra??am zgod?? na przetwarzanie moich danych osobowych dla potrzeb niezb??dnych do realizacji zapytania ofertowego z??o??onego w formularzu.
                 (zgodnie z Ustaw?? z dnia 29.08.1997 roku o Ochronie Danych Osobowych; tekst jednolity: Dz. U. 2016 r. poz. 922)."/>
            </div>
            {!isDataDownloaded ? <div onClick={submitData} className={classes.Button}>Wy??lij!</div> : <div className={classes.ldsdualring}></div>}
            {displayError && <p style={{color:'red',fontSize:'23px'}}>Prosz?? uzupe??ni?? brakuj??ce dane!</p>}
        </div>
    );
};
export default Form;