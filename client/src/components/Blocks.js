import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Block from './Block'

class Blocks extends Component {
  state = { blocks: [] }

  componentDidMount() {
    fetch(`${document.location.origin}/api/blocks`)
      .then((response) => response.json())
      
      .then((json) => this.setState({ blocks: json }))          
  }  

  render() {
    // sort blocks by most recently added
    //
    // this.state.blocks.sort((a, b) => {
    //   var c = new Date(a.timestamp)
    //   var d = new Date(b.timestamp)
    //   return d-c
    // })
    console.log('this.state', this.state)    
    return (
      <div>
        <div>
          <Link to='/'>Home</Link>
        </div>
        <br />
        <h3>Blocks</h3>
        {          
          this.state.blocks.map((block) => {
          console.log(block.timestamp)
          return (
          <Block key={block.hash} block={block}/>
          )
        })}
      </div>
    )
  }
}

export default Blocks
