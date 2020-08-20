import styled from 'styled-components';

export const Container = styled.div`

    display: block;
    background-color: #fff;

    a {
        text-decoration: none;
        color: #9ae258;
        margin-left: 65px;
        padding-top: 10px;
    }

    @media (min-width:800px) {
    display: inline-block;
    width: 100%;
    height: 707px;

    a {
        margin-left: 130px;
    }
  }


`;


export const Coluna1 = styled.div`

  text-align: center;
  width: 100%;
  height: 40%;


  img {
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 100%;
  }

  @media (min-width:800px) {
    width: 50%;
    height: 100%;
    margin-left: 0px;

    img {
        
        width: 100%;
        height: 100%;
    }
  }

`;




export const SimplesForm = styled.form`

  width: 100%;
  height: 60%;
  display: block;
  margin-top: 20px;
  text-align: center;



    p {
        font-size: 13px;
        font-weight: 300;
        line-height: 30px;
        color: #7f8c8d;
        margin-left: 3%;
        margin-top: 10%;
    }

    form {
        display: flex;
        flex-direction: column;
        width: 78%;
    }

    input {
    height: 45px;
    width: 100%;
    border: none;
    background-color: #fff;
    outline: none;
    display: flex;
    margin-left: 40px;
    margin-bottom: 10px;
    border: 2px solid #ecf0f1;
    border-radius: 10px;
    }

    img {
        max-width: 150px;
    }

    @media (min-width:800px) {
        width: 40%;
        height: 700px;
        margin-left: 55%;
        margin-top: -700px;

        img {
            margin-top: 50px; 
        }

        input {
            margin-left: 70px;
        }
        
    }
`;

export const ButtonLink = styled.button`

  border-radius: 15px;
  text-transform: uppercase;
  color: #fff;
  font-size: 10px;
  padding: 10px 50px;
  margin-left: 70px;
  cursor: pointer;
  font-weight: bold;
  width: 150px;
  align-self: center;
  border: none;
  margin-top: 1rem;
  background-color: #6db967;
  border: 1px solid #6db967;
  transition: background-color .5s;
  margin-bottom: 10px;
  outline: none;

  a {
      color: white;
      margin: 0px;
  }

  &:hover{
    background-color: #fff;
    border: 1px solid #9ae258;
    color: #6db967;
  }

  @media (min-width:800px) {

      margin-left: 130px;
  }

`;
