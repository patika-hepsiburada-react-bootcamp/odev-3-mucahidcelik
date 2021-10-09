import React from 'react';
import {Axis, Chart, Coordinate, Interval, Tooltip} from "bizcharts";
import DataSet from "@antv/data-set";

const {DataView} = DataSet;

function ChartComponent(props) {

    const getDataView = (data) => {
        let dataView = new DataView();
        return dataView.source(data).transform({
            type: 'percent',
            field: 'count',
            dimension: 'name',
            as: 'percent',
        });
    }

    const scale = {
        percent: {
            formatter(val) {
                return `${(val * 100).toFixed(1)}%`;
            }
        }
    };
    return (
        <div className="column">
            <Chart scale={scale} height={300} width={500}
                   data={getDataView(Object.keys(props.votes).map(key => ({name: key, count: props.votes[key]})))}>
                <Coordinate type="theta" radius={0.75}/>
                <Tooltip showTitle={false}/>
                <Axis visible={false}/>
                <Interval
                    position="percent"
                    adjust="stack"
                    color="name"
                    style={{
                        lineWidth: 1,
                        stroke: '#fff',
                    }}
                    label={['percent', {
                        content: (data) => {
                            return `${data.name}: ${data.count}(${(data.percent * 100).toFixed(1)}%)`;
                        }
                    }]}
                />
            </Chart>
        </div>
    );
}

export default ChartComponent;