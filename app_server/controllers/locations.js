const homelist = (req, res) => {
    res.render('location-list', {
        title: 'Loc8r - find a place to work with wifi',
        pageHeader: {
            title: 'LOC8R',
            strapline: 'Find places to work with wifi near you!'
        },
        sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
        locations: [{
            name: 'Starcups',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '100m'
        }], 
        cafe : [{
            name: 'Cafe Hero',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 4,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '200m'
        }], 
        king : [{
            name: 'Burger Queen',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 2,
            facilities: ['Food', 'Premium wifi'],
            distance: '250m'
        }]
    });
};
//locationInfo//
const locationInfo = (req, res) => {
    res.render('location-info', {title: 'Starbucks'});
};

//locationInfo2//
const locationInfo1 = (req, res) => {
    res.render('location-info1', {title: 'Cafe Raasta'});
};
       
//locationInfo3//
const locationInfo2 = (req, res) => {
        res.render('location-info2', {title: 'Burger King'});
            
};
//addReview//    
const addReview = (req, res) => {
    res.render('location-review-form', {title: 'Review Starbucks'});
};

module.exports = {
    homelist,
    locationInfo,
    locationInfo1,
    locationInfo2,
    addReview
}