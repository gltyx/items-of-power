String.prototype.toPathCase = function() { return this.toLowerCase().replaceAll('_', '-'); };
String.prototype.toTitleCase = function() { return this.replaceAll('_', ' ').replaceAll('-', ' ').replaceAll(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}); };
Element.prototype.insertChildAtIndex = function(child, index = 0) {
    if (index >= this.children.length) {
        this.appendChild(child)
    } else {
        this.insertBefore(child, this.children[index])
    }
};
Number.prototype.toTimeString = function(seconds) {
    var _24HOURS = 8.64e7;  // 24*60*60*1000

    var ms = seconds ? this * 1000 : this,
        endPos = ~(4 * !!seconds),  // to trim "Z" or ".sssZ"
        timeString = new Date(ms).toISOString().slice(11, endPos);

    if (ms >= _24HOURS) {  // to extract ["hh", "mm:ss[.mss]"]
        var parts = timeString.split(/:(?=\d{2}:)/);
        parts[0] -= -24 * Math.floor(ms / _24HOURS);
        timeString = parts.join(":");
    }

    return timeString;
};