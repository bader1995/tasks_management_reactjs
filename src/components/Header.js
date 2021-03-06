import Button from "./Button"

const Header = ({ toggleForm, showForm }) => {
  return (
    <div className='header-container'>
        <h2 className='header-title'>Tasks management (Double click to mark as done)</h2>
        <Button
            text={showForm ? "Close" : "Add"}
            ButtonClicked={() => toggleForm()}
            color={showForm ? "Red" : "Green"}
        />
    </div>
  )
}

export default Header