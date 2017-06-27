# Parent to Child Communication usings Props

Communication is necessary in any application and the methods may vary based on the technology that we use. In ReactJs ,**Props** are way of passing the values between parent and child (only). You can think them as a channel from parent to child to  carry data and beware as they are immutable (unchangable). 

> It is always suggestable to use the state to set the props value in react. 

# Code
 
I have a form in Parent component which should send the submitted value to the Child to render image. And I use **state** to manipulate props.

## Parent Component 

```
import App from './App';
// imports ...

class Index extends React.Component {

  constructor() {
    super();
    this.state = {
      url : "",
      send: false
    }
  this.sendUrl = this.sendUrl.bind(this);
  this.getUrl = this.getUrl.bind(this);
}

   getUrl(event) {
    this.setState({
      url : event.target.value
    });
   }

    sendUrl(event) {
      event.preventDefault();
    this.setState({
      send : true
    });
   }

   render(){
     return(
       <form onSubmit={this.sendUrl}>
       <input onChange={this.getUrl} placeholder="Enter any Image URL"/>
       <input type="submit"/>
       {this.state.send ? <App url={this.state.url}/> : null }
      </form>
     );
   }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);

```

**getUrl** will trigger if url is entered in text-field and will set the state variable **this.state.name** to the input value.

**sendUrl** will be called on submitting the form which will update the state variable **this.state.send** to true which will call child component **<App />**. And props are passed to child as **url** with value **{this.state.name}**


## Child Component

```
class App extends Component {

  render() {
    return (
      <div className="App">
      <img src={this.props.url} alt="loaded image"/>
      </div>
    );
  }
}

export default App;
```

Child component will look for props named **url** and will load it into **src** to display the image. 
