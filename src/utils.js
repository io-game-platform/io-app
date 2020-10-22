
const server = "http://localhost:3000";

exports.apiFetch = async (route) => {
    try {
        await fetch(server.concat(route))
            .then(res => {
                return res.json();
            });
    } catch (e) {
        console.error(e.message);
    }
}