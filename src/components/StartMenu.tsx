import React, { ChangeEvent } from "react";


interface IProps {

}

interface IState {
    nameInput: string,
    codeInput: string
}
class StartMenu extends React.Component {
    state: IState
    constructor(props: IProps) {
        super(props);
        this.state = {
            nameInput: '',
            codeInput: ''
        };
    }
    
    hostClicked() {
        console.log(this.state.nameInput);
    }

    joinClicked() {
        console.log(this.state.codeInput);
    }

    nameChanged(e: ChangeEvent<HTMLInputElement>) {
        this.setState({nameInput: e.target.value})
    }

    codeChanged(e: ChangeEvent<HTMLInputElement>) {
        this.setState({codeInput: e.target.value})
    }
    
    render() {
        return (
            <div>
                Name: <input type="text" onChange={(e) => this.nameChanged(e)}></input><br/>
                Code: <input type="text" onChange={(e) => this.codeChanged(e)}></input><br/>
                <button onClick={() => this.hostClicked()}>HOST</button>
                <button onClick={() => this.joinClicked()}>JOIN</button>
            </div>
        )
    }
}

export default StartMenu;