import React from "react";
import { connect } from "react-redux";
import DoneColumn from "./components/Columns/DoneColumn";
import InProgressColumn from "./components/Columns/InProgressColumn";
import TestingColumn from "./components/Columns/TestingColumn";
import ToDoColumn from "./components/Columns/ToDoColumn";
import TaskForm from "./components/Forms/TaskForm";

class App extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row mt-3">
            <div className="col-12 text-center mt-5">
              <h1>K Board</h1>
              <TaskForm />
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <ToDoColumn />
            <InProgressColumn />
            <TestingColumn />
            <DoneColumn />
          </div>
        </div>

        {this.props.gif ? (
          <div className="fixed-bottom text-end">
            <img src={this.props.gif} alt="Gif" width="250" />
          </div>
        ) : null}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  gif: state.gif,
});

export default connect(mapStateToProps)(App);
