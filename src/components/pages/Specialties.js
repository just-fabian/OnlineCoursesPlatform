import React, { useEffect } from 'react'
import Banner from '../organism/Banner'
import store from '../../redux/store'
import { getAllSpecialties } from '../../redux/actionCreators'
import { connect } from 'react-redux'
import Card from '../organism/Card';

const Specialties = ({ specialties }) => {

  useEffect(() => {
    store.dispatch(getAllSpecialties())
  }, [])

  return (
    <>
      <Banner
        color="first-color"
        image={{
          src: "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2017-11/banner-equipo.jpg",
          alt: "Banner Specialties"
        }}
        title="Specialties"
        subtitle="Dominate a full technology"
      />
      {
        specialties &&
        <main className="ed-grid m-grid-3">
          {
            specialties.map(s => (
              <Card
              path="Specialties"
              picture={s.picture}
              name={s.name}
              key={s.id}
              card={s.id}/>
            ))
          }
        </main>
      }
    </>
  )
}

const mapStateToProps = state => ({
  specialties: state.specialityReducer.specialties
})

export default connect(mapStateToProps)(Specialties)
