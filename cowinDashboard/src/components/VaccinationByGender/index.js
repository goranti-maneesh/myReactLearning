// Write your code here
// Write your code here
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

const VaccinationByGender = props => {
  const {cowinByGender} = props
  return (
    <>
      <h1 className="chart-title">Vaccination by gender</h1>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            cx="50%"
            cy="50%"
            data={cowinByGender}
            startAngle={0}
            endAngle={180}
            innerRadius="20%"
            outerRadius="50%"
            dataKey="count"
          >
            <Cell name="male" fill="#a3df9f" />
            <Cell name="female" fill="#64c2a6" />
            <Cell name="other" fill="#2d87bb" />
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
          />
        </PieChart>
      </ResponsiveContainer>
    </>
  )
}

export default VaccinationByGender
