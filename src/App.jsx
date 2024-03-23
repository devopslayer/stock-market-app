import Header from './components/Header/Header'
import StockList from './components/Stock/List/StockList'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  // Using this mock data for testing purposes, if needed you can add real API url instead of this JSON file.
  const stockDataUrl = '/mockData.json';

  return (
    <>
      <Header />
      <StockList url={stockDataUrl} />
      <Footer />
    </>
  )
}

export default App
