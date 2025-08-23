import { Users, UserCheck, UserPlus, Clock, TrendingUp, Calendar } from "lucide-react";
import { StatsCard } from "@/components/admin/StatsCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import { motion } from "framer-motion";

const statsData = [
  {
    title: "Total Parents",
    value: 147,
    change: { value: 12, type: "increase" as const },
    icon: Users,
    description: "Active parent accounts"
  },
  {
    title: "Athletes",
    value: 234,
    change: { value: 8, type: "increase" as const },
    icon: UserCheck,
    description: "Registered swimmers"
  },
  {
    title: "Coaches",
    value: 12,
    change: { value: 2, type: "increase" as const },
    icon: UserPlus,
    description: "Active coaching staff"
  },
  {
    title: "Pending Registrations",
    value: 18,
    change: { value: 3, type: "decrease" as const },
    icon: Clock,
    description: "Awaiting approval"
  },
];

const athleteGrowthData = [
  { month: "Jan", athletes: 180, newRegistrations: 15 },
  { month: "Feb", athletes: 195, newRegistrations: 20 },
  { month: "Mar", athletes: 210, newRegistrations: 18 },
  { month: "Apr", athletes: 220, newRegistrations: 12 },
  { month: "May", athletes: 228, newRegistrations: 16 },
  { month: "Jun", athletes: 234, newRegistrations: 14 },
];

const recentActivities = [
  {
    id: 1,
    type: "registration",
    message: "New registration from Alice Johnson",
    time: "2 minutes ago",
    status: "pending"
  },
  {
    id: 2,
    type: "approval",
    message: "Registration approved for Mike Chen",
    time: "1 hour ago",
    status: "completed"
  },
  {
    id: 3,
    type: "coach",
    message: "Coach Sarah Williams added new training session",
    time: "3 hours ago",
    status: "info"
  },
  {
    id: 4,
    type: "payment",
    message: "Payment received from Johnson family",
    time: "5 hours ago",
    status: "completed"
  },
];

const upcomingEvents = [
  {
    id: 1,
    title: "Swimming Competition",
    date: "Tomorrow, 9:00 AM",
    type: "competition",
    participants: 45
  },
  {
    id: 2,
    title: "Coach Training Session",
    date: "Friday, 2:00 PM",
    type: "training",
    participants: 8
  },
  {
    id: 3,
    title: "Parent Meeting",
    date: "Saturday, 10:00 AM",
    type: "meeting",
    participants: 30
  },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard Overview</h1>
          <p className="text-muted-foreground mt-1">
            Welcome back! Here's what's happening at Energy Guelma Swimming Club.
          </p>
        </div>
        <Button className="gap-2">
          <TrendingUp size={16} />
          Generate Report
        </Button>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {statsData.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <StatsCard {...stat} />
          </motion.div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Athlete Growth Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp size={20} />
                Athlete Growth
              </CardTitle>
              <CardDescription>
                Monthly athlete registration trends
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={athleteGrowthData}>
                  <defs>
                    <linearGradient id="colorAthletes" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                  <XAxis 
                    dataKey="month" 
                    className="text-xs"
                    tick={{ fill: 'hsl(var(--muted-foreground))' }}
                  />
                  <YAxis 
                    className="text-xs"
                    tick={{ fill: 'hsl(var(--muted-foreground))' }}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'hsl(var(--popover))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="athletes"
                    stroke="hsl(var(--primary))"
                    fillOpacity={1}
                    fill="url(#colorAthletes)"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Recent Activities */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
              <CardDescription>Latest updates and actions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">
                        {activity.message}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {activity.time}
                      </p>
                    </div>
                    <Badge
                      variant={
                        activity.status === "completed"
                          ? "default"
                          : activity.status === "pending"
                          ? "secondary"
                          : "outline"
                      }
                      className="ml-2"
                    >
                      {activity.status}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Upcoming Events */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar size={20} />
              Upcoming Events
            </CardTitle>
            <CardDescription>
              Important dates and scheduled activities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="p-4 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/10 hover:shadow-lg transition-all duration-200"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge
                        variant="outline"
                        className={
                          event.type === "competition"
                            ? "bg-red-50 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-300"
                            : event.type === "training"
                            ? "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300"
                            : "bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300"
                        }
                      >
                        {event.type}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {event.participants} participants
                      </span>
                    </div>
                    <h3 className="font-semibold text-foreground">{event.title}</h3>
                    <p className="text-sm text-muted-foreground">{event.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}