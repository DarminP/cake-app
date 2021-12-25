import React from "react";
import Header from "./header";
import Footer from "./footer";
import "../cssFiles/form.css"

class NewOrder extends React.Component{
    constructor(props) {
        super(props);
        this.state = {design: 'choosedesign'};
        this.state = {taste: 'choosetaste'};
        this.state = {fullname: "", email:"", adress:"", phonenumber:""};
        this.state = {size:""};
        this.state = {message:""};
        
        this.handleChangeInputs = this.handleChangeInputs.bind(this);
        this.handleChangeDesign = this.handleChangeDesign.bind(this);
        this.handleChangeTaste = this.handleChangeTaste.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSize = this.handleSize.bind(this);
        this.handleMessage = this.handleMessage.bind(this);
    }
        
    handleChangeInputs(event, field) {

        this.setState({ [field]: event.target.value });
    }

    handleChangeDesign(event) {
        this.setState({design: event.target.value});
    
    }
    handleChangeTaste(event) {
        this.setState({taste: event.target.value});
    }
    handleSize(event) {
        this.setState({size: event.target.value});
        // alert(this.state.size);
    }
    handleMessage(event) {
        this.setState({message: event.target.value});
        console.log(this.state.message);
    }

    handleSubmit(event) {
        alert(' du har valt: ' + 
        this.state.design + "\n" +
        " smak: " + 
        this.state.taste + "\n" +
        " Ditt Namn: " + 
        this.state.fullname + "\n" +
        " Email: " + 
        this.state.email + "\n" +
        " Din Adress: " + 
        this.state.adress + "\n" +
        " Tel nr: " +
        this.state.phonenumber + "\n" +
        " storlek på din tårta är: " +
        this.state.size + "\n" + 
        " Meddelande till Aida: " +
        this.state.message
        );

        event.preventDefault();
    }
   
    
    render(){
        return(
            <div>
                <Header/>
                <div className="formContainer">
                <form className="newForm" on onSubmit={this.handleSubmit}>
                <h2 className="newOrderTitle">Beställ tårtan som passar dig!</h2>
                <div className="inputs">
                <label>
                Skriv ditt namn
                    <input name="fullname" type="text" value={this.state.inputs} onChange={(event) => this.handleChangeInputs(event, "fullname")}></input>
                </label>
                <label>
                E-mail
                    <input name="email" type="email" value={this.state.inputs} onChange={(event) => this.handleChangeInputs(event, "email")}></input>
                </label>
                <label>
                Hemadress
                    <input name="adress" type="text" value={this.state.inputs} onChange={(event) => this.handleChangeInputs(event, "adress")}></input>
                </label>
                <label>
                Telefonnummer
                    <input name="phonenumber" type="number" value={this.state.inputs} onChange={(event) => this.handleChangeInputs(event, "phonenumber")}></input>
                </label>
                <label>
                Välj design
                <select value={this.state.design} onChange={this.handleChangeDesign}>
                    <option value="choosedesign">--Välj design för din tårta--</option>
                    <option value="Enkel Design">Enkel Design</option>
                    <option value="Avancerat Design">Avancerat Design</option>
                    <option value="Super Lyx Design">Super-Lyx Design</option>
                </select>
                </label>
                <label>
                Välj smak
                <select value={this.state.taste} onChange={this.handleChangeTaste}>
                    <option value="choosetaste">--Välj smak för din tårta--</option>
                    <option value="chocholad">Chocholad Smak</option>
                    <option value="vanilj">Vanilj Smak</option>
                    <option value="redvelvet">Red Velvet</option>
                </select>
                </label>
                <h2 className="newOrderSubTitle">Valj storlek på din tårta</h2>
                <div className="radioButtonArea">
                <label>
                10 bitar
                <input type="radio" value="10 bitar" checked={this.state.size === "10 bitar"}  onChange={this.handleSize}/>
                </label>
                <label>
                15 bitar
                <input type="radio" value="15 bitar" checked={this.state.size === "15 bitar"}   onChange={this.handleSize} />
                </label>
                <label>
                20 bitar
                <input type="radio" value="20 bitar" checked={this.state.size === "20 bitar"}  onChange={this.handleSize} />
                </label>
                </div>
                <label className="messageLabel">
                Berätta gärna om övriga önskemål för din tårta
                <textarea className="messageAida" name="message" type="textarea" onChange={this.handleMessage}/>
                </label>
                <button className="newOrderButton">Submit</button>  
                </div>
                </form>
                </div>
                <p>{this.state.size}</p>
                <Footer />
            </div>
        )
    }
}
export default NewOrder;
                
                
                
    
