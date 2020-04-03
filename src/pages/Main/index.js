import React, { useState, useEffect } from 'react';
import { FiGithub, FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import { Title, Form, List } from './styles';
import { Container } from '../../components/container';

export default function Main() {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const repo = localStorage.getItem('repositories');
    if (localStorage.getItem('repositories') !== null) {
      setRepositories(JSON.parse(repo));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('repositories', JSON.stringify(repositories));
  }, [repositories]);

  async function handlerSubmit(e) {
    e.preventDefault();
    const response = await api.get(`repos/${newRepo}`);
    setRepositories([...repositories, { name: response.data.full_name }]);
  }
  return (
    <Container>
      <Title>
        <FiGithub />
        Repositórios
      </Title>
      <Form onSubmit={handlerSubmit}>
        <input
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Digite ex: user/repository"
          value={newRepo}
        />
        <button type="submit">
          <FiPlus size={16} />
        </button>
      </Form>
      <List>
        {repositories.map((repository) => (
          <li key={repository.name}>
            <span>{repository.name}</span>
            <Link to={`/repository/${encodeURIComponent(repository.name)}`}>
              Detalhes
            </Link>
          </li>
        ))}
      </List>
    </Container>
  );
}
