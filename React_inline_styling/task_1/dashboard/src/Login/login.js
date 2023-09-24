import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default function Login() {
  return (
    <React.Fragment>
      <div className="App-body">
        <p>Login to access to the full dashboard</p>
        <label htmlFor="email">Email:</label>
        <input className={css(styles.input)} type="text" id='email' name='email'/>
        <label htmlFor="password">Password:</label>
        <input className={css(styles.input)} type="password" id='password' name='password'/>
        <button>OK</button>
      </div>
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  input: {
    margin: '0 8px',
  }
});
