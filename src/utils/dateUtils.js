function parseEpochDate(epochDate) {
    let d = new Date(0);
    return d.setUTCSeconds(epochDate);
}

export default parseEpochDate;