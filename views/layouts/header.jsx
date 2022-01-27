var React = require('react');
var Menu = require('../sorting/menu');
const session = require('express-session');
function Header(props) {
return (
    <header className="Header">
        <h1 className="title_header">ETNA-scope</h1>
        {/* this is the login connected by session */}
        <p className="marg_top">{props.login}</p>

        <form  method="POST" action="index/sorted">
                <label><span className="visually-hidden"></span></label>
                <select id="search" name="search">
                    <option value="">Choose a Service:</option>
                    <option value="Service pédagogique">Service pédagogique</option>
                    <option value="Service administratif">Service administratif</option>
                    <option value="Service des admissions">Service des admissions</option>
                    <option value="BLU">BLU</option>
                    <option value="Studio">Studio</option>
                    <option value="RH et Office Management">RH et Office Management</option>
                </select>
                <button type="submit">Search</button>
        </form>

        <Menu isAdmin = {props.isAdmin}/>
        

    </header>
);
}


module.exports = Header;
