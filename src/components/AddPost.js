import React from "react";
class AddPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      inputvalueTitle: "",
      inputvaluedesc: "",
      selectedfile:null,
    };
  }
  onChangeInput = (e) => {
    this.setState({ inputvalueTitle: e.target.value });
  };
  onChangeInputdesc = (e) => {
    this.setState({ inputvaluedesc: e.target.value });
  };
  

  onCreatePost = () => {
    let PostInfo = {
      Title: this.refs.Title.value,
      Description: this.refs.Description.value,
      Picture: this.state.selectedfile,

    };

    this.setState({ inputvalueTitle: "" });
    this.setState({ inputvaluedesc: "" });

    fetch("https://localhost:44381/api/Posts", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(PostInfo),
    })
      .then((r) => r.json())
      .then((res) => {
        if (res) {
          this.setState({ message: "Post has sent" });
          window.location.reload();

        }
      });
  };
  

  render() {
    return (
      <div className="newPosteCreate">
        <p>
          <label>
            Title :{" "}
            <input
              type="text"
              value={this.state.inputvalueTitle}
              ref="Title"
              id="Title"
              onChange={this.onChangeInput}
              required
              onFocus={(this.value = "")}
            ></input>
          </label>
        </p>
        <p>
          <label className="label2">
            Description :{" "}
            <input
              type="text"
              ref="Description"
              value={this.state.inputvaluedesc}
              onChange={this.onChangeInputdesc}
              required
            ></input>
          </label>
        </p>
        <p>
          
        </p>
        <button className="createButton" onClick={this.onCreatePost}>Create</button>
        <p>{this.state.message}</p>
      </div>
    );
  }
}
export default AddPost;
