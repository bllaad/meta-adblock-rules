let body = JSON.parse($response.body);

function removeAds(items) {
    if (!items) return items;

    return items.filter(item => {
        return !(
            item.is_ads ||
            item.ad_id ||
            item.sponsored ||
            item.injected ||
            item.tracking_token
        );
    });
}

if (body.items) {
    body.items = removeAds(body.items);
}

if (body.feed_items) {
    body.feed_items = removeAds(body.feed_items);
}

if (body.carousel_media) {
    body.carousel_media = removeAds(body.carousel_media);
}

$done({ body: JSON.stringify(body) });