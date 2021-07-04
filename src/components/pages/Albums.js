import React, {Component, Fragment} from 'react';
import Pend from "../../img/penderecki-cherry-actions-front.jpg";
import Orf from "../../img/orff-carmina-burana-front.jpg";

 export  default  class Albums extends Component {
    render() {
        return (
            <Fragment>
            <h1 className="text--md">Lp Collection</h1>
        <div className="container">

            <div className="album-container">
                <div className="album-card">
                    <div className="t">
                        <img src={Pend} alt="actions" />
                    </div>
                    <div className="album-flex-t">
                        <h1 className="text--3xl album-title">Actions</h1>
                        <span className="text--md album-artist divider">Krzysztof Penderecki</span>
                    </div>

                    <div className="album-flex-b">
                        <div className="album-info">
                            <div className="album-info--details album-info--divider">
                                <p>Label</p>

                                <span className="text--md divider">CBS</span>

                            </div>
                            <div className="album-info--details">
                                <p>Year</p>
                                <span className="text--md">1974</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="album-card">
                    <div className="t">
                        <img src={Orf} alt="actions" />
                    </div>
                    <div className="album-flex-t">
                        <h1 className="text--3xl album-title">Carmina Burana</h1>
                        <span className="text--md album-artist divider">Carl Orff</span>
                    </div>

                    <div className="album-flex-b">
                        <div className="album-info">
                            <div className="album-info--details album-info--divider">
                                <p>Label</p>

                                <span className="text--md divider">CBS</span>

                            </div>
                            <div className="album-info--details">
                                <p>Year</p>
                                <span className="text--md">1974</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            </Fragment>
        );
    }
}

