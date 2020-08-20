import React from 'react';
import '../../App.css';
import logo from '../../assets/images/logo.svg';
import backgroundimg from '../../assets/images/bg.jpg';
import { SimplesForm, Container, Coluna1, ButtonLink } from './style';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Container className="content">
            <Coluna1 className="coluna1">
              <img className="bgimg" src={backgroundimg} alt="Pessoa no tabet" />
            </Coluna1>    
            <SimplesForm className="coluna2">
            <img className="logo" src={logo} alt="Logo Conta Simples" />
                <p className="descricao">Preencha os campos abaixo para acessar sua conta</p>
                <form className="form">
                <input type="text" name="email" placeholder="Email" autoComplete="off"/>
                <input type="password" name="pass" placeholder="Senha"/>
                <ButtonLink type="button">
                  <Link to="/create">Entrar</Link>
                </ButtonLink>
                <Link as="a" >Esqueci minha senha</Link>
                <Link>Ainda não sou cliente</Link>
                </form>
            </SimplesForm>
        </Container>
    </div>
  );
}

export default App;
