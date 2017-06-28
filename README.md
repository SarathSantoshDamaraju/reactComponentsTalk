# Siblings Communication in React

Let's discuss the Requirement, My app has a child component which has to communicate with its sibling component. So it must happen through Parent with Callback method from parent to one child which will be passed to other child as props. Simple, isnt it?

# Data Flow



# Flow
Req: **Child1** has an input field, on typing that value must be sent to **child** component via **Parent**

## Parent Component

First **define a Callback function** in Parent and **send it as props to Child1**

```constructor(){
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



