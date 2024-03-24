/* eslint-disable @typescript-eslint/no-explicit-any */
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { useGetAllSuppliesQuery } from "../../redux/features/supplies/suppliesApi";
const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  const fontSize = "18";

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      fontSize={fontSize}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const DashboardHome = () => {
  const { data: supplies } = useGetAllSuppliesQuery(undefined);

  // Calculate total value for each category
  const categoryData = supplies?.data?.reduce((acc: any, curr: any) => {
    if (!acc[curr?.category]) {
      acc[curr.category] = 0;
    }
    acc[curr?.category] += curr?.price;
    return acc;
  }, {});

  // Convert categoryData to array format expected by Recharts
  const pieChartData = Object.keys(categoryData || {}).map(
    (category: string) => ({
      name: category,
      value: categoryData[category],
    })
  );

  return (
    <div>
      <PieChart className="lg:ms-10 ms-0" width={500} height={400}>
        <Pie
          data={pieChartData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
          wrapperStyle={{
            fontSize: "16px",
          }}
        />
        <Legend
          wrapperStyle={{
            fontSize: "16px",
          }}
        />
      </PieChart>
    </div>
  );
};

export default DashboardHome;
