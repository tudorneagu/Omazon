import LoginForm from '../ui/Modals/LoginForm';
import Account from './Account';
import AccountDetails from '../ui/Modals/AcountDetails';
import Cart from './Cart';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';

function UserPanel() {
  const { loginForm, error, authData } = useContext(AuthContext);
  console.log(authData);
  return (
    <div className="relative flex gap-6 w-[220px]">
      <Account />
      {loginForm && !authData && <LoginForm />}
      {authData && <AccountDetails />}
      <Cart />
    </div>
  );
}

export default UserPanel;
