
const server = "http://localhost:3000";

const apiFetch = async (route) => {
    try {
        await fetch(server.concat(route))
            .then(res => {
                return res.json();
            });
    } catch (e) {
        console.error(e.message);
    }

}

module.exports = {
    apiFetch
}