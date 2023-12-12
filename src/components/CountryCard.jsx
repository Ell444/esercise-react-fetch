const CountryCard = ({ countryName, flagUrl, population, capital }) => {
    return (<>

        <section>
            <h3>{countryName}</h3>
            <figure>
                <img src={flagUrl} alt={`flagName${countryName}`} />
                <p>{`Population: ${population}`}</p>
                <p>{`Capital: ${capital}`}</p>
            </figure>
        </section>

    </>)
}

export default CountryCard;