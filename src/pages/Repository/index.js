import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { Container } from '../../components/container';
import { Loading, Owner, IssueList } from './styles';
import api from '../../services/api';

export default function Repository({ match }) {
  const url = decodeURIComponent(match.params.repository);
  const [repository, setRepository] = useState({});
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const [repository, issues] = await Promise.all([
        api.get(`repos/${url}`),
        api.get(`repos/${url}/issues`, {
          params: {
            state: 'open',
            per_page: 5,
          },
        }),
      ]);
      setRepository(repository.data);
      setIssues(issues.data);
      setLoading(false);
    }
    fetchData();
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <Container>
      <Owner>
        <Link to="/">
          <FiArrowLeft />
          Voltar para pagina de repositórios
        </Link>
        <img src={repository.owner.avatar_url} alt="" />
        <h1>{repository.name}</h1>
        <p>{repository.description}</p>
      </Owner>

      <IssueList>
        {issues.map((issue) => (
          <li key={issue.id}>
            <img src={issue.user.avatar_url} alt={issue.user.login} />
            <div>
              <strong>
                <a href={issue.html_url}>{issue.title}</a>
                {issue.labels.map((label) => (
                  <small key={label.id}>{label.name}</small>
                ))}
              </strong>
              <p>{issue.user.login}</p>
            </div>
          </li>
        ))}
      </IssueList>
    </Container>
  );
}
