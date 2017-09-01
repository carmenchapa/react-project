## React website

Built on [Create React App](https://github.com/facebookincubator/create-react-app).

This site uses:
* [Material UI](http://www.material-ui.com/) as UI framework.
* [React Router](https://reacttraining.com/react-router/) as UI framework.

###Features

#### Responsive AppBar

The Appbar was impemented in a responsive way inspired on [materialize.css](http://materializecss.com/).<br>
It contains `<tabs>` as menu items and the menu icon is hidden in desktop sizes. For this purpose MediaQueries form [materialize.css](http://materializecss.com/) where added as css in the project.

```js
<AppBar
  title={
    <Tabs className='hide-on-small-only' onChange={this.onChangeTabs}>
      <Tab />
      <Tab />
      <Tab />
    </Tabs>
  }
  showMenuIconButton={false}     
  iconElementRight={ 
    <div>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      <IconButton      
        onTouchTap={ () => this.setState({ open: !this.state.open }) }
      > 
        <FontIcon className="material-icons hide-on-med-and-up">menu</FontIcon>
      </IconButton>
    </div>
  }
>
</AppBar>
<Drawer />
            
```


#### Dynamic Components

Dynamic components were implemented with json files as feeds using `map` and "props".



