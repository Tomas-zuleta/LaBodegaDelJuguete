import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loginCustomer, registerCustomer } from "../auth/customerAuth";

export default function CustomerAuth({ mode = "login", onAuthenticated }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isRegister = mode === "register";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage("");
    setError("");

    const result = isRegister
      ? registerCustomer({ name, email, password })
      : loginCustomer({ email, password });

    if (!result.ok) {
      setError(result.error);
      return;
    }

    onAuthenticated(result.user);

    if (isRegister) {
      setMessage("¡Registro exitoso! Ya puedes continuar con tu compra.");
      window.setTimeout(() => {
        navigate(location.state?.from || "/carrito", { replace: true });
      }, 900);
      return;
    }

    navigate(location.state?.from || "/carrito", { replace: true });
  };

  return (
    <section className="customer-auth-page">
      <div className="customer-auth-card">
        <span className="section-label">Compra segura</span>
        <h1>{isRegister ? "Crear cuenta" : "Iniciar sesión"}</h1>
        <p>
          {isRegister
            ? "Regístrate para enviar tus pedidos por WhatsApp."
            : "Inicia sesión para enviar tu pedido por WhatsApp."}
        </p>

        <form className="customer-auth-form" onSubmit={handleSubmit}>
          {isRegister && (
            <>
              <label htmlFor="customer-name">Nombre</label>
              <input
                id="customer-name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                autoComplete="name"
                required
              />
            </>
          )}

          <label htmlFor="customer-email">Correo electrónico</label>
          <input
            id="customer-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
            required
          />

          <label htmlFor="customer-password">Contraseña</label>
          <div className="customer-password-field">
            <input
              id="customer-password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              minLength="6"
              autoComplete={isRegister ? "new-password" : "current-password"}
              required
            />
            <button
              className="customer-password-toggle"
              type="button"
              onClick={() => setShowPassword((visible) => !visible)}
              aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
              title={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
            >
              {showPassword ? "◉" : "◌"}
            </button>
          </div>

          {error && <p className="customer-auth-error" role="alert">{error}</p>}
          {message && <p className="customer-auth-success" role="status">{message}</p>}

          <button className="btn customer-auth-submit" type="submit">
            {isRegister ? "Registrarme" : "Entrar"}
          </button>
        </form>

        <p className="customer-auth-switch">
          {isRegister ? "¿Ya tienes una cuenta?" : "¿Todavía no tienes una cuenta?"}{" "}
          <Link to={isRegister ? "/iniciar-sesion" : "/registrarse"} state={location.state}>
            {isRegister ? "Inicia sesión" : "Regístrate"}
          </Link>
        </p>
        <Link className="customer-auth-back" to="/">Volver a la tienda</Link>
      </div>
    </section>
  );
}
