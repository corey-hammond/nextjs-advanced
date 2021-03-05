import { useRouter } from 'next/router';

const ClientProjectsPage = () => {
  const router = useRouter();
  console.log(router.query);

  const loadProjectHandler = () => {
    // load data...
    router.push('/clients/corey/projecta');
  };

  return (
    <div>
      <h1>{router.query.id}'s Projects Page</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
};

export default ClientProjectsPage;
