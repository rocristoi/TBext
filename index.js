const widget = new ListWidget();

async function loadData() {
    const stationID = `your_station_id` //Example: 12354
  const req = new Request(`https://maps.mo-bi.ro/api/nextArrivals/${stationID}`);
  var res = await req.loadJSON();


  var sorted = res.lines.sort(function(a,b) {
    return a.name > b.name;
  });
  
  sorted.forEach((line) => {
    const text = widget.addText(
      `${line.name} in ${
        line.arrivingTime > 60
          ? (line.arrivingTime / 60) + " min"
          : line.arrivingTime == 0 ? " statie" : line.arrivingTime + " sec"
      }`
    );
    text.centerAlignText();
    text.textColor = line.arrivingTime < 180 ? Color.red() : Color.white();
    text.font = Font.mediumSystemFont(14); 
  });

  // Set the refresh interval to 30 seconds
  widget.refreshAfterDate = new Date(Date.now() + 30 * 1000);
  
  Script.setWidget(widget);
  Script.complete();
  widget.presentMedium();
}

// Run the function
await loadData();