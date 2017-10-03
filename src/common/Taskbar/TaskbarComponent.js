import React from 'react';
import PropTypes from 'prop-types';
import List from 'material-ui/List';
import ListItem from 'material-ui/List/ListItem';
import Switch from '../icons/Switch.component';

const TaskbarComponent = (props) => {
	const {
    items,
    hideLabels,
    ...rest
  } = props;
	return (
  <div style={{ justifyContent: 'space-between', display: 'flex', flexDirection: 'column', height: '100%' }}>
    <List {...rest} >
      {items.map((item, index) =>
      ( hideLabels ? <ListItem
        key={`${index.toString()} a`}
        primaryText=""
        leftIcon={item.icon}
        onClick={item.onClick}
      /> : <ListItem
        key={`${index.toString()} a`}
        primaryText={item.label}
        leftIcon={item.icon}
        onClick={item.onClick}
      />) )}
    </List>
    {hideLabels ? <List {...rest} >
      <ListItem
        key="1a"
        primaryText=""
        leftIcon={<Switch />}
        onClick={() =>  { console.log('switch clicked 1'); }}
      />  <ListItem
        key="2a"
        primaryText=""
        leftIcon={<Switch />}
        onClick={() =>  { console.log('switch clicked 1'); }}
      />
    </List> : <List {...rest} >
      <ListItem
        key="1b"
        primaryText="Profile"
        leftIcon={<Switch />}
        onClick={() =>  { console.log('switch clicked 1'); }}
      />  <ListItem
        key="2b"
        primaryText="Logout"
        leftIcon={<Switch />}
        onClick={() =>  { console.log('switch clicked 1'); }}
      />
    </List>}
  </div>
	);
};

TaskbarComponent.propTypes = {
	items: PropTypes.arrayOf(PropTypes.shape({
		icon: PropTypes.object.isRequired,
		label: PropTypes.string.isRequired,
		onClick: PropTypes.func,
	})).isRequired,
	hideLabels: PropTypes.bool.isRequired
};
TaskbarComponent.defaultProps = {
	items: [],
	hideLabels: false
};

export default TaskbarComponent;
