# BMI Calculator with Map Functionality and Charts

This web application combines a Body Mass Index (BMI) calculator with map functionality and charts, allowing users to calculate their BMI, explore diabetes centers and dietitians in Mangalore, and visualize BMI index data.

## Features:

- **BMI Calculator**: Users can input their height and weight to calculate their BMI.
- **Map Display**: Utilizes MapTiler SDK to display a map of Mangalore.
- **Diabetes Centers and Dietitians**: Marks diabetes centers and dietitians on the map with different colored markers.
- **Information Display**: Provides details such as name, address, phone number, website, and ratings for each center or dietitian in pop-up windows on the map.
- **BMI Index Charts**: Visualizes BMI index data using charts, allowing users to understand BMI distribution and trends.

## How to Use:

1. Enter your height in centimeters and weight in kilograms in the designated input fields.
2. Click the "Calculate" button to determine your BMI.
3. Explore the map to find diabetes centers and dietitians in Mangalore.
4. Click on markers to view detailed information about each center or dietitian.
5. View BMI index charts to understand BMI distribution and trends.

## Technologies Used:

- HTML
- CSS
- JavaScript
- MapTiler SDK

## Customize Map Area:

You can change the area shown on the map to fit what you're interested in. Follow these steps:

1. Open the `map.html` file in a text editor.

2. Look for a part of the code that says something like `const bbox = [74.8141, 12.8876, 74.8855, 12.9248];`. This is how the map knows which area to show.

3. Change the numbers inside the square brackets to set the area you want to see. The format is `[minimum longitude, minimum latitude, maximum longitude, maximum latitude]`.

   If you're not sure what coordinates to use, you can find the coordinates for a specific area using Google Maps:
   
   - Go to [Google Maps](https://www.google.com/maps).
   - Right-click on the area you're interested in on the map.
   - Select "What's here?" from the menu.
   - A box will appear at the bottom with the coordinates. Use these coordinates to replace the numbers in the code.

4. Save your changes and then reopen the `map.html` file in your web browser. You should see the map showing the new area you specified.

## Customize Markers:

You can also change how the markers (the little icons) look on the map. Here's how:

1. Open the `map.html` file in a text editor.

2. Find the part of the code that adds markers for the diabetes centers and dietitians.

3. You can change things like the color or shape of the markers by changing some numbers or text in the code.

4. Once you've made your changes, save the file and then reload the `map.html` file in your web browser to see the updated markers on the map.

## Running the Web Application in Visual Studio Code:

To run this web application in Visual Studio Code, follow these steps:

1. Clone the repository: git clone https://github.com/aTh1ef/Body-Mass-Index-Calculator.git

2. Open Visual Studio Code.

3. Open the cloned repository folder in Visual Studio Code.

4. Open the `calc.html` file in the editor.

5. Right-click inside the editor and select "Open with Live Server".

6. The web application will open in your default web browser, and you can interact with it as described in the "How to Use" section above.

## Map Design:

For tips and guidelines on designing maps with MapTiler, you can refer to the [MapTiler Documentation](https://documentation.maptiler.com/hc/en-us/sections/16167545968145-Map-design).

## Preview

Here are some screenshots of our web application:
![Screenshot 1](https://github.com/aTh1ef/Body-Mass-Index-Calculator/assets/112499626/90ab43d3-2f2c-4a95-82b8-1b091d06dc22)
*Description: This screenshot shows the BMI calculator interface.*

![Screenshot 2]![image](https://github.com/aTh1ef/Body-Mass-Index-Calculator/assets/112499626/27e9564f-c169-4464-b8c3-e3a18747ce9e)
*Description: This screenshot displays the map functionality, highlighting diabetes centers and dietitians in Mangalore.*

![Screenshot 3]![image](https://github.com/aTh1ef/Body-Mass-Index-Calculator/assets/112499626/d3efe716-c260-4214-855d-19e78bee9a8c)
*Description: This screenshot demonstrates a marker popup on the map, providing detailed information about the health centers.*

