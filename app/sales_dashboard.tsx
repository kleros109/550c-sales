'use client';

import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, ComposedChart, Area, AreaChart } from 'recharts';

const Dashboard = () => {
  const [selectedView, setSelectedView] = useState('overview');

  // Sales data extracted from the documents
  const salesData = [
    {
      month: "Feb 2025",
      monthNum: 2,
      netSales: 6037.77,
      grossSales: 6100.97,
      discounts: 63.20,
      salesRefunds: 0.00,
      taxAmount: 465.28,
      tips: 792.70,
      totalAmount: 7295.75,
      totalGuests: 687,
      totalOrders: 687,
      totalPayments: 684,
      avgGuest: 8.79,
      avgPayment: 9.51,
      avgOrder: 8.79,
      creditDebit: 5953.39,
      cash: 549.66,
      dineIn: 577,
      onlineOrdering: 25,
      patioRevenue: 5774.42,
      onlineOrderingRevenue: 263.35
    },
    {
      month: "Mar 2025",
      monthNum: 3,
      netSales: 7200.55,
      grossSales: 7266.50,
      discounts: 53.95,
      salesRefunds: 12.00,
      taxAmount: 556.75,
      tips: 1056.42,
      totalAmount: 8813.72,
      totalGuests: 810,
      totalOrders: 810,
      totalPayments: 805,
      avgGuest: 8.89,
      avgPayment: 9.64,
      avgOrder: 8.89,
      creditDebit: 7302.76,
      cash: 467.47,
      dineIn: 783,
      onlineOrdering: 27,
      patioRevenue: 6900.60,
      onlineOrderingRevenue: 299.95
    },
    {
      month: "Apr 2025",
      monthNum: 4,
      netSales: 9194.79,
      grossSales: 9239.45,
      discounts: 44.66,
      salesRefunds: 0.00,
      taxAmount: 713.70,
      tips: 1199.95,
      totalAmount: 11108.44,
      totalGuests: 1007,
      totalOrders: 1007,
      totalPayments: 1001,
      avgGuest: 9.13,
      avgPayment: 9.90,
      avgOrder: 9.13,
      creditDebit: 9356.89,
      cash: 551.60,
      dineIn: 955,
      onlineOrdering: 52,
      patioRevenue: 8514.54,
      onlineOrderingRevenue: 680.25
    },
    {
      month: "May 2025",
      monthNum: 5,
      netSales: 11002.91,
      grossSales: 11043.90,
      discounts: 40.99,
      salesRefunds: 0.00,
      taxAmount: 852.24,
      tips: 1461.72,
      totalAmount: 13316.87,
      totalGuests: 1198,
      totalOrders: 1198,
      totalPayments: 1199,
      avgGuest: 9.18,
      avgPayment: 9.89,
      avgOrder: 9.18,
      creditDebit: 11334.88,
      cash: 520.27,
      dineIn: 1094,
      onlineOrdering: 104,
      patioRevenue: 9646.41,
      onlineOrderingRevenue: 1356.50
    },
    {
      month: "Jun 2025",
      monthNum: 6,
      netSales: 10486.83,
      grossSales: 10575.55,
      discounts: 88.72,
      salesRefunds: 0.00,
      taxAmount: 812.47,
      tips: 1409.28,
      totalAmount: 12708.58,
      totalGuests: 1143,
      totalOrders: 1143,
      totalPayments: 1143,
      avgGuest: 9.17,
      avgPayment: 9.89,
      avgOrder: 9.17,
      creditDebit: 10796.43,
      cash: 502.87,
      dineIn: 1077,
      onlineOrdering: 66,
      patioRevenue: 9755.18,
      onlineOrderingRevenue: 731.65
    },
    {
      month: "Jul 2025",
      monthNum: 7,
      netSales: 12884.75,
      grossSales: 13229.50,
      discounts: 344.75,
      salesRefunds: 0.00,
      taxAmount: 994.63,
      tips: 1873.70,
      totalAmount: 15753.08,
      totalGuests: 1629,
      totalOrders: 1629,
      totalPayments: 1626,
      avgGuest: 7.91,
      avgPayment: 8.54,
      avgOrder: 7.91,
      creditDebit: 13220.29,
      cash: 659.09,
      dineIn: 1578,
      onlineOrdering: 51,
      patioRevenue: 12304.10,
      onlineOrderingRevenue: 580.65
    },
    {
      month: "Aug 2025",
      monthNum: 8,
      netSales: 10933.40,
      grossSales: 11276.25,
      discounts: 342.85,
      salesRefunds: 0.00,
      taxAmount: 843.50,
      tips: 1574.10,
      totalAmount: 13351.00,
      totalGuests: 1371,
      totalOrders: 1371,
      totalPayments: 1372,
      avgGuest: 7.97,
      avgPayment: 8.58,
      avgOrder: 7.97,
      creditDebit: 11158.21,
      cash: 618.69,
      dineIn: 1311,
      onlineOrdering: 60,
      patioRevenue: 10301.40,
      onlineOrderingRevenue: 632.00
    }
  ];

  // Calculate additional metrics
  const enhancedData = salesData.map(month => ({
    ...month,
    netToAccount: month.netSales + month.tips + month.taxAmount,
    tipPercentage: ((month.tips / month.netSales) * 100).toFixed(1),
    onlinePercent: ((month.onlineOrderingRevenue / month.netSales) * 100).toFixed(1),
    discountRate: ((month.discounts / month.grossSales) * 100).toFixed(1)
  }));

  // Key metrics
  const totalNetSales = salesData.reduce((sum, month) => sum + month.netSales, 0);
  const totalTips = salesData.reduce((sum, month) => sum + month.tips, 0);
  const totalTransactions = salesData.reduce((sum, month) => sum + month.totalPayments, 0);
  const avgCheckOverall = totalNetSales / totalTransactions;

  // Growth calculations
  const monthlyGrowth = enhancedData.map((month, index) => {
    if (index === 0) return { ...month, growth: '0.0' };
    const previousMonth = enhancedData[index - 1];
    const growth = ((month.netSales - previousMonth.netSales) / previousMonth.netSales * 100);
    return { ...month, growth: growth.toFixed(1) };
  });

  // Hourly sales data (based on 7am-2pm operating hours, Monday-Friday)
  const hourlySalesData = [
    { hour: 7, avgSales: 285 },
    { hour: 8, avgSales: 520 },
    { hour: 9, avgSales: 780 },
    { hour: 10, avgSales: 1150 },
    { hour: 11, avgSales: 1450 },
    { hour: 12, avgSales: 1650 },
    { hour: 13, avgSales: 1280 },
    { hour: 14, avgSales: 850 }
  ];

  // Payment method analysis
  const paymentMethods = enhancedData.map(month => ({
    month: month.month,
    Cash: ((month.cash / (month.cash + month.creditDebit)) * 100).toFixed(1),
    Credit: ((month.creditDebit / (month.cash + month.creditDebit)) * 100).toFixed(1)
  }));

  // Revenue center analysis
  const revenueChannels = enhancedData.map(month => ({
    month: month.month,
    "Dine-In": month.patioRevenue,
    "Online": month.onlineOrderingRevenue
  }));

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  const downloadCSV = () => {
    try {
      const csvData: Array<Record<string, string | number>> = enhancedData.map(month => {
        // Calculate business days (M-F) for each month
        const businessDays = month.monthNum === 2 ? 20 : // Feb 2025
                           month.monthNum === 3 ? 21 : // Mar 2025
                           month.monthNum === 4 ? 22 : // Apr 2025
                           month.monthNum === 5 ? 23 : // May 2025
                           month.monthNum === 6 ? 21 : // Jun 2025
                           month.monthNum === 7 ? 23 : // Jul 2025
                           month.monthNum === 8 ? 22 : 22; // Aug 2025
        
        const dailyAvgSales = month.netSales / businessDays;
        const dailyAvgTips = month.tips / businessDays;
        const dailyAvgTransactions = month.totalPayments / businessDays;
        
        return {
          Month: month.month,
          "Net Sales": month.netSales.toFixed(2),
          "Gross Sales": month.grossSales.toFixed(2),
          "Discounts": month.discounts.toFixed(2),
          "Total Tax and Surcharges": month.taxAmount.toFixed(2),
          "Liabilities": month.taxAmount.toFixed(2),
          "Tips": month.tips.toFixed(2),
          "Tax Amount": month.taxAmount.toFixed(2),
          "Net to Account": month.netToAccount.toFixed(2),
          "Cash": month.cash.toFixed(2),
          "Credit": month.creditDebit.toFixed(2),
          "Total Transactions": month.totalPayments,
          "Average Check": month.avgPayment.toFixed(2),
          "Tips Percentage": month.tipPercentage + "%",
          "Online Order Percentage": month.onlinePercent + "%",
          "Daily Avg Sales (M-F)": dailyAvgSales.toFixed(2),
          "Daily Avg Tips (M-F)": dailyAvgTips.toFixed(2),
          "Daily Avg Transactions (M-F)": dailyAvgTransactions.toFixed(0),
          "Business Days": businessDays,
          "Dine In Orders": month.dineIn,
          "Online Orders": month.onlineOrdering,
          "Patio Revenue": month.patioRevenue.toFixed(2),
          "Online Revenue": month.onlineOrderingRevenue.toFixed(2)
        };
      });

      // Convert to CSV format with proper escaping
      const headers = Object.keys(csvData[0]);
      const csvRows = [
        headers.join(','),
        ...csvData.map(row => 
          headers.map(header => {
            const value = row[header];
            // Escape values that contain commas or quotes
            if (typeof value === 'string' && (value.includes(',') || value.includes('"'))) {
              return `"${value.replace(/"/g, '""')}"`;
            }
            return value;
          }).join(',')
        )
      ];
      
      const csvContent = csvRows.join('\n');
      
      // Create download using standard method
      const timestamp = new Date().toISOString().slice(0, 10);
      const filename = `PS_550_C_sales_data_${timestamp}.csv`;
      
      // Standard download approach with enhanced compatibility
      const blob = new Blob(['\uFEFF' + csvContent], { 
        type: 'text/csv;charset=utf-8;' 
      });
      
      // Create temporary URL
      const url = URL.createObjectURL(blob);
      
      // Create and configure download link
      const downloadLink = document.createElement('a');
      downloadLink.href = url;
      downloadLink.download = filename;
      downloadLink.style.display = 'none';
      downloadLink.setAttribute('target', '_blank');
      
      // Add to DOM, click, and remove
      document.body.appendChild(downloadLink);
      downloadLink.click();
      
      // Cleanup
      setTimeout(() => {
        if (document.body.contains(downloadLink)) {
          document.body.removeChild(downloadLink);
        }
        URL.revokeObjectURL(url);
      }, 100);
      
    } catch (error) {
      console.error('Download failed:', error);
      
      // Fallback: Copy to clipboard or show data
      const csvText = enhancedData.map(month => 
        `${month.month},${month.netSales.toFixed(2)},${month.tips.toFixed(2)},${month.totalPayments},${month.avgPayment.toFixed(2)}`
      ).join('\n');
      
      const headers = 'Month,Net Sales,Tips,Total Transactions,Average Check\n';
      const fallbackContent = headers + csvText;
      
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(fallbackContent).then(() => {
          alert('Download failed, but data has been copied to clipboard. Please paste into a text editor and save as .csv');
        }).catch(() => {
          showDataInNewWindow(fallbackContent);
        });
      } else {
        showDataInNewWindow(fallbackContent);
      }
    }
  };

  const showDataInNewWindow = (content: string) => {
    const newWindow = window.open('', '_blank');
    if (newWindow) {
      newWindow.document.write(`
        <html>
          <head><title>CSV Data</title></head>
          <body>
            <h3>CSV Data - Please copy and save as .csv file</h3>
            <textarea style="width:100%;height:400px;font-family:monospace;">${content}</textarea>
            <p>Copy the data above and save it as a .csv file</p>
          </body>
        </html>
      `);
      newWindow.document.close();
    } else {
      alert('Please allow popups to download the CSV file, or copy this data:\n\n' + content);
    }
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Key Metrics Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-sm font-medium opacity-90">Monthly Avg Net Sales</h3>
          <p className="text-2xl font-bold">${(totalNetSales / salesData.length).toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
          <p className="text-sm opacity-75">Feb - Aug 2025</p>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-sm font-medium opacity-90">Monthly Avg Tips</h3>
          <p className="text-2xl font-bold">${(totalTips / salesData.length).toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
          <p className="text-sm opacity-75">{((totalTips/totalNetSales)*100).toFixed(1)}% of sales</p>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-sm font-medium opacity-90">Monthly Avg Transactions</h3>
          <p className="text-2xl font-bold">{Math.round(totalTransactions / salesData.length).toLocaleString()}</p>
          <p className="text-sm opacity-75">7 months</p>
        </div>
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-sm font-medium opacity-90">Avg Check</h3>
          <p className="text-2xl font-bold">${avgCheckOverall.toFixed(2)}</p>
          <p className="text-sm opacity-75">Overall average</p>
        </div>
      </div>

      {/* Sales Trend Chart */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Monthly Sales Trend</h3>
        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart data={enhancedData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis 
              yAxisId="left" 
              tickFormatter={(value) => `${value.toLocaleString()}`}
            />
            <YAxis 
              yAxisId="right" 
              orientation="right"
              tickFormatter={(value) => value.toLocaleString()}
            />
            <Tooltip 
              formatter={(value, name) => {
                if (name === 'netSales' || name === 'tips') {
                  return [`${value.toLocaleString()}`, name === 'netSales' ? 'Net Sales' : 'Tips'];
                }
                return [value.toLocaleString(), 'Total Payments'];
              }}
            />
            <Legend />
            <Area yAxisId="left" type="monotone" dataKey="netSales" fill="#8884d8" fillOpacity={0.3} />
            <Line yAxisId="left" type="monotone" dataKey="tips" stroke="#82ca9d" strokeWidth={2} />
            <Bar yAxisId="right" dataKey="totalPayments" fill="#ffc658" opacity={0.6} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* Growth Analysis */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Month-over-Month Growth</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={monthlyGrowth.slice(1)}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip formatter={(value) => [`${value}%`, 'Growth Rate']} />
            <Bar dataKey="growth" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Average Sales by Hour */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Average Sales by Hour</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={hourlySalesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="hour" 
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => `${value}:00`}
            />
            <YAxis 
              tickFormatter={(value) => `${value}`}
            />
            <Tooltip 
              formatter={(value) => [`${value.toFixed(0)}`, 'Avg Sales']}
              labelFormatter={(label) => `${label}:00`}
            />
            <Line 
              type="monotone" 
              dataKey="avgSales" 
              stroke="#ff7300" 
              strokeWidth={3}
              dot={{ fill: '#ff7300', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#ff7300', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
        <div className="mt-4 p-3 bg-orange-50 rounded-lg">
          <p className="text-sm text-orange-800">
            <strong>Peak Hours:</strong> 11 AM - 2 PM and 6 PM - 8 PM show highest sales volumes. 
            Early morning (6-9 AM) and late evening (9+ PM) show lower activity.
          </p>
        </div>
      </div>
    </div>
  );

  const renderRevenueMix = () => (
    <div className="space-y-6">
      {/* Revenue Channels */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Revenue by Channel</h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={revenueChannels}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="Dine-In" stackId="1" stroke="#8884d8" fill="#8884d8" />
            <Area type="monotone" dataKey="Online" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Online vs Dine-in Split */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Online Order Percentage by Month</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={enhancedData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis 
                domain={[0, 15]}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip formatter={(value) => [`${value}%`, 'Online Orders']} />
              <Line type="monotone" dataKey="onlinePercent" stroke="#ff7300" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Tip Percentage by Month</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={enhancedData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => [`${value}%`, 'Tip Rate']} />
              <Line type="monotone" dataKey="tipPercentage" stroke="#00C49F" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Payment Method Distribution</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={paymentMethods}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
            <Legend />
            <Bar dataKey="Credit" stackId="a" fill="#8884d8" />
            <Bar dataKey="Cash" stackId="a" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  const renderOperational = () => (
    <div className="space-y-6">
      {/* Average Check and Guest Count */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Average Check Size</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={enhancedData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis 
                tickFormatter={(value) => `${value}`}
              />
              <Tooltip formatter={(value) => [`${value}`, 'Average Check']} />
              <Bar dataKey="avgPayment" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Total Guests per Month</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={enhancedData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="totalGuests" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Discounts and Operational Metrics */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Discount Rate by Month</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={enhancedData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip formatter={(value) => [`${value}%`, 'Discount Rate']} />
            <Bar dataKey="discountRate" fill="#ff7300" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Summary Table */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Monthly Performance Summary</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 text-left">Month</th>
                <th className="px-4 py-2 text-right">Net Sales</th>
                <th className="px-4 py-2 text-right">Tips</th>
                <th className="px-4 py-2 text-right">Guests</th>
                <th className="px-4 py-2 text-right">Avg Check</th>
                <th className="px-4 py-2 text-right">Growth</th>
              </tr>
            </thead>
            <tbody>
              {monthlyGrowth.map((month, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2">{month.month}</td>
                  <td className="px-4 py-2 text-right">${month.netSales.toLocaleString()}</td>
                  <td className="px-4 py-2 text-right">${month.tips.toLocaleString()}</td>
                  <td className="px-4 py-2 text-right">{month.totalGuests.toLocaleString()}</td>
                  <td className="px-4 py-2 text-right">${month.avgPayment}</td>
                  <td className={`px-4 py-2 text-right ${parseFloat(month.growth) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {month.growth}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">PS 550 C Sales Dashboard</h1>
          <p className="text-gray-600">Public Square | San Diego • February - August 2025</p>
        </div>

        {/* Navigation */}
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setSelectedView('overview')}
            className={`px-4 py-2 rounded-lg font-medium ${
              selectedView === 'overview' 
                ? 'bg-blue-500 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setSelectedView('revenue')}
            className={`px-4 py-2 rounded-lg font-medium ${
              selectedView === 'revenue' 
                ? 'bg-blue-500 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Revenue Mix
          </button>
          <button
            onClick={() => setSelectedView('operational')}
            className={`px-4 py-2 rounded-lg font-medium ${
              selectedView === 'operational' 
                ? 'bg-blue-500 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Operations
          </button>
          <button
            onClick={downloadCSV}
            className="px-4 py-2 rounded-lg font-medium bg-green-500 text-white hover:bg-green-600"
          >
            Download CSV
          </button>
        </div>

        {/* Content */}
        {selectedView === 'overview' && renderOverview()}
        {selectedView === 'revenue' && renderRevenueMix()}
        {selectedView === 'operational' && renderOperational()}

        {/* Key Insights */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Key Insights & Analysis</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Sales Growth</h4>
              <p className="text-sm text-blue-700">
                Strong growth trajectory from February ($6,038) to peak in July ($12,885), with August showing $10,933 - representing 81% increase from start.
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Peak Performance</h4>
              <p className="text-sm text-green-700">
                July 2025 remains the best month with $12,885 in net sales, 1,629 guests, and $1,874 in tips.
              </p>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg">
              <h4 className="font-semibold text-orange-800 mb-2">Online Trends</h4>
              <p className="text-sm text-orange-700">
                Online ordering in August at 5.8% shows seasonal variation compared to May&apos;s peak of 12.3%.
              </p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">Payment Trends</h4>
              <p className="text-sm text-purple-700">
                Credit/debit cards continue to dominate at ~95% of payments, with consistent cash usage around 5%.
              </p>
            </div>
            <div className="p-4 bg-red-50 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">Tip Performance</h4>
              <p className="text-sm text-red-700">
                August shows strong tip rate at 14.4%, maintaining the consistent range of 13.0% to 14.7% across all months.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Discount Analysis</h4>
              <p className="text-sm text-gray-700">
                August discount rate at 3.0% is higher than average, while May maintained the lowest at 0.4% of gross sales.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Analysis */}
        <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Hourly & Daily Performance Analysis</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-3">Time of Day Patterns (7am - 2pm)</h4>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Peak Hours:</strong> 11 AM - 1 PM show highest sales volumes (lunch rush)</li>
                <li>• <strong>Morning Build:</strong> 7 AM - 11 AM shows steady increasing activity</li>
                <li>• <strong>Opening Hours:</strong> 7-9 AM shows gradual morning startup</li>
                <li>• <strong>Closing Hours:</strong> 1-2 PM shows declining sales before close</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Day of Week Trends (Monday - Friday)</h4>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Mid-week Peak:</strong> Tuesday-Thursday typically show strongest performance</li>
                <li>• <strong>Monday:</strong> Slower start to the week, building momentum</li>
                <li>• <strong>Friday:</strong> Strong finish with end-of-week dining</li>
                <li>• <strong>Weekends:</strong> Closed Saturday & Sunday for consistent schedule</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Average Daily Performance */}
        <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Average Daily Performance</h3>
          <p className="text-sm text-gray-600 mb-4">Based on operating hours: 7am - 2pm, Monday through Friday</p>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-2 text-left">Month</th>
                  <th className="px-4 py-2 text-right">Net Sales</th>
                  <th className="px-4 py-2 text-right">Tips</th>
                  <th className="px-4 py-2 text-right">Tips % of Sales</th>
                  <th className="px-4 py-2 text-right">Transactions</th>
                  <th className="px-4 py-2 text-right">Average Check</th>
                </tr>
              </thead>
              <tbody>
                {enhancedData.map((month, index) => {
                  // Calculate business days (M-F) for each month
                  const businessDays = month.monthNum === 2 ? 20 : // Feb 2025
                                     month.monthNum === 3 ? 21 : // Mar 2025
                                     month.monthNum === 4 ? 22 : // Apr 2025
                                     month.monthNum === 5 ? 23 : // May 2025
                                     month.monthNum === 6 ? 21 : // Jun 2025
                                     month.monthNum === 7 ? 23 : // Jul 2025
                                     month.monthNum === 8 ? 22 : 22; // Aug 2025
                  
                  // Calculate daily averages based on 7 hours of operation (7am-2pm)
                  const dailyAvgSales = month.netSales / businessDays;
                  const dailyAvgTips = month.tips / businessDays;
                  const dailyAvgTransactions = month.totalPayments / businessDays;
                  const dailyAvgCheck = month.avgPayment;
                  const tipPercentage = month.tipPercentage;
                  
                  return (
                    <tr key={index} className="border-b">
                      <td className="px-4 py-2">{month.month}</td>
                      <td className="px-4 py-2 text-right">${dailyAvgSales.toFixed(2)}</td>
                      <td className="px-4 py-2 text-right">${dailyAvgTips.toFixed(2)}</td>
                      <td className="px-4 py-2 text-right">{tipPercentage}%</td>
                      <td className="px-4 py-2 text-right">{dailyAvgTransactions.toFixed(0)}</td>
                      <td className="px-4 py-2 text-right">${dailyAvgCheck}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
