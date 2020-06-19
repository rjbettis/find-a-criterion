[Legacy "Explore" feature from the old Criterion Collection website.](https://findacriterion.com)

## Project Description

I made this project with the intention to sharpen my styling skills and data retrieval skills. I attempted to make as close to a 1:1 recreation of the "Explore" section on the old criterion.com website. This section of the website was nuked when they redesigned everything so there is now way to browse through it unless you use archive.org. I had always missed browsing through it, so I figured I would kill two birds with one stone.

### `Technologies Utilized`

1. Create React App
2. React Router
3. React Bootstrap front-end framework
4. AWS S3
5. AWS CloudFront
6. AWS Route 53

The front-end is a react application with the following pages and components:

### `Pages`

1. Home
   - Describes what the site is and links to the Explore page
2. Explore
   - Describes and links to the available sections of the website: Themes, People, Top 10.
3. Themes
   - Maps through an object imported from a JSON file to populate theme cards.
   - Routes to the GetTheme component which determines the correct theme to render.
4. People
   - Maps through an object imported from a JSON file to populate people cards.
   - Routes to the GetPerson component which determines the correct person to render.
5. Top 10
   - Undecided what to do with this page because it is the only part of the legacy explore feature on the new site. Might just link directly to it.

### `Components`

1. GetTheme
   - When browsing and clicking on a theme this component determines which theme to render based on react router match props. Theme data is located in theme_list JSON file.
2. GetPerson
   - Same as the GetTheme component except it uses the people_list JSON file
3. Navigation
   - Renders the top navigation component
4. Combined/CombinedPeople
   - Imports the many JSON files.

### `Todo`

- [x] Host on AWS
- [ ] Double check all "Themes" data and images
- [ ] Finish "People" JSON files (7/54)
- [ ] Minimize number of JSON files to 1
- [ ] Create "Film" component for when a film is selected (right now just linking to criterion.com film page)
- [ ] Host all image files in bucket
- [ ] Make decision about the Top 10 page
