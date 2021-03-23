import embed, { Mode, VisualizationSpec } from 'vega-embed'

export interface Point {
    x: number;
    y: number;
}

export interface VisOptions {
    width: number;
    height: number;
    xlabel: string;
    ylabel: string;
    xType: 'quantitative' | 'nominial';
    yType: 'quantitative' | 'nominial';
    xAxisRange: [number, number];
    yAxisRange: [number, number];
    zoomToFit: boolean;
    fontSize: number;
}

export async function lineChart(
    data: string,
    opt: VisOptions = {},
  ): Promise<void> {  

    // the data parameter is a json file  
    // create vega component 
    // set vis options 
}

//repeat for different graph types with particular vis options and settings