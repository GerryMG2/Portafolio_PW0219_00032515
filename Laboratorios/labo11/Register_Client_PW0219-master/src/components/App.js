import React from "react";
import RegisterForm from "./RegisterForm";
import RegisterTable from "./RegisterTable";

//add base url
var URL = "";
var lista = [];
var indice = lista[-1].index;
fetch(url + "/students").then(function (res){
    if(res.ok){
        lista = res.json();
    }else{
        alert("problema de red");
    }
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      student_list: lista,
      id_counter: indice
    };
  }

  handleSubmit(student) {
    let options = {
      method: "POST",
      headers: {
        "Content-type": "application/Json"
      },
      body: JSON.stringify(student)
    };
    
    var url = URL + "/create";

    fetch(url, options).then(function(response) {
      if (response.ok) {
        student._id = this.state.id_counter;
        student.datetime = new Date();

        let buffer_list = this.state.student_list.slice();
        this.setState({
          student_list: buffer_list.concat([student]),
          id_counter: this.state.id_counter + 1
        });
      } else {
        alert("hubo un problema de red");
      }
    });
  }

  handleDelete(student) {
    let index = this.state.student_list.find(value => {
      return value._id === student._id;
    });

    var url = URL + "/delete/" + student.id;

    fetch(url).then(function(response) {
      if (response.ok) {
        let buffer_list = this.state.student_list.slice();
        buffer_list.splice(index, 1);
    
        this.setState({
          student_list: buffer_list
        
        });
      } else {
        alert("hubo un problema de red");
      }
    });

    
  }

  render() {
    return (
      <div
        className="container"
        style={{ marginTop: 2 + "em", marginBottom: 2 + "em" }}
      >
        <RegisterForm
          onSubmit={student => {
            this.handleSubmit(student);
          }}
        />
        <RegisterTable
          list={this.state.student_list}
          onDelete={student => this.handleDelete(student)}
        />
      </div>
    );
  }
}

export default App;
