import React, { Fragment } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router,  Route, Link, Routes } from "react-router-dom";
import LoginPage from 'features/auth/pages/LoginPage';
import { AdminLayout } from 'components/Layout';
import { NotFound, PrivateRoute } from 'components/Common';
import { useAppDispatch } from 'app/hooks';
import { Button } from '@material-ui/core';
import { authActions } from 'features/auth/authSlice';

function App() {
  const dispatch = useAppDispatch();
  return (
    <>
    <Button variant='contained' color='primary' onClick={() => dispatch(authActions.logout())}>Logout</Button>
      <Routes>
        <Route path="/login" element={<LoginPage />}>
        </Route>
        <Route
        path="/admin"
        element={
          <PrivateRoute>
            <AdminLayout />
          </PrivateRoute>
        }
        />
        <Route path='/' element={<NotFound />}>
        </Route>
      </Routes>
    </>
    
  );
}

export default App;
