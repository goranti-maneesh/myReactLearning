import './index.css'

const EmploymentType = props => {
  const {typeOfEmployment, getJobTypeId} = props
  const {label, employmentTypeId} = typeOfEmployment

  const getJobId = () => {
    getJobTypeId(employmentTypeId)
  }

  return (
    <div className="checkbox-label-container">
      <input onChange={getJobId} type="checkbox" id={label} />
      <label htmlFor={label} className="employment-type-name">
        {label}
      </label>
    </div>
  )
}
export default EmploymentType
