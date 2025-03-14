import './App.css'
import { BrowserRouter as Router } from "react-router-dom";
import { HomePage } from './components/home-page'
import {ContributionToast} from '@/components/toast'
function App() {
  return (
    <Router>
      <HomePage />
      <ContributionToast />

    </Router>
  )
}

export default App
