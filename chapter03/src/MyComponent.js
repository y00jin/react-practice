import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    static defaultProps = {
        name: '기본이름'
    };
    static propTypes = {
        name: PropTypes.string,
        favoriteNumber: PropTypes.number.isRequired
    };
    render() {
        const {name, favoriteNumber, children} = this.props;
        return (
            <div>컴포넌트 {name}
                <br />
                children {children} <br />
                제가 좋아하는 숫자는 {favoriteNumber}입니다.
            </div>
        ); 
    }
}

export default MyComponent;