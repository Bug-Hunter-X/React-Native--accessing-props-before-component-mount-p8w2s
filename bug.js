This error occurs when you try to access a component's state or props before it has mounted.  This often happens inside the constructor or other lifecycle methods that run before `componentDidMount`.  The following code demonstrates the problem: 

```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.someData // Error: Cannot read property 'someData' of undefined 
    };
  }

  render() {
    return (
      <View>
        <Text>{this.state.data}</Text>
      </View>
    );
  }
}
```

The `this.props.someData` access is attempted before the component receives its props. 