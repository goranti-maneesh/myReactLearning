import {Component} from 'react'
import Cookies from 'js-cookie'
import {BsSearch} from 'react-icons/bs'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import JobItem from '../JobItem'
import SalaryRange from '../SalaryRange'
import EmploymentType from '../EmploymentType'
import './index.css'

const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

const apiRequest = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Jobs extends Component {
  state = {
    profile: '',
    typeOfJob: [],
    jobsList: [],
    apiStatus: apiRequest.initial,
    salaryLimit: '',
    userSearchInput: '',
    addUserSearchInputToApi: '',
  }

  componentDidMount() {
    this.getProfile()
    this.getJobsData()
  }

  getJobsData = async () => {
    this.setState({apiStatus: apiRequest.inProgress})
    const jwtToken = Cookies.get('jwt_token')

    const {typeOfJob, addUserSearchInputToApi, salaryLimit} = this.state

    console.log(addUserSearchInputToApi)
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const jobsUrl = `https://apis.ccbp.in/jobs?employment_type=${typeOfJob}&minimum_package=${salaryLimit}&search=${addUserSearchInputToApi}`
    const jobsApiResponse = await fetch(jobsUrl, options)

    // console.log(jobData)
    if (jobsApiResponse.ok === true) {
      const jobData = await jobsApiResponse.json()
      const jobsUpdatedToCamelCase = jobData.jobs.map(eachJob => ({
        companyLogoUrl: eachJob.company_logo_url,
        employmentType: eachJob.employment_type,
        id: eachJob.id,
        jobDescription: eachJob.job_description,
        location: eachJob.location,
        packagePerAnam: eachJob.package_per_annum,
        rating: eachJob.rating,
        title: eachJob.title,
      }))
      //   console.log(jobsUpdatedToCamelCase)
      this.setState({
        jobsList: jobsUpdatedToCamelCase,
        apiStatus: apiRequest.success,
      })
    } else {
      this.setState({apiStatus: apiRequest.failure})
    }
  }

  getProfile = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const option = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch('https://apis.ccbp.in/profile', option)
    // console.log(response.ok)
    if (response.ok === true) {
      const data = await response.json()
      //   console.log(data)
      const profileUpdateToCamel = {
        name: data.profile_details.name,
        profileImageUrl: data.profile_details.profile_image_url,
        shortBio: data.profile_details.short_bio,
      }
      this.setState({profile: profileUpdateToCamel})
    }
  }

  getProfileCard = () => {
    const {profile} = this.state
    // console.log(profile.length)
    const {name, profileImageUrl, shortBio} = profile
    return (
      <div>
        {shortBio !== undefined ? (
          <div className="profile-container">
            <img className="profile-img" alt="profile" src={profileImageUrl} />
            <h1 className="name">{name}</h1>
            <p className="bio">{shortBio}</p>
          </div>
        ) : (
          <button type="button" className="login-btn">
            Retry
          </button>
        )}
      </div>
    )
  }

  displayJobsDetails = () => {
    const {jobsList} = this.state

    return (
      <ul className="jobs-list-container">
        {jobsList.map(job => (
          <JobItem key={job.id} getJobDetails={job} />
        ))}
      </ul>
    )
  }

  filterJobBasedOnJobType = id => {
    console.log(id)
    this.setState(
      {
        typeOfJob: id,
      },
      this.getJobsData,
    )
  }

  filterJobBasedOnSalary = id => {
    console.log(id)
    this.setState({salaryLimit: id}, this.getJobsData)
  }

  onClickSearchIcon = () => {
    const {userSearchInput} = this.state
    this.setState({addUserSearchInputToApi: userSearchInput}, this.getJobsData)
  }

  searchJobsBasedOnUserInput = event => {
    this.setState({userSearchInput: event.target.value})
  }

  onSuccessApi = () => {
    const {jobsList} = this.state
    const findNumberOfJobs = jobsList.length
    console.log(findNumberOfJobs)
    return (
      <>
        {findNumberOfJobs > 0
          ? this.displayJobsDetails()
          : this.noJobsFoundView()}
      </>
    )
  }

  isLoading = () => (
    <div className="loader-container">
      <Loader type="ThreeDots" color="#6366f1" height="50" width="50" />
    </div>
  )

  onClickRetryRedirectToJobsPage = () => {
    const {history} = this.props
    history.replace('/')
  }

  noJobsFoundView = () => (
    <div className="failure-container">
      <img
        className="failure-img"
        alt="no jobs"
        src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
      />
      <h1 className="no-result-heading">No Jobs Found</h1>
      <p className="search-direction">
        We could not find any jobs. Try other filters
      </p>
      <button
        onClick={this.onClickRetryRedirectToJobsPage}
        type="button"
        className="logout-btn"
      >
        Retry
      </button>
    </div>
  )

  apiFailureView = () => (
    <div className="failure-container">
      <img
        className="failure-img"
        alt="failure view"
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
      />
      <h1 className="no-result-heading">Oops! Something Went Wrong</h1>
      <p className="search-direction">
        We cannot seem to find the page you are looking for
      </p>
      <button type="button" className="retry-btn">
        Retry
      </button>
    </div>
  )

  renderOnlyJobsList = () => {
    const {apiStatus} = this.state
    // console.log(apiStatus)
    switch (apiStatus) {
      case apiRequest.success:
        return this.onSuccessApi()
      case apiRequest.failure:
        return this.apiFailureView()
      case apiRequest.inProgress:
        return this.isLoading()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <div className="both-side-search-container">
          <div className="side-nav-bar-container">
            {this.getProfileCard()}
            <hr />
            <ul>
              <h1 className="employment-type-heading">Type of Employment</h1>
              {employmentTypesList.map(types => (
                <EmploymentType
                  getJobTypeId={this.filterJobBasedOnJobType}
                  key={types.employmentTypeId}
                  typeOfEmployment={types}
                />
              ))}
            </ul>
            <hr />
            <ul>
              <h1 className="employment-type-heading">Salary Range</h1>
              {salaryRangesList.map(salary => (
                <SalaryRange
                  filterJobBasedOnSalary={this.filterJobBasedOnSalary}
                  key={salary.salaryRangeId}
                  salaryData={salary}
                />
              ))}
            </ul>
          </div>

          <div className="job-profiles-container">
            <div className="search-container">
              <input
                onChange={this.searchJobsBasedOnUserInput}
                className="search-input"
                type="search"
                placeholder="search"
              />
              <button
                onClick={this.onClickSearchIcon}
                type="button"
                className="search-btn"
              >
                <BsSearch className="search-icon" />
              </button>
            </div>
            {this.renderOnlyJobsList()}
          </div>
        </div>
      </>
    )
  }
}
export default Jobs
