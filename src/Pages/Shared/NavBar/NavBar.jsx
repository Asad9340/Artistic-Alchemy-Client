import React, { useContext } from 'react';
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  Avatar,
  Tooltip,
} from '@material-tailwind/react';
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Firebase/AuthProvider';

function NavBar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut();
    navigate('/');
  };
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'flex items-center  px-3 py-2 rounded-md duration-300 font-semibold'
              : 'flex items-center font-display text-white px-3 py-2'
          }
        >
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to="/updateprofile"
          className={({ isActive }) =>
            isActive
              ? 'flex items-center  px-3 py-2 rounded-md duration-300 font-semibold text-black'
              : 'flex items-center font-display text-black px-3 py-2'
          }
        >
          Update Profile
        </NavLink>
      </Typography>
    </ul>
  );

  return (
    <div>
      <Navbar
        style={{ borderWidth: 0 }}
        className="sticky top-0 z-10 h-max max-w-full  px-4 py-2 lg:px-8 lg:py-4 shadow-none rounded-t-md rounded-b-none "
      >
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link to="/">
            <Typography className="mr-4 cursor-pointer py-1.5 font-semibold lg:font-bold text-xl md:text-2xl text-black">
              Artistic<span className="text-red-700">A</span>lchemy
            </Typography>
          </Link>
          <div className="flex items-center justify-between gap-8">
            <div className="mr-4 hidden lg:block">{navList}</div>
            {!user ? (
              <div className="flex items-center gap-x-2">
                <Link to="/signin">
                  <Button
                    variant="filled"
                    size="md"
                    className="hidden lg:inline-block"
                  >
                    <span>Sign In</span>
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button
                    variant="filled"
                    size="md"
                    className="hidden lg:inline-block"
                  >
                    <span>Sign Up</span>
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="flex gap-2">
                <Tooltip content={user ? user.displayName : 'Asad'}>
                  <Avatar
                    size="sm"
                    variant="circular"
                    alt="userName"
                    src={
                      user
                        ? user.photoURL
                        : 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
                    }
                    className="border-2 border-white hover:z-10"
                  />
                </Tooltip>
                <Button
                  onClick={handleLogOut}
                  variant="filled"
                  size="md"
                  className="hidden lg:inline-block"
                >
                  <span>LogOut</span>
                </Button>
              </div>
            )}
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden text-white"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          {user ? (
            <div className="flex gap-2">
              <Tooltip content={user ? user.displayName : 'Asad'}>
                <Avatar
                  size="sm"
                  variant="circular"
                  alt="userName"
                  src={
                    user
                      ? user.photoURL
                      : 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
                  }
                  className="border-2 border-white hover:z-10"
                />
              </Tooltip>
              <Button
                variant="filled"
                size="sm"
                className="inline-block lg:hidden"
              >
                <span onClick={handleLogOut}>LogOut</span>
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link className="w-full" to="/login">
                <Button fullWidth variant="filled" size="sm" className="">
                  <span>Log In</span>
                </Button>
              </Link>
              <Link className="w-full" to="/register">
                <Button fullWidth variant="filled" size="sm" className="">
                  <span>Sign Up</span>
                </Button>
              </Link>
            </div>
          )}
        </Collapse>
      </Navbar>
    </div>
  );
}
export default NavBar;
