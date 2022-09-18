//з jsonplaceholder отримати всіх юзерів в компоненту Users.js
// відобразити кожного інформацію (id,name) з кожного юзера (компонента User)
// Зробити кнопку вибора юзера, при натисканні на яку в Users.js ви покажете детальну інфомацію
// про користувача(довільно обрану інформацію
export default function  User (props) {
    let {item: user, lift} = props;
    return (<div>
        <h2>{user.id} - {user.name}</h2>
        <p>{user.email}</p>

        <button onClick={ () => {
            lift(user);
        }}> click </button>
    </div>)
}