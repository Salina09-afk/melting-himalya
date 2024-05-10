import { React, useState, useEffect } from "react";
import useInput from "../../../hooks/use-input";
import styles from "./SignIn.module.css";

const SignIn = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const {
    value: enteredUsername,
    valueIsInvalid: usernameIsInvalid,
    valueIsValid: usernameIsValid,
    valueInputHandler: usernameInputHandler,
    valueBlurHandler: usernameBlurHandler,
    reset: usernameReset,
  } = useInput((value) => {
    return value && value.trim() !== "";
  });

  const {
    value: enteredPassword,
    valueIsValid: passwordIsValid,
    valueIsInvalid: passwordIsInvalid,
    valueInputHandler: passwordInputHandler,
    valueBlurHandler: passwordBlurHandler,
    reset: passwordReset,
  } = useInput((value) => {
    return value && value.length >= 8;
  });

  const {
    value: enteredVoterId,
    valueIsValid: voterIdIsValid,
    valueIsInvalid: voterIdIsInvalid,
    valueInputHandler: voterIdInputHandler,
    valueBlurHandler: voterIdBlurHandler,
    reset: voterIdReset,
  } = useInput((value) => {
    return value && value.length >= 7;
  });

  const onSubmitHandler = async (event) => {
    window.location.href = "/landing-page";
    event.preventDefault();
    const voterID = enteredVoterId;
    const name = enteredUsername;
    const password = enteredPassword;

    usernameReset();
    voterIdReset();
    passwordReset();
  };

  useEffect(() => {
    if (usernameIsValid && passwordIsValid && voterIdIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [usernameIsValid, passwordIsValid, voterIdIsValid]);

  return (
    <div
      className={`${styles["signInContainer"]} ${
        props.value === "signUp" ? styles.rightPanelActive : ""
      }`}
    >
      <div className={styles.logoCover}>
        <img
          className={styles.logo}
          src="\images\navinepal1.png"
          alt="decentral vote logo"
        />
      </div>
      <h4>Welcome To NaviNepal!!</h4>
      <h7>Please Sign-In to your account</h7>

      <form onSubmit={onSubmitHandler}>
        <div
          className={`${styles["formInputs"]} ${
            usernameIsInvalid || passwordIsInvalid || voterIdIsInvalid
              ? styles.invalid
              : ""
          }`}
        >
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            onChange={usernameInputHandler}
            onBlur={usernameBlurHandler}
            value={enteredUsername}
          />

          {usernameIsInvalid && <p>Username is Incorrect</p>}

          <label htmlFor="VoterId">User ID</label>
          <input
            type="text"
            id="VoterId"
            onChange={voterIdInputHandler}
            onBlur={voterIdBlurHandler}
            value={enteredVoterId}
          />

          {voterIdIsInvalid && <p>Please enter correct Voter ID</p>}

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={passwordInputHandler}
            onBlur={passwordBlurHandler}
            value={enteredPassword}
          />

          {passwordIsInvalid && <p>Password is Incorrect</p>}
        </div>
        <div className={styles.formActions}>
          <button className={styles.signInButton} disabled={!formIsValid}>
            sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
