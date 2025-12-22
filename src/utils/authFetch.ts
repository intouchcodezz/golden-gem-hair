export const authFetch = (url: string, options: any = {}) => {
    const token = localStorage.getItem("admin_token");
  
    return fetch(url, {
      ...options,
      headers: {
        ...(options.headers || {}),
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  };
  