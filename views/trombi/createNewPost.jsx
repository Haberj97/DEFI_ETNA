var React = require('react');

function CreateNewPost() {

    return (
        <form method="POST" action="/index/create">
            <input name="firstName" placeholder="First Name" required />
            <input name="lastName" placeholder="Last name" required />


            {/* <input name="service" placeholder="Service" required /> */}
            <select v-model="selected" name="service" defaultValue='test3'>
                <option value="test1">test1</option>
                <option value="test2">test2</option>
                <option value="test3">test3</option>
            </select>

            <input name="pictureUrl" type="text" placeholder="Login" required />
            <input name="mail" type="email" placeholder="Email" required />
            <input type="tel" pattern="[+]{1}[0-9]{2}[0-9]{9}" name="phone" placeholder="Phone Number" required />
            <textarea name="hrNote" placeholder="RH note" required />
            <button type="submit">button</button>
        </form>)

}
module.exports = CreateNewPost;