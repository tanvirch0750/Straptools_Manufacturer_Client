import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { IoAppsOutline, IoLogOutOutline } from 'react-icons/io5';
import { useQuery } from 'react-query';
import { Link, matchPath, useLocation, useNavigate } from 'react-router-dom';
import avatar from '../assets/images/icons/avatar.png';
import Loading from '../components/Loading';
import auth from '../Firebase.init';
import '../styles/NavProfile.css';

const NavProfile = () => {
  const [user, loading] = useAuthState(auth);
  const [profileToggle, setProfileToggle] = useState(false);
  const [profile, setProfile] = useState('');
  const handleSignOut = () => {
    signOut(auth);
  };

  const navigate = useNavigate();

  const toggleProfile = () => {
    setProfileToggle(!profileToggle);
  };

  const {
    data: singleUser,
    isLoading,
    refetch,
  } = useQuery(['users', user.email], () =>
    fetch(`https://polar-tundra-61708.herokuapp.com/users/${user.email}`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }).then((res) => {
      return res.json();
    })
  );

  useEffect(() => {
    fetch(`https://polar-tundra-61708.herokuapp.com/users/${user.email}`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }).then((res) => {
      return res.json();
    });
  }, []);

  useEffect(() => {
    setProfile(user?.photoURL);
  }, [user]);

  const { pathname } = useLocation();
  const isDashboardPath = matchPath('/dashboard/*', pathname);

  const dashboardCss = isDashboardPath && 'dash-profile-menu';

  if (loading || isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="profile" onClick={toggleProfile}>
        <img src={singleUser.image || profile || avatar} alt="avatar" />

        <div
          className={`profile-menu ${dashboardCss}`}
          style={
            profileToggle
              ? { visibility: 'visible', opacity: '1' }
              : { visibility: 'hidden', opacity: '0' }
          }
        >
          <h4>{singleUser.name || user?.displayName}</h4>
          <ul>
            <li>
              <IoAppsOutline className="profile-icon" />
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <IoLogOutOutline className="profile-icon" />
              <Link onClick={handleSignOut} to="/login">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavProfile;
