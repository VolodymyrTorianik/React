
import { Component} from 'react'

export class Header extends Component {
    render () {
        return (
            <nav>
            <div>Logo</div>
            <div className="navigation">
                <div className="item">Home</div>
                <div className="item">About</div>
                <div className="item">FAQ</div>
                <div className="item">Contacts</div>
            </div>
            <button id="btn-top">More Information</button>
        </nav>
        )
        
    }
}