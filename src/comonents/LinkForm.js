import React, {useState, useEffect} from 'react';
import { db } from '../firebase';

const LinkForm =(props)=>{
    const [values, setValue]= useState({
        url:'',
        name:'',
        description:''
    })
    const handleSubmit=(e)=>{
    e.preventDefault()
    props.addTask(values)
    setValue({url:'',
    name:'',
    description:''})
    }
    const handleChange=(e)=>{
       const {name, value}= e.target
       setValue({...values, [name]:value})
    }
    const onEdit = async (id) => {
        const doc = await db.collection("links").doc(id).get();
        setValue({ ...doc.data() });
      };
      useEffect(() => {
          console.log('aca', props.currentID);
        if (props.currentID === "") {
          setValue({ url:'',
          name:'',
          description:'' });
        } else {
          onEdit(props.currentID);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [props.currentID]);
    return(
        <>
        <form className= ' card card-body' onSubmit={handleSubmit}>
            <div className='form-group input-group'>
                <div className='input-group-text bg-light'>
                <i className="material-icons">insert_link</i>
                </div>
                    <input
                    name='url'
                    type='text'
                    className='form-control'
                    placeholder='http://someurl.com'
                    onChange={handleChange}
                    value={values.url}>
                    
                    </input>
                
            </div>
            <div className='form-group input-group'>
                <div className='input-group-text bg-light'>
                <i className="material-icons">create</i>
                </div>
                <input
                    type='text'
                    className='form-control'
                    name='name'
                    placeholder='web side name'
                    onChange={handleChange}
                    value={values.name}>
                    </input>
            </div>
            <div className='form-group input-group'>
                <textarea name= 'description' rows='3' className='form-control'
                onChange={handleChange}
                value={values.description}>

                </textarea>
            </div>
            <button className='btn btn-primary btn-block'>
                Guardar
            </button>
        </form>
        </>
    )
}
export default LinkForm 