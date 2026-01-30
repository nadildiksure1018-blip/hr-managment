import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Nav from './components/layout/Nav'
import Dashboard from './pages/dashboard'
import Payroll from './pages/Payroll'
import Overview from './pages/subpages/payroll/Overview'
import Payslips from './pages/subpages/payroll/Payslips'
import Payment from './pages/subpages/payroll/Payment'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="payroll/" element={<Payroll />}>
            <Route path="overview" element={<Overview />} />
            <Route path="payment" element={<Payment />} />
            <Route path="payslips" element={<Payslips />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
