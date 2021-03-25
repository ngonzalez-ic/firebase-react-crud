import React,{useEffect, useState} from 'react';
import LinkForm from './LinkForm';
import { db } from '../firebase';
import { toast } from 'react-toastify';

const Link =()=>{
    const [link, setLinks]= useState([])
    const [currentID, setCurrentID]=useState('')
    const addTask=async(linkObjet)=>{
        try {
            if (currentID === "") {
              await db.collection("links").doc().set(linkObjet);
              toast("New Link Added", {
                type: "success",
              });
            } else {
              await db.collection("links").doc(currentID).update(linkObjet);
              toast("Link Updated Successfully", {
                type: "info",
              });
              setCurrentID("");
            }
          } catch (error) {
            console.error(error);
          }
        };
    const getLinks = async()=>{
        const querySnapshot=  db.collection('links').onSnapshot((querySnapshot)=>{
            const docs =[]
            querySnapshot.forEach( doc=>{
            docs.push({...doc.data(),id:doc.id})
            })
            setLinks(docs)
        })
        
    }
    const onDelete = async (id)=>{
        if(window.confirm('seguro?')){
            db.collection('links').doc(id).delete()
            toast('Se a eleminado de manera correcta',{
                type:'error',
                autoClose:2000

            })
        }
    }

    
    useEffect(()=>{
        getLinks()},[])
    return(
        <>
        <div className='col-md-4 p-2'>
        <LinkForm {...{addTask,currentID,link}}/>
        </div>
      
        <div className='col-md-8 p-2'>
            {link.map(link=>(
                <div className='card mb-1' key={link.id}>
                    <div className='card-body'>
                        
                        <div className=' d-flex justify-content-between'> 
                        <h4>{link.name}</h4>
                        <div>
                        <i className="material-icons text-danger" onClick={()=>{onDelete(link.id)}}>close</i>
                        <i className="material-icons"onClick={()=>setCurrentID(link.id)}>create </i>
                        </div>
                        </div>
                        <p>{link.description}</p>
                        <a href={link.ulr} target='_blank' rel="noreferrer">Go web site</a>
                    </div>
                    
                </div>
            ))}
        </div>
        </>
    )
}
export default Link 