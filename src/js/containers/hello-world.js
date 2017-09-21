import { connect } from 'react-redux';
import HelloWorld from '../components/hello-world';
import { changeText } from '../actions';

const mapStateToProps = state => {
  return {
    text: state.text
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeText: text => {
      dispatch(changeText(text))
    }
  }
};

const ComponentHelloWorld = connect (
  mapStateToProps,
  mapDispatchToProps
)(HelloWorld);

export default ComponentHelloWorld;