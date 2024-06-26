import React from "react"

// // Sample data extracted from your `finalFilteredArticles` array
const sampleData = [
  {
    name: "538 W 2nd St, San Pedro, CA 90731",
    address: {
      streetAddress: "538 W 2nd St",
      addressLocality: "San Pedro",
      addressRegion: "CA",
      postalCode: "90731"
    },
    price: "$679,000",
    beds: 4,
    baths: 2,
    sqft: 1411,
    url: "https://www.zillow.com/homedetails/538-W-2nd-St-San-Pedro-CA-90731/21306370_zpid/",
    images: [
      "https://photos.zillowstatic.com/fp/30e64640ea889f774fc387a9f1486576-p_e.jpg",
      "https://photos.zillowstatic.com/fp/49c3265b803434e2456e53cfce28f56a-p_e.jpg"
    ]
  },
  {
    name: "538 W 2nd St, San Pedro, CA 90731",
    address: {
      streetAddress: "538 W 2nd St",
      addressLocality: "San Pedro",
      addressRegion: "CA",
      postalCode: "90731"
    },
    price: "$679,000",
    beds: 4,
    baths: 2,
    sqft: 1411,
    url: "https://www.zillow.com/homedetails/538-W-2nd-St-San-Pedro-CA-90731/21306370_zpid/",
    images: [
      "https://photos.zillowstatic.com/fp/30e64640ea889f774fc387a9f1486576-p_e.jpg",
      "https://photos.zillowstatic.com/fp/49c3265b803434e2456e53cfce28f56a-p_e.jpg"
    ]
  },
  {
    name: "538 W 2nd St, San Pedro, CA 90731",
    address: {
      streetAddress: "538 W 2nd St",
      addressLocality: "San Pedro",
      addressRegion: "CA",
      postalCode: "90731"
    },
    price: "$679,000",
    beds: 4,
    baths: 2,
    sqft: 1411,
    url: "https://www.zillow.com/homedetails/538-W-2nd-St-San-Pedro-CA-90731/21306370_zpid/",
    images: [
      "https://photos.zillowstatic.com/fp/30e64640ea889f774fc387a9f1486576-p_e.jpg",
      "https://photos.zillowstatic.com/fp/49c3265b803434e2456e53cfce28f56a-p_e.jpg"
    ]
  },
  {
    name: "538 W 2nd St, San Pedro, CA 90731",
    address: {
      streetAddress: "538 W 2nd St",
      addressLocality: "San Pedro",
      addressRegion: "CA",
      postalCode: "90731"
    },
    price: "$679,000",
    beds: 4,
    baths: 2,
    sqft: 1411,
    url: "https://www.zillow.com/homedetails/538-W-2nd-St-San-Pedro-CA-90731/21306370_zpid/",
    images: [
      "https://photos.zillowstatic.com/fp/30e64640ea889f774fc387a9f1486576-p_e.jpg",
      "https://photos.zillowstatic.com/fp/49c3265b803434e2456e53cfce28f56a-p_e.jpg"
    ]
  },
  {
    name: "538 W 2nd St, San Pedro, CA 90731",
    address: {
      streetAddress: "538 W 2nd St",
      addressLocality: "San Pedro",
      addressRegion: "CA",
      postalCode: "90731"
    },
    price: "$679,000",
    beds: 4,
    baths: 2,
    sqft: 1411,
    url: "https://www.zillow.com/homedetails/538-W-2nd-St-San-Pedro-CA-90731/21306370_zpid/",
    images: [
      "https://photos.zillowstatic.com/fp/30e64640ea889f774fc387a9f1486576-p_e.jpg",
      "https://photos.zillowstatic.com/fp/49c3265b803434e2456e53cfce28f56a-p_e.jpg"
    ]
  },
  {
    name: "538 W 2nd St, San Pedro, CA 90731",
    address: {
      streetAddress: "538 W 2nd St",
      addressLocality: "San Pedro",
      addressRegion: "CA",
      postalCode: "90731"
    },
    price: "$679,000",
    beds: 4,
    baths: 2,
    sqft: 1411,
    url: "https://www.zillow.com/homedetails/538-W-2nd-St-San-Pedro-CA-90731/21306370_zpid/",
    images: [
      "https://photos.zillowstatic.com/fp/30e64640ea889f774fc387a9f1486576-p_e.jpg",
      "https://photos.zillowstatic.com/fp/49c3265b803434e2456e53cfce28f56a-p_e.jpg"
    ]
  }
  // Add more property objects as needed
]

const PropertyCard = ({ property }) => {
  if (!property) {
    return null // or display an error message
  }

  return (
    <div className="property-card">
      <a href={property.url} target="_blank" rel="noopener noreferrer">
        <img src={property.images[0]} alt={property.name} />
      </a>
      <h2>{property.name}</h2>
      <p>
        {property.address.streetAddress}, {property.address.addressLocality},{" "}
        {property.address.addressRegion} {property.address.postalCode}
      </p>
      <p>Price: {property.price}</p>
      <p>
        {property.beds} beds, {property.baths} baths, {property.sqft} sqft
      </p>
      <a href={property.url} target="_blank" rel="noopener noreferrer">
        View Listing
      </a>
    </div>
  )
}

const PropertyList = ({ finalFilteredArticles }) => {
  console.log(finalFilteredArticles, "final Filtered Articles")
  return (
    <div className="property-list">
      {finalFilteredArticles?.map((property: any, index: any) => (
        <PropertyCard key={index} property={property} />
      ))}
    </div>
  )
}

export default PropertyList
