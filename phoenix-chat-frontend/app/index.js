import React from "react"
import ReactDOM from "react-dom"

class HelloWorld extends React.Component {
  render() {
    return (<div>Hello World!</div>)
  }
}

ReactDom.render(
  <HelloWorld />,
  document.getElementById("root")
)
