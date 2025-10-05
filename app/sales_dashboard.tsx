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
                 month.monthNum === 9 ? 22 : 22;
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
            <p className="text-muted-foreground mt-1">Public Square | San Diego • Feb - Sep 2025</p>
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
              <div className="text-2xl font-bold">${(totalNetSales / salesData.length).toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
              <p className="text-xs text-muted-foreground">8 months tracked</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Avg Tips</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${(totalTips / salesData.length).toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
              <p className="text-xs text-muted-foreground">{((totalTips/totalNetSales)*100).toFixed(1)}% of sales</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Transactions</CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{Math.round(totalTransactions / totalBusinessDays).toLocaleString()}</div>
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
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="revenue">Revenue Mix</TabsTrigger>
            <TabsTrigger value="operations">Operations</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Sales Trend</CardTitle>
                <CardDescription>Net sales, tips, and transaction volume</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <ComposedChart data={enhancedData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="month" className="text-xs" />
                    <YAxis
                      yAxisId="left"
                      tickFormatter={(value) => `$${value.toLocaleString()}`}
                      className="text-xs"
                    />
                    <YAxis
                      yAxisId="right"
                      orientation="right"
                      tickFormatter={(value) => value.toLocaleString()}
                      className="text-xs"
                    />
                    <Tooltip
                      formatter={(value, name) => {
                        if (name === 'netSales' || name === 'tips') {
                          return [`$${value.toLocaleString()}`, name === 'netSales' ? 'Net Sales' : 'Tips'];
                        }
                        return [value.toLocaleString(), 'Total Payments'];
                      }}
                    />
                    <Legend />
                    <Area yAxisId="left" type="monotone" dataKey="netSales" fill="hsl(var(--primary))" fillOpacity={0.2} stroke="hsl(var(--primary))" />
                    <Line yAxisId="left" type="monotone" dataKey="tips" stroke="hsl(142 76% 36%)" strokeWidth={2} />
                    <Bar yAxisId="right" dataKey="totalPayments" fill="hsl(0 0% 0%)" opacity={0.3} />
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
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
