import React from "react";
import Header from "./header";
import Footer from "./footer";
import emailjs from "emailjs-com";
import Modal from 'react-modal';
import "../cssFiles/form.css";
import Baking from "../images/cakeForm.png";




class NewOrder extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        design: '',
        taste: '',
        fullname: "", email:"", adress:"", phonenumber:"",
        value:"",
        message:"",
        showModal: false
        };
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    // MODAL
    handleOpenModal () {
        this.setState({ showModal: true });
      }
      
      handleCloseModal () {
        this.setState({ showModal: false });
      }    
    
  
        
    handleChangeInputs = (event, field) => {

        this.setState({ [field]: event.target.value });
    }

    handleChangeDesign = event => {
        this.setState({design: event.target.value});
    }
    handleChangeTaste = event => {
        this.setState({taste: event.target.value});
    }
    handleSize = event  => {
        this.setState({value: event.target.value});
    }
    
    handleMessage = event => {
        this.setState({message: event.target.value});
    }
    
    handleSendMail = event => {
       
        event.preventDefault();

        const templateParams = {
            value: this.state.value,
            taste: this.state.taste,
            message: this.state.message,
            design:this.state.design,
            fullname: this.state.fullname,
            phonenumber: this.state.phonenumber,
            adress: this.state.adress,
            email: this.state.email
        }

        emailjs.send('service_hypns7g','template_yssusul', templateParams,'user_18gjYn5LcxH7O4Lmlc4ca')
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert(
                
                'Mail har skickats till Aida' + '\n' + '\n' +
                ' du har valt: ' + 
                this.state.design + '\n' +
                " smak: " + 
                this.state.taste +  '\n' +
                " Dit Namn: " + 
                this.state.fullname +  '\n' +
                " Email: " + 
                this.state.email +  '\n' +
                " Din Adress: " + 
                this.state.adress + '\n' +
                " Tel nr: " +
                this.state.phonenumber + '\n' +
                " storlek på din tårta är: " +
                this.state.value)
          })
          .catch((err) => {
            console.log('FAILED...', err);
          });
    };
     
    handleSubmit = event => {


        this.handleOpenModal(event);

        event.preventDefault();
    }

    render(){
        
        return(
            <div>
                <Header/>
                <div className="presentationSection">
                <h2 className="orderTitle">Beställning</h2> 
                <div className="formContainer">
                <h2 className="newOrderTitle">Beställ tårtan som passar dig!</h2>
                <div className="formBackground">
                
                </div>
                <form className="newForm" onSubmit={this.handleSubmit}>
                <img className="formBackground" src={Baking} />
                <div className="inputs">
                <label>
                Skriv ditt namn
                    <input name="fullname" type="text" value={this.state.inputs} onChange={(event) => this.handleChangeInputs(event, "fullname")}></input>
                </label>
                <label>
                E-mail
                    <input name="email" type="email"  value={this.state.inputs} onChange={(event) => this.handleChangeInputs(event, "email")}></input>
                </label>
                <label>
                Hemadress
                    <input name="adress" type="text" value={this.state.inputs} onChange={(event) => this.handleChangeInputs(event, "adress")}></input>
                </label>
                <label>
                Telefonnummer
                    <input name="phonenumber"  type="number" value={this.state.inputs} onChange={(event) => this.handleChangeInputs(event, "phonenumber")}/>
                    
                </label>
                <label>
                Välj design
                <select value={this.state.design} onChange={this.handleChangeDesign}>
                    <option value="chooseDesign">--Välj design för din tårta--</option>
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
                <input type="radio" name="size-options" value="10 bitar" checked={this.state.value === "10 bitar"}   onChange={this.handleSize}/>
                </label>
                <label>
                15 bitar
                <input type="radio" name="size-options" value="15 bitar" checked={this.state.value === "15 bitar"}   onChange={this.handleSize} />
                </label>
                <label>
                20 bitar
                <input type="radio" name="size-options" value="20 bitar" checked={this.state.value === "20 bitar"}  onChange={this.handleSize} />
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
                <Modal 
                isOpen={this.state.showModal}
                contentLabel="onRequestClose Example"
                onRequestClose={this.handleCloseModal}
                className="Modal"
                overlayClassName="Overlay"
             >
               <i className="far fa-times-circle" onClick={this.handleCloseModal}></i>
               <h2 className="modalTitle">Din order</h2>
               <p>{`Ditt namn: ${this.state.fullname}`}</p>
               <p>{`Email: ${this.state.email}`}</p>
               <p>{`Hemadress: ${this.state.adress}`}</p>
               <p>{`Telefonnummer: ${this.state.phonenumber}`}</p>
               <p>{`Önskad design: ${this.state.design}`}</p>
               <p>{`Önskad smak: ${this.state.taste}`}</p>
               <p>{`Önskad storlek: ${this.state.value}`}</p>
               <p>{`Ovriga önskemål: ${this.state.message}`}</p>
               <div className="buttonArea">
               <button className="newOrderButton" onClick={this.handleCloseModal}>Gå tillbaka</button>
               <button className="newOrderButton" onClick={this.handleSendMail} >Skicka din order till Aida</button> 
               
               </div>
             </Modal>    
            <Footer />
            </div>
            </div>
        )
    }
}
export default NewOrder;
                
                
                
    
