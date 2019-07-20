class Clock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement(React.Fragment, null, React.createElement(ChildA, null), React.createElement(ChildB, null), React.createElement(ChildC, null));
  }

}
