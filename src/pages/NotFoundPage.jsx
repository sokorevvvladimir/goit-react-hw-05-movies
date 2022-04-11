import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <>
      <p>Page Not Found 404</p>
      <p>
        Go <Link to="/">home</Link>
      </p>
    </>
  );
};

export default NotFoundPage;
