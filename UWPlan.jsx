
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
            <div class="dropdown">
                  <h3> Select your Major </h3>
                 <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown"    aria-haspopup="true" aria-expanded="true">
                 Dropdown
                 <span class="caret"></span>
                 </button>
               <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                 <li class="dropdown-header">Faculty of Applied Health Science</li>
                 <li><a href="#">Health Promotion</a></li>
                 <li><a href="#">Health Studies</a></li>
                 <li><a href="#">Kinesiology</a></li>
                 <li><a href="#">Recreation and Leisure Studies</a></li>
                 <li><a href="#">Recreation and Sport Business</a></li>
                 <li><a href="#">Therapeutic Recreation</a></li>
                 <li><a href="#">Kinesiology</a></li>
                 <li><a href="#">Tourism and Parks Management</a></li>
                 <li class="dropdown-header">Faculty of Arts</li>
                 <li><a href="#">Accounting and Financial Management</a></li>
                 <li><a href="#">Anthropology</a></li>
                 <li><a href="#">Classical Studies</a></li>
                 // computing and financial management
                 <li><a href="#">Drama</a></li>
                 <li><a href="#">Economics</a></li>
                 <li><a href="#">English</a></li>
                 <li><a href="#">Fine Arts</a></li>
                 <li><a href="#">French</a></li>
                 <li><a href="#">German</a></li>
                 <li><a href="#">Global Business and Digital Arts</a></li>
                 <li><a href="#">History</a></li>
                 <li><a href="#">Honours Arts</a></li>
                 <li><a href="#">Honours Arts and Business</a></li>
                 <li><a href="#">Independent Studies</a></li>
                 <li><a href="#">Legal Studies</a></li>
                 <li><a href="#">Liberal Studies</a></li>
                 <li><a href="#">Medieval Studies</a></li>
                 <li><a href="#">Music</a></li>
                 <li><a href="#">Peace and Conflict Studies</a></li>
                 <li><a href="#">Philosophy</a></li>
                 <li><a href="#">Political Science</a></li>
                 <li><a href="#">Psychology</a></li>
                 <li><a href="#">Religious Studies</a></li>
                 <li><a href="#">Russian and East European Studies</a></li>
                 <li><a href="#">Sexuality, Marriage, and Family Studies</a></li>
                 <li><a href="#">Social Development Studies</a></li>
                 <li><a href="#">Sociology</a></li>
                 <li><a href="#">Spanish</a></li>
                 <li><a href="#">Speech Communication</a></li>
                 <li><a href="#">Women's Studies</a></li>
                 <li><a href="#">Kinesiology</a></li>
                 
               </ul>
            </div> 
        </div>

      )
    },
  })
