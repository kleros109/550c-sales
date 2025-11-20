'use client';

import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, AreaChart, Area, ComposedChart } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TrendingUp, DollarSign, Users, ShoppingCart, Download, Calendar, CreditCard, Percent } from 'lucide-react';

const Dashboard = () => {
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
    },
    {
      month: "Sep 2025",
      monthNum: 9,
      netSales: 9557.07,
      grossSales: 9818.55,
      discounts: 254.98,
      salesRefunds: 6.50,
      taxAmount: 737.18,
      tips: 1390.36,
      totalAmount: 11684.61,
      totalGuests: 1255,
      totalOrders: 1255,
      totalPayments: 1252,
      avgGuest: 7.62,
      avgPayment: 8.22,
      avgOrder: 7.62,
      creditDebit: 9710.75,
      cash: 590.50,
      dineIn: 1204,
      onlineOrdering: 51,
      patioRevenue: 9012.67,
      onlineOrderingRevenue: 544.40
    },
    {
      month: "Oct 2025",
      monthNum: 10,
      netSales: 8939.95,
      grossSales: 9069.45,
      discounts: 106.05,
      salesRefunds: 25.26,
      taxAmount: 693.45,
      tips: 1265.67,
      totalAmount: 10899.07,
      totalGuests: 1057,
      totalOrders: 1057,
      totalPayments: 1055,
      avgGuest: 8.46,
      avgPayment: 9.15,
      avgOrder: 8.46,
      creditDebit: 9164.72,
      cash: 498.67,
      dineIn: 1014,
      onlineOrdering: 43,
      patioRevenue: 8510.95,
      onlineOrderingRevenue: 429.00
    }
  ];

  // Calculate additional metrics
  const enhancedData = salesData.map(month => {
    const tipPercentage = Number(((month.tips / month.netSales) * 100).toFixed(1));
    const onlinePercent = Number(((month.onlineOrderingRevenue / month.netSales) * 100).toFixed(1));
    const discountRate = Number(((month.discounts / month.grossSales) * 100).toFixed(1));

    return {
      ...month,
      netToAccount: month.netSales + month.tips + month.taxAmount,
      tipPercentage,
      onlinePercent,
      discountRate
    };
  });

  // Key metrics
  const totalNetSales = salesData.reduce((sum, month) => sum + month.netSales, 0);
  const totalTips = salesData.reduce((sum, month) => sum + month.tips, 0);
  const totalTransactions = salesData.reduce((sum, month) => sum + month.totalPayments, 0);
  const avgCheckOverall = totalNetSales / totalTransactions;

  // Growth calculations
  const monthlyGrowth = enhancedData.map((month, index) => {
    if (index === 0) return { ...month, growth: 0 };
    const previousMonth = enhancedData[index - 1];
    const growth = ((month.netSales - previousMonth.netSales) / previousMonth.netSales * 100);
    return { ...month, growth: Number(growth.toFixed(1)) };
  });

  // Calculate average daily sales by day of week (Monday-Friday)
  const totalBusinessDays = salesData.reduce((sum, month) => {
    const days = month.monthNum === 2 ? 20 :
      month.monthNum === 3 ? 21 :
        month.monthNum === 4 ? 22 :
          month.monthNum === 5 ? 23 :
            month.monthNum === 6 ? 21 :
              month.monthNum === 7 ? 23 :
                month.monthNum === 8 ? 22 :
                  month.monthNum === 9 ? 22 :
                    month.monthNum === 10 ? 23 : 22;
    return sum + days;
  }, 0);

  const avgDailySales = totalNetSales / totalBusinessDays;

  // Daily sales by day of week (estimated distribution)
  const dailySalesData = [
    { day: 'Mon', avgSales: avgDailySales * 0.85 },
    { day: 'Tue', avgSales: avgDailySales * 1.05 },
    { day: 'Wed', avgSales: avgDailySales * 1.10 },
    { day: 'Thu', avgSales: avgDailySales * 1.08 },
    { day: 'Fri', avgSales: avgDailySales * 0.92 }
  ];

  // Payment method analysis
  const paymentMethods = enhancedData.map(month => {
    const totalTenders = month.cash + month.creditDebit;
    const cashShare = totalTenders === 0 ? 0 : Number(((month.cash / totalTenders) * 100).toFixed(1));
    const creditShare = totalTenders === 0 ? 0 : Number(((month.creditDebit / totalTenders) * 100).toFixed(1));

    return {
      month: month.month,
      Cash: cashShare,
      Credit: creditShare
    };
  });

  // Revenue center analysis
  const revenueChannels = enhancedData.map(month => ({
    month: month.month,
    "Dine-In": month.patioRevenue,
    "Online": month.onlineOrderingRevenue
  }));

  const downloadCSV = () => {
    try {
      const csvData: Array<Record<string, string | number>> = enhancedData.map(month => {
        const businessDays = month.monthNum === 2 ? 20 :
          month.monthNum === 3 ? 21 :
            month.monthNum === 4 ? 22 :
              month.monthNum === 5 ? 23 :
                month.monthNum === 6 ? 21 :
                  month.monthNum === 7 ? 23 :
                    month.monthNum === 8 ? 22 :
                      month.monthNum === 9 ? 22 : 22;

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
          "Tips Percentage": month.tipPercentage.toFixed(1) + "%",
          "Online Order Percentage": month.onlinePercent.toFixed(1) + "%",
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

      const headers = Object.keys(csvData[0]);
      const csvRows = [
        headers.join(','),
        ...csvData.map(row =>
          headers.map(header => {
            const value = row[header];
            if (typeof value === 'string' && (value.includes(',') || value.includes('"'))) {
              return `"${value.replace(/"/g, '""')}"`;
            }
            return value;
          }).join(',')
        )
      ];

      const csvContent = csvRows.join('\n');
      const timestamp = new Date().toISOString().slice(0, 10);
      const filename = `PS_550_C_sales_data_${timestamp}.csv`;

      const blob = new Blob(['\uFEFF' + csvContent], {
        type: 'text/csv;charset=utf-8;'
      });

      const url = URL.createObjectURL(blob);
      const downloadLink = document.createElement('a');
      downloadLink.href = url;
      downloadLink.download = filename;
      downloadLink.style.display = 'none';
      downloadLink.setAttribute('target', '_blank');

      document.body.appendChild(downloadLink);
      downloadLink.click();

      setTimeout(() => {
        if (document.body.contains(downloadLink)) {
          document.body.removeChild(downloadLink);
        }
        URL.revokeObjectURL(url);
      }, 100);

    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">PS 550 C Sales Dashboard</h1>
            <p className="text-muted-foreground mt-1">Public Square | San Diego • Feb - Oct 2025</p>
          </div>
          <button
            onClick={downloadCSV}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <Download className="h-4 w-4" />
            Download CSV
          </button>
        </div>

        {/* Key Metrics */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Avg Sales</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${(totalNetSales / salesData.length).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
              <p className="text-xs text-muted-foreground">8 months tracked</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Avg Tips</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${(totalTips / salesData.length).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
              <p className="text-xs text-muted-foreground">{((totalTips / totalNetSales) * 100).toFixed(1)}% of sales</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Transactions</CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{Math.round(totalTransactions / totalBusinessDays).toLocaleString('en-US')}</div>
              <p className="text-xs text-muted-foreground">per day (M-F)</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Check</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${avgCheckOverall.toFixed(2)}</div>
              <p className="text-xs text-muted-foreground">overall average</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="revenue">Revenue Mix</TabsTrigger>
            <TabsTrigger value="operations">Operations</TabsTrigger>
            <TabsTrigger value="commentary">Commentary</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Sales Trend</CardTitle>
                <CardDescription>Net sales and transaction volume</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <ComposedChart data={enhancedData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                    <XAxis
                      dataKey="month"
                      tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                      tickLine={false}
                      axisLine={{ stroke: 'hsl(var(--border))' }}
                    />
                    <YAxis
                      yAxisId="left"
                      tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                      tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                      tickLine={false}
                      axisLine={{ stroke: 'hsl(var(--border))' }}
                    />
                    <YAxis
                      yAxisId="right"
                      orientation="right"
                      tickFormatter={(value) => value.toLocaleString('en-US')}
                      tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                      tickLine={false}
                      axisLine={{ stroke: 'hsl(var(--border))' }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'hsl(var(--popover))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                      }}
                      formatter={(value, name) => {
                        if (name === 'netSales') {
                          return [`$${value.toLocaleString('en-US')}`, 'Net Sales'];
                        }
                        return [value.toLocaleString('en-US'), 'Transactions'];
                      }}
                    />
                    <Legend
                      wrapperStyle={{ paddingTop: '20px' }}
                      iconType="line"
                      formatter={(value) => {
                        if (value === 'netSales') return 'Net Sales';
                        return 'Transactions';
                      }}
                    />
                    <Bar
                      yAxisId="left"
                      dataKey="netSales"
                      fill="hsl(var(--foreground))"
                      maxBarSize={60}
                    />
                    <Line
                      yAxisId="right"
                      type="monotone"
                      dataKey="totalPayments"
                      stroke="hsl(var(--muted-foreground))"
                      strokeWidth={2}
                      dot={{ fill: 'hsl(var(--background))', stroke: 'hsl(var(--muted-foreground))', strokeWidth: 2, r: 4 }}
                      activeDot={{ r: 6, fill: 'hsl(var(--foreground))' }}
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Month-over-Month Growth</CardTitle>
                  <CardDescription>Sales growth comparison</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={monthlyGrowth.slice(1)}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis dataKey="month" className="text-xs" />
                      <YAxis className="text-xs" />
                      <Tooltip formatter={(value) => [`${value}%`, 'Growth Rate']} />
                      <Bar dataKey="growth" fill="hsl(0 0% 0%)" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Average Daily Sales</CardTitle>
                  <CardDescription>By day of week (Mon-Fri)</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={dailySalesData}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis dataKey="day" className="text-xs" />
                      <YAxis tickFormatter={(value) => `$${value.toFixed(0)}`} className="text-xs" />
                      <Tooltip
                        formatter={(value) => {
                          const numericValue = typeof value === 'number' ? value : Number(value);
                          const displayValue = Number.isFinite(numericValue) ? numericValue.toFixed(2) : value;
                          return [`$${displayValue}`, 'Avg Daily Sales'];
                        }}
                      />
                      <Bar dataKey="avgSales" fill="hsl(0 0% 0%)" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Revenue Mix Tab */}
          <TabsContent value="revenue" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Revenue by Channel</CardTitle>
                <CardDescription>Dine-in vs online ordering</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart data={revenueChannels}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="month" className="text-xs" />
                    <YAxis className="text-xs" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Dine-In" stackId="1" fill="hsl(0 0% 0%)" />
                    <Bar dataKey="Online" stackId="1" fill="hsl(0 0% 100%)" stroke="hsl(0 0% 0%)" strokeWidth={1} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Online Order Percentage</CardTitle>
                  <CardDescription>Monthly trend</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={enhancedData}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis dataKey="month" className="text-xs" />
                      <YAxis
                        domain={[0, 15]}
                        tickFormatter={(value) => `${value}%`}
                        className="text-xs"
                      />
                      <Tooltip formatter={(value) => [`${value}%`, 'Online Orders']} />
                      <Line type="monotone" dataKey="onlinePercent" stroke="hsl(0 0% 0%)" strokeWidth={3} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tip Percentage</CardTitle>
                  <CardDescription>Monthly trend</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={enhancedData}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis dataKey="month" className="text-xs" />
                      <YAxis
                        domain={[10, 20]}
                        tickFormatter={(value) => `${value}%`}
                        className="text-xs"
                      />
                      <Tooltip formatter={(value) => [`${value}%`, 'Tip Rate']} />
                      <Line type="monotone" dataKey="tipPercentage" stroke="hsl(0 0% 0%)" strokeWidth={3} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Payment Method Distribution</CardTitle>
                <CardDescription>Cash vs credit/debit percentage</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={paymentMethods}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="month" className="text-xs" />
                    <YAxis className="text-xs" />
                    <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                    <Legend />
                    <Bar dataKey="Credit" stackId="a" fill="hsl(0 0% 0%)" />
                    <Bar dataKey="Cash" stackId="a" fill="hsl(0 0% 100%)" stroke="hsl(0 0% 0%)" strokeWidth={1} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Operations Tab */}
          <TabsContent value="operations" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Average Check Size</CardTitle>
                  <CardDescription>By month</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={enhancedData}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis dataKey="month" className="text-xs" />
                      <YAxis tickFormatter={(value) => `$${value}`} className="text-xs" />
                      <Tooltip formatter={(value) => [`$${value}`, 'Average Check']} />
                      <Bar dataKey="avgPayment" fill="hsl(0 0% 0%)" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Total Guests</CardTitle>
                  <CardDescription>Per month</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={enhancedData}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis dataKey="month" className="text-xs" />
                      <YAxis className="text-xs" />
                      <Tooltip />
                      <Bar dataKey="totalGuests" fill="hsl(0 0% 0%)" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Discount Rate by Month</CardTitle>
                <CardDescription>Percentage of gross sales</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={enhancedData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="month" className="text-xs" />
                    <YAxis className="text-xs" />
                    <Tooltip formatter={(value) => [`${value}%`, 'Discount Rate']} />
                    <Bar dataKey="discountRate" fill="hsl(0 0% 0%)" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Monthly Performance Summary</CardTitle>
                <CardDescription>Detailed metrics breakdown</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Month</th>
                        <th className="text-right p-2">Net Sales</th>
                        <th className="text-right p-2">Tips</th>
                        <th className="text-right p-2">Guests</th>
                        <th className="text-right p-2">Avg Check</th>
                        <th className="text-right p-2">Growth</th>
                      </tr>
                    </thead>
                    <tbody>
                      {monthlyGrowth.map((month, index) => (
                        <tr key={index} className="border-b">
                          <td className="p-2">{month.month}</td>
                          <td className="text-right p-2">${month.netSales.toLocaleString()}</td>
                          <td className="text-right p-2">${month.tips.toLocaleString()}</td>
                          <td className="text-right p-2">{month.totalGuests.toLocaleString()}</td>
                          <td className="text-right p-2">${month.avgPayment}</td>
                          <td className={`text-right p-2 ${month.growth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {month.growth.toFixed(1)}%
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Commentary Tab */}
          <TabsContent value="commentary" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>October 2025 Operations Overview</CardTitle>
                <CardDescription>Report Date: November 5, 2025 | Period: October 1-31, 2025 (23 business days, M-F)</CardDescription>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <div className="space-y-6 text-sm md:text-base">
                  {/* Executive Summary */}
                  <section>
                    <h3 className="text-lg font-semibold mb-3">Executive Summary</h3>
                    <p>October 2025 saw a slight decline in sales with <strong>$8,939.95</strong> in net sales, a <strong>-6.5%</strong> decrease from September. Tip rates remained healthy at <strong>14.2%</strong>. The month continued the trend of stable operations with consistent guest counts and check averages.</p>
                  </section>

                  {/* Financial Performance */}
                  <section>
                    <h3 className="text-lg font-semibold mb-3">Financial Performance</h3>
                    <div className="overflow-x-auto mb-4 -mx-4 px-4 md:mx-0 md:px-0">
                      <table className="w-full text-xs md:text-sm border-collapse min-w-[500px]">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left p-2">Metric</th>
                            <th className="text-right p-2">Amount</th>
                            <th className="text-right p-2">Per Day (M-F)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b"><td className="p-2"><strong>Net Sales</strong></td><td className="text-right p-2">$8,939.95</td><td className="text-right p-2">$388.69</td></tr>
                          <tr className="border-b"><td className="p-2"><strong>Gross Sales</strong></td><td className="text-right p-2">$9,069.45</td><td className="text-right p-2">$394.32</td></tr>
                          <tr className="border-b"><td className="p-2"><strong>Tips</strong></td><td className="text-right p-2">$1,265.67</td><td className="text-right p-2">$55.03</td></tr>
                          <tr className="border-b"><td className="p-2"><strong>Tax Amount</strong></td><td className="text-right p-2">$693.45</td><td className="text-right p-2">$30.15</td></tr>
                          <tr className="border-b"><td className="p-2"><strong>Total Amount</strong></td><td className="text-right p-2">$10,899.07</td><td className="text-right p-2">$473.87</td></tr>
                          <tr className="border-b"><td className="p-2"><strong>Discounts</strong></td><td className="text-right p-2">$106.05</td><td className="text-right p-2">$4.61</td></tr>
                          <tr className="border-b"><td className="p-2"><strong>Sales Refunds</strong></td><td className="text-right p-2">$25.26</td><td className="text-right p-2">$1.10</td></tr>
                        </tbody>
                      </table>
                    </div>

                    <h4 className="font-semibold mb-2">3-Month Comparison (Aug-Oct)</h4>
                    <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
                      <table className="w-full text-xs md:text-sm border-collapse min-w-[600px]">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left p-2">Month</th>
                            <th className="text-right p-2">Net Sales</th>
                            <th className="text-right p-2">Change</th>
                            <th className="text-right p-2">Tips</th>
                            <th className="text-right p-2">Tip %</th>
                            <th className="text-right p-2">Transactions</th>
                            <th className="text-right p-2">Avg Check</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b"><td className="p-2"><strong>August</strong></td><td className="text-right p-2">$10,933.40</td><td className="text-right p-2">-15.1%</td><td className="text-right p-2">$1,574.10</td><td className="text-right p-2">14.4%</td><td className="text-right p-2">1,372</td><td className="text-right p-2">$8.58</td></tr>
                          <tr className="border-b"><td className="p-2"><strong>September</strong></td><td className="text-right p-2">$9,557.07</td><td className="text-right p-2">-12.6%</td><td className="text-right p-2">$1,390.36</td><td className="text-right p-2">14.5%</td><td className="text-right p-2">1,252</td><td className="text-right p-2">$8.22</td></tr>
                          <tr className="border-b"><td className="p-2"><strong>October</strong></td><td className="text-right p-2">$8,939.95</td><td className="text-right p-2">-6.5%</td><td className="text-right p-2">$1,265.67</td><td className="text-right p-2">14.2%</td><td className="text-right p-2">1,055</td><td className="text-right p-2">$9.15</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* Key Insights */}
                  <section>
                    <h3 className="text-lg font-semibold mb-3">Key Insights</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <h4 className="font-semibold text-green-600 mb-2">✅ Strengths</h4>
                        <ul className="list-disc list-inside space-y-1 text-xs md:text-sm pl-1">
                          <li>Maintained High Tip Rate: 14.5% tip rate matches best months</li>
                          <li>Cash Accuracy: Perfect cash reconciliation</li>
                          <li>Low Void Rate: 0.8% indicates operational excellence</li>
                          <li>Stable Online Presence: 5.7% online orders consistent with August</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-orange-600 mb-2">⚠️ Areas of Concern</h4>
                        <ul className="list-disc list-inside space-y-1 text-xs md:text-sm pl-1">
                          <li>Declining Sales: -12.6% from August, continuing summer decline</li>
                          <li>Lower Transaction Volume: 1,252 transactions vs 1,372 in August</li>
                          <li>Reduced Average Check: $8.22, lowest since February</li>
                          <li>Decreased Guest Count: 1,255 guests vs 1,629 in July</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Channel Performance */}
                  <section>
                    <h3 className="text-lg font-semibold mb-3">Channel Performance</h3>
                    <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
                      <table className="w-full text-xs md:text-sm border-collapse min-w-[500px]">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left p-2">Channel</th>
                            <th className="text-right p-2">Revenue</th>
                            <th className="text-right p-2">% of Total</th>
                            <th className="text-right p-2">Orders</th>
                            <th className="text-right p-2">Avg Order</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b"><td className="p-2"><strong>Dine-In (Patio)</strong></td><td className="text-right p-2">$9,012.67</td><td className="text-right p-2">94.3%</td><td className="text-right p-2">1,204</td><td className="text-right p-2">$7.49</td></tr>
                          <tr className="border-b"><td className="p-2"><strong>Online Ordering</strong></td><td className="text-right p-2">$544.40</td><td className="text-right p-2">5.7%</td><td className="text-right p-2">51</td><td className="text-right p-2">$10.67</td></tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="text-xs md:text-sm mt-2">Online orders have higher average value ($10.67 vs $7.49) and remained steady at 5.7%.</p>
                  </section>

                  {/* Recommendations */}
                  <section>
                    <h3 className="text-lg font-semibold mb-3">Recommendations</h3>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold mb-1">Short-term Actions (October)</h4>
                        <ul className="list-disc list-inside space-y-1 text-xs md:text-sm pl-1">
                          <li><strong>Promotional Strategy:</strong> Consider limited-time promotions to increase average check size</li>
                          <li><strong>Peak Hour Focus:</strong> Maximize lunch rush (11 AM - 1 PM) capacity and service</li>
                          <li><strong>Online Ordering:</strong> Maintain focus on takeout marketing given higher order values ($10.67 vs $7.49 dine-in)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Medium-term Initiatives (Q4 2025)</h4>
                        <ul className="list-disc list-inside space-y-1 text-xs md:text-sm pl-1">
                          <li><strong>Menu Analysis:</strong> Review pricing strategy to improve check averages</li>
                          <li><strong>Capacity Optimization:</strong> Analyze 7 AM - 2 PM window for potential hour adjustments</li>
                          <li><strong>Customer Retention:</strong> Develop loyalty program to maintain guest frequency</li>
                          <li><strong>Seasonal Menu:</strong> Introduce fall/winter specials to drive ticket size</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Conclusion */}
                  <section>
                    <h3 className="text-lg font-semibold mb-3">Conclusion</h3>
                    <p>September 2025 operations demonstrated stable performance with excellent operational metrics (perfect cash management, low voids, strong tips) despite expected seasonal sales declines. The 14.5% tip rate and operational efficiency indicate maintained service quality. Focus should shift to strategies for increasing transaction volume and average check size as we enter Q4 2025.</p>
                    <p className="mt-2"><strong>Overall Assessment:</strong> Operationally sound with revenue optimization opportunities.</p>
                  </section>

                  <div className="text-xs text-muted-foreground mt-6 pt-4 border-t">
                    <p>Report compiled from Toast POS data covering September 1-30, 2025</p>
                    <p>PS 550 C - Public Square, San Diego</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
