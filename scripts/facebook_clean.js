let obj = JSON.parse($response.body);

function cleanAds(data) {
    if (!data) return data;

    return data.filter(item => {
        return !(
            item.sponsored ||
            item.ad_id ||
            item.promotion ||
            item.tracking ||
            item.suggested
        );
    });
}

if (obj.data) {
    obj.data = cleanAds(obj.data);
}

$done({ body: JSON.stringify(obj) });