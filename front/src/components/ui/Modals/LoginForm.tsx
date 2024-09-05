import { Link } from 'react-router-dom';
import Button from '../Buttons/Button';
import { AuthContext } from '../../../contexts/AuthContext';
import { useContext } from 'react';
import { useState } from 'react';

function LoginForm() {
  const { emailRef, loginUser, logoutUser, error } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(email, password);
  };

  return (
    <>
      <div className=" absolute top-12 right-0 bg-white drop-shadow-md rounded-sm border border-main-lower max-w-screen-sm  flex flex-col items-center py-6">
        <div className=" absolute z-10 -top-2 right-[180px] bg-main-lowest rotate-45 h-4 w-4 " />
        <form
          className="w-[500px] flex flex-col items-center gap-6"
          onSubmit={handleSubmit}
        >
          <label className="flex flex-col gap-3 w-[216px]">
            Adresse e-mail
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              ref={emailRef}
              placeholder="nicole.martin@mail.fr"
              className="border p-2 rounded-lg border-brand-grey text-brand-grey text-m-regular"
            />
          </label>
          <label className="flex flex-col gap-3 w-[216px]">
            Mot de passe
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="border p-2 rounded-lg border-brand-grey text-brand-grey text-m-regular"
            />
          </label>
          <div>
            <Button>
              <p className="px-12">Identifiez-vous</p>
            </Button>
            {error && <p className="text-red-500 text-xs">{error}</p>}
          </div>
        </form>
        <div className="text-xs-regular flex gap-1 mt-4">
          <p>Nouveau client?</p>{' '}
          <Link
            to="/register"
            className="text-info-medium active:text-info-higher  active:font-semibold hover:text-button-active-background"
          >
            Commencer ici
          </Link>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
