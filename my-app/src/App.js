// import logo from './logo.svg';
import Header from './Header';
import Contant from './Contant';
import Footer from './Footer';
import { useState , useEffect} from 'react';

import './App.css';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import ApiRequest from './ApiRequest';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


//jsx javascript syntax 
function App() { //app is main component
  // const name ="hariaran"
  function handleNameChange(){
    const name =["Hariharan","HD"];
    const random =Math.floor(Math.random()*3);
    return name[random]
  }

  //content.js la irundhu copy panni potadhu , props use pandradhukaga
  //default array ku bathilaga localstorage la irundhu eduka porum 
  // const [items,setItems] = useState(JSON.parse
  //   (localStorage.getItem('todolist')) || []); //local storage la data illa na enaku [] empmty array varanum
  
  const [items,setItems] = useState([])
  
  // const [items,setItems] = useState([
  //   {id:1,
  //   checked: true,
  //   purpose: "practice coding"},
  //   {id:2,
  //     checked: false,
  //     purpose: "paly game"},
  //     {id:3,
  //       checked: false,
  //       purpose: "system family"}
  // ]);
  
  //json url  run cmd - npx  json-server -p 3500 -w data/db.json
  const API_URL ='http://localhost:3500/items';
  const [fetchError,setFetchError]=useState(null);
  const [isLoding,setIsLoding] = useState(true);

//useeffect()
useEffect(()=>{
  //JSON.parse(localStorage.getItem('todolist'))
  const fetchItems= async () =>{
    try{
const response = await fetch(API_URL);
console.log(response)
// API_URL thappa irunchina indha error adikanum
if (!response.ok) throw Error ("Data not recieved"); //ok na 200 ah  apo response 200 ah illa na enaku indha error ah throw pannu
const listItems = await response.json();
console.log(listItems)
setItems(listItems)
setFetchError(null)
    }catch(error){
      setFetchError(error.message)
      //console.log(error.stack)
    }finally{
      setIsLoding(false)
    }
  }
  // (async () => await fetchItems()) ()
setTimeout (()=>{
  (async () => await fetchItems()) ()
},2000) // data load agi varadhuku time set pandran 2 seconds
},[])

  //map
  // const number = [-2,-1,0,1,2]
  // const count = number.map(n =>({number:n})) 
  // console.log(count)
  //filter
  // const number = [-2,-1,0,1,2]
  // const count = number.filter(n => n>=0).map(n => ({number:n})) 
  // console.log(count)
  //...items indh three dots um three object ah call pannum 

  const checkName = async (id) => {
    //console.log(`id : ${id}`);
    const listItems = items.map((purpose) => purpose.
    id===id ? {...purpose, checked : !purpose.checked}: purpose);
    setItems(listItems)
    //localStorage.setItem('todolist',JSON.stringify(listItems))

    const myItems = listItems.filter((purpose) => purpose.id===id)
    
    const updateOptions= {
      method : 'PATCH',
      headers : {
        'Content-Type' : 'application/json'
      },
      body :JSON.stringify({checked:myItems[0].checked})  
       }
    const reqUrl = `${API_URL}/${id}`   
    const result = await ApiRequest(reqUrl,updateOptions)
    if(result)setFetchError(result)
  }
  
  const funDelete = async(id) => { //currently getting id value 3 
    const itemlist = items.filter((purpose) => 
    purpose.id!==id) // id!==id so vangiruka value va thavirthu madhadhulam venum nu sollirikan
    setItems(itemlist)
    //localStorage.setItem('todolist',JSON.stringify(itemlist))
    const deleteOptions={method:'DELETE'}
    const reqUrl = `${API_URL}/${id}`   
    const result = await ApiRequest(reqUrl,deleteOptions)
    if(result)setFetchError(result)
  }

//Controlled Components Inputs
const [newItem,setNewItem]=useState('');
const addItem = async (purpose) => {
  const id= items.length ? items[items.length - 1].id +1 : 1;
const addNewItem ={id, checked:false,purpose}
const listItems =[...items, addNewItem]
setItems(listItems)
//localStorage.setItem('todolist',JSON.stringify(listItems))

const postOptions= {
  method : 'POST',
  headers : {
    'Content-Type' : 'application/json'
  },
  body :JSON.stringify(addNewItem)  
   }
const result = await ApiRequest(API_URL,postOptions)
if(result)setFetchError(result)
}

const handleSubmit = (e) =>{
  e.preventDefault();
 console.log("submitted")
 if (!newItem) return;
 console.log(newItem);
 //add item
 addItem(newItem)
 setNewItem('');
}

//search ku thevaiyana code
const [search,setSearch]=useState('')


  return (
    <div className=''>
      {/* another js file access call this tag  */}
      {/* three components are child components */}
      <header id='header' className='header fixed-top d-flex align-items-center'>
        <div className='container-fluid container-lg d-flex align-items-center position-relative'> 
          <Header title ="TO DO LIST" />
       </div>
      </header>
      
      <section>
        <div className='container aos-init aos-animate'>
            <AddItem 
            newItem ={newItem}
            setNewItem={setNewItem}
            handleSubmit ={handleSubmit}/>
        </div>
      </section>

      
      {/* customer ku error ah kamikuradhuku kaga main use paandran */}
      {/* <main>  */}
      <section style={{padding:'35px 0'}}>
              
      <div titile="Search" className='search-bar'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <SearchItem 
              search ={search}
              setSearch ={setSearch}/>
            </div>
          </div>
        </div>
      </div>

    <div class="container aos-init aos-animate"> 
    <div className='row justify-content-center'>
      <div class="col-lg-8 card-show">
       <div class="card-hover-shadow-2x mb-3 card">
        <div class="scroll-area-sm">
         <div class="ps-show-limits">
          <div style={{position: 'static'}} class="ps ps--active-y">
           <div class="ps-content">
             
             {isLoding && <p className='loading-p'> Loding item..... </p>}
             {fetchError && <p> {`Error: ${fetchError}`}</p>} 

             {!isLoding && !fetchError && <Contant 
      //search function writtern in single line code
      items = {items.filter(purpose => ((purpose.purpose).toUpperCase()).includes(search.toUpperCase()))}
      setItems = {setItems}
      checkName ={checkName}
      funDelete ={funDelete}/>}
      {/* </main> */}
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      
      <div id='footer'>
        <div className='container'>
          <div className='copyright text-center'>
      <Footer 
      length = {items.length}/>
      </div>
        </div>
       
            <div className='footer-bottom clearfix'>
        <p> Copyright © 2023 {handleNameChange()}</p>
        {/* {} idha use panni javascript varible la access panna mudium */}
        {/* <p>{name}</p>  */}
        </div>
        </div>
        
    </div>
  );
}

export default App;
