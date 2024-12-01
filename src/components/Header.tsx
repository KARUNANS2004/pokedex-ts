export default function Header(props:{
    handleToggleMenu:()=>void
}){
    const {handleToggleMenu}=props

    return (
        <header>
            <button onClick={handleToggleMenu} className="open-nav-button">
            <i className="fa-solid fa-bars"></i>
            </button>
            <h1 className="text-gradient">Pokedéx</h1>
        </header>
    )
}