var FacultyDropdown = React.createClass({
    getInitialState: function(){
       return{
         chosenfaculty: "Major"

       }
    },
    handleFaculty: function(faculty) {
        this.setState({chosenfaculty: faculty})
    },
    render: function() {

        var faculties = ["Applied Health        Science","Arts","Engineering","Environment","Mathematics","Science"];
        debugger;

        return(
          <div className="dropdown">
          <h4> {this.props.dropdownText} </h4>
          <button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {this.props.faculty}
          <span className="caret"></span>
          </button>
         <ul className="dropdown-menu" aria-labelledby="dLabel">

           debugger;
            {faculties.map(function(faculty){return <li onClick = {this.handleFaculty(faculty)}><a href="#">{faculty}</a></li>}).bind(this)}

            {this.props.dropDownMenu.map(function(faculty){
               return <li onClick={this.props.whenClicked.bind(this,faculty)}><a href="#">{faculty}</a></li>}.bind(this))}
          </ul>
          </div>
        )}
     ,



var CreatePageApp = React.createClass({
  getInitialState: function(){
    return{
      data: "",
      chosenfaculty: "Faculty",
      chosenProgArray: [],
      facultyArray: ["Applied Health  Science","Arts","Engineering","Environment","Mathematics","Science"]
    }
  },

  handleFaculty: function(faculty) {
        this.setState({chosenfaculty: faculty})
        this.chosenArray();
    },

    chosenFaculty: function(){
        return(
            this.state.chosenfaculty
        )
    },

    chosenArray: function(){
        if (this.state.chosenfaculty === "Major") {
            alert("Choose your faculty first");
        }
        else if (this.state.chosenfaculty === "Applied Health Sciences") {
            this.setState({chosenProgArray: ["fdsf","fdsf"]});
        }
        else if (this.state.chosenfaculty === "Arts") {
            this.setState({chosenProgArray: ["fds","fd"]});
        }
        else if (this.chosenfaculty === "Engineering") {
            this.setState({chosenProgArray: ["f"]});
        }
        else if (this.chosenfaculty === "Environment") {
            this.setState({chosenProgArray: ["e"]})
        }
        else if (this.chosenfaculty === "Mathematics") {
            this.setState({chosenProgArray: ["fs"]})
        }
        else if (this.chosenfaculty === "Science") {
            this.setState({chosenProgArray: ["ew"]})
        }
    },


  componentWillMount: function() {
  var xhr = new XMLHttpRequest();
  xhr.open('get', "https://api.uwaterloo.ca/v2/courses/CS/486.json?key=b047a012f7c27b8cabc7b750167e0f73", false);
  xhr.send();
  var data = JSON.parse(xhr.responseText);
  this.setState({ data: data });
  debugger;
  console.log(xhr.responseText);
},
    render: function(){
      return(
        <div className="container-fluid containerwidth">
          <div className="headerback">
             <h2> UW Plan </h2>
          </div>
          <div>
        <FacultyDropdown dropdownText="Select your faculty" whenClicked={this.handleFaculty} faculty={this.chosenFaculty()} dropDownMenu = {this.state.facultyArray}/>
        </div>
        <div>
        <FacultyDropdown dropdownText = "Select your program" whenClicked={this.handleFaculty} faculty={this.chosenFaculty()} dropDownMenu = {this.state.chosenProgArray} />
        </div>
</div>
      )
    },
  })
