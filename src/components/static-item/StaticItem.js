import './style.scss'
function StaticItem({src,title, description}) {
  return (
    <div className='static-item'>
      <div className="icon">
        <img src={src} alt="" />
      </div>
      <div className='static-body'>
        <h3>
            {title}
        </h3>
        <p>
            {description}
        </p>
      </div>
    </div>
  );
}

export default StaticItem;
