import React, { useState, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { createList, clearErrors } from '../../redux/reducers/listReducer/list.action'

import { getLists } from '../../redux/reducers/listReducer/list.action'
import './List.css'
const CreateList = () => {

    const dispatch = useDispatch()
    const userRedux = useSelector((store) => store.userReducer)
    const reduxStore = useSelector((store) => store.listReducer)
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('low');


    const details = {
        title: title,
        description: description,
        priority: priority,
    }

    function clearFields() {
        setTitle('')
        setDescription('')
        setPriority('low')
    }

    const createNew = (e) => {
        e.preventDefault();
        dispatch(createList(userRedux.user.user._id, { details }))
        clearFields();
    }

    useEffect(() => {

        if (reduxStore.error) {
            alert(reduxStore.error)
            dispatch(clearErrors())
        }

        if (reduxStore.isCreated) {
            alert('List created')
            dispatch(getLists(userRedux.user.user._id))
        }


    }, [dispatch, alert, reduxStore.isCreated, reduxStore.isCreated, reduxStore.error])

    return (

        <>
            <div className="create__list__parent">
                <div className="create__list">
                    <h1>Create New Task</h1>
                    <form onSubmit={createNew}>
                        <input type="text" placeholder='Enter Title' required value={title} onChange={(e) => setTitle(e.target.value)} />
                        <input type="text" placeholder='Enter a little Description' required value={description} onChange={(e) => setDescription(e.target.value)} />
                        <div className="forPriority">
                            <label htmlFor="Select_Priority" >Priority: </label>
                            <select id="Select_Priority" value={priority} onChange={(e) => setPriority(e.target.value)}>
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>
                        </div>
                        <button type="submit">Create</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreateList