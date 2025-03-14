import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from './components/home-page'
import { ContributionToast } from '@/components/toast'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
      <ContributionToast />
    </BrowserRouter>
  )
}

export default App
