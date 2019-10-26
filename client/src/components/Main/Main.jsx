import React, { Component } from 'react';
import Splash from '../Splash/Splash.jsx';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import Dashboard from '../BusinessPortal/Dashboard/Dashboard.js';
import PropTypes from "prop-types";
import { AddBusinessForm } from '../BusinessPortal/AddBusiness/AddBusinessForm/AddBusinessForm.jsx'; 
import AddBusinessPage from '../BusinessPortal/AddBusiness/AddBusinessPage/AddBusiness.jsx'

const theme = createMuiTheme({
    palette: {
        type: 'light', // 'light', 'dark', manualColor
    },
});

// render web application
class Main extends Component {
    //static props for user info 
    static propTypes = {
          user: PropTypes.shape({
          name: PropTypes.string,
          image: PropTypes.string,
          google_id: PropTypes.string,
          user_type: PropTypes.string,
          id: PropTypes.number
        })
      };
      //state 
      state = {
          //user info 
          user: {}, 
          error: null, 
          authenticated: false
      }; 

    //   because we are using cookies on mount it will check for authenticated users 
      componentDidMount() {
          //hits auth/login/success on node server 
        fetch("http://localhost:5000/auth/login/success", {
          method: "GET",
          credentials: "include",
          //cors headers
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true
          }
        })
          .then(response => {
              //if success return the response || user info 
            if (response.status === 200) return response.json();
            throw new Error("failed to authenticate user");
          })
          .then(responseJson => {
              //set authenticated to true and make the user obejct = the authenticated in user 
            this.setState({
              authenticated: true,
              user: responseJson.user
            });
          })
          .catch(error => {
              //if authentication fails 
            this.setState({
              authenticated: false,
              error: "Failed to authenticate user"
            });
          });
      }


    render() {
        const { authenticated } = this.state;
        return (
            <div className="container">
                <ThemeProvider theme={theme} >
                    {/* if authenticated render business dashbard if not render splash page */}
                    {this.state.authenticated && this.state.user[0].user_type === 'businessuser' ? (
                      <Dashboard user={this.state.user}/>
                    ) : (
                      <Splash user={this.state.user} authenticated={this.state.authenticated}/>
                    )}
                </ThemeProvider>
            </div>
        )
    }
}

export default Main;