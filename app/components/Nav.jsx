var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
    render: function () {
        return (
            <div className="top-bar bottom-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">Taipei Ethereum</li>
                        <li>
                            <Link to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>LogoVote</Link>
                        </li>
                        <li>
                            <Link to="/howto" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Howto</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
});

module.exports = Nav;
