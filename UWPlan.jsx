var FacultyDropdown = React.createClass({
    render: function() {
        return(
          <div className="dropdown">
          <h4> {this.props.dropdownText} </h4>
          <button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {this.props.faculty}
          <span className="caret"></span>
          </button>
         <ul className="dropdown-menu" aria-labelledby="dLabel">

           debugger;
            {this.props.dropDownMenu.map(function(faculty){
               return <li onClick={this.props.whenClicked.bind(this,faculty)}><a href="#">{faculty}</a></li>}.bind(this))}
          </ul>
          </div>
        )}
     ,
    })

var CreatePageApp = React.createClass({
  getInitialState: function(){
    return{
      data: "",
      chosenfaculty: "Faculty",
      chosenprogram: "Program",
      chosenProgArray: [],
      facultyArray: ["Applied Health Sciences","Arts","Engineering","Environment","Mathematics","Science"]
    }
  },

  handleFaculty: function(faculty) {
        this.setState({chosenfaculty: faculty})
        this.chosenArray(faculty);
    },
  handleProgram: function(program) {
      this.setState({chosenprogram: program});
  },
  chosenProgram: function() {
    return(
      this.state.chosenprogram
    )
  },

    chosenFaculty: function(){
        return(
            this.state.chosenfaculty
        )
    },
    
    //TODO: Get the first case working for alert box
    //TODO: Get rid of thhe debugger thing ?? 

    chosenArray: function(faculty){
        if (faculty === "Faculty") {
            alert("Choose your faculty first");
        }
        else if (faculty === "Applied Health Sciences") {
            this.setState({chosenProgArray: ["Health Studies", "Kinesiology","Public Health","Recreation and Leisure Studies","Recreation and Sport Business", "Therapeutic Recreation","Tourism Development"]});
        }
        else if (faculty === "Arts") {
            this.setState({chosenProgArray: ["Accounting and Financial Management","Anthropology","Classical Studies","Computing and Financial Management","Economics","English","Fine Arts","French","German","Global Business and Digital Arts","History","Honours Arts","Honours Arts and Business","Independent Studies","Legal Stuies","Liberal Studies","Medieval Studies","Music","Peace and Conflict Studies","Philosophy","Political Science","Psychology","Religious Studies","Russian and East European Studies","Sexuality, Marriage, and Family Studies","Social Development Studies","Sociology","Spanish","Speech Communication","Theatre and Performance","Women's Studies"]});
        }
        else if (faculty === "Engineering") {
            this.setState({chosenProgArray: ["Architecture","Biomedical Engineering","Chemical Engineering","Civil Engineering","Computer Engineering","Electrical Engineering","Environmental Engineering","Geological Engineering","Management Engineering","Mechatronics Engineering","Nanotechnology Engineering","Software Engineering","Systems Design Engineering"]});
        }
        else if (faculty === "Environment") {
            this.setState({chosenProgArray: ["Environment and Business","Environment and Resource Studies","Geography and Aviation","Geography and Environmental Management","Geomatics","International Development","Knowledge Integration","Planning"]})
        }
        else if (faculty === "Mathematics") {
            this.setState({chosenProgArray: ["Actuarial Science", "Applied Mathematics","Business Administration and Computer Science Double Degree","Business Administration and Mathematics Double Degree", "Combinatorics and Optimization","Computational Mathematics","Computer Science","Computing and Financial Management","Information Technology Management","Mathematical Economics","Mathematical Finance","Mathematical Optimization","Mathematical Physics","Mathematics","Mathematics/Business Administration","Mathematics/Chartered Professional Accounting","Mathematics/Financial Analysis and Risk Management","Mathematics Teaching","Pure Mathematics","Software Engineering","Statistics","Statistics for Health"]})
        }
        else if (faculty === "Science") {
            this.setState({chosenProgArray: ["Biochemistry","Biology","Biomedical Sciences","Biotechnology/Chartered Professional Accounting","Biotechnology/Economics","Chemistry","Earth Sciences","Environmental Science","Honours Science","Life Physics","Life Sciences","Materials and Nanosciences","Mathematical Physics","Medicinal Chemistry","Physical Sciences","Physics","Physics and Astronomy","Psychology","Science and Aviation","Science and Business"]})
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
        <FacultyDropdown dropdownText = "Select your program" whenClicked={this.handleProgram} faculty={this.chosenProgram()} dropDownMenu = {this.state.chosenProgArray} />
        </div>
</div>
      )
    },
  })
