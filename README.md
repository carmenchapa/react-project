## React website

Built on [Create React App](https://github.com/facebookincubator/create-react-app).

This site uses:
* [Material UI](http://www.material-ui.com/) as UI framework.
* [React Router](https://reacttraining.com/react-router/) as UI framework.


###Features

#### Responsive AppBar

The Appbar was impemented in a responsive way inspired on [materialize.css](http://materializecss.com/).<br>
It contains `<tabs>` as menu items and the menu icon is hidden in desktop sizes.

```js
<AppBar
        
          title={
            <Tabs className='hide-on-small-only' onChange={this.onChangeTabs} style={tabStyle} inkBarStyle={inkBarStyle}>
              <Tab label="about" containerElement={<Link to="/about" />} />
              <Tab label="work" data-route="/work"  containerElement={<Link to="/work" />} />
              <Tab label="contact" containerElement={<Link to="/contact" />} />
            </Tabs>
          }
          
          showMenuIconButton={false}     
          iconElementRight={ 
            <div>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            <style>
              {`
                  @media only screen and (max-width: 600px) {
                    #burgueer {
                      display: block !important;
                    }
                  }

                  @media only screen and (min-width: 601px) {
                    #burgueer {
                      display: none !important;
                    }
                  }
                
                `}
            </style> 
            <IconButton  
              id="burgueer"     
              onTouchTap={ () =>
            this.setState({ open: !this.state.open }) }
              > 
                <FontIcon className="material-icons" color="white">menu</FontIcon>
              </IconButton>
              </div>
          }
        >
        </AppBar>
        <Drawer />
            
```


#### Dynamic Components

Dynamic components were implemented with json files as feeds using `map` and "props".



