import "./style.scss";
function LinkItem({ origin, result, copied,setCoping }) {
  return (
    <div className="link-shorten">
      <div className="link-item">
        <span>{origin}</span>
        <span>{result}</span>
      </div>
      <button
        className={`${copied ? 'active' : ''} btn-copy`}
        onClick={() => {
          navigator.clipboard.writeText(result);
          setCoping()
        }}
      >{`${copied ? "Copied!" : "Copy"}`}</button>
    </div>
  );
}

export default LinkItem;
