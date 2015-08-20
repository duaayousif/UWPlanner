

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
          
        <div className="container containerwidth">
          <div className="headerback">
             <h2> UW Plan </h2>
          </div>
        </div>

      )
    },
  })
