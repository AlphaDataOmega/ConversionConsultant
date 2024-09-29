import { Box, Heading, Flex, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";

// Dynamically import Recharts components
const LineChart = dynamic(() => import("recharts").then(mod => mod.LineChart), { ssr: false });
const Line = dynamic(() => import("recharts").then(mod => mod.Line), { ssr: false });
const XAxis = dynamic(() => import("recharts").then(mod => mod.XAxis), { ssr: false });
const YAxis = dynamic(() => import("recharts").then(mod => mod.YAxis), { ssr: false });
const Tooltip = dynamic(() => import("recharts").then(mod => mod.Tooltip), { ssr: false });

const data = [
  { date: "01/01", clicks: 50, conversions: 5 },
  { date: "01/02", clicks: 100, conversions: 20 },
];

export default function Dashboard() {
  return (
    <Box p={8}>
      <Heading size="lg" mb={4}>Dashboard Overview</Heading>

      {data.length > 0 && (
        <Flex justify="center">
          <Box w="70%">
            <LineChart width={600} height={300} data={data}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="clicks" stroke="#8884d8" />
              <Line type="monotone" dataKey="conversions" stroke="#82ca9d" />
            </LineChart>
          </Box>

          <Box w="30%" p={4}>
            <Text>AI Insights:</Text>
            <Text>Recommended Budget Increase: Campaign X</Text>
          </Box>
        </Flex>
      )}
    </Box>
  );
}
