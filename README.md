# Siblings Communication in React

Let's discuss the Requirement, My app has a child component which has to communicate with its sibling component. So it must happen through Parent with Callback method from parent to one child which will be passed to other child as props. Simple, isnt it?

# Data Flow



# Flow
Req: **Child1** has an input field, on typing that value must be sent to **child** component via **Parent**

## Parent Component

First **define a Callback function** in Parent and **send it as props to Child1**

```
constructor(){
  super();
  this.state= {
    data : ""
  }
}

formChild1(params) {
  this.setState({
    data : params
  })
}

```
I have set a state variable **data** and updating its value using the callback function from child **fromChild1** and sending the state value to **Child2**. 
*Why using state ? Because props are Immutable and it is always better to pass state as props.*

```
render() {
  return(
    <div>
      <p>Parent</p>
    <Child callback={this.formChild1.bind(this)} />
    <Child2 data={this.state.data} />
    </div>
  );
}

```


## Child-1

install `prop-types` because **React.PropTypes** is deprecated and React suggests you to use `prop-types`

```
npm install prop-types
```

Import prop-types in child1

```
import PropTypes from 'prop-types';
```

define child component

```
class Child1 extends Component {

getContent(event) {
this.props.callback(event.target.value);
}

    render() {
        return (
            <div>
                <p>Child One</p>
            <input type="text" onChange={this.getContent.bind(this)} placeholder="Type Something in Child One"/>
            </div>
        );
    }
}

```
**getContent** gets the input value *onChange* and will send it to parent through call back function.

**Define prop-types for Child1** :

```
Child1.protoTypes = {
callback : PropTypes.func,
}
```
We have defined a function proptype for callback function.

## Child-2

Define a simple component which renders `<p>` tag with prop value sent to it from parent.

```
class Child2 extends Component {

render() {
    return(
        <p>Child2 : {this.props.data}</p>
    );
}

}
```

That's it. We have Now established the communication channel between sibling to sibling. 
**And don't forget to import the components if you have separate files for parent, child1 and child2. For reference see the code in `/src/`**




