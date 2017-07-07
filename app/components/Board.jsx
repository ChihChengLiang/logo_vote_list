var React = require('react');
var etherScan = require('etherScan');

var url = 'https://etherscan.io/address/';
var tag = '#tokentxns';
var logo1 = '0xD82ce82FBe3fc5b0429De15617604A7c6A8E0B0f';
var logo2 = '0x17DA2B4227bdfbF6c4dc39afea1E4F6e0af575B7';
var logo3 = '0x7d10CD89b7506ddA58933e54e7774b71c28F2B53';
var logo4 = '0xf010A1CF53BEe1b1eCa44F3FB6e36f1ac633Ad19';
var logo5 = '0xa245D51B2683E8e13657a6C711FE23a011391700';
var logo6 = '0x3503317F65b1cdA3d48009AB963Be13BB6960A38';


var Board = React.createClass({
    getInitialState: function () {
        return {
            vote1: 0,
            vote2: 0,
            vote3: 0,
            vote4: 0,
            vote5: 0,
            vote6: 0
        }
    },
    componentWillMount : function () {
        
        var that = this;
        etherScan.getVoteResult(logo1).then(function(vote) {
            that.setState({
                vote1: vote
            })
        });

        etherScan.getVoteResult(logo2).then(function(vote) {
            that.setState({
                vote2: vote
            })
        });

        etherScan.getVoteResult(logo3).then(function(vote) {
            that.setState({
                vote3: vote
            })
        });

        etherScan.getVoteResult(logo4).then(function(vote) {
            that.setState({
                vote4: vote
            })
        });

        etherScan.getVoteResult(logo5).then(function(vote) {
            that.setState({
                vote5: vote
            })
        });

        etherScan.getVoteResult(logo6).then(function(vote) {
            that.setState({
                vote6: vote
            })
        });

    },
    render: function () {

        return (
            <div>
            <div className="row">
                <div className="columns medium-5 large-5">
            <div className="card-info primary">
                <div className="card-info-label">
                    <div className="card-info-label-text">
                    Logo1
                    </div>
                </div>
                <div className="card-info-content">
                    <a href="https://github.com/EtherTW/LogoVote2017/issues/7" target="_blank">
                    <img src={require('../assets/img/Logo1.png')}/>
                    </a>
                    <h3></h3>
                    <h3 className="lead vote-font">Votes: {this.state.vote1}</h3>
                    <p><a href={url+logo1+tag} target="_blank">{logo1}</a></p>
                </div>
            </div>
            </div>
            <div className="columns medium-5 large-5">
            <div className="card-info primary">
                <div className="card-info-label">
                    <div className="card-info-label-text">
                    Logo2
                    </div>
                </div>
                <div className="card-info-content">
                    <a href="https://github.com/EtherTW/LogoVote2017/issues/10" target="_blank">
                    <img src={require('../assets/img/Logo2.jpg')}/>
                    </a>
                    <h3></h3>
                    <h3 className="lead vote-font">Votes: {this.state.vote2}</h3>
                    <p><a href={url+logo2+tag} target="_blank">{logo2}</a></p>
                </div>
            </div>
            </div>
            </div>

            <div className="row">
                <div className="columns medium-5 large-5">
            <div className="card-info primary">
                <div className="card-info-label">
                    <div className="card-info-label-text">
                    Logo3
                    </div>
                </div>
                <div className="card-info-content">
                    <a href="https://github.com/EtherTW/LogoVote2017/issues/11" target="_blank">
                    <img src={require('../assets/img/Logo3.jpg')}/>
                    </a>
                    <h3></h3>
                    <h3 className="lead vote-font">Votes: {this.state.vote3}</h3>
                    <p><a href={url+logo3+tag} target="_blank">{logo3}</a></p>
                </div>
            </div>
            </div>
            <div className="columns medium-5 large-5">
            <div className="card-info primary ">
                <div className="card-info-label">
                    <div className="card-info-label-text">
                    Logo4
                    </div>
                </div>
                <div className="card-info-content">
                    <a href="https://github.com/EtherTW/LogoVote2017/issues/12" target="_blank">
                    <img src={require('../assets/img/Logo4.png')}/>
                    </a>
                    <h3></h3>
                    <h3 className="lead vote-font">Votes: {this.state.vote4}</h3>
                    <p><a href={url+logo4+tag} target="_blank">{logo4}</a></p>
                </div>
            </div>
            </div>
            </div>
            <div className="row">
                <div className="columns medium-5 large-5">
            <div className="card-info primary">
                <div className="card-info-label">
                    <div className="card-info-label-text">
                    Logo5
                    </div>
                </div>
                <div className="card-info-content">
                    <a href="https://github.com/EtherTW/LogoVote2017/issues/13" target="_blank">
                    <img src={require('../assets/img/Logo5.png')}/>
                    </a>
                    <h3></h3>
                    <h3 className="lead vote-font">Votes: {this.state.vote5}</h3>
                    <p><a href={url+logo5+tag} target="_blank">{logo5}</a></p>
                </div>
            </div>
            </div>
            <div className="columns medium-5 large-5">
            <div className="card-info primary">
                <div className="card-info-label">
                    <div className="card-info-label-text">
                    Logo6
                    </div>
                </div>
                <div className="card-info-content">
                    <a href="https://github.com/EtherTW/LogoVote2017/issues/15" target="_blank">
                    <img src={require('../assets/img/Logo6.jpg')}/>
                    </a>
                    <h3></h3>
                    <h3 className="lead vote-font">Votes: {this.state.vote6}</h3>
                    <p><a href={url+logo6+tag} target="_blank">{logo6}</a></p>
                </div>
            </div>
            </div>
            </div>
            <div className="row">
            <div className="columns medium-12 large-12 small-centered">
                Vote list powered by <a href="https://etherscan.io/" target="_blank">etherscan.io</a>
            </div>
            </div>
            </div>
        )
    }
});

module.exports = Board;
