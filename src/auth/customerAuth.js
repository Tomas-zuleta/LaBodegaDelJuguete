const USERS_KEY = "la-bodega-clientes";
const SESSION_KEY = "la-bodega-cliente-sesion";

function readUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  } catch {
    return [];
  }
}

export function getCustomerSession() {
  try {
    return JSON.parse(sessionStorage.getItem(SESSION_KEY)) || null;
  } catch {
    return null;
  }
}

export function registerCustomer({ name, email, password }) {
  const normalizedEmail = email.trim().toLowerCase();
  const users = readUsers();

  if (users.some((user) => user.email === normalizedEmail)) {
    return { ok: false, error: "Ya existe una cuenta con ese correo." };
  }

  const user = { name: name.trim(), email: normalizedEmail, password };
  localStorage.setItem(USERS_KEY, JSON.stringify([...users, user]));
  sessionStorage.setItem(SESSION_KEY, JSON.stringify({ name: user.name, email: user.email }));

  return { ok: true, user: { name: user.name, email: user.email } };
}

export function loginCustomer({ email, password }) {
  const normalizedEmail = email.trim().toLowerCase();
  const user = readUsers().find((item) => item.email === normalizedEmail && item.password === password);

  if (!user) {
    return { ok: false, error: "El correo o la contraseña no son correctos." };
  }

  const session = { name: user.name, email: user.email };
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
  return { ok: true, user: session };
}

export function logoutCustomer() {
  sessionStorage.removeItem(SESSION_KEY);
}
