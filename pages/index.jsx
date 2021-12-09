import { useState } from "react";

function Login() {
  const [isRegister, setIsRegister] = useState(false);

  const signIn = () => {
    setIsRegister(false);
  };

  const signUp = () => {
    setIsRegister(true);
  };

  return (
    <section className={isRegister ? "register" : "login"}>
      <div className="container">
        <div className="bg-blue">
          <div className="box signin">
            <h2>Já tem uma conta?</h2>
            <button className="signin-button" onClick={signIn}>
              Entre
            </button>
          </div>
          <div className="box signup">
            <h2>Ainda não tem uma conta?</h2>
            <button className="signup-button" onClick={signUp}>
              Cadastre-se
            </button>
          </div>
        </div>
        <div className={isRegister ? "form-box register" : "form-box login"}>
          <div className="form signin-form">
            <form>
              <h3>Acesse sua conta</h3>
              <input type="text" placeholder="E-mail" />
              <input type="password" placeholder="Senha" />
              <input type="submit" value="Entrar" />
              <a href="#" className="forgot">
                Esqueceu sua senha?
              </a>
            </form>
          </div>
          <div className="form signup-form">
            <form>
              <h3>Faça seu cadastro</h3>
              <input type="text" placeholder="Nome" />
              <input type="text" placeholder="E-mail" />
              <input type="password" placeholder="Senha" />
              <input type="password" placeholder="Confirme a Senha" />
              <input type="submit" value="Cadastrar" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
