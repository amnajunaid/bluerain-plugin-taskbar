import React from 'react';
import PropTypes from 'prop-types';
import List from 'material-ui/List';
import ListItem from 'material-ui/List/ListItem';

const TaskbarComponent = (props) => {
	const {
    items,
    hideLabels,
    ...rest
  } = props;
	return (

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
