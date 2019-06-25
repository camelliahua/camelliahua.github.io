import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Home extends Component {
  render() {
    return(
      <div style={{with:'100%', margin: 'auto'}}>
        <Grid className="home-grid">
          <Cell col={12}>
            <img
              src="../portrait.png"
              alt="portrait"
              className="portrait-img"
              />

            <div className="banner-text">
              <h1>Software Developer</h1>

              <hr/>

              <p>Java | C/C++ | PHP | HTML/CSS | JavaScript | Bootstrap | React | SQL</p>

              <div className="social-links">

                {/* LinkedIn */}
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
              </div>

            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Home;
