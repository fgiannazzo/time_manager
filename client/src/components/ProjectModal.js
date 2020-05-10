import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

export default class ProjectModal extends Component {
  constructor(props) {
    super(props);
    this.state = { projectName: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }
  handleChange(evt) {
    this.setState({ projectName: evt.target.value });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.setState({
      projectName: this.state.projectName
    });
    this.props.addProject(this.state.projectName);
  }
  handleHide() {
    this.props.toggleModal();
  }
  render() {
    return (
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={this.props.show}
        onHide={this.handleHide}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Project
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Project Name</label>
              <input
                className="form-control"
                id="projectName"
                autoFocus
                value={this.state.projectName}
                onChange={this.handleChange}
              />
              <small id="emailHelp" className="form-text text-muted">
                Short names are best.
              </small>
              <div className="text-right">
                <button
                  className="btn btn-secondary mr-2"
                  onClick={this.props.toggleModal}
                >
                  Cancel
                </button>
                <button className="btn btn-info" type="submit">
                  Add +
                </button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    );
  }
}
