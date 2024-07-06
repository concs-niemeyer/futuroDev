import '../assets/Header.css'


function Header() {
    return(

        <>
            <div className='header'>
                <img className='logo-bike' src="https://www.origamid.com/projetos/bikcraft/img/bikcraft.svg" />
                <ul className='header-menu'>
                    <li>Bicicletas</li>
                    <li>Seguros</li>
                    <li>Contato</li>
                </ul>
            </div>
        </>
    )
}

export default Header