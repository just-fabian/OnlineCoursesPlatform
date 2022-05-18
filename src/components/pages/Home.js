import React, { useEffect } from 'react'
import Banner from '../organism/Banner'
import { connect } from "react-redux"
import store from '../../redux/store';
import { getAllPosts } from '../../redux/actionCreators';
import Publication from '../organism/Publication';

const Home = ({ posts }) => {

  useEffect(() => {
    store.dispatch(getAllPosts())
  }, [])

  return (
    <>
      <Banner
        color="dark-color"
        image="https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2018-04/office-tech.jpg?itok=0L55-FRs"
        title="Welcome to the most incredible experience in online education. Start learning today"
        subtitle="Our team has developed this platform with you in mind. We know you are looking for quality content. Here you find it"
        home
        poster="https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-07/EspecialidadEdicionAudioVisual.png"
      />
      <main className="ed-grid m-grid-3">
        <div className="l-section m-cols-2">
          <h2>Last</h2>
          {
            posts ?
            <div>
              { 
                posts.map(p =>
                <Publication
                  title={p.title}
                  author={p.author}
                  fecha={p.fecha}
                  content={p.content}
                  key={p.id}
                />
              )
              }
            </div> :
            <p>No publications</p>
          }
        </div>
        <div>
          <h3> Categories List </h3>
          <ul className="data-list">
            <li><span>React.js</span></li>
            <li><span>React native</span></li>
            <li><span>Angular</span></li>
            <li><span>Vue.js</span></li>
            <li><span>HTML</span></li>
            <li><span>CSS</span></li>
          </ul>
        </div>
      </main>
    </>
  )
}

const mapStateToProps = state => ({
  posts: state.postReducer.posts
})

export default connect(mapStateToProps, {})(Home)
