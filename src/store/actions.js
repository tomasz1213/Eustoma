import axios from '../AxiosConfig';
import * as actionsType from './actionTypes';
import firebase from "firebase";
import Compressor from 'compressorjs';
import {firebaseConfig} from './sec';

firebase.initializeApp(firebaseConfig);
firebase.analytics();
const storageRef = firebase.storage().ref();
const database = firebase.database();
const auth = firebase.auth();
let MEMORISED_URL = '';
let MEMORISED_URL2 = null;

export const authSuccess = (response) => {
    return {
        type: actionsType.AUTH_LOGIN,
        authResponse: response
    };
};
export const authFail = (error) => {
    return {
        type: actionsType.AUTH_FAIL,
        error: error
    };
};

export const authLogout = () => {
    return {
        type: actionsType.AUTH_LOGOUT
    };
};

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() =>{
            dispatch(authLogout());
        },expirationTime*1000);
    };
};
export const updateDataFirebase = (nodeName,id,data,inputID) => { // nodeName = firebase Node Name
    return async dispatch => {
        let combineArr = [];
        dispatch(changeLoadingToTrue());
        let userRef = database.ref(`${nodeName}/${id}`);
        await uploadMultipleImages(inputID).then(arr => combineArr = [...arr,...data.url]);
        await userRef.update({...data,url:combineArr});
        await dispatch(downloadData());
    };
};
const handleCompressedUpload = (image) => {
    return new Promise((resolve, reject) => {
        new Compressor(image, {
            quality: 0.6,
            success: (result) => {
              return resolve(result);
            },
            error(err) {
                return reject(err.message);
              },
          });
    });
  };
const uploadMultipleImages = (input) => { // func for assigning more img to 1 db element
    return new Promise(async (resolve, reject) => {
        let fotoArr = [];
        const file = document.getElementById(input);
        if(file.files.length === 0)resolve([]);
        for(let i=0;i<file.files.length;i++){
             const compressedPhoto = file.files[i].size > 1700000 ? await handleCompressedUpload(file.files[i]) : file.files[i];
             const fileRef = storageRef.child('images/' + file.files[i].name);
             const uploadTaskSnapshot = await fileRef.put(file.files[i].size > 1700000?compressedPhoto:file.files[i]);
             const getDownloadURL = await uploadTaskSnapshot.ref.getDownloadURL();
             fotoArr.push(getDownloadURL);
             if(i===file.files.length-1)resolve(fotoArr);
        };
    });
};
export const uploadImage = (input,url,data) => {
    return async dispatch => {
        let isInputFromForm = input === 'input_form--photo' ? 'forms/' : 'images/';
        dispatch(changeLoadingToTrue());
        
        if(input === 'input_products--photo' || input === 'input_ourwork--photo' || input === 'input_form--photo'){ // Those input's have ability to upload more than one image to single DB node
            await uploadMultipleImages(input)
            .then((fotoArr) => dispatch(uploadDataFirebase(url,{url:fotoArr,name:data.name,...data})))
        }else{
            const file = document.getElementById(input);
            if(file.files.length ===0)dispatch(uploadDataFirebase(url,{url:[],name:data.name,...data}));
            for(let i=0;i<file.files.length;i++){
                 const compressedPhoto = await handleCompressedUpload(file.files[i]);
                 const uploadTask = storageRef.child(isInputFromForm + file.files[i].name)
                 .put(file.files[i].size > 1700000?compressedPhoto:file.files[i]);
                  uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,()=>{},()=>{},
                    () => {
                    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                        dispatch(uploadDataFirebase(url,{url:downloadURL,name:file.files[i].name,...data}));
                    });
                });
            };
        };
    };
};

export const updateSuccess = (data,data2) => {
    return {
        type: actionsType.UPLOAD,
        data: data,
        data2: data2
    };
};

export const removeDataItem = (key) => {
    return {
        type: actionsType.SLIDER_REMOVEITEM,
        key:key
    };
};
export const changeLoadingToFalse = () => {
    return {
        type: actionsType.LOADING_FALSE
    };
};
export const changeLoadingToTrue = () => {
    return {
        type: actionsType.LOADING_TRUE
    };
};
export const removeFromFirebase = (url) => {
    return dispatch => {
        dispatch(changeLoadingToTrue());
        axios.delete(url)
        .then(response => {
            dispatch(downloadData());
        })
        .catch(err => console.log(err));
    };
};

export const uploadDataFirebase = (url,dataInfo) => {
    return  dispatch => {
        const data = {
            ...dataInfo
          };
          axios.post(url,data)
          .then(response => {
            dispatch(changeLoadingToFalse());
            dispatch(downloadData());
            window.alert('Wysłano!');
          })
          .catch(err => console.log(err));
    };
};

export const downloadData = (url = MEMORISED_URL,optionalURL = MEMORISED_URL2) => {
    return dispatch => {
        dispatch(changeLoadingToFalse());
        const arr = [];
        const arr2 = [];
        MEMORISED_URL = url;
        MEMORISED_URL2 = optionalURL;
        axios.get(url)
        .then(res => {
            for (const [key, value] of Object.entries(res.data)) {
                arr.push({...value,key});
            } 
            !optionalURL && dispatch(updateSuccess(arr)); 
        }).then(() => { // optional data fetching
            if(optionalURL){
                axios.get(optionalURL)
                .then(res => {
                    for (const [key, value] of Object.entries(res.data)) {
                        arr2.push({...value,key});
                    } 
                    dispatch(updateSuccess(arr,arr2))
                });
            };
        });
    };
};
export const loginToDataBase = (action) => {
    return dispatch => {
        let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebaseConfig.apiKey}`;
        const authData = {
            email: action.login,
            password: action.password,
            returnSecureToken: true
        };
        axios.post(url, authData)
            .then(response => {
                auth.signInWithEmailAndPassword(action.login, action.password);
                dispatch(authSuccess(response.data));
                dispatch(checkAuthTimeout(response.data.expiresIn));
            })
            .catch(err => {
                dispatch(authFail(err.response.data.error));
            });
    };
};
