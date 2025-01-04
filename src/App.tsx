import BannerComponent from "./components/banner"
import HeaderComponent from "./components/header"

 
function App() {
  
  return (
    <div className="min-h-screen bg-[#440C3F]">
      <HeaderComponent />
      <BannerComponent />
      <div className="min-h-screen bg-[#440C3F]">
      </div>
    </div>
  )
}

export default App
