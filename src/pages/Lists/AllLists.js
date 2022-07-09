import React from 'react'
import classNames from 'classnames'
import './List.css'

import { useEffect } from 'react'
import { deleteList, getLists, clearErrors } from '../../redux/reducers/listReducer/list.action'
import { useDispatch, useSelector } from 'react-redux'
const AllLists = ({ lists }) => {

    const dispatch = useDispatch()
    const reduxStore = useSelector((store) => store.listReducer)
    const userReducer = useSelector((store) => store.userReducer)
    function deleteHandler(id) {
        dispatch(deleteList(id))

    }


    useEffect(() => {


        if (reduxStore.error) {
            alert(reduxStore.error)
            dispatch(clearErrors())
        }

        if (reduxStore.isDeleted) {
            alert(`Task Deleted Successfully`)
            dispatch(getLists(userReducer.user.user._id))
        }
    }, [dispatch, reduxStore.isDeleted, reduxStore.error])

    return (
        <div className="lists__main__parent">
            {lists.map((list) => {
                return (
                    <div key={list._id} className='list__parent__box' >
                        <p className={classNames({ 'red': list.priority === 'high' }, { 'low': list.priority === 'low' }, { 'medium': list.priority === 'medium' })} >Priority: {list.priority}</p>
                        <h1 className='list__title'>{list.title}</h1>
                        <p className='list__desc' >{list.description}</p>
                        <p className='list__created' >{list.createdAt}</p>

                        <button className='list__delete' onClick={(e) => deleteHandler(list._id)}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default AllLists