export async function login(authDetail) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" }, // Fixed "content-Type"
        body: JSON.stringify(authDetail)
    };
    const response = await fetch("http://localhost:8000/login", requestOptions);
    if (!response.ok) {
        throw { message: response.statusText, status: response.status }; //eslint-disable-line
    }
    const data = await response.json();

    if (data.accessToken) {
        sessionStorage.setItem("token", JSON.stringify(data.accessToken));
        sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
    }

    return data;
}

export async function register(authDetail) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" }, // Fixed "content-Type"
        body: JSON.stringify(authDetail)
    };
    const response = await fetch("http://localhost:8000/register", requestOptions);
    if (!response.ok) {
        throw { message: response.statusText, status: response.status }; //eslint-disable-line
    }
    const data = await response.json();

    if (data.accessToken) {
        sessionStorage.setItem("token", JSON.stringify(data.accessToken));
        sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
    }

    return data;
}

export function logout() {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("cbid");
}
