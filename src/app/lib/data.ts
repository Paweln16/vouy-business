import { verifySession } from "./dal";

const baseURL = process.env.BASE_URL;

export async function getProjects(cookie: string | undefined = "") {
  const { isAuth } = await verifySession();

  if (!isAuth) {
    return;
  }

  const projects = await fetch(baseURL + "/api/projects", {
    method: "GET",
    headers: {
      authorization: `${cookie}`,
    },
    cache: "force-cache",
    next: {
      revalidate: 3600,
    },
  }).then((res) => {
    return res.json();
  });
  return projects;
}

export async function getProject(cookie: string | undefined = "", id: string) {
  const { isAuth } = await verifySession();

  if (!isAuth) {
    return;
  }

  const project = await fetch(baseURL + `/api/projects/${id}`, {
    method: "GET",
    headers: {
      Authorization: `${cookie}`,
    },
    cache: "force-cache",
    next: {
      revalidate: 900,
    },
  }).then((res) => {
    return res.json();
  });
  return project;
}

export async function getProjectComments(
  cookie: string | undefined = "",
  id: string
) {
  const { isAuth } = await verifySession();

  if (!isAuth) {
    return;
  }

  const comments = await fetch(baseURL + `/api/projects/${id}/comments`, {
    method: "GET",
    headers: {
      Authorization: `${cookie}`,
    },
    cache: "force-cache",
    next: {
      revalidate: 900,
    },
  }).then((res) => {
    return res.json();
  });
  return comments;
}

export async function getTasks(cookie: string | undefined = "") {
  const { isAuth } = await verifySession();

  if (!isAuth) {
    return;
  }

  const tasks = await fetch(baseURL + "/api/tasks", {
    method: "GET",
    headers: {
      authorization: `${cookie}`,
    },
    cache: "force-cache",
    next: {
      revalidate: 3600,
    },
  }).then((res) => {
    return res.json();
  });
  return tasks;
}

export async function getInvoices(cookie: string | undefined = "") {
  const { isAuth } = await verifySession();

  if (!isAuth) {
    return;
  }

  const invoices = await fetch(baseURL + "/api/invoices", {
    method: "GET",
    headers: {
      authorization: `${cookie}`,
    },
    cache: "force-cache",
    next: {
      revalidate: 3600,
    },
  }).then((res) => {
    return res.json();
  });
  return invoices;
}

export async function getInvoice(cookie: string | undefined = "", id: string) {
  const { isAuth } = await verifySession();

  if (!isAuth) {
    return;
  }

  const invoice = await fetch(baseURL + `/api/invoices/${id}`, {
    method: "GET",
    headers: {
      authorization: `${cookie}`,
    },
  }).then((res) => {
    return res.json();
  });
  return invoice;
}

export async function getOrders(cookie: string | undefined = "") {
  const { isAuth } = await verifySession();

  if (!isAuth) {
    return;
  }

  const orders = await fetch(baseURL + "/api/orders", {
    method: "GET",
    headers: {
      authorization: `${cookie}`,
    },
    cache: "force-cache",
    next: {
      revalidate: 3600,
    },
  }).then((res) => {
    return res.json();
  });
  return orders;
}

export async function getUsers(cookie: string | undefined = "") {
  const { isAuth } = await verifySession();

  if (!isAuth) {
    return;
  }

  const users = await fetch(baseURL + "/api/users", {
    method: "GET",
    headers: {
      authorization: `${cookie}`,
    },
    cache: "force-cache",
    next: {
      revalidate: 3600,
    },
  }).then((res) => {
    return res.json();
  });
  return users;
}
