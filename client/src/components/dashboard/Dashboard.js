import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <div style={{ height: "25vh" }} className="container halign-wrapper">
          <h4>
              <p style={{
                  
              }}>Hello {user.name.split(" ")[0]}</p>
          </h4>
          <div className="row">
           <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1px",
                marginTop: "1rem",
                  marginLeft: "10rem"
              }}
              className="btn mb2 waves-effect waves-light hoverable blue accent-3"
            >
              Add Books
            </button>
          </div>
              <div className="row">
              <button
                  style={{
                      width: "150px",
                      borderRadius: "3px",
                      letterSpacing: "1px",
                      marginTop: "1rem",
                      marginLeft: "10rem"
                  }}
                  className="btn mb-2 waves-effect waves-light hoverable blue accent-3"
              >
                  Add Books
              </button>
          </div>
        </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
