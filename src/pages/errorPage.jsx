import { useRouteError } from 'react-router-dom';
import Navbar from '../components/Layouts/Navbar';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <Navbar></Navbar>
      <div className="flex items-center justify-center min-h-screen flex-col">
        <h1 className="font-bold text-4xl">Oops, Sorry!</h1>
        <p className="my-4 text-xl">We could not find what you were looking for.</p>
        <p className="text-xl">{error.statusText || error.message}</p>
      </div>
    </>
  );
};

export default ErrorPage;
