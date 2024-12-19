# React Native: Accessing Props Before Component Mount

This repository demonstrates a common error in React Native: attempting to access props or state before a component has fully mounted.  The `bug.js` file shows the problematic code, while `bugSolution.js` provides a corrected version.

The issue arises when accessing `this.props` or `this.state` within the constructor or other lifecycle methods that execute *before* the component receives its initial props or the state is properly initialized.  This leads to errors like `Cannot read property '...' of undefined`.

The solution involves performing prop or state-dependent operations within `componentDidMount` which guarantees that the component has mounted and received its props. 