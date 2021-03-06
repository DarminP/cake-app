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
        // this.handleOpenModal = this.handleOpenModal.bind(this);
        // this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    // MODAL
    handleOpenModal = () => {
        this.setState({ showModal: true });
      }
      
      handleCloseModal = () => {
        this.setState({ showModal: false });
      }    
    // End MODAL

        
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
            alert('Mail har skickats till Aida')
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
                <h2 className="subtitles">Best??llning</h2> 
                <div className="formContainer">
                <h2 className="newOrderTitle">Best??ll t??rtan som passar dig!</h2>
                <div className="formBackground">
                
                </div>
                <form className="newForm" onSubmit={this.handleSubmit}>
                <img className="formBackground" src={Baking} alt="Form"/>
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
                <label className="select-label">
                V??lj design
                <select value={this.state.design} onChange={this.handleChangeDesign}>
                    <option value="chooseDesign">--V??lj design f??r din t??rta--</option>
                    <option value="Enkel Design">Enkel Design</option>
                    <option value="Avancerat Design">Avancerat Design</option>
                    <option value="Super Lyx Design">Super-Lyx Design</option>
                </select>
                </label>
                <label className="select-label">
                V??lj smak
                <select value={this.state.taste} onChange={this.handleChangeTaste}>
                    <option value="choosetaste">--V??lj smak f??r din t??rta--</option>
                    <option value="chocholad">Chocholad Smak</option>
                    <option value="vanilj">Vanilj Smak</option>
                    <option value="redvelvet">Red Velvet</option>
                </select>
                </label>
                <h2 className="newOrderSubTitle">Valj storlek p?? din t??rta</h2>
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
                Ber??tta g??rna om ??vriga ??nskem??l f??r din t??rta
                <textarea className="messageAida" name="message" type="textarea" onChange={this.handleMessage}/>
                </label>
                <button className="newOrderButton">Se din order</button>               
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
               <div className="finishedOrder">
               <p>{`Ditt namn: ${this.state.fullname}`}</p>
               <p>{`Email: ${this.state.email}`}</p>
               <p>{`Hemadress: ${this.state.adress}`}</p>
               <p>{`Telefonnummer: ${this.state.phonenumber}`}</p>
               <p>{`??nskad design: ${this.state.design}`}</p>
               <p>{`??nskad smak: ${this.state.taste}`}</p>
               <p>{`??nskad storlek: ${this.state.value}`}</p>
               <p>{`Ovriga ??nskem??l: ${this.state.message}`}</p>
               </div>
               <div className="buttonArea">
               <button className="newOrderButton" onClick={this.handleCloseModal}>Tillbaka</button>
               <button className="newOrderButton" onClick={this.handleSendMail} >Skicka din order</button>              
               </div>
             </Modal>  
            <Footer />
            </div>
            </div>
        )
    }
}
export default NewOrder;
                