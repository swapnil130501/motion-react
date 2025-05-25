import './App.css'
import Card from './components/Card'
import MotionHooks from './components/MotionHooks'
import Sidebar from './components/Sidebar'

function App() {
    return (
        <>
            <div className="h-screen flex bg-gray-50">
                <Sidebar />

                <div className="flex-1 flex items-center justify-center">
                    <Card />
                </div>
            </div>
            <MotionHooks />
        </>
    )
}

export default App
