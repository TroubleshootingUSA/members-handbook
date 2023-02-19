$(document).ready(function() {
    // find all the headings on the page

    const headings = $("h1, h2, h3, h4, h5, h6");
    let toc = $("<ol></ol>");
    let anchor = $("<a></a>").attr("href", "#" + this.id).text($(this).text());
    let li = $("<li></li>").append(anchor);

    let lastLevel = 0;

    function addEntry() {
        anchor = $("<a></a>").attr("href", "#" + this.id).text($(this).text());
        li = $("<li></li>").append(anchor);
    }

    headings.each(function(index) {
        var level = parseInt(this.tagName.substring(1));
        lastLevel = level;

        // create an anchor link to the heading
        var anchor = $("<a></a>").attr("href", "#" + this.id).text($(this).text());
        // create a list item for the heading
        var li = $("<li></li>").append(anchor);
        // add the list item to the table of contents

        if (level === 1) {
            toc.append(li);
            console.log("Hit!");
        }

        else if (level > lastLevel) {
            createEntry();
            toc.append(li);
        }

    });

    // add the table of contents to a container element
    $("#toc-container").append(toc);
});
