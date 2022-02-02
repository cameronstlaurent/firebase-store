import {ref as dataRef, get, set, update} from 'firebase/database'; 
import {db} from './libs/firebase/firebaseConfig';
import {buyCars} from './templates/buyCars'
console.log(db)

async function pageInit(){
    const key = sessionStorage.getItem('key');
    const carRef = dataRef(db, 'cars/');
    const carSnapShot = await get(carRef)
    const data = carSnapShot.val();
    carRef.child(key).remove();
    console.log(key)
    //read in the object RTD with that key
}

pageInit()