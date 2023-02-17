import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MyButton from './views/game/index'
import FilterableProductTable from './views/game/index1'
import Profile from './views/initComponent/fComponent';
import Event from './views/interactivity/event'
import States from './views/interactivity/state';
import StateSnapshot from './views/interactivity/stateSnapshot';
import StateUpdate from './views/interactivity/stateUpdate';
import StateObject from './views/interactivity/stateObject';
import StateArray from './views/interactivity/stateArray';
import InputState from './views/manageState/inputState';
import ShareState from './views/manageState/shareState';
import ResetState from './views/manageState/resetState';
import Reducer from './views/manageState/reducer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='game' element={<MyButton />}></Route>
        <Route path='FilterableProductTable' element={<FilterableProductTable />}></Route>
        <Route path='fcomponent' element={<Profile />}></Route>
        <Route path='event' element={<Event />}></Route>
        <Route path='States' element={<States />}></Route>
        <Route path='StateSnapshot' element={<StateSnapshot />}></Route>
        <Route path='StateUpdate' element={<StateUpdate />}></Route>
        <Route path='StateObject' element={<StateObject />}></Route>
        <Route path='StateArray' element={<StateArray />}></Route>
        <Route path='InputState' element={<InputState />}></Route>
        <Route path='ShareState' element={<ShareState />}></Route>
        <Route path='ResetState' element={<ResetState />}></Route>
        <Route path='Reducer' element={<Reducer />}></Route>

        




      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
