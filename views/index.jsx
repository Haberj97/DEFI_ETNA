var React = require('react');
var DefaultLayout = require('./layouts/default');
var Site = require('./trombi/fullSite')
var NewPost = require('./trombi/createNewPost');
var Header = require('./layouts/header');

function HelloMessage(props) {
  return (
    <DefaultLayout title={props.title}>
      <Header login={props.login} isAdmin={props.isAdmin} />
      <Site data={props.data} login={props.login} isAdmin={props.isAdmin}/>
      
    </DefaultLayout>
  );
}

module.exports = HelloMessage;