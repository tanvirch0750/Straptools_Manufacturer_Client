import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../components/Loading';
import auth from '../Firebase.init';
import '../styles/MyProfile.css';

const MyProfile = () => {
  const [user, loading] = useAuthState(auth);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({});
  const navigate = useNavigate();
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
      if (res.status === 401 || res.status === 403) {
        localStorage.removeItem('accessToken');
        signOut(auth);
        navigate('/');
      }
      return res.json();
    })
  );

  console.log(user);

  const onSubmit = (data) => {
    const findalData = {
      name: user.displayName,
      ...data,
    };

    fetch(
      `https://polar-tundra-61708.herokuapp.com/user/profile/${user.email}`,
      {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        body: JSON.stringify(findalData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success(`Update profile successfull`);
        refetch();
      });
  };

  if (isLoading) {
    return <Loading />;
  }

  console.log(singleUser);

  return (
    <section className="my-profile">
      <div className="container">
        <div className="section-heading">
          <h2>My Profile</h2>
        </div>
        <div className="my-profile-inner">
          <div className="my-profile-details">
            <div>
              <div className="profile-box">
                <h3>
                  <span>Name:</span>{' '}
                  {singleUser.name || user.displayName || 'No name found'}
                </h3>
              </div>
              <div className="profile-box">
                <h3>
                  <span>Email:</span> {singleUser.email}
                </h3>
              </div>
              <div className="profile-box">
                <h3>
                  <span>Location:</span> {singleUser.location}
                </h3>
              </div>
              <div className="profile-box">
                <h3>
                  <span>Education:</span> {singleUser.education}
                </h3>
              </div>
              <div className="profile-box">
                <h3>
                  <span>Linkedin:</span>{' '}
                  <a href={singleUser.linkedin}>Profile</a>
                </h3>
              </div>
              <div className="profile-box">
                <h3>
                  <span>Phone Phone:</span> {singleUser.phone}
                </h3>
              </div>
            </div>

            {singleUser.image ? (
              <img src={singleUser.image} alt="" />
            ) : (
              'No Image found'
            )}
          </div>

          <div className="my-profile-others"></div>
        </div>
        <div className="update-profile-inner">
          <h3>Update Profile</h3>
          <div className="form-container">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-container-inner">
                <div className="form-control">
                  <label htmlFor="location">Your Location:</label>
                  <input
                    {...register('location', {
                      required: 'Enter your location',
                    })}
                    id="location"
                    type="text"
                    placeholder="Enter your location"
                  />
                  <p className="error-message">{errors.location?.message}</p>
                </div>
                <div className="form-control">
                  <label htmlFor="education">Your Education:</label>
                  <input
                    {...register('education', {
                      required: 'Enter your education',
                    })}
                    id="education"
                    type="text"
                    placeholder="Enter your education"
                  />
                  <p className="error-message">{errors.education?.message}</p>
                </div>
                <div className="form-control">
                  <label htmlFor="image">Your image link:</label>
                  <input
                    {...register('image', {
                      required: 'Enter your image link',
                    })}
                    type="text"
                    placeholder="Enter your image link"
                  />
                  <p className="error-message">{errors.image?.message}</p>
                </div>
                <div className="form-control">
                  <label htmlFor="phone">Your Phone:</label>
                  <input
                    {...register('phone', {
                      required: 'Enter your phone number',
                    })}
                    type="number"
                    placeholder="Enter your phone number"
                  />
                  <p className="error-message">{errors.phone?.message}</p>
                </div>
                <div className="form-control">
                  <label htmlFor="linkedin">Linkedin Profile Link:</label>
                  <input
                    {...register('linkedin', {
                      required: 'Enter your linkedin profile link',
                    })}
                    type="text"
                    placeholder="Enter item supplier name"
                  />
                  <p className="error-message">{errors.linkedin?.message}</p>
                </div>
              </div>
              <input
                type="submit"
                className="btn btn-full form-btn"
                value="Update User"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProfile;
