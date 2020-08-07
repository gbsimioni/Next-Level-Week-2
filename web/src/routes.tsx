import React from 'react';
import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';
import { BrowserRouter as Router, Route } from 'react-router-dom'



function Routes() {
    return(
        <Router>
            <Route path="/" exact component={Landing}/>
            <Route path="/study" component={TeacherList}/>
            <Route path="/give-classes" component={TeacherForm}/>
        </Router>
    );
}

export default Routes; 
