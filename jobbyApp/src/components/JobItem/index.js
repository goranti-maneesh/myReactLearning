import {Link} from 'react-router-dom'
import {AiFillStar} from 'react-icons/ai'
import {MdLocationOn} from 'react-icons/md'
import {RiHandbagFill} from 'react-icons/ri'
import './index.css'

const JobItem = props => {
  const {getJobDetails} = props
  //   console.log(getJobDetails)
  const {
    companyLogoUrl,
    employmentType,
    jobDescription,
    location,
    packagePerAnam,
    rating,
    title,
    id,
  } = getJobDetails
  return (
    <Link to={`jobs/${id}`} className="job-link">
      <li className="job-card-container">
        <div className="logo-designation-container">
          <img
            className="company-logo"
            alt="company logo"
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
          <p className="package">{packagePerAnam}</p>
        </div>
        <hr />
        <h1 className="description-heading">Description</h1>
        <p className="job-description">{jobDescription}</p>
      </li>
    </Link>
  )
}

export default JobItem
