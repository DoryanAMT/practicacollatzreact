import React, { Component } from 'react'

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <ul>
            <li>
                <a href='/'>Home</a>
            </li>
            <li>
                <a href='/collatz/21'>Collatz</a>
            </li>
            <li>
                <a href='/noexisto'>Not Found</a>
            </li>
        </ul>
      </div>
    )
  }
}
