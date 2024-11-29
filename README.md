# TBext - iOS Widget for TPBI (Transport Public București-Ilfov) Data

This is an iOS widget that fetches and displays real-time public transport arrival times for a specific station using TPBI (Transport Public București-Ilfov) data. The widget updates every 30 seconds and shows the names of buses/trains and their estimated arrival times in minutes or seconds.

## Features
- Displays transport lines with their estimated arrival times.
- Dynamic text color: Arrival times within 3 minutes are highlighted in **red**.
- Updates every 30 seconds.
- Works on iPhones with **Scriptable** app installed.

## Requirements
- **Scriptable app** installed on your iPhone. You can download it from the [App Store](https://apps.apple.com/us/app/scriptable/id1405459188).
- A valid **station ID** from TPBI to fetch data for your preferred station.

## Setup Instructions

1. **Install Scriptable**: If you haven’t already, download the **Scriptable** app from the App Store.
2. **Get the Station ID**:
   - Visit [Transport-Live](https://transport-live.cristoi.ro) to get the station ID for your preferred bus or train station.
   - Copy the station ID from the website (Plus > "Nu stii ID-ul statiei?").
3. **Edit the Script**:
   - Replace the placeholder `your_station_id` in the script with the actual station ID you copied.
4. **Save and Run the Script**:
   - Open the **Scriptable** app on your iPhone.
   - Tap the **"+"** icon to create a new script.
   - Paste the content of the script file into the editor.
   - Tap the **Play** button (triangle icon) at the top of the screen to test the script. This will show the widget preview with the arrival times for your selected station.

5. **Add the Widget to Your Home Screen**:
   - Go to your home screen, press and hold an empty space to enter **Jiggle Mode**.
   - Tap the **"+"** icon in the top-left corner to open the widget gallery.
   - Search for **Scriptable** and choose the widget size you want (Small, Medium, or Large).
   - Tap **Add Widget**.
   - Tap the added widget, select your script ("TransportWidget"), and tap **Done**.
   - The widget will now show the transport information and update every 30 seconds.

## Customization

- **Text Color**: The text color changes based on the arrival time:
  - If the arrival time is less than 3 minutes (180 seconds), the text will appear in **red**.
  - Otherwise, it will appear in **white**.
- **Font Size**: You can adjust the font size by changing `Font.mediumSystemFont(14)` to another value (e.g., `Font.largeSystemFont(16)`).
- **Refresh Interval**: Currently set to 30 seconds. You can modify `widget.refreshAfterDate` to adjust the refresh time.

## License
This project is licensed under the MIT License. See the LICENSE file for more information.

---

Feel free to modify and extend the script to fit your needs. Enjoy real-time public transport data directly on your iPhone's lock screen!
