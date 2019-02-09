import React from 'react';
import PropTypes from 'prop-types';

import { FaSortDown } from 'react-icons/fa';

import style from './Dropdown.css';

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: props.defaultValue || undefined,
      showDropdown: false,
    };

    this.setSelected = this.setSelected.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.node = React.createRef();
  }

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleClick(e) {
    if (this.node.contains(e.target)) {
      return;
    }
    this.setState({ showDropdown: false });
  }

  setSelected(value) {
    if (this.props.onChange) {
      this.props.onChange(value);
    }
    this.setState({ selectedValue: value, showDropdown: false });
  }

  render() {
    const { children, placeholder } = this.props;
    const { selectedValue, showDropdown } = this.state;

    let listClasses = style.valueList;
    let headerClasses = style.header;
    if (showDropdown) {
      listClasses += ` ${style.activeList}`;
      headerClasses += ` ${style.focus}`;
    }

    let placeHolderElement;
    if (selectedValue) {
      placeHolderElement = <span>{selectedValue}</span>;
    } else if (placeholder) {
      placeHolderElement = <span className={style.placeholder}>{placeholder}</span>;
    } else {
      placeHolderElement = <span />;
    }

    return (
      <div
        className={style.container}
        style={{ width: this.props.width || '150px' }}
        ref={c => this.node = c}
      >
        <div
          className={headerClasses}
          onClick={() => this.setState({ showDropdown: !showDropdown })}
        >
          {placeHolderElement}
          <span className={style.downArrow}>
            <FaSortDown />
          </span>
        </div>
        <ul className={listClasses}>
          {React.Children.map(children, (dropDownItem, key) => {
					  let active = false;
					  if (dropDownItem.props.name === selectedValue) {
					    active = true;
					  }
					  return React.cloneElement(dropDownItem, {
					    key,
					    active,
					    onClick: this.setSelected,
					  });
          })}
        </ul>
      </div>
    );
  }
}

Dropdown.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};
