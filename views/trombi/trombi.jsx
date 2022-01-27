var React = require('react');

const { get } = require('request');
function Trombi(props) {

  return (<div class="card">
    {props.data.map(((item) => (
      <div key={item.id} className="post">
          <div className="show">
            <h3>{item.lastName} - {item.id}</h3>
            <p>{item.firstName}</p> <br />
            <img className="img" src={item.pictureUrl} alt='new' height={120} width={125} />
          </div>
          <div className="hide">
            <p>{item.mail}</p>
            <p>{item.phone}</p>
            {props.isAdmin ? <button className="btnx"> <a href={"index/" + item.id}>modify</a> </button> : <p></p>}
            {props.isAdmin ?  <button className="btnx"> <a href={"index/dl/" + item.id}>delete</a> </button>: <p></p>}
          </div>
      </div>
    )))}

  </div>)

}

module.exports = Trombi;




