import './style.scss'
function LinkItem() {
    return ( <div className="link-shorten">
        <div className="link-item">
            <span>https://fonts.google.com/specimen/Poppins</span>
            <span>http://localhost:3000/</span>
        </div>
        <button className="btn-copy">Copy</button>
    </div> );
}

export default LinkItem;