import GoogleapisMapViewStyles from '~/data/configuration/google-maps/googleapis.map.view.styles.json'

export default function (context, inject) {
  const markerIcon = 'https://maps.gstatic.com/mapfiles/transparent.png'
  const googleApiFeatures = '&libraries=places'
  const googleApiCallBackFunction = '&callback=initGoogleMaps'
  const googleApiURL = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_API_KEY}${googleApiFeatures}${googleApiCallBackFunction}`
  let isLoaded = false
  let waiting = []

  addScript()

  inject('maps', {
    showMap,
    makeAutoComplete,
  })

  function addScript() {
    const script = document.createElement('script')
    script.src = googleApiURL
    script.hid = 'map'
    script.async = true
    window.initGoogleMaps = initGoogleMaps
    document.head.appendChild(script)
  }

  //This method is called after adding the script tag to the DOM (see above the end of the url - google callback)
  function initGoogleMaps() {
    isLoaded = true
    waiting.forEach((item) => {
      if (typeof item.fn === 'function') {
        item.fn(...item.arguments)
      }
    })
    waiting = []
  }

  function makeAutoComplete(input, types = ['(cities)']) {
    if (!isLoaded) {
      waiting.push({
        fn: makeAutoComplete,
        arguments,
      })
      return
    }
    //TODO: Translations and localation ????
    const autoCompleteOptions = {
      componentRestrictions: { country: 'us' },
      types,
    }
    const autoComplete = new window.google.maps.places.Autocomplete(input, autoCompleteOptions)
    autoComplete.addListener('place_changed', () => {
      const place = autoComplete.getPlace()
      input.dispatchEvent(new CustomEvent('changed', { detail: place }))
    })
  }

  function showMap(canvas, { lat, lng }, markers) {
    if (!isLoaded) {
      waiting.push({
        fn: showMap,
        arguments,
      })
      return
    }
    const mapOptions = {
      zoom: 18,
      center: new window.google.maps.LatLng(lat, lng),
      disableDefaultUI: true,
      zoomControl: true,
      styles: GoogleapisMapViewStyles,
    }
    // Creating map web element
    const map = new window.google.maps.Map(canvas, mapOptions)
    //Check if there are markers to add - if not add default marker (position: lat, lng)
    if (!markers) {
      const position = new window.google.maps.LatLng(lat, lng)
      const marker = new window.google.maps.Marker({
        position,
        clickable: false,
      })
      marker.setMap(map)
      return
    }

    //Set map limit to add markers (It creates a rectangle in the map)
    const bounds = new window.google.maps.LatLngBounds()
    //Add markers to the map
    markers.forEach((home) => {
      const position = new window.google.maps.LatLng(home.lat, home.lng)
      const marker = new window.google.maps.Marker({
        position,
        label: {
          text: `$${home.pricePerNight}`,
          className: `marker home-${home.id}`,
        },
        icon: markerIcon,
        clickable: false,
      })
      marker.setMap(map)
      bounds.extend(position)
    })

    //Sets the viewport to contain the given bounds.
    map.fitBounds(bounds)
  }
}
