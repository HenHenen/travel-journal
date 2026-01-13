import marker from "../assets/marker.png"
import japanPhoto from "../assets/country-images/japan.png"

export default function Entry() {
    return (
        <article className="journal-entry">
            
            <img className="main-image" src={japanPhoto} alt={props.img.alt} />
            <div className="info-container">
                <div className="location">
                    <img 
                        className="marker"
                        src={marker}
                        alt="map marker icon"
                    />
                    <span className="country">props.country</span>
                    <a href={props.googleMapsLink} target="_blank">View on Google Maps</a>
                </div>
                <h2 className="entry-title">props.Title</h2>
                <p className="trip-dates">props.Dates</p>
                <p className="entry-text">props.Text</p>
            </div>
        </article>
    )
}