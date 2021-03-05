import Link from 'next/link';
import { useRouter } from 'next/router';

const ClientsPage = () => {
  const clients = [
    { id: 'Corey', name: 'Corey' },
    { id: 'Raymond', name: 'Raymond' },
  ];

  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            {/* ALTERNATIVE TO: href={`/clients/${client.id}`} */}
            <Link
              href={{
                pathname: '/clients/[id]',
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientsPage;
