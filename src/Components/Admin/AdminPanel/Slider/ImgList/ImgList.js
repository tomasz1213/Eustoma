import classes from './ImgList.module.css';
import React from 'react';
import {useSelector, useDispatch } from 'react-redux';
import {uploadImage,removeFromFirebase} from '../../../../../store/actions';
import Element from '../../UI/Element/Element';

const ImgList = (props) => {
    const dispatch = useDispatch();
    let arr = [];
    const data = useSelector(state => state.slider.data.dataArr);
    const isDataDownloaded = useSelector(state => state.slider.loading);
    let element = null;
    const uploader = () => {
        dispatch(uploadImage("input_slider",`https://study-49f96-default-rtdb.europe-west1.firebasedatabase.app/sliders/${props.name}.json`));
    };
    const deleteElement = (key) => {
        let answer = window.confirm("Usunąć element?");
        if (answer) {
            if(arr.length === 1){
               return alert('Nie można usunąć ostatniego elementu, dodaj kolejny i ponów próbę!');
            }
            dispatch(removeFromFirebase(`https://study-49f96-default-rtdb.europe-west1.firebasedatabase.app/sliders/${props.name}/${key}.json`,key));
        }
        else {
            
        }    
    };
    const displayImgList = () => {
        if(data.length !== 0){
            const dataArray = data.find(el => el[0] === props.name);
            for (const [key, value] of Object.entries(dataArray[1])) {
                const obj = {value, key};
                arr.push(obj);
            }  
            element = arr.map(el => <Element clicked={()=> deleteElement(el.key)} key={el.key} name={el.value.name} background={el.value.url}/>);
        }
    };
    if(!isDataDownloaded){
        displayImgList();
    }

    return(
        <div className={classes.ImgList}>
            <label className={classes.Button} >
                <input onChange={uploader} type="file" id="input_slider" multiple></input>
                <p>DODAJ ZDJĘCIE</p>
            </label>
            {!isDataDownloaded ? element : <div className={classes.ldsdualring}></div>}
        </div>
    );
};

export default ImgList;