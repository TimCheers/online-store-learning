import React from "react";
import {
  Nav,
  Navbar,
  Container,
  Button,
  Form,
  Card,
  Row,
} from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h3 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h3>
        <Form className="d-flex flex-column">
          <Form.Control className="mt-3" placeholder="Введите email..." />
          <Form.Control className="mt-3" placeholder="Введите пароль..." />
          <div className="d-flex justify-content-between mt-3">
            {isLogin ? (
              <NavLink to={REGISTRATION_ROUTE}>Зарегистрироваться</NavLink>
            ) : (
              <NavLink to={LOGIN_ROUTE}>Войти</NavLink>
            )}
            <Button variant="outline-success">{isLogin ? "Войти" : "Зарегистрироваться"}</Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};
export default Auth;
