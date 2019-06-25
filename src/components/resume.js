import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="../portrait.png"
                alt="portrait"
                style={{height: '200px'}}
                />
            </div>

            {/* Personal Details */}
            <h2 style={{paddingTop: '2em'}}>Camellia Hua</h2>
            <h4 style={{color: 'grey'}}>Software Developer</h4>
            <hr style={{borderTop: '3px solid #654ea3', width: '50%'}}/>
            <p>Perhaps the best way to help a child explore, express, understand emotions, problems, problem-solving, habits, and much more is via stories. Be it a quick bedtime tale or a grandma fable, each story helps a child enter a completely different magical and imaginative world that has no boundaries.</p>
            <hr style={{borderTop: '3px solid #654ea3', width: '50%'}}/>
            <h5>Address</h5>
            <p>65 E Liberty St, Unit 1717</p>
            <h5>Phone</h5>
            <p>(519)781-3003</p>
            <h5>Email</h5>
            <p>camelliahua</p>
            <h5>Web</h5>
            <p>camelliahua.com</p>
            <hr style={{borderTop: '3px solid #654ea3', width: '50%'}}/>
          </Cell>

          {/* Resume Content */}
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear = {2011}
              endYear = {2015}
              schoolName = "University of Waterloo"
              schoolDescription = "Perhaps the best way to help a child explore, express, understand emotions, problems, problem-solving, habits, and much more is via stories. Be it a quick bedtime tale or a grandma fable, each story helps a child enter a completely different magical and imaginative world that has no boundaries."
              />
            <Education
              startYear = {2016}
              endYear = {2019}
              schoolName = "Ucademy"
              schoolDescription = "Perhaps the best way to help a child explore, express, understand emotions, problems, problem-solving, habits, and much more is via stories. Be it a quick bedtime tale or a grandma fable, each story helps a child enter a completely different magical and imaginative world that has no boundaries."
              />
            <hr style={{borderTop: '3px solid #eaafc8'}}/>

            <h2>Experience</h2>
            <Experience
              startYear = {2014}
              endYear = {2014}
              jobName = "Web Developer"
              jobDescription = "Perhaps the best way to help a child explore, express, understand emotions, problems, problem-solving, habits, and much more is via stories. Be it a quick bedtime tale or a grandma fable, each story helps a child enter a completely different magical and imaginative world that has no boundaries."
              />
            <Experience
              startYear = {2016}
              endYear = {2017}
              jobName = "Operations Analyst"
              jobDescription = "Perhaps the best way to help a child explore, express, understand emotions, problems, problem-solving, habits, and much more is via stories. Be it a quick bedtime tale or a grandma fable, each story helps a child enter a completely different magical and imaginative world that has no boundaries."
              />
            <Experience
              startYear = {2014}
              endYear = {2014}
              jobName = "Software Developer"
              jobDescription = "Perhaps the best way to help a child explore, express, understand emotions, problems, problem-solving, habits, and much more is via stories. Be it a quick bedtime tale or a grandma fable, each story helps a child enter a completely different magical and imaginative world that has no boundaries."
              />
            <hr style={{borderTop: '3px solid #eaafc8'}}/>

            <h2>Skills</h2>
            <Skills
              skill = "PHP"
              progress = {100}
              />
            <Skills
              skill = "Java"
              progress = {90}
              />
            <Skills
              skill = "C/C++"
              progress = {80}
              />
            <Skills
              skill = "SQL"
              progress = {70}
              />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
