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
        return(
          <div className="dropdown">
          <h4> {this.props.dropdownText} </h4>
          <button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {this.state.chosenfaculty}
          <span className="caret"></span>
          </button>
         <ul className="dropdown-menu" aria-labelledby="dLabel">
            {faculties.map(function(faculty){
               return <li onClick={this.handleFaculty.bind(this,faculty)}><a href="#">{faculty}</a></li>}.bind(this))}
          </ul>
          </div>
        )}
     ,
})
    


var CreatePageApp = React.createClass({
  getInitialState: function(){
    return{
      data: ""
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
        <FacultyDropdown dropdownText="Select your faculty"/>
        </div>

      )
    },
  })
