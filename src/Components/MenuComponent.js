import React, { Component } from 'react';
import { connect } from 'react-redux';
import { tangGiamAction } from '../Redux/actions/BurgerAction';
export class MenuComponent extends Component {
    renderMenu = () => {
        let { menu, burger } = this.props;
        let content = [];
        for (let food in menu) {
            content.push(
                <tr key={food}>
                    <td>{food}</td>
                    <td>
                        <button
                            onClick={() => {
                                this.props.dispatch(tangGiamAction(food, -1));
                            }}
                            className="btn btn-danger mx-2"
                        >
                            -
            </button>

                        <span>{burger[food]}</span>

                        <button
                            onClick={() => {
                                this.props.dispatch(tangGiamAction(food, 1));
                            }}
                            className="btn btn-success mx-2"
                        >
                            +
            </button>
                    </td>
                    <td>{menu[food] * burger[food]}</td>
                </tr>
            );
        }
        return content;
    }
    render() {
        return (
            <div>
                <h3 className="text-center">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Food</th>
                                <th></th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>{this.renderMenu()}</tbody>
                        <tfoot>
                            <tr>
                                <td></td>
                                <td>
                                    <p>Total: </p>
                                </td>
                                <td>{this.props.total}$</td>
                            </tr>
                        </tfoot>
                    </table>
                </h3>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    burger: state.BurgerReducer.burger,
    menu: state.BurgerReducer.menu,
    total: state.BurgerReducer.total,
})

export default connect(mapStateToProps)(MenuComponent)
