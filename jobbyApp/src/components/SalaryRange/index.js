import './index.css'

const SalaryRange = props => {
  const {salaryData, filterJobBasedOnSalary} = props
  const {label, salaryRangeId} = salaryData
  //   console.log(salaryRangeId)
  const getSalaryId = () => {
    filterJobBasedOnSalary(salaryRangeId)
  }
  return (
    <div className="radio-label-container">
      <input onChange={getSalaryId} type="radio" id={label} name="salary" />
      <label htmlFor={label} className="employment-type-name">
        {label}
      </label>
    </div>
  )
}
export default SalaryRange
