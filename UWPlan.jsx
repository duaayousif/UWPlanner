

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
        <div className="container">
          <div className="form-container">
            <div className="form-row">
              <div className="well">
                <h2>Step 1:</h2>
                <h3>Please tell us a bit about your company</h3>
              </div>
              <div>
                <div className="progress">
                  <div className="progress-bar active" role="progressbar" aria-valuemin="0" aria-valuemax="100" >
                  </div>
                </div>
              </div>
              <div className=" well currentStep">
              </div>
            </div>
          </div>
        </div>

      )
    },
  })
