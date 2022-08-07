import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Loading from '../components/Loading';
import auth from '../Firebase.init';

const MySwal = withReactContent(Swal);

const AllUsers = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery('users', () =>
    fetch('https://polar-tundra-61708.herokuapp.com/users', {
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

  const makeAdmin = (email) => {
    fetch(`https://polar-tundra-61708.herokuapp.com/users/admin/${email}`, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.status === 401 || res.status === 403) {
          localStorage.removeItem('accessToken');
          signOut(auth);
          navigate('/');
          toast.error('Make admin attempt fail');
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          refetch();
          toast.success('Successfully made an admin');
        }
      });
  };

  const deleteUser = (email) => {
    MySwal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://polar-tundra-61708.herokuapp.com/users/${email}`, {
          method: 'DELETE',
          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              refetch();
            } else {
              toast.error('Something went wrong');
            }
          });
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="all-user">
      <div className="section-heading">
        <h2 className="">All User</h2>
      </div>
      <div className="table-section">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Name</th>
              <th>Role</th>
              <th>Make Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={user._id}>
                <td data-lebel="">{idx + 1}</td>
                <td data-lebel="Email">{user.email}</td>
                <td data-lebel="Name">{user.name}</td>
                <td data-lebel="Quantity">
                  {user.role === 'admin' ? 'admin' : 'user'}
                </td>
                <td data-lebel="Make Admin">
                  {user.role !== 'admin' && (
                    <button
                      className="btn table-btn"
                      onClick={() => makeAdmin(user.email)}
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td data-lebel="Delete">
                  <button
                    className="btn table-btn table-danger-btn"
                    onClick={() => deleteUser(user.email)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AllUsers;
