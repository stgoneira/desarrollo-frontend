import {Component} from 'react';

class BotonClase extends Component {
    constructor() {
        super(); 
        this.state = {
            likes: 0 
        }
    }

    render() {
        return (
            <>
            <button
                onClick={
                    () => {
                        this.setState(
                            (state, props) => {
                                return {
                                    likes: state.likes + 1
                                }
                            }
                        )
                    }                    
                }
            >
                {this.props.texto}
            </button>
            <span>A {this.state.likes} les gusta este contenido.</span>
            </>
        )
    }
}

export default BotonClase;