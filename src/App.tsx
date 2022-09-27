import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react'
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchUsers } from './store/reducers/ActionCreators';
import { userReducer } from './store/reducers/UserReducer';
import { RootState } from './store/store';
import PostContainer from './components/PostContainer';
import Title from './components/MainTitle/Title';

function App() {
  // const dispatch = useAppDispatch()
  // const {users, isLoading, error} = useAppSelector(state => state.userReducer)

  // useEffect(() => {
  //   dispatch(fetchUsers())
  // }, [])



  return (
    <div className="App">
      <Title/>
      {/* {isLoading && <h1>Загрузка....</h1>}
      {error && <h1>{error}</h1>}
      {JSON.stringify(users, null, 2)} */}

      <PostContainer/>

    </div>
  );
}

export default App;
