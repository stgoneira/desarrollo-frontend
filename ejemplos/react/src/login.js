export default function Login() {
    return (
        <form action="/login">
            <input type="email" id="email" placeholder="Email" />
            <input type="password" id="password" placeholder="contraseña" />
            <button>Ingresar</button>
        </form>
    );
}