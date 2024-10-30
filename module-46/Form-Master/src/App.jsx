
import './App.css'
import Grandpa from './components/Grandpa/Grandpa'
// import ReusableForm from './components/ReusableForm/ReusableForm'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StatefulForm from './components/StatefulForm/StatefulForm'

function App() {
  // const handleSignUpSubmit = data => {
  //   console.log('Sign Up Data', data)
  // }
  // const handleUpdateProfile = data => {
  //   console.log('Update Profile', data)
  // }
  return (
    <>

      <h2>Form Master</h2>
      <Grandpa></Grandpa>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm fromTitle={'Sign Up'} handleSubmit={handleSignUpSubmit}></ReusableForm> */}
      {/* <ReusableForm fromTitle={'Profile Update'} handleSubmit={handleUpdateProfile} submitBtnText='Update'></ReusableForm> */}
    </>
  )
}

export default App
