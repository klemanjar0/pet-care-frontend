import React from "react";
import {Button, Card, Col, Form, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import {userService} from "../services/auth.service";
import {userContainer} from "../containers/User.container";
import App from "../App";
import cx from "classnames";
import CustomButton from "./CustomButton.component";
import CustomCardComponent from "./CustomCard.component";

import ChartistGraph from 'react-chartist';

class Dashboard extends React.Component{
    render() {

        var data = {
            labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
            series: [
                [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
            ]
        };

        var options = {
            high: 10,
            low: -10,
            axisX: {
                labelInterpolationFnc: function(value, index) {
                    return index % 2 === 0 ? value : null;
                }
            }
        };

        var type = 'Bar'

        return (
            <div className="mt-5">
                <CustomCardComponent classname="mt-5"
                    statsIcon="fa fa-history"
                    id="chartHours"
                    title="Pet #1"
                    category="24 Hours performance"
                    stats="Updated 3 minutes ago"
                    content={
                        <div className="ct-chart mt-5">
                            <ChartistGraph className="mt-5"
                                data={data}
                                type="Line"
                                options={options}
                            />
                        </div>
                    }
                    legend={
                        <div className="legend">{}</div>
                    }
                />

                <CustomCardComponent classname="mt-5"
                                     statsIcon="fa fa-history"
                                     id="chartHours"
                                     title="Pet #2"
                                     category="24 Hours performance"
                                     stats="Updated 3 minutes ago"
                                     content={
                                         <div className="ct-chart mt-5">
                                             <ChartistGraph className="mt-5"
                                                            data={data}
                                                            type="Line"
                                                            options={options}
                                             />
                                         </div>
                                     }
                                     legend={
                                         <div className="legend">{}</div>
                                     }
                />
            </div>
        )
    }
}

export default Dashboard;
