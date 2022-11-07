import {Component} from 'react'
import Cookies from 'js-cookie'
import {AiFillStar} from 'react-icons/ai'
import {MdLocationOn} from 'react-icons/md'
import {RiHandbagFill} from 'react-icons/ri'

import Loader from 'react-loader-spinner'

import Header from '../Header'
import SimilarJobs from '../SimilarJobs'
import './index.css'

const apiRequestStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_progress',
}

class JobDetailedView extends Component {
  state = {
    jobDetailedViewList: '',
    similarJobsList: '',
    apiStatus: apiRequestStatus.initial,
  }

  componentDidMount() {
    this.getJobDetailedData()
  }

  getJobDetailedData = async () => {
    this.setState({apiStatus: apiRequestStatus.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/jobs/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      //   console.log(data)
      const jobsDataUpdateToCamelCase = {
        companyLogoUrl: data.job_details.company_logo_url,
        companyWebsiteUrl: data.job_details.company_website_url,
        employmentType: data.job_details.employment_type,
        id: data.job_details.id,
        jobDescription: data.job_details.job_description,
        lifeAtCompany: {
          description: data.job_details.life_at_company.description,
          imageUrl: data.job_details.life_at_company.image_url,
        },
        location: data.job_details.location,
        packagePerAnnum: data.job_details.package_per_annum,
        rating: data.job_details.rating,
        skills: data.job_details.skills.map(skill => ({
          imageUrl: skill.image_url,
          name: skill.name,
        })),
        title: data.job_details.title,
      }
      const similarJobsUpdateToCamelCase = data.similar_jobs.map(eachJob => ({
        companyLogoUrl: eachJob.company_logo_url,
        employmentType: eachJob.employment_type,
        id: eachJob.id,
        jobDescription: eachJob.job_description,
        location: eachJob.location,
        rating: eachJob.rating,
        title: eachJob.title,
      }))
      //   console.log(similarJobsUpdateToCamelCase)
      this.setState({
        jobDetailedViewList: jobsDataUpdateToCamelCase,
        apiStatus: apiRequestStatus.success,
        similarJobsList: similarJobsUpdateToCamelCase,
      })
    } else {
      this.setState({apiStatus: apiRequestStatus.failure})
    }
  }

  getSuccessfulApiCall = () => {
    const {jobDetailedViewList, similarJobsList} = this.state
    const {
      companyLogoUrl,
      companyWebsiteUrl,
      employmentType,
      jobDescription,
      lifeAtCompany,
      location,
      packagePerAnnum,
      rating,
      skills,
      title,
    } = jobDetailedViewList
    return (
      <div>
        <Header />
        <div className="job-detailed-view-container">
          <li className="job-card-container">
            <div className="logo-designation-container">
              <img
                className="company-logo"
                alt="job details company logo"
                src={companyLogoUrl}
              />
              <div>
                <h1 className="designation">{title}</h1>
                <div className="rating-design-container">
                  <AiFillStar className="star" />
                  <p className="rating">{rating}</p>
                </div>
              </div>
            </div>
            <div className="location-container">
              <div className="all-location-container">
                <MdLocationOn className="icon" />
                <p className="location">{location}</p>
                <RiHandbagFill className="icon" />
                <p className="location">{employmentType}</p>
              </div>
              <p className="package">{packagePerAnnum}</p>
            </div>
            <hr />
            <div className="description-visit-link-container">
              <h1 className="description-heading">Description</h1>
              <a href={companyWebsiteUrl}>Visit</a>
            </div>
            <p className="job-description">{jobDescription}</p>

            <h1 className="skill-heading">Skills</h1>
            <ul className="ul-skill-container">
              {skills.map(eachSkill => (
                <div key={eachSkill.name} className="skill-container">
                  <img
                    src={eachSkill.imageUrl}
                    className="skill-img"
                    alt={eachSkill.name}
                  />
                  <p className="skill-name">{eachSkill.name}</p>
                </div>
              ))}
            </ul>
            <h1 className="skill-heading">Life at Company</h1>
            <div className="company-life-container">
              <p className="company-life-description">
                {lifeAtCompany.description}
              </p>
              <img
                src={lifeAtCompany.imageUrl}
                alt=" life at company"
                className="company-img"
              />
            </div>
          </li>
          <h1 className="skill-heading">Similar Jobs</h1>
          <div className="page-similar-jobs-container">
            {similarJobsList.map(eachSimilarJob => (
              <SimilarJobs key={eachSimilarJob.id} job={eachSimilarJob} />
            ))}
          </div>
        </div>
      </div>
    )
  }

  onClickingRetryBtnNavigateToJobPage = () => {
    this.getJobDetailedData()
  }

  apiFailureView = () => (
    <div className="failure-container">
      <img
        className="failure-img"
        alt="failure view"
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
      />
      <h1 className="no-result-heading">Oops! Something Went Wrong</h1>
      <p className="search-direction">
        We cannot seem to find the page you are looking for.
      </p>
      <button
        onClick={this.onClickingRetryBtnNavigateToJobPage}
        type="button"
        className="retry-btn"
      >
        Retry
      </button>
    </div>
  )

  isLoading = () => (
    <div className="loader-container">
      <Loader type="ThreeDots" color="#6366f1" height="50" width="50" />
    </div>
  )

  render() {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiRequestStatus.success:
        return this.getSuccessfulApiCall()
      case apiRequestStatus.inProgress:
        return this.isLoading()
      case apiRequestStatus.failure:
        return this.apiFailureView()
      default:
        return null
    }
  }
}
export default JobDetailedView
