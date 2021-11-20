import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import Routes from '../routes';
// import SignIn from '../views/SignIn';
import Navigation from '../components/Navigation';

function Initialize() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          fullName: authed.displayName,
          uid: authed.uid,
        };
        setUser(userInfoObj);
      } else if (user || user === null) {
        setUser(null);
      }
    });
  }, []);
  return (
    <>
      <Navigation user={user} />
      <Routes user={user} />
    </>
  );
}

export default Initialize;
