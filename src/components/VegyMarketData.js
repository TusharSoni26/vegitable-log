import { Component } from "react";
import "./vegy.css"

class VegyMarketData extends Component {
    render() {
        return (
            <div className={this.props.cName}>
                <div className='desc-text'>
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                </div>
                <div className='image'>
                    <img alt="img-market1" src={this.props.url1} />
                    <img alt="img-market2" src={this.props.url2} />
                </div>
            </div>
        )
    }
}

export default VegyMarketData