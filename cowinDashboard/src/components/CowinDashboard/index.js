// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class CowinDashboard extends Component {
  state = {
    vaccinationData: [],
    cowinByAge: [],
    cowinByGender: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const options = {
      method: 'GET',
    }
    const url = 'https://apis.ccbp.in/covid-vaccination-data'
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      this.setState({
        vaccinationData: data.last_7_days_vaccination,
        cowinByAge: data.vaccination_by_age,
        cowinByGender: data.vaccination_by_gender,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  failureView = () => (
    <div className="failure-bg">
      <img
        width="60%"
        alt="failure view"
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
      />
      <h1 className="heading">Something went wrong</h1>
    </div>
  )

  loadingView = () => (
    // eslint-disable-next-line react/no-unknown-property
    <div testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderSuccessView = () => {
    const {vaccinationData, cowinByAge, cowinByGender} = this.state

    return (
      <div className="bg">
        <div className="logo-card">
          <img
            alt="website logo"
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
          />
          <h1 className="logo-title">Co-WIN</h1>
        </div>
        <h1 className="heading">CoWIN Vaccination in India</h1>
        <VaccinationCoverage vaccinationData={vaccinationData} />
        <VaccinationByGender cowinByGender={cowinByGender} />
        <VaccinationByAge cowinByAge={cowinByAge} />
      </div>
    )
  }

  renderCowinCharts = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.failureView()
      case apiStatusConstants.inProgress:
        return this.loadingView()
      default:
        return null
    }
  }

  render() {
    return <>{this.renderCowinCharts()}</>
  }
}

export default CowinDashboard
