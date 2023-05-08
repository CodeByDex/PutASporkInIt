function getCookieValue(cookieName) {
    const cookies = {}
    document.cookie.split("; ").map(x => {
        const cookie = x.split("=");
        cookies[[cookie[0]]] = cookie[1];
        return { [cookie[0]]: cookie[1] }
    });

    return cookies[cookieName];
}