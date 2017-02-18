var phantom = require("phantom");
var _ph, _page, _outObj;
var cheerio = require('cheerio');

var results = [];


var callJetSearch = function (callback) {

    phantom.create()
        .then(ph => {
        _ph = ph;
    return _ph.createPage();
})
.
    then(page => {
        _page = page;
    return _page.open('https://jet.com/search?term=tv&page=1&sort=price_high_to_low');
})
.
    then(status => {
        return _page.property('content')
    }
)
.
    then(content => {
        var $ = cheerio.load(content);


    $('.list-products li').each((index, el) => {
        var item = {};
    //console.log($(el).find('.tile-img img').attr('src'));
    var title = $(el).find('.tile-img img').attr('src');
    item['title'] = title;

    //console.log($(el).find('.h5 .brand').text());
    item['brand'] = $(el).find('.h5 .brand').text();

    //console.log($(el).find('.h5 .name').text());
    item['img'] = $(el).find('.h5 .name').text();

    //console.log($(el).find('.h5 .price-reference').text());
    item['priceReference'] = $(el).find('.h5 .price-reference').text();

   // console.log($(el).find('.h5 .price-effective').text());
    item['priceEffective'] = $(el).find('.h5 .price-effective').text();
    results.push(item);
}) ;


    _page.close();
    _ph.exit();
})
    return callback(results);

}

module.exports.callJetSearch = callJetSearch