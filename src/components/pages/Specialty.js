import React, { useEffect} from 'react'
import store from '../../redux/store';
import { getSpecialty } from '../../redux/actionCreators';
import { connect } from "react-redux"
import Banner from '../organism/Banner'
import { Link } from "react-router-dom"

const Specialty = ({specialty}) => {

  useEffect(() => store.dispatch(getSpecialty(1)), [])

  return (
    <>
     {
       specialty &&
       <>
       <Banner
          color="dark-color"
          title={specialty.data.name}
          subtitle={specialty.data.subtitle}
          image={{
            src: "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2018-04/office-tech.jpg?itok=0L55-FRs",
            alt: specialty.data.name
          }}
          courseBanner
          poster={specialty.data.picture}
          info={specialty.data.information}
        />
        <main className="ed-grid lg-grid-10">
          <div className="lg-cols-7">
            <div className="course-features ed-grid lg-grid-3 s-border s-pxy-2 s-radius s-bg-white l-block s-shadow-bottom row-gap">
                <div>
                  <h3 className="t4">What will you learn?</h3>
                  <ul>
                    { specialty.data.abilities.map(a =>(
                      <li key={a.id}>{a.description}</li>
                      ))
                    }
                  </ul>
                </div>
                <div>
                  <h3 className="t4">Previous knowledges</h3>
                  <ul>
                    { specialty.data.knowledge.map(a =>(
                      <li key={a.id}>{a.description}</li>
                      ))
                    }
                  </ul>
                </div>
                <div>
                  <h3 className="t4">Level</h3>
                  <p>{specialty.data.level}</p>
                </div>
              </div>
            <h2>Temary</h2>
            <div className="s-border s-pxy-2 lg-pxy-4 s-radius s-bg-white l-block l-section s-shadow-bottom">
              {
                specialty.data.courses.map(cl => (
                  <div className="course-class l-section" key={cl.id}>
                    <div className="ed-grid m-grid-3">
                      <Link to="/cursos/1"><img src={cl.picture} alt={cl.name}/></Link>
                      <div className="m-cols-2">
                        <h3>{cl.name}</h3>
                        <p>{cl.information}</p>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </main>
       </>
     }
    </>
  )
}

const mapStateToProps = state => ({
  specialty: state.specialtyReducer.speciality
})

export default connect(mapStateToProps, {})(Specialty)
