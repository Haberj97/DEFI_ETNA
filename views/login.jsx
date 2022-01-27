var React = require('react');
var DefaultLayout = require('./layouts/default');
var Login = require('./login/login')
function editon(props) {
  return (
    <DefaultLayout title={props.title}>
        <Login/>
     </DefaultLayout>
  );
}
 
module.exports = editon;