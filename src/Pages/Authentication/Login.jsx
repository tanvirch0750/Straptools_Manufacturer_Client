import React, { useEffect, useState } from 'react';
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import auth from '../../Firebase.init';
import useToken from '../../hooks/useToken';
import '../../styles/Form.css';
import '../../styles/Login.css';
import Social from './Social';

const Login = () => {
  const [customError, setCustomError] = useState('');
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, errorReset] =
    useSendPasswordResetEmail(auth);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({});
  const [token] = useToken(user);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || '/';

  useEffect(() => {
    if (error) {
      if (error.message.includes('auth/wrong-password')) {
        setCustomError('Your password is wrong');
      } else if (error.message.includes('auth/user-not-found')) {
        setCustomError('Account not found with this email');
      } else {
        setCustomError(error.message);
      }
    }
  });

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token]);

  const onSubmit = async (dataa) => {
    await signInWithEmailAndPassword(dataa.email, dataa.password);
  };

  const email = watch('email');
  function validateEmail() {
    let validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(validRegex)) {
      return true;
    } else {
      return false;
    }
  }

  const handleResetEmail = async () => {
    if (validateEmail()) {
      await sendPasswordResetEmail(email);
    }
  };

  if (loading || sending) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <section className="login">
        <div className="container login-inner">
          <div className="form-container">
            <h2>Login</h2>
            <div className="user-crendentials">
              <p>Please use this credentials to check user functionality:</p>
              <p>Email: israk@madrid.com</p>
              <p>Password: 123456</p>
            </div>
            <div className="admin-crendentials">
              <p>Please use this credentials to check admin functionality:</p>
              <p>Email: tanvir0750@yahoo.com</p>
              <p>Password: 123456</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label htmlFor="name">Your email:</label>

                <input
                  {...register('email', {
                    required: 'Please provide your email address',
                  })}
                  type="email"
                  placeholder="Enter your email"
                />
                <p className="error-message">{errors.email?.message}</p>
              </div>
              <div className="form-control">
                <label htmlFor="name">Your password:</label>
                <input
                  {...register('password', {
                    required: 'Please give your password',
                  })}
                  type="password"
                  placeholder="Enter your password"
                />
                <p className="error-message">{errors.password?.message}</p>
              </div>
              {customError && <p className="error-message">{customError}</p>}
              <input
                type="submit"
                className="btn btn-full form-btn"
                value="Login"
              />
            </form>

            <p className="forgot-password--text">
              Forgot your password?{' '}
              <span onClick={handleResetEmail}>Reset your password</span>
            </p>
            <p className="login-signup-text">
              Don't have an account?{' '}
              <Link to="/signup" className="login-signup-link">
                Sign Up
              </Link>
            </p>
            <Social text="Login" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
