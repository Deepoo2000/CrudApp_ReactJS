import React, { Component } from 'react';
import './App.css';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';

class App extends Component {

    state = {
      courses : [
        {name : "html"},
        {name : "CSS"},
        {name : "Js"}
      ] ,
      current : '',
    }

    // update course
    updateCourse = (e) => {
       e.preventDefault();
       console.log(e.target.value);

       this.setState({
        current : e.target.value
       })
    }


    // add course
    addCourse = (e) => {
      e.preventDefault();
      console.log("Course added")

      let current = this.state.current;

      if(current != ''){
        let courses = this.state.courses;

        courses.push({name : current});
        this.setState({
          courses,
          current : ''
        })
      }
      else {
        return false;
      }
    }

    // delete course
    deleteCourse = (index) => {
      let courses = this.state.courses;
      console.log("course deleted: " + index);
      courses.splice(index, 1);
      this.setState({
        courses
      })
    }


    // edit coures
    editCourse = (index, value) => {
      console.log("arrive");
      let courses = this.state.courses;
      let course = courses[index];

      console.log(course);
      course['name'] = value;

      this.setState({
        courses
      })
    }



    render(){
      const {courses} = this.state;
      // console.log(courses);
      const courseList = courses.map((course, index) => {
        return  <CourseList details = {course} 
                key = {index} 
                index = {index} 
                deleteCourse = {this.deleteCourse}
                editCourse = {this.editCourse}/>
      })

      return (
        <section className="App">
            <h2>Add Courses</h2>
            <CourseForm updateCourse = {this.updateCourse}
                        addCourse = {this.addCourse}
                        current = {this.state.current}/>
            <ul>{courseList}</ul>
        </section>
      );
    }
}

export default App;
