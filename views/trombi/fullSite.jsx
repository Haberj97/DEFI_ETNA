var React = require('react');
var Trombi = require('./trombi');

function Site(props){ 
    return (
                <Trombi data={props.data} login={props.login} isAdmin={props.isAdmin}/>    
            )
}
module.exports = Site;