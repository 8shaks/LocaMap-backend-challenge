const axios = require("axios")
const express = require("express");
const router = express.Router();
const keys = require("../../config/keys");
const isValidCoordinates = require('is-valid-coordinates')

// @route    POST api/location
// @desc     Returns the country based on give latitude and longitude
// @access   Public
router.post("/", async (req, res) => {
    // The desired component of the address we want our api to return
    const DESIRED_ADR_COMP = "country";
    const lat = req.body.lat;
    const lon = req.body.lon; 

    if(!isValidCoordinates(Number(lon), Number(lat))){
        return res.status(400).json({params:"Oops! Please check you entered the latitude and longitude correctly and try again!"});
    }

    const geocode_api_param = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${keys.googleAPI}&result_type=${DESIRED_ADR_COMP}`;

    axios.get(geocode_api_param).then((result) => {
        let country_name = result.data.results[0].formatted_address;
        return res.json({country:country_name});
    }).catch((err) => {
        console.log(err);
        return res.status(500).json({error:"Oops! Server Error"});
    })

})


module.exports = router;