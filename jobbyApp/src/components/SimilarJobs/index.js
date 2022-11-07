import {AiFillStar} from 'react-icons/ai'
import {MdLocationOn} from 'react-icons/md'
import {RiHandbagFill} from 'react-icons/ri'
import './index.css'

const SimilarJobs = props => {
  const {job} = props
  console.log(job)
  const {
    companyLogoUrl,
    employmentType,
    jobDescription,
    location,
    rating,
    title,
  } = job
  return (
    <div className="similar-job-container">
      <div className="similar-jobs-logo-container">
        <img
          className="card-company-logo"
          alt="similar job company logo"
          src={companyLogoUrl}
        />
        <div>
          <h1 className="similar-job-designation">{title}</h1>
          <div className="similar-job-rating-design-container">
            <AiFillStar className="star" />
            <p className="rating">{rating}</p>
          </div>
        </div>
      </div>
      <h1 className="similar-job-description-heading">Description</h1>
      <p className="similar-job-description">{jobDescription}</p>
      <div className="location-container">
        <div className="all-location-container">
          <MdLocationOn className="icon" />
          <p className="location">{location}</p>
          <RiHandbagFill className="icon" />
          <p className="location">{employmentType}</p>
        </div>
      </div>
    </div>
  )
}
export default SimilarJobs
