const RelatedStory = ({ title, mainImage }) => {
    return (
      <div style={{ height: '350px', width: '300px', marginRight: '32px' }}>
            <h5 className="rs-link">{title}</h5>
            <img src={mainImage} style={{ height: '200px', width: '250px', margin: '0 auto'}}/>
      </div>
    );
}
 
export default RelatedStory;