import React, { Component } from 'react'
import BurgerComponents from './BurgerComponents'
import MenuComponent from './MenuComponent'

export default class BaiTapBerger extends Component {
    render() {
        return (
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-8">
                        <BurgerComponents />
                    </div>
                    <div className="col-4">
                        <MenuComponent />
                    </div>
                </div>
            </div>
        )
    }
}
