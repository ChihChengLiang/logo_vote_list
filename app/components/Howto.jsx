var React = require('react');
var {Link} = require('react-router');

var Howto = (props) => {
  return (
    <div className="columns medium-10 large-6 small-centered">
      <p>How to vote</p>
      <ul>
        <li>
          <a href="https://medium.com/taipei-ethereum-meetup/%E4%B8%80%E8%B5%B7%E5%8F%83%E8%88%87taipei-ethereum-meetup%E7%9A%84logo%E6%8A%95%E7%A5%A8%E5%90%A7-%E4%B8%80-%E8%AA%AA%E6%98%8E-fa997b8ad5f7" target="_blank">一起參與 Taipei Ethereum meetup 的 Logo投票吧！(一, 說明)</a>
        </li>
        <li>
          <a href="https://medium.com/taipei-ethereum-meetup/%E4%B8%80%E8%B5%B7%E5%8F%83%E8%88%87taipei-ethereum-meetup%E7%9A%84logo%E6%8A%95%E7%A5%A8%E5%90%A7-%E4%BA%8C-%E9%83%A8%E7%BD%B2%E6%83%85%E6%B3%81-212098a048f3" target="_blank">一起參與Taipei Ethereum meetup的Logo投票吧！(二, 部署情況)</a>
        </li>
        <li>
          <a href="https://medium.com/taipei-ethereum-meetup/%E4%B8%80%E8%B5%B7%E5%8F%83%E8%88%87taipei-ethereum-meetup%E7%9A%84logo%E6%8A%95%E7%A5%A8%E5%90%A7-%E4%B8%89-%E5%8F%96%E7%A5%A8-b091ebcf53da" target="_blank">一起參與 Taipei Ethereum meetup 的 Logo投票吧！(三, 取票)</a>
        </li>
      </ul>
    </div>
  )
};

module.exports = Howto;
