### `Data init`

` const dataInfo = {
        slidingList: slidingList,// default list data
        slidingProps: {
            width: 600,//box width
            height: 40,//item height
            listNum: 8,//default items (width = height * listNum)
            listTitle: '最新职位',
            moreTitle: 'more'
        },
        itemNameClick: (e) => {
            if(e.target.className.includes('item-title')){
                console.log(e.target.attributes.href);
            }
        }
    }`
    box class name:sliding-box
    
In the project directory, you can run:
### `npm install`

Clone package to local

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!


