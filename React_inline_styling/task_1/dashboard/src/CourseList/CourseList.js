import React from 'react';
import CourseListRow from './CourseListRow';
import { arrayOf } from 'prop-types';
import CourseShape from './CourseShape';
import { StyleSheet, css } from 'aphrodite'

function CourseList({listCourses}) {
  return (
    <table className={css(styles.table)}>
      <thead>
        <CourseListRow isHeader={true} textFirstCell='Available courses'/>
        <CourseListRow isHeader={true} textFirstCell='Course name' textSecondCell='Credit'/>
      </thead>
      <tbody>
        {listCourses.length === 0 ? (
          <CourseListRow textFirstCell="No course available yet" />
          ) : 
          listCourses.map((course) => (<CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} isHeader={false}/>))
        }
      </tbody>
    </table>
  )
}

CourseList.propTypes = {
  listCourses: arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

const styles = StyleSheet.create({
  table: {
    margin: '40px auto',
	  width: '90%',
	  border: '1px solid lightgrey',
  }
})

export default CourseList;
