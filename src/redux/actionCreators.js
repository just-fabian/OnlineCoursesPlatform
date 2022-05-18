import { Axios } from "axios"
import { GET_ALL_COURSES, GET_ALL_POSTS, GET_ALL_SPECIALTIES, GET_ALL_TEACHERS, GET_COURSE, GET_POST, GET_FRAGMENT } from "./actions"

const API_URL = process.env.REACT_APP_API_URL

export const getAllPosts = () => dispatch => {
  Axios.get(`${API_URL}/posts`).then(
    resp => {
      return dispatch({
        type: GET_ALL_POSTS,
        posts: resp.data,
      })
    }
  )
}

export const getAllSpecialties = () => dispatch => {
  Axios.get(`${API_URL}/specialties`).then(
    resp => {
      return dispatch({
        type: GET_ALL_SPECIALTIES,
        specialties: resp.data,
      })
    }
  )
}

export const getAllTeachers = () => dispatch => {
  Axios.get(`${API_URL}/teachers`).then(
    resp => {
      return dispatch({
        type: GET_ALL_TEACHERS,
        teachers: resp.data,
      })
    }
  )
}


export const getAllCourses = () => dispatch => {
  Axios.get(`${API_URL}/courses`).then(
    resp => {
      return dispatch({
        type: GET_ALL_COURSES,
        courses: resp.data,
      })
    }
  )
}


export const getPost = id => dispatch => {
  Axios.get(`${API_URL}/posts/${id}`).then(
    resp => {
      return dispatch({
        type: GET_POST,
        post: resp.data,
      })
    }
  )
}

export const getSpecialty = id => dispatch => {
  Axios.get(`${API_URL}/specialties/${id}`).then(
    resp => {
      return dispatch({
        type: GET_POST,
        specialty: resp.data,
      })
    }
  )
}

export const getCourse = id => dispatch => {
  Axios.get(`${API_URL}/courses/${id}`).then(
    resp => {
      return dispatch({
        type: GET_COURSE,
        course: resp.data,
      })
    }
  )
}

export const getFragment = id => dispatch => {
  Axios.get(`${API_URL}/class/${id}`).then(
    resp => {
      return dispatch({
        type: GET_FRAGMENT,
        fragment: resp.data,
      })
    }
  )
}
